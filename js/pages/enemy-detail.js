import {
  ENEMY_MAP, ENEMIES, ENEMY_DIFFICULTIES, ELEMENTS, ELEMENT_ORDER, STAGES,
  STAGE_TYPES, stageEnemyNames, stageTitle, enemyGrowthSeries, enemyStatsAtLevel, versionIndex, VERSION_BY_ID,
  APP,
} from '../data/index.js';
import { esc, icon, fmt, sourceBlock, toast } from '../ui.js';
import { enemyIconSrc } from '../assets.js';
import { chartCard, mountChartCard, fmtNum } from '../charts.js';
import { CHART_COLORS } from '../data/meta.js';
import { downloadJSON, enemyBundle } from '../export.js';
import { breadcrumb, pageFootNote } from './shared.js';

const METRICS = [
  { key: 'hp', name: '生命值', color: CHART_COLORS.series[0], short: 'HP' },
  { key: 'def', name: '防御力', color: CHART_COLORS.series[2], short: 'DEF' },
];

export async function render(ctx) {
  const e = ENEMY_MAP[ctx.params[0]];
  if (!e) {
    ctx.setTitle('未找到敌人');
    return {
      html: `<div class="page narrow-page"><div class="empty-state tall"><div class="empty-ico">${icon('compass', 28)}</div>
        <h2>敌人未收录</h2><p>该条目可能不在当前档案范围内。</p><a class="btn btn-primary" href="#/enemies">返回敌人档案</a></div></div>`,
    };
  }
  ctx.setTitle(`${e.name} · 敌人`);
  const appearances = STAGES.filter((r) => stageEnemyNames(r).includes(e.name))
    .sort((a, b) => versionIndex(b.version) - versionIndex(a.version) || a.mode.localeCompare(b.mode));
  const related = ENEMIES.filter((x) => x.id !== e.id && x.category === e.category).slice(0, 3);
  const base = enemyStatsAtLevel(e, 80, 1);

  const html = `<div class="page enemy-detail-page">
    ${breadcrumb([{ label: '敌人档案', href: '#/enemies' }, { label: e.name }])}
    <section class="enemy-hero">
      <div class="eh-art"><img src="${enemyIconSrc(e)}" alt="${esc(e.name)}图标占位" width="160" height="160"><span>程序占位图标</span></div>
      <div class="eh-main">
        <p class="eyebrow">ENEMY ARCHIVE · ${esc(e.category)}</p>
        <h1>${esc(e.name)}</h1>
        <p class="lc-en">${esc(e.en)}</p>
        <div class="ch-chips">
          <span class="tag tag-soft">${esc(e.category)}</span>
          <span class="tag tag-soft">V${esc(e.releaseVersion)} 入库</span>
          <span class="tag tag-soft">${e.weaknesses.length} 个弱点</span>
        </div>
        <div class="weakness-panel">
          <span class="wp-label">弱点属性</span>
          ${e.weaknesses.map((w) => `<span class="weak-big" style="--wc:${ELEMENTS[w].color};--ws:${ELEMENTS[w].soft}">${ELEMENTS[w].name}</span>`).join('')}
        </div>
        <div class="eh-stats">
          <div><span>生命值</span><b>${fmt.int(e.lv80.hp)}</b><em>Lv.80 · 普通</em></div>
          <div><span>防御力</span><b>${fmt.int(e.lv80.def)}</b><em>Lv.80 · 普通</em></div>
          <div><span>速度</span><b>${e.lv80.spd}</b><em>固定</em></div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-quiet btn-sm" type="button" data-export-enemy>${icon('download', 14)}导出 JSON</button>
          <button class="btn btn-quiet btn-sm" type="button" data-action="copy-link">${icon('share', 14)}复制链接</button>
          <a class="btn btn-ghost btn-sm" href="#/enemies">${icon('arrowLeft', 14)}返回列表</a>
        </div>
      </div>
    </section>

    <section class="section chart-section">
      <div class="chart-heading compact"><div><p class="eyebrow">RESISTANCE PROFILE</p><h2>属性抗性画像</h2><p>正值表示抗性提高，负值表示弱点 / 负抗。0 为中性；仅展示环境画像，不计算伤害。</p></div>
        <div class="diff-legend"><span class="is-neg">● 负抗 / 弱点</span><span class="is-pos">● 抗性提升</span></div>
      </div>
      ${resistanceCard(e)}
    </section>

    <section class="section chart-section">
      <div class="chart-heading">
        <div><p class="eyebrow">LEVEL GROWTH</p><h2>等级成长</h2><p>Lv.1–80 拟合曲线，可切换普通 / 精英 / 首领难度倍率。</p></div>
        <div class="metric-tabs" id="enemy-growth-tabs" role="group" aria-label="选择成长指标">
          ${METRICS.map((m, i) => `<button type="button" class="${i === 0 ? 'is-active' : ''}" data-metric="${m.key}">${m.name}</button>`).join('')}
        </div>
      </div>
      <div class="difficulty-row" id="enemy-difficulty" role="group" aria-label="选择难度">
        ${ENEMY_DIFFICULTIES.map((d, i) => `<button type="button" class="${i === 0 ? 'is-active' : ''}" data-diff="${d.key}">${d.name}<em>× ${d.mult}</em></button>`).join('')}
      </div>
      <div id="enemy-growth-zone">${growthCard(e, 'hp', 'normal')}</div>
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">SKILLS</p><h2>技能机制</h2><p>结构示例，参数用于说明归档维度，不代表正式服精确机制。</p></div></div>
      <div class="enemy-skill-grid">
        ${e.skills.map((s, i) => `<article class="enemy-skill-card">
          <span class="es-no">0${i + 1}</span>
          <div><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p><em>${esc(s.params)}</em></div>
        </article>`).join('')}
      </div>
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">STAGE APPEARANCES</p><h2>历代出场</h2><p>在关卡档案中检索到 ${appearances.length} 期轮换；按版本从新到旧排列，仅展示前 10 条。</p></div></div>
      ${appearances.length ? `<div class="appearance-list">
        ${appearances.slice(0, 10).map((r) => `<a class="appearance-row" href="#/stage/${r.id}" style="--mc:${STAGE_TYPES[r.mode].color}">
          <span class="ap-mode">${STAGE_TYPES[r.mode].icon} ${STAGE_TYPES[r.mode].name}</span>
          <span class="ap-main"><b>${esc(stageTitle(r))}</b><em>V${esc(r.version)} · ${esc(VERSION_BY_ID[r.version]?.title || '')}${r.startDate ? ` · ${fmt.date(r.startDate)}` : ''}</em></span>
          <span class="ap-ver">${esc((r.startDate || '').replace(/-/g, '.'))}</span>
          ${icon('chevronRight', 14)}
        </a>`).join('')}
      </div>` : `<p class="inline-note">${icon('info', 14)}当前已收录的关卡编成中没有检索到该敌人的出场记录；早期期数可能只保留了关卡名称。</p>`}
    </section>

    ${related.length ? `<section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">SAME CATEGORY</p><h2>同类敌人</h2><p>仅作档案索引。</p></div></div>
      <div class="related-grid">
        ${related.map((x) => `<a class="related-card" href="#/enemy/${x.id}">
          <img src="${enemyIconSrc(x)}" alt="" width="52" height="52" loading="lazy">
          <span><b>${esc(x.name)}</b><em>${esc(x.category)} · HP ${fmt.compact(x.lv80.hp)}</em></span>
          ${icon('chevronRight', 14)}
        </a>`).join('')}
      </div>
    </section>` : ''}

    ${sourceBlock(e.source)}
    ${pageFootNote('敌人基础生命 / 防御为演示拟合值；难度倍率为档案展示口径，不代表正式服精确倍率。技能参数为结构示例，不用于伤害计算。')}
  </div>`;

  return {
    html,
    mount(root) {
      mountResistance(e);
      mountChartCard(growthSpec(e, 'hp', 'normal'));
      let metric = 'hp';
      let diffKey = 'normal';

      const redrawGrowth = () => {
        const zone = root.querySelector('#enemy-growth-zone');
        zone.innerHTML = growthCard(e, metric, diffKey);
        mountChartCard(growthSpec(e, metric, diffKey));
      };

      root.querySelector('#enemy-growth-tabs')?.addEventListener('click', (ev) => {
        const btn = ev.target.closest('[data-metric]');
        if (!btn) return;
        metric = btn.getAttribute('data-metric');
        root.querySelectorAll('#enemy-growth-tabs [data-metric]').forEach((b) => b.classList.toggle('is-active', b === btn));
        redrawGrowth();
      });
      root.querySelector('#enemy-difficulty')?.addEventListener('click', (ev) => {
        const btn = ev.target.closest('[data-diff]');
        if (!btn) return;
        diffKey = btn.getAttribute('data-diff');
        root.querySelectorAll('#enemy-difficulty [data-diff]').forEach((b) => b.classList.toggle('is-active', b === btn));
        redrawGrowth();
      });
      root.querySelector('[data-export-enemy]')?.addEventListener('click', () => {
        downloadJSON(enemyBundle(e), `${e.name}-敌人`);
        toast('敌人数据已导出', { tone: 'good' });
      });
    },
  };
}

