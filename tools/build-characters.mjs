/**
 * Build js/data/characters.js from 米游社 WIKI snapshots.
 * Input : tools/mys-character-list.json, tools/mys-chars/<contentId>.json
 * Output: js/data/characters.js
 *
 * 只整理页面中直接给出的字段；页面缺失的字段留空，不做推测补全。
 */
import { readFileSync, writeFileSync } from 'node:fs';

const TYPE_NAMES = new Set(['普攻', '战技', '终结技', '天赋', '秘技', '额外能力', '属性加成']);
const SKILL_KEYS = { 普攻: 'basic', 战技: 'skill', 终结技: 'ult', 天赋: 'talent', 秘技: 'technique' };
const SKILL_ORDER = ['普攻', '战技', '终结技', '天赋', '秘技'];

const PATH_BY_CN = {
  毁灭: 'destruction', 巡猎: 'hunt', 智识: 'erudition', 同谐: 'harmony',
  虚无: 'nihility', 存护: 'preservation', 丰饶: 'abundance',
  记忆: 'memory', 欢愉: 'elation',
};
const ELEMENT_BY_CN = {
  物理: 'physical', 火: 'fire', 冰: 'ice', 雷: 'lightning',
  风: 'wind', 量子: 'quantum', 虚数: 'imaginary',
};
const TRAILBLAZER_VERSION = {
  physical: '1.0', fire: '1.0', imaginary: '2.2', ice: '3.0', lightning: '4.0',
};

function decodeEntities(s) {
  return s
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&middot;/g, '·');
}

