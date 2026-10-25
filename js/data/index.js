export * from './meta.js';
export * from './characters.js';
export * from './lightcones.js';
export * from './relics.js';
export * from './enemies.js';
export * from './stages.js';
export * from './updates.js';

import {
  CHARACTERS, BETA_CHARACTERS, UNRELEASED_CHARACTERS, CHARACTER_MAP,
  characterVersions, getCharacterSnapshot,
} from './characters.js';
import { LIGHT_CONES, LIGHT_CONE_MAP } from './lightcones.js';
import { RELICS, RELIC_MAP } from './relics.js';
import { ENEMIES, ENEMY_MAP } from './enemies.js';
import { STAGES, STAGE_MAP, STAGE_TYPES } from './stages.js';
import {
  LIVE_VERSIONS, LIVE_VERSION_IDS, VERSION_BY_ID, versionIndex, getVersion,
  ELEMENTS, PATHS,
} from './meta.js';

/** 兼容旧导出名：关卡轮换列表 */
export const ROTATIONS = STAGES;

export const COUNTS = {
  characters: CHARACTERS.length,
  beta: BETA_CHARACTERS.length,
  unreleased: UNRELEASED_CHARACTERS.filter((c) => c.status === 'unreleased').length,
  scrapped: UNRELEASED_CHARACTERS.filter((c) => c.status === 'scrapped').length,
  lightCones: LIGHT_CONES.length,
  relics: RELICS.length,
  enemies: ENEMIES.length,
  stages: STAGES.length,
  stageModes: Object.keys(STAGE_TYPES).length,
  versions: LIVE_VERSIONS.length,
};

export function getFeaturedCharacters() {
  return CHARACTERS.filter((c) => c.featured);
}

/** 关卡展示名：去掉「第 001 ~ 003 期-」这类期数前缀，保留真实中文名 */
export function stageTitle(stage) {
  return String(stage?.name || '')
    .replace(/^第[0-9~～\s]+期\s*[-—·]\s*/, '')
    .trim() || stage?.id || '';
}

/** 一期的全部战斗节点：普通层、首领、骑士 / 王棋 */
export function stageNodes(stage) {
  return [...(stage?.levels || []), ...(stage?.bosses || []), ...(stage?.nodes || [])];
}

/** 该期出现过的真实敌人名称（去重）。仅首领名称、无波次编成的期也会计入。 */
export function stageEnemyNames(stage) {
  const names = [];
  for (const node of stageNodes(stage)) {
    for (const wave of node.waves || []) {
      for (const name of wave.enemies || []) {
        if (name && !names.includes(name)) names.push(name);
      }
    }
    if (!node.waves?.length && node.kind === 'boss' && node.label && !names.includes(node.label)) {
      names.push(node.label);
    }
  }
  return names;
}

export function stageWaveCount(stage) {
  return stageNodes(stage).reduce((n, node) => n + (node.waves?.length || 0), 0);
}

export function stageEnemyCount(stage) {
  let n = 0;
  for (const node of stageNodes(stage)) {
    for (const wave of node.waves || []) n += wave.enemies?.length || 0;
    if (!node.waves?.length && node.kind === 'boss') n += 1;
  }
  return n;
}

export function latestRotationByMode(mode) {
  const list = STAGES.filter((s) => s.mode === mode);
  return list[list.length - 1] || null;
}

export function versionReleaseSummary(versionId) {
  const chars = CHARACTERS.filter((c) => c.releaseVersion === versionId);
  const stages = STAGES.filter((s) => s.version === versionId);
  const patches = CHARACTERS.filter((c) => (c.patches || []).some((p) => p.version === versionId)).length;
  return { characters: chars, stages, patches };
}

export function compareCharacterVersions(id, v1, v2) {
  const character = CHARACTER_MAP[id];
  if (!character) return null;
  const a = getCharacterSnapshot(character, v1);
  const b = getCharacterSnapshot(character, v2);
  const statDiffs = ['hp', 'atk', 'def', 'spd'].map((key) => ({
    key,
    from: a.stats[key],
    to: b.stats[key],
    delta: b.stats[key] - a.stats[key],
  })).filter((d) => d.delta !== 0);
  const skillDiffs = [];
  for (const sa of a.skills) {
    const sb = b.skills.find((s) => s.key === sa.key);
    if (!sb) continue;
    if (sa.lv1 !== sb.lv1 || sa.lv10 !== sb.lv10) {
      skillDiffs.push({
        key: sa.key,
        tag: sa.tag,
        name: sa.name,
        unit: sa.unit,
        from: { lv1: sa.lv1, lv10: sa.lv10 },
        to: { lv1: sb.lv1, lv10: sb.lv10 },
      });
    }
  }
  return { character, a, b, statDiffs, skillDiffs };
}