function resistanceCard(e) {
  const rows = ELEMENT_ORDER.map((k) => ({ key: k, name: ELEMENTS[k].name, value: e.resists[k] ?? 0 }));
  return chartCard({
    id: 'enemy-res-chart',
    title: '七属性抗性',
    subtitle: '百分比 · 负值为弱点 / 负抗，正值为抗性',
    legend: [
      { label: '负抗 / 弱点', color: CHART_COLORS.divergingNeg },
      { label: '抗性提升', color: CHART_COLORS.divergingPos },
    ],
    chart: {
      type: 'hbar',
      mode: 'diverging',
      items: rows.map((r) => ({ label: r.name, value: r.value, tipLabel: '抗性' })),
      unit: '%',
      formatValue: (v) => `${v > 0 ? '+' : ''}${v}%`,
      ariaLabel: '敌人七属性抗性图',
    },
    table: {
      headers: ['属性', '抗性'],
      rows: rows.map((r) => [r.name, `${r.value > 0 ? '+' : ''}${r.value}%`]),
    },
    footnote: '抗性按公开资料整理；弱点击破、减抗与战斗增益未在图中叠加。',
  });
}

function mountResistance(e) {
  mountChartCard({
    id: 'enemy-res-chart',
    chart: {
      type: 'hbar',
      mode: 'diverging',
      items: ELEMENT_ORDER.map((k) => ({ label: ELEMENTS[k].name, value: e.resists[k] ?? 0, tipLabel: '抗性' })),
      unit: '%',
      formatValue: (v) => `${v > 0 ? '+' : ''}${v}%`,
    },
  });
}

