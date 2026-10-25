import {
  CHARACTERS, BETA_CHARACTERS, ELEMENTS, ELEMENT_ORDER, PATHS, PATH_ORDER,
  VERSION_BY_ID, APP, DISCLAIMER,
} from '../data/index.js';
import { esc, icon, emptyState, toast } from '../ui.js';
import { characterCard, pageHead, pageFootNote } from './shared.js';
import { downloadJSON } from '../export.js';

const STATE = {
  q: '',
  element: 'all',
  path: 'all',
  rarity: 'all',
  limited: 'all',
  status: 'live',
  version: 'all',
  sort: 'version-desc',
};

export async function render(ctx) {
  ctx.setTitle('角色档案');
  STATE.q = ctx.query.q || '';
  STATE.element = ctx.query.element || 'all';
  STATE.path = ctx.query.path || 'all';
  STATE.rarity = ctx.query.rarity || 'all';
  STATE.limited = ctx.query.limited || 'all';
  STATE.status = ctx.query.status === 'beta' || ctx.query.status === 'all' ? ctx.query.status : 'live';
  STATE.version = ctx.query.version || 'all';
  STATE.sort = ctx.query.sort || 'version-desc';

  const versionChoices = versionOptionsFor(STATE.status);
  if (STATE.version !== 'all' && !versionChoices.includes(STATE.version)) STATE.version = 'all';

  const html = `<div class="page characters-page">
    ${pageHead({
      eyebrow: 'CHARACTER ARCHIVE',
      title: '角色档案',
      desc: '按米游社《崩坏：星穹铁道》WIKI 整理的已上线角色档案。满级面板、成长曲线、技能数值、星魂与行迹均可查阅；测试服条目单独隔离，不与正式数据混读。',
      actions: `<a class="btn btn-ghost" href="#/compare">${icon('compare', 16)}多角色对比</a>
        <button class="btn btn-quiet" type="button" data-export-filtered>${icon('download', 15)}导出当前筛选</button>`,
      meta: `<span class="meta-pill">${CHARACTERS.length} 名已上线</span><span class="meta-pill">${BETA_CHARACTERS.length} 条测试服</span><span class="meta-pill">快照至 V${esc(APP.latestLive)}</span>`,
    })}

    <div class="filter-panel" id="char-filters">
      <div class="filter-row">
        <label class="search-field">
          ${icon('search', 16)}
          <input type="search" id="char-q" placeholder="搜索角色名、关键词、技能…" value="${esc(STATE.q)}" autocomplete="off">
        </label>
        <div class="filter-controls">
          <label class="select-field"><span>命途</span>
            <select id="char-path">
              <option value="all">全部命途</option>
              ${PATH_ORDER.map((p) => `<option value="${p}"${STATE.path === p ? ' selected' : ''}>${PATHS[p].name}</option>`).join('')}
            </select>
          </label>
          <label class="select-field"><span>星级</span>
            <select id="char-rarity">
              <option value="all">全部星级</option>
              <option value="5"${STATE.rarity === '5' ? ' selected' : ''}>五星</option>
              <option value="4"${STATE.rarity === '4' ? ' selected' : ''}>四星</option>
            </select>
          </label>
          <label class="select-field"><span>获取</span>
            <select id="char-limited">
              <option value="all">全部</option>
              <option value="limited"${STATE.limited === 'limited' ? ' selected' : ''}>限定</option>
              <option value="standard"${STATE.limited === 'standard' ? ' selected' : ''}>常驻</option>
            </select>
          </label>
          <label class="select-field"><span>数据</span>
            <select id="char-status">
              <option value="live"${STATE.status === 'live' ? ' selected' : ''}>已上线</option>
              <option value="beta"${STATE.status === 'beta' ? ' selected' : ''}>测试服</option>
              <option value="all"${STATE.status === 'all' ? ' selected' : ''}>正式 + 测试</option>
            </select>
          </label>
          <label class="select-field"><span>版本</span>
            <select id="char-version">
              <option value="all">全部版本</option>
              ${versionChoices.map((v) => `<option value="${v}"${STATE.version === v ? ' selected' : ''}>V${v}${VERSION_BY_ID[v] ? ` · ${VERSION_BY_ID[v].title}` : ' · 测试'}</option>`).join('')}
            </select>
          </label>
          <label class="select-field"><span>排序</span>
            <select id="char-sort">
              <option value="version-desc"${STATE.sort === 'version-desc' ? ' selected' : ''}>版本从新到旧</option>
              <option value="version-asc"${STATE.sort === 'version-asc' ? ' selected' : ''}>版本从旧到新</option>
              <option value="atk-desc"${STATE.sort === 'atk-desc' ? ' selected' : ''}>攻击力降序</option>
              <option value="hp-desc"${STATE.sort === 'hp-desc' ? ' selected' : ''}>生命值降序</option>
              <option value="spd-desc"${STATE.sort === 'spd-desc' ? ' selected' : ''}>速度降序</option>
              <option value="rarity-desc"${STATE.sort === 'rarity-desc' ? ' selected' : ''}>星级优先</option>
              <option value="name"${STATE.sort === 'name' ? ' selected' : ''}>名称</option>
            </select>
          </label>
        </div>
      </div>
      <div class="element-row" id="char-elements" role="group" aria-label="按属性筛选">
        <button class="el-filter${STATE.element === 'all' ? ' is-active' : ''}" type="button" data-el="all">全部属性</button>
        ${ELEMENT_ORDER.map((key) => {
          const el = ELEMENTS[key];
          return `<button class="el-filter${STATE.element === key ? ' is-active' : ''}" type="button" data-el="${key}" style="--ec:${el.color};--ecs:${el.soft}">
            <i>${el.short}</i>${el.name}
          </button>`;
        }).join('')}
        <button class="btn btn-quiet btn-sm reset-btn" type="button" id="char-reset">${icon('refresh', 14)}重置</button>
      </div>
    </div>

    <div class="result-bar">
      <span id="char-count"></span>
      <span class="result-hint" id="filter-summary"></span>
    </div>
    <div id="char-grid" class="char-grid"></div>

    ${pageFootNote('角色名称、命途、属性、上线版本、Lv.80 基础数值、技能、星魂与行迹整理自米游社《崩坏：星穹铁道》WIKI；成长曲线为按 Lv.80 数值拟合的展示曲线，非官方公式。测试服数据随时可能改动，不构成抽取或配队建议。非官方工具，与 miHoYo / HoYoverse 无关联。')}
  </div>`;

  return {
    html,
    mount(root) {
      const grid = root.querySelector('#char-grid');
      const count = root.querySelector('#char-count');
      const summary = root.querySelector('#filter-summary');

      const visible = () => {
        let list = STATE.status === 'beta' ? BETA_CHARACTERS
          : STATE.status === 'all' ? [...CHARACTERS, ...BETA_CHARACTERS]
            : CHARACTERS;
        const q = STATE.q.trim().toLowerCase();
        if (q) {
          const tokens = q.split(/\s+/).filter(Boolean);
          list = list.filter((c) => {
            const hay = [
              c.name, c.en, c.intro, c.element, c.path, ...(c.keywords || []),
              ...(c.skills || []).map((s) => `${s.name} ${s.desc} ${s.tag}`),
              ...(c.eidolons || []).map((e) => e.desc),
            ].join(' ').toLowerCase();
            return tokens.every((t) => hay.includes(t));
          });
        }
        if (STATE.element !== 'all') list = list.filter((c) => c.element === STATE.element);
        if (STATE.path !== 'all') list = list.filter((c) => c.path === STATE.path);
        if (STATE.rarity !== 'all') list = list.filter((c) => String(c.rarity) === STATE.rarity);
        if (STATE.limited === 'limited') list = list.filter((c) => c.limited);
        if (STATE.limited === 'standard') list = list.filter((c) => !c.limited);
        if (STATE.version !== 'all') list = list.filter((c) => (c.releaseVersion || c.betaVersion) === STATE.version);
        return sortList(list, STATE.sort);
      };

      const draw = () => {
        const list = visible();
        count.innerHTML = `<b>${list.length}</b> 名角色${STATE.status === 'all' ? '（含测试服）' : ''}`;
        summary.textContent = buildSummary(STATE);
        if (!list.length) {
          grid.innerHTML = emptyState('没有符合条件的角色', '尝试清空关键词或减少筛选条件。', '<button class="btn btn-ghost btn-sm" type="button" id="char-empty-reset">清空筛选</button>', 'users');
          grid.querySelector('#char-empty-reset')?.addEventListener('click', reset);
          return;
        }
        grid.innerHTML = list.map((c) => characterCard(c)).join('');
      };

      const bind = (id, key, parse) => {
        const el = root.querySelector(id);
        el?.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', (e) => {
          STATE[key] = parse ? parse(e.target.value) : e.target.value;
          if (key === 'status') {
            STATE.version = 'all';
            rebuildVersionSelect(root, STATE.status);
          }
          draw();
        });
      };

      bind('#char-q', 'q');
      bind('#char-path', 'path');
      bind('#char-rarity', 'rarity');
      bind('#char-limited', 'limited');
      bind('#char-status', 'status');
      bind('#char-version', 'version');
      bind('#char-sort', 'sort');

      root.querySelector('#char-elements')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-el]');
        if (!btn) return;
        STATE.element = btn.getAttribute('data-el');
        root.querySelectorAll('.el-filter').forEach((el) => el.classList.toggle('is-active', el === btn));
        draw();
      });

      const reset = () => {
        Object.assign(STATE, { q: '', element: 'all', path: 'all', rarity: 'all', limited: 'all', status: 'live', version: 'all', sort: 'version-desc' });
        root.querySelector('#char-q').value = '';
        root.querySelector('#char-path').value = 'all';
        root.querySelector('#char-rarity').value = 'all';
        root.querySelector('#char-limited').value = 'all';
        root.querySelector('#char-status').value = 'live';
        root.querySelector('#char-sort').value = 'version-desc';
        rebuildVersionSelect(root, 'live');
        root.querySelectorAll('.el-filter').forEach((el) => el.classList.toggle('is-active', el.getAttribute('data-el') === 'all'));
        draw();
      };
      root.querySelector('#char-reset')?.addEventListener('click', reset);

      root.querySelector('[data-export-filtered]')?.addEventListener('click', () => {
        const list = visible();
        if (!list.length) { toast('当前筛选下没有可导出的角色', { tone: 'warning' }); return; }
        downloadJSON({
          archive: APP.name, dataVersion: APP.dataVersion, exportedAt: new Date().toISOString(),
          disclaimer: DISCLAIMER.short,
          filters: { ...STATE },
          characters: list.map((c) => ({
            id: c.id, name: c.name, en: c.en, rarity: c.rarity, element: c.element, path: c.path,
            limited: c.limited, status: c.status, releaseVersion: c.releaseVersion || c.betaVersion,
            lv80: c.lv80, keywords: c.keywords, intro: c.intro,
          })),
        }, '星轨档案-角色筛选');
        toast(`已导出 ${list.length} 名角色`, { tone: 'good' });
      });

      draw();
    },
  };
}