/** 全量版本快照：只输出真实归档字段，不含压力 / 奖励等生成数据 */
export function buildAllVersionSnapshots() {
  const out = {};
  for (const version of LIVE_VERSION_IDS) {
    const characters = CHARACTERS
      .filter((c) => characterVersions(c).includes(version))
      .map((c) => {
        const snap = getCharacterSnapshot(c, version);
        return {
          id: c.id,
          name: c.name,
          releaseVersion: c.releaseVersion,
          snapshotVersion: snap.snapshotVersion,
          stats: snap.stats,
          skills: snap.skills.map((s) => ({ key: s.key, tag: s.tag, name: s.name, unit: s.unit, lv1: s.lv1, lv10: s.lv10 })),
          appliedPatches: snap.appliedPatches.map((p) => ({ version: p.version, title: p.title })),
        };
      });
    out[version] = {
      version,
      meta: getVersion(version),
      characters,
      stages: STAGES.filter((s) => s.version === version).map((s) => ({
        id: s.id,
        mode: s.mode,
        modeName: STAGE_TYPES[s.mode]?.name || s.mode,
        name: s.name,
        version: s.version,
        startDate: s.startDate,
        endDate: s.endDate,
        effects: s.effects,
        levels: s.levels,
        bosses: s.bosses,
        nodes: s.nodes,
      })),
    };
  }
  return out;
}

function haystack(parts) {
  return parts.filter(Boolean).join(' ').toLowerCase();
}

export function buildSearchIndex() {
  const items = [];
  for (const c of [...CHARACTERS, ...BETA_CHARACTERS, ...UNRELEASED_CHARACTERS]) {
    items.push({
      kind: 'character',
      id: c.id,
      title: c.name,
      subtitle: `${c.rarity}★ · ${ELEMENTS[c.element]?.name || c.element} · ${PATHS[c.path]?.name || c.path}`,
      status: c.status,
      href: `#/character/${c.id}`,
      keywords: haystack([
        c.name, c.en, c.faction, c.positioning, c.keywords?.join(' '),
        c.skills.map((s) => `${s.name} ${s.desc} ${s.tag}`).join(' '),
        c.eidolons?.map((e) => e.desc).join(' '),
        c.element, c.path,
      ]),
    });
  }
  for (const lc of LIGHT_CONES) {
    items.push({
      kind: 'lightcone',
      id: lc.id,
      title: lc.name,
      subtitle: `${lc.rarity}★ · 光锥演示目录 · ${PATHS[lc.path]?.name || lc.path}`,
      status: lc.status,
      href: `#/lightcone/${lc.id}`,
      keywords: haystack([lc.name, lc.en, lc.effect.name, lc.effect.desc, lc.path]),
    });
  }
  for (const r of RELICS) {
    items.push({
      kind: 'relic',
      id: r.id,
      title: r.name,
      subtitle: `${r.type === 'cavern' ? '隧洞遗器' : '位面饰品'} · 遗器演示目录`,
      status: r.status,
      href: `#/relic/${r.id}`,
      keywords: haystack([r.name, r.en, r.twoPiece, r.fourPiece]),
    });
  }
  for (const e of ENEMIES) {
    items.push({
      kind: 'enemy',
      id: e.id,
      title: e.name,
      subtitle: `${e.category} · 敌人演示目录`,
      status: e.status,
      href: `#/enemy/${e.id}`,
      keywords: haystack([e.name, e.en, e.category, e.skills.map((s) => s.name + ' ' + s.desc).join(' ')]),
    });
  }
  for (const s of STAGES) {
    const mode = STAGE_TYPES[s.mode];
    items.push({
      kind: 'stage',
      id: s.id,
      title: stageTitle(s),
      subtitle: `${mode?.name || s.mode} · V${s.version}`,
      status: 'live',
      href: `#/stage/${s.id}`,
      keywords: haystack([
        s.name, stageTitle(s), mode?.name, s.version, s.startDate,
        s.effects.join(' '),
        stageNodes(s).map((n) => `${n.label} ${(n.waves || []).map((w) => w.enemies.join(' ')).join(' ')}`).join(' '),
      ]),
    });
  }
  return items;
}

export const SEARCH_INDEX = buildSearchIndex();

export function searchAll(query, { includeUnreleased = false, limitPerKind = 6 } = {}) {
  const q = String(query || '').trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const results = SEARCH_INDEX.filter((item) => {
    if (!includeUnreleased && (item.status === 'unreleased' || item.status === 'scrapped')) return false;
    return tokens.every((t) => item.keywords.includes(t) || item.title.toLowerCase().includes(t));
  });

  const order = ['character', 'lightcone', 'relic', 'enemy', 'stage'];
  const grouped = [];
  for (const kind of order) {
    const list = results.filter((r) => r.kind === kind);
    if (list.length) grouped.push({ kind, total: list.length, items: list.slice(0, limitPerKind) });
  }
  return grouped;
}

export function countSearchResults(query, includeUnreleased = false) {
  const groups = searchAll(query, { includeUnreleased, limitPerKind: 999 });
  return groups.reduce((n, g) => n + g.items.length, 0);
}

export { CHARACTER_MAP, LIGHT_CONE_MAP, RELIC_MAP, ENEMY_MAP, STAGE_MAP, LIVE_VERSIONS, LIVE_VERSION_IDS, VERSION_BY_ID, versionIndex, getVersion };
