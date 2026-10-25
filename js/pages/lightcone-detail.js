import {
  LIGHT_CONE_MAP, LIGHT_CONES, PATHS,
} from '../data/index.js';
import { esc, icon, fmt, pathChip, limitedChip, sourceBlock, toast } from '../ui.js';
import { lightConeSrc } from '../assets.js';
import { chartCard, mountChartCard } from '../charts.js';
import { downloadJSON, lightConeBundle } from '../export.js';
import { breadcrumb, pageFootNote } from './shared.js';

export async function render(ctx) {
  const lc = LIGHT_CONE_MAP[ctx.params[0]];
  if (!lc) {
    ctx.setTitle('未找到光锥');
    return {
      html: `<div class="page narrow-page"><div class="empty-state tall"><div class="empty-ico">${icon('compass', 28)}</div>
        <h2>光锥未收录</h2><p>该条目可能不在当前档案范围内。</p><a class="btn btn-primary" href="#/lightcones">返回光锥档案</a></div></div>`,
    };
  }
  ctx.setTitle(`${lc.name} · 光锥`);
  const related = LIGHT_CONES.filter((x) => x.id !== lc.id && x.path === lc.path).slice(0, 3);

  const html = `<div class="page lc-detail-page">
    ${breadcrumb([{ label: '光锥档案', href: '#/lightcones' }, { label: lc.name }])}
    <section class="lc-hero">
      <div class="lc-hero-art">
        <img src="${lightConeSrc(lc)}" alt="${esc(lc.name)}光锥占位图" width="520" height="700">
        <span class="lc-art-tag">程序占位 · 非游戏原图</span>
      </div>
      <div class="lc-hero-main">
        <p class="eyebrow">LIGHT CONE · ${esc((lc.en || '').toUpperCase())}</p>
        <h1>${esc(lc.name)}</h1>
        <p class="lc-en">${esc(lc.en)}</p>
        <div class="ch-chips">${pathChip(lc.path)}${limitedChip(lc.limited)}<span class="tag tag-soft">${lc.rarity}★ 光锥</span></div>
        <div class="lc-hero-stats">
          <div><span>生命值</span><b>${fmt.int(lc.lv80.hp)}</b><em>Lv.80</em></div>
          <div><span>攻击力</span><b>${fmt.int(lc.lv80.atk)}</b><em>Lv.80</em></div>
          <div><span>防御力</span><b>${fmt.int(lc.lv80.def)}</b><em>Lv.80</em></div>
        </div>
        <div class="effect-panel">
          <div class="ep-head"><span>叠影效果</span><b>${esc(lc.effect.name)}</b><em>影响属性 · ${esc(String(lc.effect.unit).replace(/^%/, ''))}</em></div>
          <p>${esc(lc.effect.desc)}</p>
          <div class="ep-values">${lc.effect.values.map((v, i) => `<span><em>叠影 ${['I', 'II', 'III', 'IV', 'V'][i]}</em><b>${v}</b></span>`).join('')}</div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-quiet btn-sm" type="button" data-export-lc>${icon('download', 14)}导出 JSON</button>
          <button class="btn btn-quiet btn-sm" type="button" data-action="copy-link">${icon('share', 14)}复制链接</button>
          <a class="btn btn-ghost btn-sm" href="#/lightcones">${icon('arrowLeft', 14)}返回列表</a>
        </div>
      </div>
    </section>

    <section class="section chart-section">
      ${chartCard({
        id: 'lc-effect-chart',
        title: `${lc.effect.name} · 叠影成长`,
        subtitle: `叠影 I–V · 影响属性 ${String(lc.effect.unit).replace(/^%/, '')}`,
        chart: {
          type: 'bars',
          categories: lc.effect.values.map((v, i) => ({
            label: `S${i + 1}`,
            sublabel: ['叠影 I', '叠影 II', '叠影 III', '叠影 IV', '叠影 V'][i],
            value: v,
            unit: '%',
            detail: `叠影 ${i + 1} · ${lc.effect.name}`,
          })),
          unit: '%',
          height: 300,
          color: '#f2c96b',
          ariaLabel: `${lc.name}叠影效果数值`,
        },
        table: {
          headers: ['叠影等级', '效果数值'],
          rows: lc.effect.values.map((v, i) => [['I', 'II', 'III', 'IV', 'V'][i], `${v}${lc.effect.unit.includes('%') ? '%' : ''}`]),
        },
        footnote: '叠影数值为结构示例，用于展示档案可视化；不代表正式服逐级数值。',
      })}
    </section>

    ${related.length ? `<section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">SAME PATH</p><h2>同命途光锥</h2><p>仅作档案索引，不构成推荐。</p></div></div>
      <div class="related-grid">
        ${related.map((r) => `<a class="related-card" href="#/lightcone/${r.id}">
          <img src="${lightConeSrc(r)}" alt="" width="64" height="86" loading="lazy">
          <span><b>${esc(r.name)}</b><em>${r.rarity}★ · ${PATHS[r.path]?.name}</em></span>
          ${icon('chevronRight', 14)}
        </a>`).join('')}
      </div>
    </section>` : ''}

    ${sourceBlock(lc.source)}
    ${pageFootNote('光锥档案为静态数值展示：不计算光锥与角色的最终面板，不提供抽取建议。官方美术位置使用程序生成的占位图。')}
  </div>`;

  return {
    html,
    mount(root) {
      mountChartCard({
        id: 'lc-effect-chart',
        chart: {
          type: 'bars',
          categories: lc.effect.values.map((v, i) => ({
            label: `S${i + 1}`, sublabel: ['叠影 I', '叠影 II', '叠影 III', '叠影 IV', '叠影 V'][i],
            value: v, unit: '%', detail: `叠影 ${i + 1} · ${lc.effect.name}`,
          })),
          unit: '%', height: 300, color: '#f2c96b',
        },
      });
      root.querySelector('[data-export-lc]')?.addEventListener('click', () => {
        downloadJSON(lightConeBundle(lc), `${lc.name}-光锥`);
        toast('光锥数据已导出', { tone: 'good' });
      });
    },
  };
}