function versionOptionsFor(status) {
  const list = status === 'beta' ? BETA_CHARACTERS : status === 'all' ? [...CHARACTERS, ...BETA_CHARACTERS] : CHARACTERS;
  const set = [...new Set(list.map((c) => c.releaseVersion || c.betaVersion).filter(Boolean))];
  return set.sort((a, b) => parseFloat(b) - parseFloat(a));
}

function rebuildVersionSelect(root, status) {
  const sel = root.querySelector('#char-version');
  if (!sel) return;
  const versions = versionOptionsFor(status);
  sel.innerHTML = `<option value="all">全部版本</option>${versions.map((v) => `<option value="${v}">V${v}${VERSION_BY_ID[v] ? ` · ${VERSION_BY_ID[v].title}` : ' · 测试'}</option>`).join('')}`;
  sel.value = 'all';
}

function sortList(list, sort) {
  const out = [...list];
  const ver = (c) => parseFloat(c.releaseVersion || c.betaVersion || '0');
  switch (sort) {
    case 'version-asc': return out.sort((a, b) => ver(a) - ver(b));
    case 'atk-desc': return out.sort((a, b) => b.lv80.atk - a.lv80.atk);
    case 'hp-desc': return out.sort((a, b) => b.lv80.hp - a.lv80.hp);
    case 'spd-desc': return out.sort((a, b) => b.lv80.spd - a.lv80.spd);
    case 'rarity-desc': return out.sort((a, b) => b.rarity - a.rarity || ver(b) - ver(a));
    case 'name': return out.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
    default: return out.sort((a, b) => ver(b) - ver(a));
  }
}

function buildSummary(state) {
  const bits = [];
  if (state.element !== 'all') bits.push(ELEMENTS[state.element]?.name || state.element);
  if (state.path !== 'all') bits.push(PATHS[state.path]?.name || state.path);
  if (state.rarity !== 'all') bits.push(`${state.rarity} 星`);
  if (state.limited === 'limited') bits.push('限定');
  if (state.limited === 'standard') bits.push('常驻');
  if (state.version !== 'all') bits.push(`V${state.version}`);
  return bits.length ? `筛选中 · ${bits.join(' / ')}` : '按上线版本归档';
}
