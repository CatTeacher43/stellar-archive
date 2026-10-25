import { APP, LIVE_VERSION_IDS } from './data/meta.js';
import { characterVersions, getCharacterSnapshot } from './data/characters.js';
import { buildAllVersionSnapshots, STAGES, STAGE_TYPES, stageNodes, stageTitle } from './data/index.js';
import { toast } from './ui.js';

const EXPORT_META = {
  archive: APP.name,
  archiveVersion: APP.version,
  dataVersion: APP.dataVersion,
  exportedAt: null,
  disclaimer: '玩家自制非官方档案工具；角色与关卡资料整理自米游社 Wiki 与 BWIKI，缺失内容留空，不代表游戏最终数值。',
};

function stamp() {
  return new Date().toISOString();
}

export function safeName(name) {
  return String(name || 'export')
    .replace(/[\\/:*?"<>|]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
  downloadBlob(blob, `${safeName(filename)}.json`);
}

export function toCSV(headers, rows) {
  const escCell = (v) => {
    const s = String(v ?? '');
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [headers.map(escCell).join(','), ...rows.map((r) => r.map(escCell).join(','))].join('\r\n');
}

export function downloadCSV(headers, rows, filename) {
  const blob = new Blob([`﻿${toCSV(headers, rows)}`], { type: 'text/csv;charset=utf-8' });
  downloadBlob(blob, `${safeName(filename)}.csv`);
}

/* ---------------- card data ---------------- */

export function characterBundle(character, version) {
  const snap = getCharacterSnapshot(character, version || character.releaseVersion || APP.latestLive);
  return {
    ...EXPORT_META,
    exportedAt: stamp(),
    kind: 'character',
    character: {
      id: snap.id,
      name: snap.name,
      en: snap.en,
      rarity: snap.rarity,
      element: snap.element,
      path: snap.path,
      limited: snap.limited,
      status: snap.status,
      releaseVersion: snap.releaseVersion,
      snapshotVersion: snap.snapshotVersion,
      lv80: snap.stats,
      skills: snap.skills,
      eidolons: snap.eidolons,
      traces: snap.traces,
      appliedPatches: snap.appliedPatches,
      source: snap.source,
      fanArts: (snap.fanArts || []).map((f) => ({
        title: f.title, artist: f.artist, license: f.license, source: f.source, note: f.note,
      })),
    },
  };
}

export function characterAllVersionsBundle(character) {
  const versions = characterVersions(character).map((v) => {
    const snap = getCharacterSnapshot(character, v);
    return {
      version: v,
      stats: snap.stats,
      skills: snap.skills.map((s) => ({ key: s.key, tag: s.tag, name: s.name, unit: s.unit, lv1: s.lv1, lv10: s.lv10 })),
      appliedPatches: snap.appliedPatches.map((p) => ({ version: p.version, title: p.title, demo: p.demo })),
    };
  });
  return {
    ...EXPORT_META,
    exportedAt: stamp(),
    kind: 'character-all-versions',
    character: { id: character.id, name: character.name, rarity: character.rarity, element: character.element, path: character.path },
    versions,
  };
}

export function characterCSV(snap) {
  const headers = ['版本', '生命值', '攻击力', '防御力', '速度', '技能', '技能类型', '单位', 'Lv1', '满级'];
  const rows = [snap.skills.length ? snap.skills : [null]].map((s, i) => [
    i === 0 ? snap.snapshotVersion : '',
    i === 0 ? snap.stats.hp : '',
    i === 0 ? snap.stats.atk : '',
    i === 0 ? snap.stats.def : '',
    i === 0 ? snap.stats.spd : '',
    s?.name || '',
    s?.tag || '',
    s?.unit || '',
    s?.lv1 ?? '',
    s?.lv10 ?? '',
  ]);
  return { headers, rows };
}

export function lightConeBundle(lc) {
  return {
    ...EXPORT_META,
    exportedAt: stamp(),
    kind: 'lightcone',
    lightCone: {
      id: lc.id, name: lc.name, rarity: lc.rarity, path: lc.path, limited: lc.limited,
      releaseVersion: lc.releaseVersion, lv80: lc.lv80, effect: lc.effect, source: lc.source,
    },
  };
}

export function relicBundle(relic, mainStats, subStats) {
  return {
    ...EXPORT_META,
    exportedAt: stamp(),
    kind: 'relic',
    relic: {
      id: relic.id, name: relic.name, type: relic.type, releaseVersion: relic.releaseVersion,
      twoPiece: relic.twoPiece, fourPiece: relic.fourPiece, source: relic.source,
    },
    mainStats,
    subStats,
  };
}

export function enemyBundle(enemy) {
  return {
    ...EXPORT_META,
    exportedAt: stamp(),
    kind: 'enemy',
    enemy: {
      id: enemy.id, name: enemy.name, category: enemy.category, releaseVersion: enemy.releaseVersion,
      weaknesses: enemy.weaknesses, resists: enemy.resists, lv80: enemy.lv80, skills: enemy.skills, source: enemy.source,
    },
  };
}

export function stageBundle(rotation) {
  return {
    ...EXPORT_META,
    exportedAt: stamp(),
    kind: 'stage',
    rotation: {
      id: rotation.id,
      mode: rotation.mode,
      modeName: STAGE_TYPES[rotation.mode]?.name || rotation.mode,
      title: stageTitle(rotation),
      name: rotation.name,
      version: rotation.version,
      startDate: rotation.startDate || null,
      endDate: rotation.endDate || null,
      effects: rotation.effects || [],
      levels: rotation.levels || [],
      bosses: rotation.bosses || [],
      nodes: rotation.nodes || [],
      source: rotation.source,
    },
  };
}

const STAGE_KIND_LABEL = {
  level: '层', boss: '首领', knight: '骑士', king: '王棋', 'king-hard': '王棋·绝境',
};

export function stageCSV(rotation) {
  const headers = ['模式', '版本', '关卡', '节点类型', '节点', '敌方等级', '队伍', '波次', '敌人', '弱点属性'];
  const rows = [];
  for (const node of stageNodes(rotation)) {
    const rawKind = node.kind || (rotation.bosses?.includes(node) ? 'boss' : 'level');
    const kind = STAGE_KIND_LABEL[rawKind] || rawKind;
    if (!node.waves?.length) {
      rows.push([STAGE_TYPES[rotation.mode]?.name || rotation.mode, rotation.version, rotation.name, kind, node.label, node.level ?? '', '', '', node.kind === 'boss' ? node.label : '', '']);
      continue;
    }
    for (const wave of node.waves) {
      if (!wave.enemies?.length) {
        rows.push([STAGE_TYPES[rotation.mode]?.name || rotation.mode, rotation.version, rotation.name, kind, node.label, node.level ?? '', wave.team ?? '', wave.label, '', (wave.elements || []).join(' / ')]);
        continue;
      }
      for (const enemy of wave.enemies) {
        rows.push([STAGE_TYPES[rotation.mode]?.name || rotation.mode, rotation.version, rotation.name, kind, node.label, node.level ?? '', wave.team ?? '', wave.label, enemy, (wave.elements || []).join(' / ')]);
      }
    }
  }
  return { headers, rows };
}

export function allStagesBundle() {
  return {
    ...EXPORT_META,
    exportedAt: stamp(),
    kind: 'all-stages',
    count: STAGES.length,
    rotations: STAGES.map((r) => ({
      id: r.id,
      mode: r.mode,
      modeName: STAGE_TYPES[r.mode]?.name || r.mode,
      title: stageTitle(r),
      name: r.name,
      version: r.version,
      startDate: r.startDate || null,
      endDate: r.endDate || null,
      effects: r.effects || [],
      levels: r.levels || [],
      bosses: r.bosses || [],
      nodes: r.nodes || [],
      source: r.source,
    })),
  };
}

export function allVersionsBundle() {
  return {
    ...EXPORT_META,
    exportedAt: stamp(),
    kind: 'all-version-snapshots',
    versions: LIVE_VERSION_IDS,
    data: buildAllVersionSnapshots(),
  };
}

/* ---------------- chart PNG ---------------- */

export async function exportChartPNG(card) {
  const svg = card?.querySelector('svg.viz-svg');
  if (!svg) {
    toast('当前图表暂不支持导出', { tone: 'warning' });
    return;
  }
  const name = card.getAttribute('data-chart-name') || 'chart';
  try {
    const clone = svg.cloneNode(true);
    const vb = (clone.getAttribute('viewBox') || '0 0 760 320').split(/\s+/).map(Number);
    const w = vb[2] || 760;
    const h = vb[3] || 320;
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', String(w));
    clone.setAttribute('height', String(h));
    clone.querySelectorAll('.viz-hit').forEach((el) => el.remove());
    clone.querySelectorAll('[data-crosshair]').forEach((el) => {
      el.setAttribute('opacity', '0');
    });
    const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bg.setAttribute('width', String(w));
    bg.setAttribute('height', String(h));
    bg.setAttribute('fill', '#101524');
    clone.insertBefore(bg, clone.firstChild);

    const xml = new XMLSerializer().serializeToString(clone);
    const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(xml)}`;
    const img = new Image();
    img.decoding = 'async';
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#101524';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('toBlob failed');
    downloadBlob(blob, `${safeName(name)}-${APP.dataVersion}.png`);
    toast('图表已导出 PNG', { tone: 'good' });
  } catch (err) {
    console.error(err);
    toast('PNG 导出失败，请改用数据表复制', { tone: 'critical' });
  }
}

export { EXPORT_META };
