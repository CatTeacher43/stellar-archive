import {
  searchAll, SEARCH_INDEX, CHARACTER_MAP, ENEMY_MAP, APP,
} from '../data/index.js';
import { esc, icon, statusBadge, highlight, toast } from '../ui.js';
import { getSettings, saveSettings } from '../store.js';
import { avatarSrc, enemyIconSrc } from '../assets.js';
import { pageHead, pageFootNote, emptyPanel } from './shared.js';

const KIND_META = {
  character: { label: '角色', icon: 'users', color: '#f2c96b' },
  lightcone: { label: '光锥', icon: 'spark', color: '#74d8ff' },
  relic: { label: '遗器', icon: 'layers', color: '#7fe8cd' },
  enemy: { label: '敌人', icon: 'skull', color: '#ff9c8a' },
  stage: { label: '关卡', icon: 'map', color: '#c9a0ff' },
};
const KIND_ORDER = ['character', 'lightcone', 'relic', 'enemy', 'stage'];

export async function render(ctx) {
  const q = String(ctx.query.q || '').trim();
  ctx.setTitle(q ? `搜索「${q}」` : '全局搜索');
  const settings = getSettings();
  let kind = KIND_META[ctx.query.kind] ? ctx.query.kind : 'all';
  let includeUnreleased = Boolean(settings.includeUnreleased);
  let currentQ = q;

  const buildResults = () => searchAll(currentQ, { includeUnreleased, limitPerKind: 999 });

  const initial = buildResults();
  const total = initial.reduce((n, g) => n + g.items.length, 0);
  const hiddenCount = includeUnreleased ? 0 : SEARCH_INDEX.filter((i) => {
    if (!currentQ) return false;
    const t = currentQ.toLowerCase();
    return (i.status === 'unreleased' || i.status === 'scrapped')
      && (i.keywords.includes(t) || i.title.toLowerCase().includes(t));
  }).length;

  const html = `<div class="page search-page">
    ${pageHead({
      eyebrow: 'GLOBAL SEARCH',
      title: '在档案库中检索',
      desc: '跨角色、光锥、遗器、敌人与历代关卡搜索。已上线内容默认可见；测试服与未实机内容需要手动开启。',
      meta: `<span class="meta-pill">${SEARCH_INDEX.length} 条索引</span><span class="meta-pill">5 类档案</span><span class="meta-pill tone-gold">V${esc(APP.latestLive)}</span>`,
    })}

    <form class="search-page-bar" id="search-form" role="search">
      ${icon('search', 19)}
      <input type="search" id="search-page-input" name="q" value="${esc(currentQ)}" placeholder="输入角色、敌人、关卡主题或技能关键词…" autocomplete="off" autofocus aria-label="搜索关键词">
      <button class="btn btn-primary btn-sm" type="submit">搜索</button>
    </form>

    <div class="search-scope-row">
      <div class="kind-chips" id="kind-chips" role="group" aria-label="按档案类型筛选">
        <button type="button" class="kind-chip${kind === 'all' ? ' is-active' : ''}" data-kind="all">全部<em>${total}</em></button>
        ${KIND_ORDER.map((k) => {
          const g = initial.find((x) => x.kind === k);
          return `<button type="button" class="kind-chip${kind === k ? ' is-active' : ''}" data-kind="${k}" style="--kc:${KIND_META[k].color}">${icon(KIND_META[k].icon, 14)}${KIND_META[k].label}<em>${g?.total || 0}</em></button>`;
        }).join('')}
      </div>
      <label class="toggle-line search-unreleased-toggle">
        <input type="checkbox" id="page-unreleased"${includeUnreleased ? ' checked' : ''}>
        <span>包含测试服 / 未实机</span>
      </label>
    </div>

    ${hiddenCount ? `<div class="search-hidden-note">${icon('shield', 14)}<span>有 <b>${hiddenCount}</b> 条未实机或已废弃结果被隔离。开启上方开关后显示，风险自负。</span></div>` : ''}

    <div id="search-results" class="search-results"></div>

    ${!currentQ ? searchGuide() : ''}

    ${pageFootNote('搜索只读取本地静态索引，不会上传关键词，也不记录搜索历史。未实机结果默认隔离，避免把埋包内容误当作正式信息。')}
  </div>`;

  return {
    html,
    mount(root) {
      const results = root.querySelector('#search-results');
      const input = root.querySelector('#search-page-input');
      const chips = root.querySelector('#kind-chips');
      const toggle = root.querySelector('#page-unreleased');

      const draw = () => {
        const groups = buildResults();
        const count = groups.reduce((n, g) => n + g.items.length, 0);
        const visible = kind === 'all' ? groups : groups.filter((g) => g.kind === kind);
        const shown = visible.reduce((n, g) => n + g.items.length, 0);
        if (!currentQ) {
          results.innerHTML = '';
          return;
        }
        if (!shown) {
          results.innerHTML = emptyPanel(
            '没有匹配的档案',
            includeUnreleased ? '换一个关键词，或按类型筛选。' : '试试更换关键词；若在找测试服或埋包内容，请开启「包含测试服 / 未实机」。',
            '<a class="btn btn-ghost btn-sm" href="#/characters">浏览角色档案</a>'
          );
          return;
        }
        results.innerHTML = `<div class="search-summary"><b>${shown}</b> 条结果${currentQ ? ` · 关键词「${esc(currentQ)}」` : ''}${includeUnreleased ? ' · 已包含前瞻内容' : ''}</div>
          ${visible.map((g) => `<section class="search-group">
            <header class="sg-head">
              <span class="sg-icon" style="--kc:${KIND_META[g.kind].color}">${icon(KIND_META[g.kind].icon, 15)}</span>
              <h2>${KIND_META[g.kind].label}</h2>
              <em>${g.items.length} / ${g.total}</em>
            </header>
            <div class="sg-list">
              ${g.items.map((item) => resultRow(item, currentQ)).join('')}
            </div>
          </section>`).join('')}`;
      };

      const updateHash = () => {
        const params = new URLSearchParams();
        if (currentQ) params.set('q', currentQ);
        if (kind !== 'all') params.set('kind', kind);
        const next = `#/search${params.toString() ? `?${params}` : ''}`;
        if (location.hash !== next) history.replaceState(null, '', next);
      };

      root.querySelector('#search-form')?.addEventListener('submit', (ev) => {
        ev.preventDefault();
        currentQ = input.value.trim();
        updateHash();
        draw();
      });

      chips?.addEventListener('click', (ev) => {
        const btn = ev.target.closest('[data-kind]');
        if (!btn) return;
        kind = btn.getAttribute('data-kind');
        chips.querySelectorAll('.kind-chip').forEach((b) => b.classList.toggle('is-active', b === btn));
        updateHash();
        draw();
      });

      toggle?.addEventListener('change', () => {
        includeUnreleased = toggle.checked;
        saveSettings({ includeUnreleased });
        document.dispatchEvent(new CustomEvent('sra:settings'));
        toast(includeUnreleased ? '已显示测试服 / 未实机结果' : '已隐藏测试服 / 未实机结果', {
          tone: includeUnreleased ? 'warning' : 'good',
        });
        draw();
      });

      root.querySelector('[data-copy-search]')?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(location.href);
          toast('搜索链接已复制', { tone: 'good' });
        } catch {
          toast('复制失败，请手动复制地址栏', { tone: 'warning' });
        }
      });

      draw();
    },
  };
}

