/**
 * Build js/data/stages.js from BWIKI snapshots.
 *
 * 只整理页面明确写出的内容：期名、版本、持续时间、环境效果、关卡层级、
 * 每波敌人名称与建议属性。页面没有给出的字段留空。
 */
import { readFileSync, writeFileSync } from 'node:fs';

const RAW = 'C:/Users/Kentany/AppData/Local/Temp/';
const VERSIONS = JSON.parse(readFileSync('tools/version-dates.json', 'utf8'));

const SOURCES = {
  moc: [
    'moc.json',
    'moc_混沌回忆_1.0-1.6.json',
    'moc_混沌回忆_2.0-2.7.json',
    'moc_混沌回忆_3.0-3.8.json',
  ],
  pf: ['xushi.json', 'xushi_old.json'],
  as: ['list_13009.json'],
  aa: ['list_24085.json'],
};

const MODE_META = {
  moc: {
    key: 'moc', name: '混沌回忆', en: 'Memory of Chaos', icon: '✦', color: '#8f7bff',
    startVersion: '1.0', cadence: '约每 6 周轮换',
    desc: '忘却之庭的常驻高难关卡。按期轮换敌人与「记忆紊流」环境效果，设多层节点，每层可分别编队。',
  },
  pf: {
    key: 'pf', name: '虚构叙事', en: 'Pure Fiction', icon: '❖', color: '#4fc3a1',
    startVersion: '1.6', cadence: '约每 6 周轮换',
    desc: '以「战意值」与连续击杀为核心的高难关卡。每期四个关卡，各分上下半，按波次累计积分。',
  },
  as: {
    key: 'as', name: '末日幻影', en: 'Apocalyptic Shadow', icon: '◈', color: '#e0a34f',
    startVersion: '2.3', cadence: '每 42 天轮换',
    desc: '双队伍挑战首领幻影的高难关卡。每关分两个节点，以两场战斗总积分结算，并设「末法余烬」与「终焉公理」。',
  },
  aa: {
    key: 'aa', name: '异相仲裁', en: 'Anomaly Arbitration', icon: '♛', color: '#ff7a9c',
    startVersion: '3.6', cadence: '随版本轮换',
    desc: '3 名骑士 + 1 个王棋的高难关卡。骑士关使用三支不重复队伍，每关 6 轮行动值；通关骑士关可削弱王棋。',
  },
};

