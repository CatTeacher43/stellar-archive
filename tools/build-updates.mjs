// 依据真实角色 / 关卡数据生成更新中心的数据包与版本记录，避免手工编造。
import { writeFileSync } from 'node:fs';
import { CHARACTERS } from '../js/data/characters.js';
import { STAGES, STAGE_TYPES } from '../js/data/stages.js';
import { LIVE_VERSIONS, VERSION_BY_ID } from '../js/data/meta.js';

const byVersion = new Map();
for (const v of LIVE_VERSIONS) {
  const chars = CHARACTERS.filter((c) => c.releaseVersion === v.id);
  const stages = STAGES.filter((s) => s.version === v.id);
  byVersion.set(v.id, { chars, stages });
}

const packs = [];
const changelog = [];
const ordered = [...LIVE_VERSIONS].sort((a, b) => b.id.localeCompare(a.id, 'en', { numeric: true }));

for (const v of ordered) {
  const { chars, stages } = byVersion.get(v.id);
  if (!chars.length && !stages.length) continue;
  const bytes = Buffer.byteLength(JSON.stringify({
    characters: chars.map((c) => ({ id: c.id, name: c.name, lv80: c.lv80, skills: c.skills })),
    stages,
  }));
  const size = bytes > 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
  const modeNames = [...new Set(stages.map((s) => STAGE_TYPES[s.mode]?.name).filter(Boolean))];
  const items = [
    chars.length ? `新角色 ${chars.length}` : '',
    stages.length ? `关卡轮换 ${stages.length} 期` : '',
  ].filter(Boolean).join(' · ') || '版本条目';

  packs.push({
    id: `${v.id}.0`,
    version: v.id,
    label: `${v.id} 正式数据包`,
    type: 'live',
    date: v.date,
    size,
    builtin: v.id === LIVE_VERSIONS[LIVE_VERSIONS.length - 1].id,
    items,
    notes: [
      chars.length ? `收录 ${chars.length} 名新上线角色的满级面板与技能。` : '',
      stages.length ? `${modeNames.join('、')} 共 ${stages.length} 期轮换。` : '',
      '体积为本地归档 JSON 的近似大小。',
    ].filter(Boolean).join(''),
  });

  const entries = [];
  if (chars.length) {
    for (const c of chars) {
      entries.push({ type: 'character', text: `角色「${c.name}」上线，版本 V${v.id}。`, characterId: c.id });
    }
  }
  for (const s of stages) {
    entries.push({
      type: 'stage',
      text: `${STAGE_TYPES[s.mode]?.name || s.mode}「${s.name.replace(/^第[0-9~～\s]+期\s*[-—·]\s*/, '')}」轮换归档${s.startDate ? `（${s.startDate} 起）` : ''}。`,
      characterId: null,
    });
  }
  entries.push({
    type: 'pack',
    text: `V${v.id} 本地档案快照生成：${chars.length} 名新角色、${stages.length} 期关卡。`,
    characterId: null,
  });

  changelog.push({
    version: v.id,
    date: v.date,
    summary: `V${v.id}「${v.title}」：${chars.length} 名角色上线，${stages.length} 期关卡轮换归档。`,
    entries,
  });
}

const body = `/** 数据包与版本记录 · 由 tools/build-updates.mjs 依据真实角色 / 关卡数据生成 */

export const DATA_PACKS = ${JSON.stringify(packs, null, 2)};

export const PACK_MAP = Object.fromEntries(DATA_PACKS.map((p) => [p.id, p]));

/** 更新日志：只记录可核对的角色上线与关卡轮换，不写演示改动 */
export const CHANGELOG = ${JSON.stringify(changelog, null, 2)};

export const CHANGE_TYPES = {
  pack: { label: '数据包', icon: '▣', tone: 'info' },
  character: { label: '角色', icon: '✦', tone: 'good' },
  stage: { label: '关卡', icon: '◈', tone: 'info' },
  balance: { label: '数值改动', icon: '±', tone: 'warning' },
  fanart: { label: '同人图', icon: '❖', tone: 'muted' },
  leak: { label: '未实机', icon: '?', tone: 'critical' },
  system: { label: '功能', icon: '◇', tone: 'info' },
};

export function changesForCharacter(characterId) {
  const out = [];
  for (const log of CHANGELOG) {
    for (const entry of log.entries) {
      if (entry.characterId === characterId) out.push({ version: log.version, date: log.date, ...entry });
    }
  }
  return out;
}
`;

writeFileSync('js/data/updates.js', body);
console.log('packs', packs.length, 'changelog', changelog.length, 'latest', ordered[0]?.id);
