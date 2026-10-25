/** 敌人档案 · 演示数据 */

const RES = (physical, fire, ice, lightning, wind, quantum, imaginary) => ({
  physical, fire, ice, lightning, wind, quantum, imaginary,
});

export const ENEMY_DIFFICULTIES = [
  { key: 'normal', name: '普通', mult: 1 },
  { key: 'elite', name: '精英', mult: 1.6 },
  { key: 'boss', name: '首领', mult: 2.4 },
];

export const ENEMIES = [
  {
    id: 'doomsday-beast',
    name: '末日兽',
    en: 'Doomsday Beast',
    category: '周本首领',
    releaseVersion: '1.0',
    status: 'live',
    weaknesses: ['fire', 'ice', 'quantum'],
    resists: RES(20, -20, -20, 40, 0, -20, 20),
    lv80: { hp: 380000, def: 1200, spd: 110 },
    skills: [
      { name: '湮灭射线', desc: '对单体造成高额虚数属性伤害，并降低目标防御力。', params: '倍率 320% · 冷却 3 回合' },
      { name: '末日审判', desc: '对敌方全体造成虚数属性伤害并施加灼烧。', params: '倍率 180% · 冷却 4 回合' },
      { name: '崩解核心', desc: '弱点被击破后进入易伤状态，受到的伤害提高。', params: '易伤 +30% · 持续 2 回合' },
    ],
    source: { label: '社区公开整理 / 周本数据', updated: '2025-07-02', note: '生命/防御为演示拟合值，抗性按公开资料整理。' },
  },
  {
    id: 'cocolia-mother-of-deception',
    name: '可可利亚·虚妄之母',
    en: 'Cocolia, Mother of Deception',
    category: '剧情首领',
    releaseVersion: '1.0',
    status: 'live',
    weaknesses: ['fire', 'lightning', 'quantum'],
    resists: RES(0, -20, 60, -20, 20, -20, 20),
    lv80: { hp: 410000, def: 1000, spd: 104 },
    skills: [
      { name: '永冬之矛', desc: '召唤冰矛攻击单体，造成冰属性伤害并降低速度。', params: '倍率 260% · 冷却 2 回合' },
      { name: '虚妄之母', desc: '进入第二阶段，回复生命并提升攻击力。', params: '回复 15% · 攻击 +25%' },
      { name: '寒潮', desc: '对敌方全体造成冰属性伤害并概率冻结。', params: '倍率 140% · 冻结概率 30%' },
    ],
    source: { label: '社区公开整理 / 剧情首领', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'phantylia',
    name: '幻胧',
    en: 'Phantylia',
    category: '周本首领',
    releaseVersion: '1.2',
    status: 'live',
    weaknesses: ['wind', 'quantum', 'imaginary'],
    resists: RES(20, 20, 0, 40, -20, -20, -20),
    lv80: { hp: 520000, def: 1300, spd: 115 },
    skills: [
      { name: '莲华绽放', desc: '召唤莲花，对敌方全体造成雷属性伤害。', params: '倍率 200% · 冷却 3 回合' },
      { name: '烬灭', desc: '对单体造成高额雷属性伤害并施加持续伤害。', params: '倍率 300% · 持续 2 回合' },
      { name: '毁灭之种', desc: '为自身附加护盾，护盾存在时攻击力提升。', params: '护盾 12% · 攻击 +20%' },
    ],
    source: { label: '社区公开整理 / 周本数据', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'abundant-deer',
    name: '丰饶玄鹿',
    en: 'Abundant Ebon Deer',
    category: '精英首领',
    releaseVersion: '1.2',
    status: 'live',
    weaknesses: ['fire', 'wind', 'quantum'],
    resists: RES(0, -20, 20, 40, -20, -20, 20),
    lv80: { hp: 450000, def: 1100, spd: 100 },
    skills: [
      { name: '枝蔓横扫', desc: '对敌方全体造成物理属性伤害。', params: '倍率 150% · 冷却 2 回合' },
      { name: '生生不息', desc: '召唤树苗，树苗存活时提升自身防御力。', params: '防御 +25% · 持续 3 回合' },
      { name: '丰饶之赐', desc: '为自身恢复生命值并解除一个负面效果。', params: '回复 10% · 冷却 4 回合' },
    ],
    source: { label: '社区公开整理 / 精英数据', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'something-unto-death',
    name: '何物朝向死亡',
    en: 'Something Unto Death',
    category: '首领',
    releaseVersion: '2.0',
    status: 'live',
    weaknesses: ['physical', 'fire', 'wind'],
    resists: RES(-20, -20, 20, 20, -20, 40, 20),
    lv80: { hp: 480000, def: 1250, spd: 120 },
    skills: [
      { name: '亡者之握', desc: '对单体造成虚数属性伤害并施加「梦死」。', params: '倍率 280% · 梦死 2 回合' },
      { name: '葬礼进行曲', desc: '对敌方全体造成虚数属性伤害。', params: '倍率 170% · 冷却 3 回合' },
      { name: '死亡凝视', desc: '锁定生命值最低的目标，下次攻击造成额外伤害。', params: '额外倍率 120%' },
    ],
    source: { label: '社区公开整理 / 首领数据', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'true-sting',
    name: '虫群·真蜇虫',
    en: 'True Sting',
    category: '精英首领',
    releaseVersion: '1.3',
    status: 'live',
    weaknesses: ['ice', 'lightning', 'wind'],
    resists: RES(20, 0, -20, -20, -20, 40, 0),
    lv80: { hp: 390000, def: 1150, spd: 125 },
    skills: [
      { name: '群虫撕咬', desc: '对单体造成物理属性伤害，并召唤子嗣。', params: '倍率 240% · 冷却 2 回合' },
      { name: '虫潮', desc: '对敌方全体造成物理属性伤害。', params: '倍率 160% · 冷却 3 回合' },
      { name: '繁殖', desc: '召唤 2 只子嗣，场上有子嗣时自身减伤。', params: '减伤 20% · 持续 2 回合' },
    ],
    source: { label: '社区公开整理 / 精英数据', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'golden-automaton',
    name: '金人勾魂使',
    en: 'Golden Automaton: Soulhook',
    category: '精英',
    releaseVersion: '1.0',
    status: 'live',
    weaknesses: ['physical', 'lightning'],
    resists: RES(-20, 40, 0, -20, 20, 20, 0),
    lv80: { hp: 300000, def: 1000, spd: 132 },
    skills: [
      { name: '锁魂链', desc: '对单体造成物理属性伤害并降低速度。', params: '倍率 220% · 速度 -15%' },
      { name: '金人震怒', desc: '对敌方全体造成物理属性伤害。', params: '倍率 140% · 冷却 3 回合' },
      { name: '勾魂', desc: '对生命值低于 30% 的目标造成额外伤害。', params: '额外倍率 150%' },
    ],
    source: { label: '社区公开整理 / 精英数据', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'argenti',
    name: '银枝',
    en: 'Argenti',
    category: '活动首领',
    releaseVersion: '1.5',
    status: 'live',
    weaknesses: ['physical', 'fire', 'ice'],
    resists: RES(-20, -20, -20, 20, 40, 20, 20),
    lv80: { hp: 350000, def: 1050, spd: 108 },
    skills: [
      { name: '纯美之刺', desc: '对单体造成物理属性伤害。', params: '倍率 260% · 冷却 2 回合' },
      { name: '玫瑰念诵', desc: '为自身附加护盾并提升暴击伤害。', params: '护盾 10% · 暴伤 +30%' },
      { name: '纯美谢幕', desc: '对敌方全体造成物理属性伤害。', params: '倍率 180% · 冷却 4 回合' },
    ],
    source: { label: '社区公开整理 / 活动数据', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'aventurine',
    name: '砂金',
    en: 'Aventurine of Stratagems',
    category: '首领',
    releaseVersion: '2.1',
    status: 'live',
    weaknesses: ['physical', 'ice', 'lightning'],
    resists: RES(-20, 20, -20, -20, 20, 40, 0),
    lv80: { hp: 460000, def: 1400, spd: 116 },
    skills: [
      { name: '筹码入局', desc: '投掷骰子，根据点数对单体造成虚数属性伤害。', params: '倍率 180%–360% · 冷却 2 回合' },
      { name: '赌局', desc: '召唤骰子，骰子存活时自身减伤。', params: '减伤 25% · 持续 2 回合' },
      { name: '孤注一掷', desc: '对敌方全体造成虚数属性伤害并施加易伤。', params: '倍率 160% · 易伤 +20%' },
    ],
    source: { label: '社区公开整理 / 首领数据', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'sunday',
    name: '星期日',
    en: 'Sunday',
    category: '剧情首领',
    releaseVersion: '2.7',
    status: 'live',
    weaknesses: ['fire', 'lightning', 'wind'],
    resists: RES(20, -20, 20, -20, -20, 40, 60),
    lv80: { hp: 550000, def: 1350, spd: 118 },
    skills: [
      { name: '赞歌', desc: '为敌方全体提供护盾，并提升攻击力。', params: '护盾 8% · 攻击 +15%' },
      { name: '秩序之矛', desc: '对单体造成高额虚数属性伤害。', params: '倍率 300% · 冷却 2 回合' },
      { name: '乐园降临', desc: '进入第二阶段，召唤「乐园」领域。', params: '领域持续 3 回合' },
    ],
    source: { label: '社区公开整理 / 剧情首领', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'flame-reaver',
    name: '盗火行者',
    en: 'Flame Reaver',
    category: '精英首领',
    releaseVersion: '3.0',
    status: 'live',
    weaknesses: ['ice', 'lightning', 'quantum'],
    resists: RES(20, 40, -20, -20, 0, -20, 20),
    lv80: { hp: 600000, def: 1400, spd: 120 },
    skills: [
      { name: '盗火', desc: '窃取我方增益并转化为自身攻击力。', params: '攻击 +20% · 持续 2 回合' },
      { name: '焚世之焰', desc: '对敌方全体造成火属性伤害。', params: '倍率 190% · 冷却 3 回合' },
      { name: '余烬重生', desc: '首次被击败时复活，并恢复 30% 生命值。', params: '回复 30% · 仅一次' },
    ],
    source: { label: '社区公开整理 / 精英数据', updated: '2025-07-02', note: '演示拟合数据。' },
  },
  {
    id: 'lycurgus',
    name: '来古士',
    en: 'Lycurgus',
    category: '异相仲裁·王棋',
    releaseVersion: '3.6',
    status: 'live',
    weaknesses: ['physical', 'fire', 'quantum'],
    resists: RES(-20, -20, 20, 20, 20, -20, 60),
    lv80: { hp: 900000, def: 1600, spd: 125 },
    skills: [
      { name: '王棋裁决', desc: '根据场上骑士存活数量强化自身。', params: '每名骑士 +15% 攻击' },
      { name: '象限压制', desc: '对敌方全体造成虚数属性伤害并降低防御。', params: '倍率 210% · 减防 20%' },
      { name: '将杀', desc: '对生命值最低的目标发动处决攻击。', params: '倍率 500% · 冷却 4 回合' },
    ],
    source: { label: '异相仲裁 / 演示归档', updated: '2026-06-17', note: '演示拟合数据，非官方完整机制。' },
  },
];

export const ENEMY_MAP = Object.fromEntries(ENEMIES.map((e) => [e.id, e]));
export function getEnemy(id) { return ENEMY_MAP[id] || null; }

/** 等级成长拟合：80 级锁定演示基准值 */
export function enemyStatsAtLevel(enemy, level, difficulty = 1) {
  const t = Math.min(80, Math.max(1, level)) / 80;
  const hp = Math.round(enemy.lv80.hp * (0.08 + 0.92 * Math.pow(t, 1.65)) * difficulty);
  const def = Math.round(enemy.lv80.def * (0.18 + 0.82 * Math.pow(t, 1.2)) * difficulty);
  return { hp, def, spd: enemy.lv80.spd };
}

export function enemyGrowthSeries(enemy, stat = 'hp', difficulty = 1) {
  const out = [];
  for (let lv = 1; lv <= 80; lv++) {
    out.push({ x: lv, y: enemyStatsAtLevel(enemy, lv, difficulty)[stat] });
  }
  return out;
}
