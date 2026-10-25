import { ENEMIES, ELEMENTS, ELEMENT_ORDER, APP, DISCLAIMER } from '../data/index.js';
import { esc, icon, emptyState, fmt, toast } from '../ui.js';
import { enemyIconSrc } from '../assets.js';
import { downloadJSON } from '../export.js';
import { pageHead, pageFootNote } from './shared.js';

const STATE = { q: '', category: 'all', element: 'all' };

export async function render() {
  const categories = [...new Set(ENEMIES.map((e) => e.category))];
  const html = `<div class="page catalog-page">
    ${pageHead({
      eyebrow: 'ENEMY ARCHIVE',
      title: '敌人档案',
      desc: '敌人弱点、抗性、等级成长与技能机制。生命与防御为演示拟合值；抗性按公开资料整理，用于理解关卡环境而非伤害计算。',
      actions: '<button class="btn btn-quiet btn-sm" type="button" data-export-enemy>导出全部 JSON</button>',
      meta: `<span class="meta-pill">${ENEMIES.length} 名敌人</span><span class="meta-pill">7 属性抗性</span><span class="meta-pill">Lv.1–80</span>`,
    })}
    <div class="filter-panel">
      <div class="filter-row">
        <label class="search-field">${icon('search', 16)}<input type="search" id="enemy-q" placeholder="搜索敌人名、技能、类别…" autocomplete="off"></label>
        <div class="filter-controls">
          <label class="select-field"><span>类别</span>
            <select id="enemy-category"><option value="all">全部类别</option>${categories.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select>
          </label>
        </div>
      </div>
      <div class="element-row" id="enemy-elements" role="group" aria-label="按弱点属性筛选">
        <button class="el-filter is-active" type="button" data-el="all">全部弱点</button>
        ${ELEMENT_ORDER.map((k) => `<button class="el-filter" type="button" data-el="${k}" style="--ec:${ELEMENTS[k].color};--ecs:${ELEMENTS[k].soft}"><i>${ELEMENTS[k].short}</i>${ELEMENTS[k].name}</button>`).join('')}
      </div>
      <div class="result-bar"><span id="enemy-count"></span><span class="result-hint">点击卡片查看抗性、成长与历代出场</span></div>
    </div>
    <div class="enemy-grid" id="enemy-grid"></div>
    ${pageFootNote('敌人生命 / 防御为演示拟合值，不代表正式服数值；抗性按公开资料整理。关卡出场索引为结构演示归档。')}
  </div>`;

  return {
    html,
    mount(root) {
      const grid = root.querySelector('#enemy-grid');
      const count = root.querySelector('#enemy-count');
      const draw = () => {
        const q = STATE.q.trim().toLowerCase();
        let list = ENEMIES.filter((e) => {
          if (STATE.category !== 'all' && e.category !== STATE.category) return false;
          if (STATE.element !== 'all' && !e.weaknesses.includes(STATE.element)) return false;
          if (q && !`${e.name} ${e.en} ${e.category} ${e.skills.map((s) => `${s.name} ${s.desc}`).join(' ')}`.toLowerCase().includes(q)) return false;
          return true;
        });
        count.innerHTML = `<b>${list.length}</b> 名敌人`;
        if (!list.length) {
          grid.innerHTML = emptyState('没有匹配的敌人', '尝试清空关键词或切换弱点属性。', '', 'skull');
          return;
        }
        grid.innerHTML = list.map((e) => `<a class="enemy-card" href="#/enemy/${esc(e.id)}">
          <div class="enemy-art"><img src="${enemyIconSrc(e)}" alt="${esc(e.name)}敌人图标" width="160" height="160" loading="lazy"><span>${esc(e.category)}</span></div>
          <div class="enemy-main">
            <div class="enemy-head"><h3>${esc(e.name)}</h3><em>${esc(e.en)}</em></div>
            <div class="weak-row"><span>弱点</span>${e.weaknesses.map((w) => `<i class="weak-el" style="--wc:${ELEMENTS[w].color};--ws:${ELEMENTS[w].soft}">${ELEMENTS[w].short}</i>`).join('')}</div>
            <div class="enemy-stats"><span>HP <b>${fmt.compact(e.lv80.hp)}</b></span><span>DEF <b>${fmt.int(e.lv80.def)}</b></span><span>SPD <b>${e.lv80.spd}</b></span></div>
            <div class="enemy-foot"><span>V${esc(e.releaseVersion)} · ${e.skills.length} 个技能</span><span>${icon('chevronRight', 13)}</span></div>
          </div>
        </a>`).join('');
      };
      root.querySelector('#enemy-q')?.addEventListener('input', (e) => { STATE.q = e.target.value; draw(); });
      root.querySelector('#enemy-category')?.addEventListener('change', (e) => { STATE.category = e.target.value; draw(); });
      root.querySelector('#enemy-elements')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-el]');
        if (!btn) return;
        STATE.element = btn.getAttribute('data-el');
        root.querySelectorAll('#enemy-elements .el-filter').forEach((b) => b.classList.toggle('is-active', b === btn));
        draw();
      });
      root.querySelector('[data-export-enemy]')?.addEventListener('click', () => {
        downloadJSON({
          archive: APP.name, dataVersion: APP.dataVersion, exportedAt: new Date().toISOString(),
          disclaimer: DISCLAIMER.short, kind: 'enemies',
          enemies: ENEMIES.map((e) => ({
            id: e.id, name: e.name, en: e.en, category: e.category, releaseVersion: e.releaseVersion,
            weaknesses: e.weaknesses, resists: e.resists, lv80: e.lv80, skills: e.skills,
          })),
        }, '星轨档案-敌人');
        toast('敌人数据已导出', { tone: 'good' });
      });
      draw();
    },
  };
}