function growthCard(e, metricKey, diffKey) {
  return chartCard(growthSpec(e, metricKey, diffKey));
}

function growthSpec(e, metricKey, diffKey) {
  const metric = METRICS.find((m) => m.key === metricKey) || METRICS[0];
  const diff = ENEMY_DIFFICULTIES.find((d) => d.key === diffKey) || ENEMY_DIFFICULTIES[0];
  const points = enemyGrowthSeries(e, metric.key, diff.mult);
  return {
    id: 'enemy-growth-chart',
    title: `${metric.name}成长 · ${diff.name}`,
    subtitle: `Lv.1–80 拟合曲线 · 难度倍率 ×${diff.mult}`,
    chart: {
      type: 'line',
      series: [{ name: metric.name, color: metric.color, points }],
      xTicks: [1, 10, 20, 30, 40, 50, 60, 70, 80],
      xLabel: '等级', yLabel: metric.name, xName: 'Lv.',
      height: 300,
      formatX: (v) => String(v),
      formatY: (v) => fmtNum(v),
      ariaLabel: `${e.name}${metric.name}成长曲线`,
    },
    table: {
      headers: ['等级', metric.name],
      rows: [1, 10, 20, 30, 40, 50, 60, 70, 80].map((lv) => [lv, points.find((p) => p.x === lv)?.y ?? '—']),
    },
    footnote: '成长曲线与难度倍率均为演示拟合，不代表正式服精确数值。',
  };
}
