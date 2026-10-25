import {
  RELIC_MAP, RELICS, RELIC_MAIN_STATS, RELIC_SUB_STATS,
} from '../data/index.js';
import { esc, icon, sourceBlock, toast } from '../ui.js';
import { relicIconSrc } from '../assets.js';
import { chartCard, mountChartCard } from '../charts.js';
import { downloadJSON, relicBundle } from '../export.js';
import { breadcrumb, pageFootNote } from './shared.js';

export async function render(ctx) {
  const r = RELIC_MAP[ctx.params[0]];
  if (!r) {
    ctx.setTitle('未找到遗器');
    return {
      html: `<div class="page narrow-page"><div class="empty-state tall"><div class="empty-ico">${icon('compass', 28)}</div>
        <h2>遗器未收录</h2><p>该条目可能不在当前档案范围内。</p><a class="btn btn-primary" href="#/relics">返回遗器档案</a></div></div>`,
    };
  }
  ctx.setTitle(`${r.name} · 遗器`);
  const related = RELICS.filter((x) => x.id !== r.id && x.type === r.type).slice(0, 3);
  const pct = RELIC_MAIN_STATS.filter((x) => x.group === '百分比');
  const fixed = RELIC_MAIN_STATS.filter((x) => x.group === '固定值');

  const html = `<div class="page relic-detail-page">
    ${breadcrumb([{ label: '遗器档案', href: '#/relics' }, { label: r.name }])}
    <section class="relic-hero">
      <div class="rh-icon"><img src="${relicIconSrc(r)}" alt="${esc(r.name)}遗器图标" width="120" height="120"><span>程序占位图标</span></div>
      <div class="rh-main">
        <p class="eyebrow">${r.type === 'cavern' ? 'CAVERN RELIC' : 'PLANAR ORNAMENT'} · V${esc(r.releaseVersion)}</p>
        <h1>${esc(r.name)}</h1>
        <p class="lc-en">${esc(r.en)}</p>
        <div class="ch-chips"><span class="tag tag-soft">${r.type === 'cavern' ? '隧洞遗器' : '位面饰品'}</span><span class="tag tag-soft">五星</span></div>
        <div class="set-bonus">
          <div><span>2 件套</span><p>${esc(r.twoPiece)}</p></div>
          <div><span>4 件套</span><p>${esc(r.fourPiece)}</p></div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-quiet btn-sm" type="button" data-export-relic>${icon('download', 14)}导出 JSON</button>
          <button class="btn btn-quiet btn-sm" type="button" data-action="copy-link">${icon('share', 14)}复制链接</button>
          <a class="btn btn-ghost btn-sm" href="#/relics">${icon('arrowLeft', 14)}返回列表</a>
        </div>
      </div>
    </section>

    <section class="section chart-section">
      <div class="chart-heading">
        <div><p class="eyebrow">MAIN STATS</p><h2>五星 15 级主词条上限</h2><p>百分比组与固定值组分开查看，避免不同量纲直接比较。</p></div>
        <div class="metric-tabs" id="relic-stat-tabs" role="group" aria-label="主词条分组">
          <button type="button" class="is-active" data-group="pct">百分比组</button>
          <button type="button" data-group="fixed">固定值组</button>
        </div>
      </div>
      <div id="relic-stat-zone">${mainStatCard(pct, 'pct')}</div>
    </section>

    <section class="section two-col-section">
      <div>
        <div class="chart-heading compact"><div><p class="eyebrow">MAIN STAT TABLE</p><h2>主词条全表</h2><p>百分比与固定值均为五星 15 级上限。</p></div></div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>分组</th><th>词条</th><th>上限</th></tr></thead>
            <tbody>${RELIC_MAIN_STATS.map((s) => `<tr><td>${esc(s.group)}</td><td>${esc(s.stat)}</td><td><b>${s.value}</b>${esc(s.unit)}</td></tr>`).join('')}</tbody>
          </table>
        </div>
      </div>
      <div>
        <div class="chart-heading compact"><div><p class="eyebrow">SUB STATS</p><h2>副词条单次强化</h2><p>单次强化上限；初始档位与实际强化次数会改变最终值。</p></div></div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>词条</th><th>单次上限</th></tr></thead>
            <tbody>${RELIC_SUB_STATS.map((s) => `<tr><td>${esc(s.stat)}</td><td><b>${s.value}</b>${esc(s.unit)}</td></tr>`).join('')}</tbody>
          </table>
        </div>
        <p class="inline-note">${icon('info', 14)}副词条不提供“有效词条”评分，不判断遗器优劣。</p>
      </div>
    </section>

    ${related.length ? `<section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">SAME TYPE</p><h2>同类遗器</h2><p>仅作档案索引，不构成配装推荐。</p></div></div>
      <div class="related-grid">
        ${related.map((x) => `<a class="related-card" href="#/relic/${x.id}">
          <img src="${relicIconSrc(x)}" alt="" width="52" height="52" loading="lazy">
          <span><b>${esc(x.name)}</b><em>${esc(x.twoPiece)}</em></span>
          ${icon('chevronRight', 14)}
        </a>`).join('')}
      </div>
    </section>` : ''}

    ${sourceBlock(r.source)}
    ${pageFootNote('遗器主副词条按公开资料整理，展示五星 15 级口径。本页不进行词条评分、不计算角色面板、不提供配装建议。')}
  </div>`;

  return {
    html,
    mount(root) {
      mountChartCard(mainStatSpec(pct, 'pct'));
      root.querySelector('#relic-stat-tabs')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-group]');
        if (!btn) return;
        const group = btn.getAttribute('data-group');
        root.querySelectorAll('#relic-stat-tabs button').forEach((b) => b.classList.toggle('is-active', b === btn));
        const zone = root.querySelector('#relic-stat-zone');
        zone.innerHTML = mainStatCard(group === 'pct' ? pct : fixed, group);
        mountChartCard(mainStatSpec(group === 'pct' ? pct : fixed, group));
      });
      root.querySelector('[data-export-relic]')?.addEventListener('click', () => {
        downloadJSON(relicBundle(r, RELIC_MAIN_STATS, RELIC_SUB_STATS), `${r.name}-遗器`);
        toast('遗器数据已导出', { tone: 'good' });
      });
    },
  };
}

function mainStatCard(items, group) {
  return chartCard(mainStatSpec(items, group));
}

function mainStatSpec(items, group) {
  const unit = group === 'pct' ? '%' : '';
  return {
    id: 'relic-main-chart',
    title: `主词条上限 · ${group === 'pct' ? '百分比组' : '固定值组'}`,
    subtitle: '五星遗器 15 级 · 组内比较',
    chart: {
      type: 'bars',
      categories: items.map((s) => ({
        label: s.stat, value: Number(s.value), unit,
        detail: `${s.stat} · 五星 15 级上限`,
      })),
      unit,
      height: 320,
      color: '#f2c96b',
      ariaLabel: `遗器主词条${group === 'pct' ? '百分比' : '固定值'}上限`,
    },
    table: {
      headers: ['词条', '上限'],
      rows: items.map((s) => [s.stat, `${s.value}${s.unit}`]),
    },
    footnote: group === 'pct' ? '百分比词条之间同样不可简单等价；本图只展示数值上限。' : '固定值词条单位为点数，不与百分比词条比较。',
  };
}
