/* ============================================================
   星轨档案库 · Service Worker
   缓存应用外壳与全部静态模块；数据包由页面写入 IndexedDB。
   离线时仍可读取已归档的版本快照。
   ============================================================ */

const VERSION = 'v1.2.0';
const SHELL_CACHE = `stellar-shell-${VERSION}`;
const RUNTIME_CACHE = `stellar-runtime-${VERSION}`;

const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './assets/icons/icon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './js/app.js',
  './js/ui.js',
  './js/store.js',
  './js/charts.js',
  './js/assets.js',
  './js/export.js',
  './js/data/index.js',
  './js/data/meta.js',
  './js/data/characters.js',
  './js/data/lightcones.js',
  './js/data/relics.js',
  './js/data/enemies.js',
  './js/data/stages.js',
  './js/data/updates.js',
  './js/pages/shared.js',
  './js/pages/home.js',
  './js/pages/characters.js',
  './js/pages/character-detail.js',
  './js/pages/character-compare.js',
  './js/pages/lightcones.js',
  './js/pages/lightcone-detail.js',
  './js/pages/relics.js',
  './js/pages/relic-detail.js',
  './js/pages/enemies.js',
  './js/pages/enemy-detail.js',
  './js/pages/stages.js',
  './js/pages/stage-detail.js',
  './js/pages/compare.js',
  './js/pages/unreleased.js',
  './js/pages/watchlist.js',
  './js/pages/updates.js',
  './js/pages/search.js',
  './js/pages/about.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    // 逐项写入：单个资源失败不会让整个安装失败。
    await Promise.all(SHELL.map(async (url) => {
      try {
        const res = await fetch(new Request(url, { cache: 'reload' }));
        if (res.ok) await cache.put(url, res);
      } catch (err) {
        console.warn('[sw] precache failed:', url, err);
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((key) => key.startsWith('stellar-') && key !== SHELL_CACHE && key !== RUNTIME_CACHE)
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

function isShellAsset(url) {
  return url.origin === self.location.origin
    && (url.pathname.includes('/js/')
      || url.pathname.endsWith('/css/style.css')
      || url.pathname.endsWith('/manifest.webmanifest')
      || url.pathname.includes('/assets/'));
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // 导航请求：先走网络，离线时回退到应用外壳。
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request);
        if (fresh.ok) {
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(request, fresh.clone()).catch(() => {});
        }
        return fresh;
      } catch {
        const shell = await caches.open(SHELL_CACHE);
        return (await shell.match('./index.html'))
          || (await shell.match('./'))
          || new Response(
            '<!doctype html><meta charset="utf-8"><title>离线</title><body style="background:#070b16;color:#e9edf7;font:15px system-ui;padding:40px">应用外壳尚未缓存。请联网打开一次后再离线使用。</body>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 }
          );
      }
    })());
    return;
  }

  // 静态外壳：缓存优先 + 后台更新。
  if (isShellAsset(url)) {
    event.respondWith((async () => {
      const cache = await caches.open(SHELL_CACHE);
      const cached = await cache.match(request, { ignoreSearch: true });
      const network = fetch(request).then((res) => {
        if (res.ok) cache.put(request, res.clone()).catch(() => {});
        return res;
      }).catch(() => null);
      return cached || (await network) || Response.error();
    })());
    return;
  }

  // 其他同源资源：网络优先，失败时读缓存。
  event.respondWith((async () => {
    try {
      const fresh = await fetch(request);
      if (fresh.ok) {
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put(request, fresh.clone()).catch(() => {});
      }
      return fresh;
    } catch {
      return (await caches.match(request)) || Response.error();
    }
  })());
});
