import { LIGHT_CONES, PATHS, PATH_ORDER, APP, DISCLAIMER } from '../data/index.js';
import { esc, icon, rarityStars, pathChip, limitedChip, emptyState, toast } from '../ui.js';
import { lightConeSrc } from '../assets.js';
import { downloadJSON } from '../export.js';
import { pageHead, pageFootNote } from './shared.js';

const STATE = { q: '', path: 'all', rarity: 'all' };

export async function render() {
  const html = `<div class="page catalog-page">
    ${pageHead({
      eyebrow: 'LIGHT CONE ARCHIVE',
      title: '光锥档案',
      desc: '光锥满级基础属性与叠影效果数值。叠影数值为结构示例，用于展示归档与对比能力；不含抽取建议。',
      actions: '<button class="btn btn-quiet btn-sm" type="button" data-export-lc>导出全部 JSON</button>',
      meta: `<span class="meta-pill">${LIGHT_CONES.length} 张光锥</span><span class="meta-pill">叠影 I–V</span><span class="meta-pill">V${esc(APP.latestLive)} 归档</span>`,
    })}
    <div class="filter-panel">
      <div class="filter-row">
        <label class="search-field">${icon('search', 16)}<input type="search" id="lc-q" placeholder="搜索光锥名、效果关键词…" autocomplete="off"></label>
        <div class="filter-controls">
          <label class="select-field"><span>命途</span>
            <select id="lc-path"><option value="all">全部命途</option>${PATH_ORDER.map((p) => `<option value="${p}">${PATHS[p].name}</option>`).join('')}</select>
          </label>
          <label class="select-field"><span>星级</span>
            <select id="lc-rarity"><option value="all">全部星级</option><option value="5">五星</option><option value="4">四星</option></select>
          </label>
        </div>
      </div>
      <div class="result-bar"><span id="lc-count"></span><span class="result-hint">点击卡片查看叠影数值与满级属性</span></div>
    </div>
    <div class="lc-grid" id="lc-grid"></div>
    ${pageFootNote('光锥基础属性按社区公开资料整理；叠影效果与数值为结构示例，不代表正式服逐级数值。官方美术位置使用程序占位图。')}
  </div>`;

  return {
    html,
    mount(root) {
      const grid = root.querySelector('#lc-grid');
      const count = root.querySelector('#lc-count');
      const draw = () => {
        const q = STATE.q.trim().toLowerCase();
        let list = LIGHT_CONES.filter((lc) => {
          if (STATE.path !== 'all' && lc.path !== STATE.path) return false;
          if (STATE.rarity !== 'all' && String(lc.rarity) !== STATE.rarity) return false;
          if (q && !`${lc.name} ${lc.en} ${lc.effect.name} ${lc.effect.desc} ${lc.path}`.toLowerCase().includes(q)) return false;
          return true;
        });
        list.sort((a, b) => b.rarity - a.rarity || parseFloat(b.releaseVersion) - parseFloat(a.releaseVersion));
        count.innerHTML = `<b>${list.length}</b> 张光锥`;
        if (!list.length) {
          grid.innerHTML = emptyState('没有匹配的光锥', '尝试清空关键词或切换命途。', '', 'spark');
          return;
        }
        grid.innerHTML = list.map((lc) => `<a class="lc-card" href="#/lightcone/${esc(lc.id)}">
          <div class="lc-art"><img src="${lightConeSrc(lc)}" alt="${esc(lc.name)}光锥占位图" loading="lazy" width="520" height="700"><span class="lc-rarity">${rarityStars(lc.rarity)}</span></div>
          <div class="lc-body">
            <div class="lc-chips">${pathChip(lc.path)}${limitedChip(lc.limited)}</div>
            <h3>${esc(lc.name)}</h3><em>${esc(lc.en)}</em>
            <p class="lc-effect">${esc(lc.effect.name)} <span>${esc(lc.effect.desc.slice(0, 54))}${lc.effect.desc.length > 54 ? '…' : ''}</span></p>
            <div class="lc-stats"><span>HP <b>${lc.lv80.hp}</b></span><span>ATK <b>${lc.lv80.atk}</b></span><span>DEF <b>${lc.lv80.def}</b></span></div>
            <span class="lc-ver">V${esc(lc.releaseVersion)} ${icon('chevronRight', 13)}</span>
          </div>
        </a>`).join('');
      };
      root.querySelector('#lc-q')?.addEventListener('input', (e) => { STATE.q = e.target.value; draw(); });
      root.querySelector('#lc-path')?.addEventListener('change', (e) => { STATE.path = e.target.value; draw(); });
      root.querySelector('#lc-rarity')?.addEventListener('change', (e) => { STATE.rarity = e.target.value; draw(); });
      root.querySelector('[data-export-lc]')?.addEventListener('click', () => {
        downloadJSON({
          archive: APP.name, dataVersion: APP.dataVersion, exportedAt: new Date().toISOString(),
          disclaimer: DISCLAIMER.short, kind: 'lightcones',
          lightCones: LIGHT_CONES.map((lc) => ({
            id: lc.id, name: lc.name, en: lc.en, rarity: lc.rarity, path: lc.path,
            limited: lc.limited, releaseVersion: lc.releaseVersion, lv80: lc.lv80, effect: lc.effect,
          })),
        }, '星轨档案-光锥');
        toast('光锥数据已导出', { tone: 'good' });
      });
      draw();
    },
  };
}
