import { DATA_PACKS, buildAllVersionSnapshots } from './data/index.js';

const DB_NAME = 'stellar-archive';
const DB_VERSION = 1;
const SETTINGS_KEY = 'sra.settings.v1';
const WATCH_KEY = 'sra.watchlist.v1';
const COMPARE_KEY = 'sra.compare.v1';

const DEFAULT_SETTINGS = {
  includeUnreleased: false,
  offline: false,
  disclaimerAck: false,
  lastCheck: null,
};

let dbPromise = null;
let memoryPacks = new Map();
let memorySnapshots = new Map();
let memoryFallback = false;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) {
      memoryFallback = true;
      resolve(null);
      return;
    }
    let req;
    try {
      req = indexedDB.open(DB_NAME, DB_VERSION);
    } catch (err) {
      memoryFallback = true;
      resolve(null);
      return;
    }
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('packs')) db.createObjectStore('packs', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('snapshots')) db.createObjectStore('snapshots', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('images')) db.createObjectStore('images', { keyPath: 'url' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => {
      memoryFallback = true;
      resolve(null);
    };
  });
  return dbPromise;
}

function txStore(db, store, mode) {
  return db.transaction(store, mode).objectStore(store);
}

function reqToPromise(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/* ---------------- settings ---------------- */

export function getSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return { ...DEFAULT_SETTINGS, ...(raw ? JSON.parse(raw) : {}) };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(patch) {
  const next = { ...getSettings(), ...patch };
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable */
  }
  return next;
}

/* ---------------- watchlist ---------------- */

export function getWatchlist() {
  try {
    return JSON.parse(localStorage.getItem(WATCH_KEY) || '[]');
  } catch {
    return [];
  }
}

export function isWatched(id) {
  return getWatchlist().includes(id);
}

export function toggleWatch(id) {
  const list = getWatchlist();
  const i = list.indexOf(id);
  if (i >= 0) list.splice(i, 1);
  else list.unshift(id);
  try {
    localStorage.setItem(WATCH_KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
  return list;
}

/* ---------------- compare tray ---------------- */

export function getCompareTray() {
  try {
    return JSON.parse(localStorage.getItem(COMPARE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function setCompareTray(ids) {
  const next = [...new Set(ids)].slice(0, 4);
  try {
    localStorage.setItem(COMPARE_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  return next;
}

export function toggleCompareTray(id) {
  const list = getCompareTray();
  const i = list.indexOf(id);
  if (i >= 0) list.splice(i, 1);
  else if (list.length < 4) list.push(id);
  return setCompareTray(list);
}

/* ---------------- packs ---------------- */

export async function getCachedPacks() {
  if (memoryFallback) return [...memoryPacks.values()];
  const db = await openDB();
  if (!db) return [...memoryPacks.values()];
  try {
    const packs = await reqToPromise(txStore(db, 'packs', 'readonly').getAll());
    return packs;
  } catch {
    return [...memoryPacks.values()];
  }
}

export async function getCachedPack(id) {
  if (memoryFallback) return memoryPacks.get(id) || null;
  const db = await openDB();
  if (!db) return memoryPacks.get(id) || null;
  try {
    return await reqToPromise(txStore(db, 'packs', 'readonly').get(id));
  } catch {
    return memoryPacks.get(id) || null;
  }
}

export async function isPackInstalled(id) {
  return Boolean(await getCachedPack(id));
}

export async function ensureBuiltinPack() {
  const builtin = DATA_PACKS.find((p) => p.builtin);
  if (!builtin) return;
  const existing = await getCachedPack(builtin.id);
  if (existing) return existing;
  return writePack(builtin, { builtin: true, silent: true });
}

async function writePack(pack, { builtin = false, silent = false } = {}) {
  const snapshot = buildAllVersionSnapshots()[pack.version] || null;
  const meta = {
    id: pack.id,
    version: pack.version,
    label: pack.label,
    type: pack.type,
    date: pack.date,
    size: pack.size,
    builtin,
    installedAt: new Date().toISOString(),
    bytes: new Blob([JSON.stringify(snapshot || {})]).size,
  };
  if (memoryFallback) {
    memoryPacks.set(pack.id, meta);
    if (snapshot) memorySnapshots.set(pack.id, snapshot);
    return meta;
  }
  const db = await openDB();
  if (!db) {
    memoryFallback = true;
    memoryPacks.set(pack.id, meta);
    if (snapshot) memorySnapshots.set(pack.id, snapshot);
    return meta;
  }
  await new Promise((resolve, reject) => {
    const tx = db.transaction(['packs', 'snapshots'], 'readwrite');
    tx.objectStore('packs').put(meta);
    if (snapshot) tx.objectStore('snapshots').put({ id: pack.id, version: pack.version, data: snapshot });
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  if (!silent) {
    // 图片包占位缓存：真实项目中这里会写入压缩后的 webp / avif 资源。
    void 0;
  }
  return meta;
}

export async function downloadPack(pack, onProgress = () => {}) {
  const stages = [
    [8, '校验版本清单'],
    [26, '下载数据快照'],
    [58, '解包并校验字段'],
    [78, '缓存图片资源'],
    [92, '写入本地 IndexedDB'],
    [100, '完成'],
  ];
  for (const [pct, label] of stages) {
    onProgress(pct, label);
    await new Promise((r) => setTimeout(r, 220 + Math.random() * 240));
  }
  return writePack(pack);
}

export async function deletePack(id) {
  const pack = await getCachedPack(id);
  if (pack?.builtin) return false;
  if (memoryFallback) {
    memoryPacks.delete(id);
    memorySnapshots.delete(id);
    return true;
  }
  const db = await openDB();
  if (!db) return false;
  await new Promise((resolve, reject) => {
    const tx = db.transaction(['packs', 'snapshots'], 'readwrite');
    tx.objectStore('packs').delete(id);
    tx.objectStore('snapshots').delete(id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  return true;
}

export async function getPackSnapshot(id) {
  if (memoryFallback) return memorySnapshots.get(id) || null;
  const db = await openDB();
  if (!db) return memorySnapshots.get(id) || null;
  try {
    const row = await reqToPromise(txStore(db, 'snapshots', 'readonly').get(id));
    return row?.data || null;
  } catch {
    return null;
  }
}

export async function getStorageEstimate() {
  if (navigator.storage?.estimate) {
    try {
      const { usage = 0, quota = 0 } = await navigator.storage.estimate();
      return { usage, quota, supported: true };
    } catch {
      /* ignore */
    }
  }
  return { usage: 0, quota: 0, supported: false };
}

export async function clearCache(keepBuiltin = true) {
  const packs = await getCachedPacks();
  for (const p of packs) {
    if (keepBuiltin && p.builtin) continue;
    await deletePack(p.id);
  }
}

export async function availablePacks() {
  const installed = await getCachedPacks();
  const ids = new Set(installed.map((p) => p.id));
  return DATA_PACKS.filter((p) => !ids.has(p.id));
}

export function formatBytes(bytes) {
  if (!bytes) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(1)} GB`;
}