function stripHTML(html) {
  if (!html) return '';
  return decodeEntities(
    String(html)
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|div|li|h\d)>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function plain(s) {
  return stripHTML(s).replace(/\s+/g, ' ').trim();
}

function parseNum(value) {
  if (value == null) return null;
  const m = String(value).replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
  return m ? Number(m[0]) : null;
}

function normDate(value) {
  const m = String(value || '').match(/(\d{4})[/-](\d{1,2})[/-](\d{1,2})/);
  if (!m) return null;
  return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`;
}

function releaseVersionOf(obtain, name, element) {
  if (name.startsWith('开拓者')) return TRAILBLAZER_VERSION[element] || null;
  const m = String(obtain || '').match(/(\d+\.\d+)/);
  if (m) return m[1];
  if (/常驻/.test(obtain || '')) return '1.0';
  return null;
}

function isLimited(obtain) {
  const text = obtain || '';
  if (/以后常驻|活动赠送/.test(text) && !/限定/.test(text)) return false;
  return /限定/.test(text);
}

function buildNew(template) {
  const byId = (id) => template.modules.find((m) => String(m.id) === String(id));
  const info = {};
  const infoModule = byId(11);
  if (infoModule?.components?.[0]?.data) {
    try {
      const list = JSON.parse(infoModule.components[0].data).list || [];
      for (const row of list) {
        if (row.rightKey) info[row.rightKey] = row.rightValue;
        if (row.leftKey) info[row.leftKey] = row.leftValue;
      }
    } catch { /* keep empty */ }
  }

  const lv80 = {};
  let energyLabel = '';
  const asc = byId(12);
  if (asc?.components?.[0]?.data) {
    try {
      const tabs = JSON.parse(asc.components[0].data).list || [];
      const tab = tabs.find((t) => /80级属性/.test(t.tabName || '')) || tabs.find((t) => t.attr?.length);
      for (const row of tab?.attr || []) {
        const v = parseNum(row.value?.[0]);
        if (row.key === '生命值') lv80.hp = v;
        if (row.key === '攻击力') lv80.atk = v;
        if (row.key === '防御力') lv80.def = v;
        if (row.key === '速度') lv80.spd = v;
        if (row.key === '终结技启动所需') energyLabel = row.value?.[0] || '';
      }
    } catch { /* keep empty */ }
  }

  const skillPoints = [];
  const trace = byId(13);
  if (trace?.components?.[0]?.data) {
    try {
      const graph = JSON.parse(trace.components[0].data);
      skillPoints.push(...(graph.points || []));
    } catch { /* keep empty */ }
  }

  let eidolonHTML = '';
  const eidolons = byId(14);
  if (eidolons?.components?.[0]?.data) {
    try {
      eidolonHTML = JSON.parse(eidolons.components[0].data).richText || '';
    } catch { /* keep empty */ }
  }

  return { info, lv80, energyLabel, skillPoints, eidolonHTML, positioning: info['定位'] || '' };
}

function buildOld(content) {
  const parts = [];
  for (const section of content.contents || []) {
    for (const m of String(section.text || '').matchAll(/data-data="([^"]+)"/g)) {
      try {
        const arr = JSON.parse(decodeURIComponent(m[1]));
        if (Array.isArray(arr)) parts.push(...arr);
      } catch { /* skip malformed */ }
    }
  }
  const part = (key) => parts.find((p) => p.partKey === key)?.data || null;

  const main = part('newMain') || {};
  const info = {};
  for (const f of main.mainFields || []) {
    if (f.nameL) info[f.nameL] = f.valueL;
    if (f.nameR) info[f.nameR] = f.valueR;
  }
  if (main.name) info['角色名'] = main.name;

  const lv80 = {};
  let energyLabel = '';
  const breach = part('breach');
  if (breach) {
    const tab = (breach.attr || []).find((t) => /80级属性/.test(t.name_ || ''));
    for (const row of tab?.attr || []) {
      const v = parseNum(row.value?.[0]);
      if (row.key === '生命值') lv80.hp = v;
      if (row.key === '攻击力') lv80.atk = v;
      if (row.key === '防御力') lv80.def = v;
      if (row.key === '速度') lv80.spd = v;
      if (row.key === '终结技启动所需') energyLabel = row.value?.[0] || '';
    }
  }

  const trace = part('trace');
  const skillPoints = trace?.attr?.points || [];
  const eidolonHTML = part('desc')?.text || '';

  const allText = stripHTML((content.contents || []).map((x) => x.text || '').join('\n'));
  const positioning = (allText.match(/【角色定位】\s*([^\n]+)/) || [])[1]?.trim() || '';

  return { info, lv80, energyLabel, skillPoints, eidolonHTML, positioning };
}

function normalizeSkillPoint(p) {
  const rawName = plain(p.name);
  const rawTag = plain(p.tag);
  let type = '';
  let name = '';
  if (TYPE_NAMES.has(rawName)) { type = rawName; name = rawTag; }
  else if (TYPE_NAMES.has(rawTag)) { type = rawTag; name = rawName; }
  else {
    for (const t of TYPE_NAMES) {
      if (rawName.startsWith(t)) {
        type = t;
        name = rawName.slice(t.length).replace(/^[\s·・:：]+/, '').trim();
        break;
      }
    }
    // 个别行迹节点的 tag 写作「角色晋阶」，subTag 为「角色晋阶2/4/6」；
    // 这类条目仍是额外能力，不能因为标签差异漏掉。
    if (!type && rawTag === '角色晋阶' && rawName) {
      const subTags = (p.subList || []).flatMap((s) => s.subTag || []).join(' ');
      if (/角色晋阶/.test(subTags)) {
        type = '额外能力';
        name = rawName;
      }
    }
    if (!type) return null;
  }
  return { type, name: name || '—', point: p };
}

function buildSkill(p, type, skillName) {
  const subs = p.subList || [];
  const desc = subs.length
    ? subs.map((s) => {
      const title = plain(s.subTitle);
      const body = stripHTML(s.subDesc);
      return title ? `【${title}】${body}` : body;
    }).filter(Boolean).join('\n')
    : stripHTML(p.desc);

  const table = p.tableData && Array.isArray(p.tableData.rows) && p.tableData.rows.length
    ? { headers: p.tableData.headers || [], rows: p.tableData.rows }
    : null;

  let lv1 = null;
  let lv10 = null;
  let unit = '';
  if (table) {
    const col = table.rows.map((r) => (r.length > 1 ? String(r[1]) : '')).filter((x) => x && x !== '数值1');
    const nums = col.map(parseNum);
    if (col.length && nums.every((n) => n != null)) {
      lv1 = nums[0];
      lv10 = nums[nums.length - 1];
      const percent = col.every((x) => /%\s*$/.test(x));
      const points = col.every((x) => /点/.test(x));
      unit = percent ? '%' : points ? '点' : '';
    }
  }

  return {
    key: SKILL_KEYS[type] || type,
    tag: type,
    name: skillName,
    desc,
    unit,
    lv1,
    lv10,
    chart: lv1 != null && lv10 != null,
    table,
  };
}

function parseEidolons(html) {
  const out = [];
  if (!html) return out;
  let current = null;
  for (const m of html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>|<p[^>]*>([\s\S]*?)<\/p>/gi)) {
    if (m[1] != null) {
      const title = plain(m[1]).replace(/^【\d+】\s*/, '').trim();
      if (!title) continue;
      current = { name: title, desc: '' };
      out.push(current);
    } else if (current && m[2] != null) {
      const text = stripHTML(m[2]);
      if (text) current.desc = current.desc ? `${current.desc}\n${text}` : text;
    }
  }
  return out.slice(0, 6);
}

function uniqueBy(list, keyFn) {
  const seen = new Set();
  return list.filter((x) => {
    const k = keyFn(x);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const list = JSON.parse(readFileSync('tools/mys-character-list.json', 'utf8'));
const characters = [];
const report = [];

for (const item of list) {
  const json = JSON.parse(readFileSync(`tools/mys-chars/${item.id}.json`, 'utf8'));
  const content = json.data?.content || {};
  let src;
  if (content.rpg_new_tmp_content) {
    src = buildNew(content.rpg_new_tmp_content);
  } else {
    src = buildOld(content);
  }

  const [nameCN, pathCN, elementCN, bodyType, obtain, hp, atk, def, energyCol, spd] = item.cells;
  const base = content.rpg_new_tmp_content?.base?.userInfo || {};
  const element = ELEMENT_BY_CN[elementCN] || base.elementId || null;
  const path = PATH_BY_CN[pathCN] || null;
  const rarity = base.rarity || (item.tag.includes('星级-5星') ? 5 : 4);

  const lv80 = {
    hp: src.lv80.hp ?? Number(hp),
    atk: src.lv80.atk ?? Number(atk),
    def: src.lv80.def ?? Number(def),
    spd: src.lv80.spd ?? Number(spd),
  };

  const points = src.skillPoints.map(normalizeSkillPoint).filter(Boolean);
  const skills = SKILL_ORDER
    .map((type) => {
      const hit = points.find((p) => p.type === type);
      return hit ? buildSkill(hit.point, type, hit.name) : null;
    })
    .filter(Boolean);

  const traces = points
    .filter((p) => p.type === '额外能力')
    .map((p) => ({ name: p.name, desc: stripHTML(p.point.subList?.[0]?.subDesc || p.point.desc) }))
    .filter((t) => t.name && t.desc);

  const traceBonuses = uniqueBy(
    points
      .filter((p) => p.type === '属性加成')
      .map((p) => ({ name: p.name, desc: stripHTML(p.point.subList?.[0]?.subDesc || p.point.desc) }))
      .filter((t) => t.desc),
    (t) => `${t.name}|${t.desc}`
  );

  const eidolons = parseEidolons(src.eidolonHTML);
  const releaseVersion = releaseVersionOf(obtain, item.name, element);
  const tags = String(item.tag || '').split(/\s+/)
    .filter((t) => t.startsWith('tag-'))
    .map((t) => t.slice(4));

  const energyText = String(src.energyLabel || energyCol || '');
  const energy = /能量/.test(energyText)
    ? Number((energyText.match(/(\d+)/) || [])[1]) || null
    : /^\s*\d+\s*$/.test(energyText) ? Number(energyText.trim()) : null;

  const faction = src.info['阵营'] || src.info['所属'] || '';
  const releaseDate = normDate(src.info['实装日期']);
  const positioning = src.positioning || src.info['定位'] || '';
  const intro = [faction, positioning].filter(Boolean).join(' · ') || content.summary || '';

  characters.push({
    id: `c${item.id}`,
    mysId: Number(item.id),
    name: nameCN,
    en: '',
    rarity,
    element,
    path,
    limited: isLimited(obtain),
    status: 'live',
    releaseVersion,
    releaseDate,
    obtain,
    faction,
    bodyType,
    positioning,
    intro,
    keywords: tags,
    lv80,
    energy,
    energyLabel: src.energyLabel || energyCol || '',
    skills,
    eidolons,
    traces,
    traceBonuses,
    patches: [],
    fanArts: [],
    source: {
      label: '米游社 · 崩坏：星穹铁道 WIKI',
      updated: '2026-10-25',
      note: '基础面板、行迹与星魂文本取自米游社角色页；未给出的字段留空，不做推测补全。',
    },
  });

  report.push({
    name: nameCN,
    id: item.id,
    releaseVersion,
    releaseDate,
    skills: skills.length,
    eidolons: eidolons.length,
    traces: traces.length,
    missing: [
      releaseVersion ? '' : 'version',
      releaseDate ? '' : 'date',
      skills.length >= 5 ? '' : 'skills',
      eidolons.length === 6 ? '' : 'eidolons',
    ].filter(Boolean).join(','),
  });
}

characters.sort((a, b) => (a.releaseVersion || '').localeCompare(b.releaseVersion || '') || a.mysId - b.mysId);

const header = `/**
 * 角色档案 · 数据来源：米游社「崩坏：星穹铁道」WIKI
 *
 * 直接整理自米游社角色页（2026-10-25 抓取）：
 * - 名称、星级、属性、命途、阵营、体型、获取方式、实装日期
 * - Lv.80 基础生命 / 攻击 / 防御 / 速度，终结技启动能量
 * - 普攻 / 战技 / 终结技 / 天赋 / 秘技的名称、原文描述与等级数值表
 * - 星魂六层、三条额外能力与属性加成
 *
 * 页面未给出的字段一律留空，不生成推测数据。
 * 成长曲线为以 Lv.80 面板反推的拟合曲线，页面上已单独标注。
 * 本项目与 miHoYo / HoYoverse 无任何隶属或授权关系。
 */

import { LIVE_VERSION_IDS, LIVE_VERSIONS, versionIndex, isLiveVersion, APP } from './meta.js';

`;

const body = `export const CHARACTERS = ${JSON.stringify(characters, null, 2)};

export const BETA_CHARACTERS = [];
export const UNRELEASED_CHARACTERS = [];

export const ALL_CHARACTERS = [...CHARACTERS, ...BETA_CHARACTERS, ...UNRELEASED_CHARACTERS];
export const CHARACTER_MAP = Object.fromEntries(ALL_CHARACTERS.map((c) => [c.id, c]));

export function getCharacter(id) {
  return CHARACTER_MAP[id] || null;
}

export function characterVersions(character) {
  if (!character || character.status !== 'live') return [];
  const start = LIVE_VERSION_IDS.indexOf(character.releaseVersion);
  if (start < 0) return [];
  return LIVE_VERSION_IDS.slice(start);
}

/**
 * 生成指定正式版本的快照。
 * 本档案未收录官方逐版本角色数值修正，因此除已记录补丁外，快照面板相同。
 */
export function getCharacterSnapshot(character, versionId) {
  if (!character) return null;
  const version = isLiveVersion(versionId) ? versionId : APP.latestLive;
  const idx = versionIndex(version);
  const patches = (character.patches || []).filter((p) => versionIndex(p.version) <= idx);
  const stats = { ...character.lv80 };
  const skills = character.skills.map((s) => ({ ...s }));
  const applied = [];

  for (const patch of patches) {
    if (patch.stats) Object.assign(stats, patch.stats);
    if (patch.skills) {
      for (const [key, override] of Object.entries(patch.skills)) {
        const skill = skills.find((s) => s.key === key);
        if (skill) Object.assign(skill, override);
      }
    }
    applied.push(patch);
  }

  return {
    ...character,
    snapshotVersion: version,
    versionMeta: LIVE_VERSIONS[Math.max(0, idx)] || LIVE_VERSIONS[LIVE_VERSIONS.length - 1],
    stats,
    skills,
    appliedPatches: applied,
  };
}

export function previousLiveVersion(versionId = APP.latestLive) {
  const idx = LIVE_VERSION_IDS.indexOf(versionId);
  return idx > 0 ? LIVE_VERSION_IDS[idx - 1] : LIVE_VERSION_IDS[0];
}

/** 拟合成长曲线：80 级锁定公开数值，速度不随等级成长。 */
const ASC_STEPS = [20, 30, 40, 50, 60, 70];
const MAX_RAW = 0.12 + 0.88 + ASC_STEPS.length * 0.0075;

export function statAtLevel(lv80, level, stat = 'hp') {
  if (stat === 'spd') return lv80;
  const t = (Math.min(80, Math.max(1, level)) - 1) / 79;
  const steps = ASC_STEPS.filter((l) => level >= l).length;
  const raw = 0.12 + 0.88 * Math.pow(t, 0.94) + steps * 0.0075;
  return Math.round((lv80 * raw) / MAX_RAW);
}

export function growthSeries(lv80, stat) {
  const out = [];
  for (let lv = 1; lv <= 80; lv++) out.push({ x: lv, y: statAtLevel(lv80, lv, stat) });
  return out;
}

export const STAT_META = [
  { key: 'hp', name: '生命值', short: 'HP', unit: '', color: '#3987e5' },
  { key: 'atk', name: '攻击力', short: 'ATK', unit: '', color: '#c98500' },
  { key: 'def', name: '防御力', short: 'DEF', unit: '', color: '#d55181' },
  { key: 'spd', name: '速度', short: 'SPD', unit: '', color: '#008300' },
];

export function skillValue(skill, level) {
  if (!skill || !skill.chart) return null;
  const t = (Math.min(10, Math.max(1, level)) - 1) / 9;
  const raw = skill.lv1 + (skill.lv10 - skill.lv1) * t;
  return Math.round(raw * 10) / 10;
}

/** 以已上线正式角色为样本，计算雷达图百分位（0–100）。 */
export function statPercentiles() {
  const data = {};
  for (const meta of STAT_META) {
    const values = CHARACTERS.map((c) => c.lv80[meta.key]).sort((a, b) => a - b);
    data[meta.key] = values;
  }
  const result = {};
  for (const c of CHARACTERS) {
    const pct = {};
    for (const meta of STAT_META) {
      const values = data[meta.key];
      const below = values.filter((v) => v < c.lv80[meta.key]).length;
      const equal = values.filter((v) => v === c.lv80[meta.key]).length;
      pct[meta.key] = Math.round(((below + equal * 0.5) / values.length) * 100);
    }
    result[c.id] = pct;
  }
  return result;
}

export function allSkillKeywords(character) {
  return (character.skills || []).map((s) => \`\${s.name} \${s.desc}\`).join(' ');
}
`;

writeFileSync('js/data/characters.js', header + body);
writeFileSync('tools/character-build-report.json', JSON.stringify(report, null, 2));

const missing = report.filter((r) => r.missing);
console.log('characters', characters.length);
console.log('missing fields', missing.length);
for (const r of missing) console.log(' -', r.name, r.missing);
console.log('release versions', [...new Set(characters.map((c) => c.releaseVersion))].join(', '));
console.log('paths', [...new Set(characters.map((c) => c.path))].join(', '));
console.log('no skills', report.filter((r) => r.skills === 0).map((r) => r.name));
