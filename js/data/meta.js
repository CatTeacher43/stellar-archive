/**
 * 星轨档案库 · 静态数据字典
 * 角色与关卡为公开社区资料整理；光锥 / 遗器 / 敌人目录标注为演示。与米哈游无关联。
 */

export const APP = {
  name: '星轨档案库',
  nameEn: 'STELLAR ARCHIVE',
  tagline: '把每一次版本改动，留在星轨上。',
  version: '1.2.0',
  dataVersion: '4.6.0',
  lastUpdated: '2026-10-25',
  latestLive: '4.6',
  latestBeta: '4.7',
  latestLeak: '',
  site: '',
};

export const ELEMENTS = {
  physical:  { key: 'physical',  name: '物理', short: '物', color: '#d7ddea', soft: 'rgba(215,221,234,.14)' },
  fire:      { key: 'fire',      name: '火',   short: '火', color: '#ff7a5c', soft: 'rgba(255,122,92,.14)' },
  ice:       { key: 'ice',       name: '冰',   short: '冰', color: '#74d8ff', soft: 'rgba(116,216,255,.14)' },
  lightning: { key: 'lightning', name: '雷',   short: '雷', color: '#c9a0ff', soft: 'rgba(201,160,255,.14)' },
  wind:      { key: 'wind',      name: '风',   short: '风', color: '#63e2b4', soft: 'rgba(99,226,180,.14)' },
  quantum:   { key: 'quantum',   name: '量子', short: '量', color: '#a196ff', soft: 'rgba(161,150,255,.14)' },
  imaginary: { key: 'imaginary', name: '虚数', short: '虚', color: '#ffd479', soft: 'rgba(255,212,121,.14)' },
};

export const ELEMENT_ORDER = ['physical', 'fire', 'ice', 'lightning', 'wind', 'quantum', 'imaginary'];

export const PATHS = {
  destruction: { key: 'destruction', name: '毁灭', color: '#ff9c8a' },
  hunt:        { key: 'hunt',        name: '巡猎', color: '#8fd3ff' },
  erudition:   { key: 'erudition',   name: '智识', color: '#ffe08a' },
  harmony:     { key: 'harmony',     name: '同谐', color: '#7fe8cd' },
  nihility:    { key: 'nihility',    name: '虚无', color: '#c2a6ff' },
  preservation:{ key: 'preservation',name: '存护', color: '#a8c8ff' },
  abundance:   { key: 'abundance',   name: '丰饶', color: '#9de8a8' },
  memory:      { key: 'memory',      name: '记忆', color: '#7fb2ff' },
  elation:     { key: 'elation',     name: '欢愉', color: '#ff9ed2' },
};

export const PATH_ORDER = ['destruction', 'hunt', 'erudition', 'harmony', 'nihility', 'preservation', 'abundance', 'memory', 'elation'];

export const STATUS = {
  live: {
    key: 'live',
    label: '已上线',
    short: '正式',
    tone: 'good',
    icon: '✓',
    desc: '正式服稳定版本数据，可长期回溯。',
  },
  beta: {
    key: 'beta',
    label: '测试服，存在改动风险',
    short: '测试服',
    tone: 'warning',
    icon: '!',
    desc: '测试包整理数据，正式上线前可能大幅调整。',
  },
  unreleased: {
    key: 'unreleased',
    label: '未实机，随时作废，非最终数值',
    short: '未实机',
    tone: 'critical',
    icon: '?',
    desc: '版本预下载埋包整理内容，仅作前瞻参考，不代表最终效果。',
  },
  scrapped: {
    key: 'scrapped',
    label: '已废弃，不会实装',
    short: '已废弃',
    tone: 'muted',
    icon: '×',
    desc: '历史埋包中的失效内容，仅作考据留档。',
  },
};

export const RARITY = {
  5: { stars: '★★★★★', color: '#f2c96b', label: '五星' },
  4: { stars: '★★★★', color: '#b99cff', label: '四星' },
};

/**
 * 版本目录。正式版本用于快照切换；测试 / 埋包版本不进入正式快照链。
 */