function resultRow(item, q) {
  let thumb = '';
  if (item.kind === 'character') {
    const c = CHARACTER_MAP[item.id];
    if (c) thumb = `<img src="${avatarSrc(c, 120)}" alt="" width="44" height="44" loading="lazy">`;
  } else if (item.kind === 'enemy') {
    const e = ENEMY_MAP[item.id];
    if (e) thumb = `<img src="${enemyIconSrc(e)}" alt="" width="44" height="44" loading="lazy">`;
  }
  const status = item.status && item.status !== 'live' ? statusBadge(item.status) : '';
  return `<a class="search-row" href="${esc(item.href)}">
    <span class="sr-thumb ${thumb ? '' : 'is-icon'}">${thumb || icon(KIND_META[item.kind].icon, 18)}</span>
    <span class="sr-main"><b>${highlight(item.title, q)}</b><em>${highlight(item.subtitle, q)}</em></span>
    ${status}
    <span class="sr-go">${icon('chevronRight', 15)}</span>
  </a>`;
}

function searchGuide() {
  const hot = ['混沌回忆', '异相仲裁', '流萤', '光锥', '王棋', '遗器', '末日幻影', '来古士'];
  return `<section class="search-guide">
    <div class="sg-panel">
      <h2>${icon('search', 17)}可以搜什么</h2>
      <div class="hot-words">
        ${hot.map((w) => `<a href="#/search?q=${encodeURIComponent(w)}">${esc(w)}</a>`).join('')}
      </div>
      <ul class="search-tips">
        <li><b>角色</b><span>名称、英文名、技能名、星魂描述、属性与命途</span></li>
        <li><b>关卡</b><span>轮换主题、期数名称、环境效果、登场敌人</span></li>
        <li><b>敌人</b><span>类别、弱点、技能描述</span></li>
        <li><b>装备</b><span>光锥名称与效果、遗器套装效果</span></li>
      </ul>
    </div>
    <div class="sg-panel tone-warn">
      <h2>${icon('shield', 17)}可信边界</h2>
      <p>已上线内容以正式服稳定快照为准；测试服与埋包内容默认隔离，开启后仍可能随时作废。搜索不会返回任何用户投稿或社区评论，因为档案库不提供这些功能。</p>
      <p class="sg-meta">索引版本 V${esc(APP.dataVersion)} · 数据更新 ${esc(APP.lastUpdated.replace(/-/g, '.'))}</p>
    </div>
  </section>`;
}

export { KIND_META };