function decodeEntities(s) {
  return String(s)
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

function stripHTML(html) {
  return decodeEntities(
    String(html || '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|div|li|dd|h\d)>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function cellFromHTML(html) {
  const alts = [...String(html).matchAll(/alt="([^"]*)"/g)].map((m) => decodeEntities(m[1]));
  return { text: stripHTML(html).replace(/\s+/g, ' ').trim(), alts };
}

function isElementIcon(alt) {
  return /^(物理|火|冰|雷|风|量子|虚数)\.png$/i.test(alt);
}

function enemyNames(cell) {
  const out = [];
  for (const alt of cell?.alts || []) {
    if (!alt || /\.(png|jpe?g|webp|gif)$/i.test(alt)) continue;
    if (/污染等级|弱点|星启|常规|文件:/.test(alt)) continue;
    if (!out.includes(alt)) out.push(alt);
  }
  return out;
}

function elementNames(cell) {
  return [...new Set((cell?.alts || [])
    .filter(isElementIcon)
    .map((a) => a.replace(/\.png$/i, '')))];
}

/** Parse wikitable into a rectangular grid, expanding rowspan / colspan. */
function parseTable(html) {
  const rows = [];
  const carry = new Map();
  for (const tr of String(html).matchAll(/<tr[\s\S]*?<\/tr>/g)) {
    const raw = [...tr[0].matchAll(/<(t[dh])([^>]*)>([\s\S]*?)<\/\1>/g)].map((m) => {
      const attrs = m[2];
      const rowspan = Number((attrs.match(/rowspan="(\d+)"/) || [])[1] || 1);
      const colspan = Number((attrs.match(/colspan="(\d+)"/) || [])[1] || 1);
      return { cell: cellFromHTML(m[3]), rowspan, colspan };
    });
    if (!raw.length) continue;
    const row = [];
    let col = 0;
    let ri = 0;
    while (ri < raw.length || [...carry.keys()].some((k) => k >= col)) {
      if (carry.has(col)) {
        const item = carry.get(col);
        row[col] = item.cell;
        item.left -= 1;
        if (item.left <= 0) carry.delete(col);
        col += 1;
        continue;
      }
      const item = raw[ri++];
      if (!item) { col += 1; continue; }
      for (let c = 0; c < item.colspan; c++) {
        row[col + c] = item.cell;
        if (item.rowspan > 1) carry.set(col + c, { cell: item.cell, left: item.rowspan - 1 });
      }
      col += item.colspan;
    }
    rows.push(row);
  }
  return rows;
}

function textAt(row, i) {
  return row?.[i]?.text || '';
}

function headingSections(html) {
  const heads = [...String(html).matchAll(/<h([234])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({
    level: Number(m[1]),
    index: m.index,
    end: m.index + m[0].length,
    text: stripHTML(m[2]).replace(/\[ ?编辑 ?\]/g, '').replace(/\s+/g, ' ').trim(),
  }));
  const out = [];
  for (let i = 0; i < heads.length; i++) {
    const h = heads[i];
    if (h.level !== 4) continue;
    const next = heads.slice(i + 1).find((x) => x.level <= 4);
    const content = html.slice(h.end, next ? next.index : html.length);
    let version = null;
    for (let j = i - 1; j >= 0; j--) {
      const m = heads[j].text.match(/^(\d+\.\d+)/);
      if (m) { version = m[1]; break; }
    }
    out.push({ version, title: h.text, content });
  }
  return out;
}

function periodInfo(section) {
  const m = section.title.match(/^(?:当前)?第([\d~]+)期\s*[-－—]\s*(.+)$/);
  const season = m ? m[1] : null;
  const title = m ? m[2].trim() : section.title;
  const dates = section.content.match(/持续时间[：:]\s*([\d/]+\s+[\d:]+)\s*[~～]\s*([\d/]+\s+[\d:]+)/);
  const startDate = dates ? dates[1].slice(0, 10).replace(/\//g, '-') : (VERSIONS[section.version] || null);
  const endDate = dates ? dates[2].slice(0, 10).replace(/\//g, '-') : null;

  const effects = [];
  for (const m2 of section.content.matchAll(/<li[^>]*>([\s\S]*?)<\/li>|<dd[^>]*>([\s\S]*?)<\/dd>/g)) {
    const raw = (m2[1] || m2[2])
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<\/(b|strong)>/gi, ' ');
    const text = stripHTML(raw).replace(/\s+/g, ' ').trim();
    if (!text || /^持续时间|期间5星up角色|^目录/.test(text)) continue;
    if (text.length < 2) continue;
    let clean = text.replace(/^[•·]\s*/, '').replace(/\s+/g, ' ').trim();
    if (/^(战意机制|记忆紊流|末法余烬)$/.test(clean)) continue;
    clean = clean.replace(/^(记忆紊流|末法余烬)[：:]\s*(记忆紊流|末法余烬)[：:]\s*/, '$1：');
    clean = clean.replace(/^(战意机制|记忆紊流|末法余烬)(?![：:\s])/, '$1：');
    if (clean.length > 600) clean = `${clean.slice(0, 600)}…`;
    if (!effects.includes(clean)) effects.push(clean);
    if (effects.length >= 8) break;
  }

  return { season, title, startDate, endDate, effects };
}

function parseMoc(section) {
  const base = periodInfo(section);
  const levels = [];
  for (const tableHTML of section.content.matchAll(/<table[\s\S]*?<\/table>/g)) {
    const rows = parseTable(tableHTML[0]);
    const headerIdx = rows.findIndex((r) => textAt(r, 0) === '层数' && r.some((c) => c?.text === '关卡'));
    if (headerIdx < 0) continue;
    const header = rows[headerIdx].map((c) => c?.text || '');
    const col = (name) => header.indexOf(name);
    const cLevel = col('层数');
    const cGrade = col('等级');
    const cTeam = col('编队');
    const cWave = col('关卡');
    const cEnemy = col('怪物');
    const cElem = col('建议属性');
    let current = null;
    for (const row of rows.slice(headerIdx + 1)) {
      const first = textAt(row, cLevel) || textAt(row, 0);
      if (first && !/^第\s*\d+\s*波/.test(first) && first !== current?.label) {
        if (current) levels.push(current);
        current = {
          label: first,
          level: Number(textAt(row, cGrade)) || null,
          teams: Number(textAt(row, cTeam)) || null,
          waves: [],
        };
      }
      const waveLabel = textAt(row, cWave) || textAt(row, 0);
      if (current && /^第\s*\d+\s*波/.test(waveLabel)) {
        current.waves.push({
          label: waveLabel,
          team: Number(textAt(row, cTeam)) || null,
          enemies: enemyNames(row[cEnemy]),
          elements: elementNames(row[cElem]),
        });
      }
    }
    if (current) levels.push(current);
  }
  return { ...base, levels: levels.filter((l) => l.waves.some((w) => w.enemies.length)) };
}

function parsePF(section) {
  const base = periodInfo(section);
  const levels = new Map();
  for (const tableHTML of section.content.matchAll(/<table[\s\S]*?<\/table>/g)) {
    const rows = parseTable(tableHTML[0]);
    if (!rows.length) continue;
    const title = textAt(rows[0], 0);
    const m = title.match(/^(.+?)(其[一二三四五六七八九十]+)(上|下)半$/);
    if (!m) continue;
    const label = `${m[2]}${m[3]}半`;
    if (!levels.has(label)) levels.set(label, { label, level: null, waves: [] });
    const node = levels.get(label);
    const gradeRow = rows.find((r) => textAt(r, 0) === '等级');
    if (gradeRow) node.level = Number(textAt(gradeRow, 1)) || node.level;
    const headerIdx = rows.findIndex((r) => textAt(r, 0) === '波次');
    if (headerIdx < 0) continue;
    for (const row of rows.slice(headerIdx + 1)) {
      const waveLabel = textAt(row, 0);
      if (!/^第\s*\d+\s*波/.test(waveLabel)) continue;
      const enemies = [...enemyNames(row[1]), ...enemyNames(row[2])];
      node.waves.push({ label: waveLabel, enemies: [...new Set(enemies)], elements: [] });
    }
  }
  const levelsOut = [...levels.values()];
  return { ...base, levels: levelsOut };
}

function parseAS(section) {
  const base = periodInfo(section);
  const bosses = [];
  for (const tableHTML of section.content.matchAll(/<table[\s\S]*?<\/table>/g)) {
    const rows = parseTable(tableHTML[0]);
    const title = textAt(rows[0], 0);
    if (!title || /挑战目标|星启模式增加|难度\d|终焉公理|固有特性/.test(title)) continue;
    bosses.push({
      label: title,
      level: null,
      waves: [],
      kind: 'boss',
    });
  }
  return { ...base, bosses, levels: [] };
}

function parseAA(section) {
  const base = periodInfo(section);
  const nodes = [];
  const tables = [...section.content.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => parseTable(m[0]));
  for (let i = 0; i < tables.length; i++) {
    const rows = tables[i];
    if (!rows.length) continue;
    const title = textAt(rows[0], 0);
    let kind = null;
    let label = null;
    const km = title.match(/骑士\(([一二三])\)/);
    if (km) {
      kind = 'knight';
      label = `骑士${km[1]}`;
    } else if (/一览/.test(title)) {
      continue;
    } else if (title.includes('绝境') || title === base.title || title.startsWith(`${base.title}•`)) {
      const bossAlt = (rows.flatMap((r) => r.flatMap((c) => [c?.text || '', ...(c?.alts || [])]))
        .find((a) => /文件:建模-敌人-/.test(a)) || '')
        .replace(/^.*文件:建模-敌人-/, '').replace(/\.png.*$/i, '');
      const clean = bossAlt || title.replace(/^文件:建模-敌人-/, '').replace(/\.png$/i, '').replace(/•绝境$/, '');
      if (title.includes('绝境')) { kind = 'king-hard'; label = `${clean}·绝境`; }
      else { kind = 'king'; label = clean; }
    }
    if (!kind) continue;
    const node = { label, kind, level: null, waves: [] };
    const gradeRow = rows.find((r) => textAt(r, 0) === '等级');
    if (gradeRow) node.level = Number(textAt(gradeRow, 1)) || null;
    const headerIdx = rows.findIndex((r) => textAt(r, 0) === '波次');
    if (headerIdx >= 0) {
      for (const row of rows.slice(headerIdx + 1)) {
        const waveLabel = textAt(row, 0);
        if (!/^第\s*\d+\s*波/.test(waveLabel)) continue;
        node.waves.push({
          label: waveLabel,
          enemies: [...new Set([...enemyNames(row[1]), ...enemyNames(row[2])])],
          elements: [],
        });
      }
    }
    // “敌人一览” 紧跟在王棋表格之后，若当前节点没有波次则尝试读取。
    if (!node.waves.length && tables[i + 1] && /一览/.test(textAt(tables[i + 1][0], 0))) {
      const follow = tables[i + 1];
      const hi = follow.findIndex((r) => textAt(r, 0) === '波次');
      for (const row of follow.slice(hi + 1)) {
        const waveLabel = textAt(row, 0);
        if (!/^第\s*\d+\s*波/.test(waveLabel)) continue;
        node.waves.push({
          label: waveLabel,
          enemies: [...new Set([...enemyNames(row[1]), ...enemyNames(row[2])])],
          elements: [],
        });
      }
    }
    nodes.push(node);
  }
  return { ...base, levels: [], nodes };
}

const stages = [];
for (const [mode, files] of Object.entries(SOURCES)) {
  for (const file of files) {
    const json = JSON.parse(readFileSync(RAW + file, 'utf8'));
    const html = json.parse?.text || '';
    for (const section of headingSections(html)) {
      const parsed = mode === 'moc' ? parseMoc(section)
        : mode === 'pf' ? parsePF(section)
          : mode === 'as' ? parseAS(section)
            : parseAA(section);
      if (!parsed.title || /^往期|回顾|一览$/.test(parsed.title)) continue;
      let version = section.version;
      if (!version && parsed.startDate) {
        version = Object.entries(VERSIONS)
          .filter(([, date]) => date <= parsed.startDate)
          .sort((a, b) => a[1].localeCompare(b[1]))
          .at(-1)?.[0] || null;
      }
      if (!version || !VERSIONS[version]) continue;
      const id = `${mode}-${version}-${parsed.season || parsed.title}`.replace(/[^\w\u4e00-\u9fa5-]/g, '');
      stages.push({
        id,
        mode,
        name: parsed.title,
        season: parsed.season,
        version,
        startDate: parsed.startDate,
        endDate: parsed.endDate,
        effects: parsed.effects,
        levels: parsed.levels || [],
        bosses: parsed.bosses || [],
        nodes: parsed.nodes || [],
        source: {
          label: mode === 'moc' ? 'BWIKI · 混沌回忆 / 回忆一览'
            : mode === 'pf' ? 'BWIKI · 叙事一览'
              : mode === 'as' ? 'BWIKI · 幻影一览'
                : 'BWIKI · 仲裁一览',
          updated: '2026-10-25',
        },
      });
    }
  }
}

// 同一期可能同时出现在总览页与历史页，保留字段更完整的一份。
const byKey = new Map();
for (const s of stages) {
  const key = `${s.mode}|${s.version}|${s.name}`;
  const prev = byKey.get(key);
  const score = (x) => x.levels.length * 10 + x.bosses.length * 5 + x.nodes.length * 5 + x.effects.length;
  if (!prev || score(s) > score(prev)) byKey.set(key, s);
}
const clean = [...byKey.values()].sort((a, b) => a.version.localeCompare(b.version) || a.mode.localeCompare(b.mode));

const header = `/**
 * 关卡档案 · 数据来源：BWIKI（wiki.biligame.com/sr）
 *
 * 每期只记录页面明确给出的内容：
 * - 期名、版本、开始 / 结束时间
 * - 环境效果原文（记忆紊流 / 战意机制 / 末法余烬等）
 * - 混沌回忆的层级、波次、敌人名称与建议属性
 * - 虚构叙事的上下半与波次敌人
 * - 末日幻影的首领幻影名称
 * - 异相仲裁的骑士 / 王棋节点与波次敌人
 *
 * 未给出的敌方组合、奖励与难度评分不生成，不用推算值填充。
 * 期号在不同页面存在不一致时保留原文；界面以版本 + 期名为主。
 * 本项目与 miHoYo / HoYoverse 无任何隶属或授权关系。
 */

`;

const body = `export const STAGE_TYPES = ${JSON.stringify(MODE_META, null, 2)};

export const STAGES = ${JSON.stringify(clean, null, 2)};

export const STAGE_MAP = Object.fromEntries(STAGES.map((s) => [s.id, s]));

export const STAGE_COUNTS = Object.fromEntries(
  Object.keys(STAGE_TYPES).map((m) => [m, STAGES.filter((s) => s.mode === m).length])
);

export function getStage(id) {
  return STAGE_MAP[id] || null;
}

export function getRotationsByMode(mode) {
  return STAGES.filter((s) => s.mode === mode);
}

export function getRotationsByVersion(version) {
  return STAGES.filter((s) => s.version === version);
}

export function adjacentRotations(stage) {
  const list = getRotationsByMode(stage.mode);
  const i = list.findIndex((s) => s.id === stage.id);
  return { older: i > 0 ? list[i - 1] : null, newer: i >= 0 && i < list.length - 1 ? list[i + 1] : null };
}

export function stageEnemyCount(stage) {
  const groups = [...(stage.levels || []), ...(stage.nodes || [])];
  let n = 0;
  for (const node of groups) {
    for (const wave of node.waves || []) n += wave.enemies.length;
  }
  return n;
}

export function stageWaveCount(stage) {
  const groups = [...(stage.levels || []), ...(stage.nodes || [])];
  return groups.reduce((n, node) => n + (node.waves?.length || 0), 0);
}
`;

writeFileSync('js/data/stages.js', header + body);
const counts = Object.fromEntries(Object.keys(MODE_META).map((m) => [m, clean.filter((s) => s.mode === m).length]));
console.log('stages', clean.length, counts);
console.log('by version', [...new Set(clean.map((s) => s.version))].join(','));
for (const m of Object.keys(MODE_META)) {
  const list = clean.filter((s) => s.mode === m);
  console.log(m, 'first', list[0]?.version, list[0]?.name, 'last', list.at(-1)?.version, list.at(-1)?.name);
  if (list.length) console.log(' sample', JSON.stringify(list.at(-1)).slice(0, 700));
}