export const VERSIONS = [
  { id: '1.0', date: '2023-04-26', title: '通往群星的轨道', type: 'live' },
  { id: '1.1', date: '2023-06-07', title: '银河漫游', type: 'live' },
  { id: '1.2', date: '2023-07-19', title: '仙骸有终', type: 'live' },
  { id: '1.3', date: '2023-08-30', title: '天镜映劫尘', type: 'live' },
  { id: '1.4', date: '2023-10-11', title: '冬梦激醒', type: 'live' },
  { id: '1.5', date: '2023-11-15', title: '迷离幻夜谈', type: 'live' },
  { id: '1.6', date: '2023-12-27', title: '庸与神的冠冕', type: 'live' },
  { id: '2.0', date: '2024-02-06', title: '假如在午夜入梦', type: 'live' },
  { id: '2.1', date: '2024-03-27', title: '狂热奔向深渊', type: 'live' },
  { id: '2.2', date: '2024-05-08', title: '等醒来再哭泣', type: 'live' },
  { id: '2.3', date: '2024-06-19', title: '再见，匹诺康尼', type: 'live' },
  { id: '2.4', date: '2024-07-31', title: '明霄竞武试锋芒', type: 'live' },
  { id: '2.5', date: '2024-09-10', title: '碧羽飞黄射天狼', type: 'live' },
  { id: '2.6', date: '2024-10-23', title: '毗乃昆尼末法世记', type: 'live' },
  { id: '2.7', date: '2024-12-04', title: '在第八日启程', type: 'live' },
  { id: '3.0', date: '2025-01-15', title: '再创世的凯歌', type: 'live' },
  { id: '3.1', date: '2025-02-26', title: '门扉之启，王座之终', type: 'live' },
  { id: '3.2', date: '2025-04-09', title: '走过安眠地的花丛', type: 'live' },
  { id: '3.3', date: '2025-05-21', title: '在黎明升起时坠落', type: 'live' },
  { id: '3.4', date: '2025-07-02', title: '因为太阳将要毁伤', type: 'live' },
  { id: '3.5', date: '2025-08-13', title: '英雄未死之前', type: 'live' },
  { id: '3.6', date: '2025-09-24', title: '于长夜重返大地', type: 'live' },
  { id: '3.7', date: '2025-11-05', title: '成为昨日的明天', type: 'live' },
  { id: '3.8', date: '2025-12-17', title: '记忆是梦的开场白', type: 'live' },
  { id: '4.0', date: '2026-02-13', title: '满月是神不在的时间', type: 'live' },
  { id: '4.1', date: '2026-03-25', title: '献给破晓的失控', type: 'live' },
  { id: '4.2', date: '2026-04-22', title: '如是，众生欢笑不已', type: 'live' },
  { id: '4.3', date: '2026-06-01', title: '沉于生者的忘川', type: 'live' },
  { id: '4.4', date: '2026-07-15', title: '鸣笛于归寂之时', type: 'live' },
  { id: '4.5', date: '2026-08-26', title: '挥掷千星的筹码', type: 'live' },
  { id: '4.6', date: '2026-09-28', title: '月升之前，与兽共舞', type: 'live' },
  { id: '4.7', date: '2026-11-11', title: '版本名未公布', type: 'beta' },
];

export const LIVE_VERSIONS = VERSIONS.filter((v) => v.type === 'live');
export const LIVE_VERSION_IDS = LIVE_VERSIONS.map((v) => v.id);
export const VERSION_BY_ID = Object.fromEntries(VERSIONS.map((v) => [v.id, v]));

export function getVersion(id) {
  return VERSION_BY_ID[id] || null;
}

export function versionIndex(id) {
  return LIVE_VERSION_IDS.indexOf(id);
}

export function isLiveVersion(id) {
  return LIVE_VERSION_IDS.includes(id);
}

export const DISCLAIMER = {
  short: '玩家自制非官方档案工具 · 数据整理自米游社 WIKI 与 BWIKI · 未实机内容不代表最终效果 · 同人图版权归原画师所有',
  long: [
    '本工具为玩家自制的静态战斗数值可视化档案库，与米哈游（miHoYo / HoYoverse）无任何关联，亦未获得其授权或背书。',
    '角色、行迹与星魂数据整理自米游社「崩坏：星穹铁道」WIKI；关卡轮换名称、时间与环境效果整理自 BWIKI。两者均为玩家社区资料，可能与游戏内文本存在出入，请以游戏内实际内容为准。',
    '应用内美术位置当前使用程序生成的占位图，不包含游戏原生模型、音频或官方美术资源。未收录同人图时不使用官方美术替代。',
    '本工具仅提供数据查阅与可视化，不提供配队模拟、伤害计算、账号读取或任何用户数据录入能力。',
  ],
  sources: [
    '角色：米游社「崩坏：星穹铁道」WIKI 角色页，2026-10-25 抓取。',
    '关卡：BWIKI 混沌回忆 / 虚构叙事 / 末日幻影 / 异相仲裁一览与历史页。',
    '版本：BWIKI「版本新增内容」页面公布的版本号、更新日期与版本名。',
  ],
  validation: '原页面未给出的字段留空或标注“未收录”，不做推测补全；关卡敌方组合按页面原文整理，未给出的波次不凭空生成。',
};

export const CHART_COLORS = {
  // 已通过 dataviz 校验（深色表面 #101524）：蓝 / 黄 / 品红 / 绿，
  // all-pairs 正常视觉 ΔE ≥ 19.3；CVD 处于 6–8 警戒带，图表均配备
  // 直接标签、不同虚线样式、图例与数据表作为二级编码。
  series: ['#3987e5', '#c98500', '#d55181', '#008300'],
  compareOld: '#3987e5',
  compareNew: '#d95926',
  grid: '#242e47',
  axis: '#3b4766',
  inkMuted: '#8d9ab8',
  surface: '#101524',
  divergingNeg: '#3987e5',
  divergingPos: '#d55181',
};
