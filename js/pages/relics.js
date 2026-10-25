import { RELICS, APP, DISCLAIMER } from '../data/index.js';
import { esc, icon, emptyState, toast } from '../ui.js';
import { relicIconSrc } from '../assets.js';
import { downloadJSON } from '../export.js';
import { pageHead, pageFootNote } from './shared.js';

const STATE = { q: '', type: 'all' };

export async function render() {
  const html = `<div class="page catalog-page">
    ${pageHead({
      eyebrow: 'RELIC ARCHIVE',
      title: '遗器档案',
      desc: '隧洞遗器与位面饰品的套装效果、主词条上限与副词条单次强化值。只展示静态数值，不提供词条评分或配装推荐。',
      actions: '<button class="btn btn-quiet btn-sm" type="button" data-export-relic>导出全部 JSON</button>',
      meta: `<span class="meta-pill">${RELICS.length} 套遗器</span><span class="meta-pill">隧洞 + 位面</span><span class="meta-pill">五星 15 级口径</span>`,
    })}
    <div class="filter-panel">
      <div class="filter-row">
        <label class="search-field">${icon('search', 16)}<input type="search" id="relic-q" placeholder="搜索遗器名、套装效果…" autocomplete="off"></label>
        <div class="type-tabs" id="relic-types">
          <button class="is-active" type="button" data-type="all">全部</button>
          <button type="button" data-type="cavern">隧洞遗器</button>
          <button type="button" data-type="planar">位面饰品</button>
        </div>
      </div>
      <div class="result-bar"><span id="relic-count"></span><span class="result-hint">进入详情查看主词条上限与副词条档位</span></div>
    </div>
    <div class="relic-grid" id="relic-grid"></div>
    <section class="section mini-guide">
      <div class="mini-guide-card"><span>${icon('layers', 18)}</span><div><h3>主词条</h3><p>五星遗器 15 级上限，分为百分比与固定值两组，不可直接跨组比较。</p></div></div>
      <div class="mini-guide-card"><span>${icon('chart', 18)}</span><div><h3>副词条</h3><p>展示单次强化上限；实际词条会随强化次数与初始档位变化。</p></div></div>
      <div class="mini-guide-card"><span>${icon('shield', 18)}</span><div><h3>不做评分</h3><p>不计算有效词条、不评价套装强度、不提供配装建议。</p></div></div>
    </section>
    ${pageFootNote('遗器套装效果按公开资料整理；数值为静态档案，不含角色面板计算。')}
  </div>`;

  return {
    html,
    mount(root) {
      const grid = root.querySelector('#relic-grid');
      const count = root.querySelector('#relic-count');
      const draw = () => {
        const q = STATE.q.trim().toLowerCase();
        let list = RELICS.filter((r) => {
          if (STATE.type !== 'all' && r.type !== STATE.type) return false;
          if (q && !`${r.name} ${r.en} ${r.twoPiece} ${r.fourPiece}`.toLowerCase().includes(q)) return false;
          return true;
        });
        list = [...list].sort((a, b) => parseFloat(b.releaseVersion) - parseFloat(a.releaseVersion));
        count.innerHTML = `<b>${list.length}</b> 套遗器`;
        if (!list.length) {
          grid.innerHTML = emptyState('没有匹配的遗器', '尝试清空关键词或切换类型。', '', 'layers');
          return;
        }
        grid.innerHTML = list.map((r) => `<a class="relic-card" href="#/relic/${esc(r.id)}">
          <div class="relic-ico"><img src="${relicIconSrc(r)}" alt="" width="64" height="64" loading="lazy"></div>
          <div class="relic-main">
            <div class="relic-head"><h3>${esc(r.name)}</h3><span class="relic-type">${r.type === 'cavern' ? '隧洞遗器' : '位面饰品'}</span></div>
            <em>${esc(r.en)}</em>
            <p><b>2 件套</b>${esc(r.twoPiece)}</p>
            <p><b>4 件套</b>${esc(r.fourPiece)}</p>
            <div class="relic-foot"><span>V${esc(r.releaseVersion)}</span><span>查看词条 ${icon('chevronRight', 13)}</span></div>
          </div>
        </a>`).join('');
      };
      root.querySelector('#relic-q')?.addEventListener('input', (e) => { STATE.q = e.target.value; draw(); });
      root.querySelector('#relic-types')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-type]');
        if (!btn) return;
        STATE.type = btn.getAttribute('data-type');
        root.querySelectorAll('#relic-types button').forEach((b) => b.classList.toggle('is-active', b === btn));
        draw();
      });
      root.querySelector('[data-export-relic]')?.addEventListener('click', () => {
        downloadJSON({
          archive: APP.name, dataVersion: APP.dataVersion, exportedAt: new Date().toISOString(),
          disclaimer: DISCLAIMER.short, kind: 'relics',
          relics: RELICS.map((r) => ({
            id: r.id, name: r.name, en: r.en, type: r.type, releaseVersion: r.releaseVersion,
            twoPiece: r.twoPiece, fourPiece: r.fourPiece,
          })),
        }, '星轨档案-遗器');
        toast('遗器数据已导出', { tone: 'good' });
      });
      draw();
    },
  };
}
