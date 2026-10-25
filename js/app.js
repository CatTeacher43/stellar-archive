import { APP, DISCLAIMER, COUNTS, CHARACTER_MAP, CHARACTERS, STAGES, versionIndex } from './data/index.js';
import {
  getSettings, saveSettings, getWatchlist, toggleWatch, getCompareTray,
  toggleCompareTray, setCompareTray, ensureBuiltinPack,
} from './store.js';
import { exportChartPNG } from './export.js';
import {
  icon, logoMark, esc, toast, debounce, openModal, statusBadge, highlight,
} from './ui.js';
import { searchAll } from './data/index.js';
import { avatarSrc } from './assets.js';

const appRoot = document.getElementById('app');
let navToken = 0;
let currentPath = '/home';
let deferredInstallPrompt = null;

const NAV_GROUPS = [
  {
    label: '档案库',
    items: [
      { key: 'home', href: '#/home', label: '概览', icon: 'home' },
      { key: 'characters', href: '#/characters', label: '角色档案', icon: 'users' },
      { key: 'stages', href: '#/stages', label: '关卡档案', icon: 'map', badge: `${STAGES.length}`, badgeTone: 'gold' },
      { key: 'lightcones', href: '#/lightcones', label: '光锥档案', icon: 'spark' },
      { key: 'relics', href: '#/relics', label: '遗器档案', icon: 'layers' },
      { key: 'enemies', href: '#/enemies', label: '敌人档案', icon: 'skull' },
    ],
  },
  {
    label: '探索',
    items: [
      { key: 'compare', href: '#/compare', label: '角色对比', icon: 'compare' },
      { key: 'unreleased', href: '#/unreleased', label: '未实机前瞻', icon: 'warning', badge: `${COUNTS.unreleased + COUNTS.scrapped}`, badgeTone: 'danger' },
      { key: 'watchlist', href: '#/watchlist', label: '关注清单', icon: 'star', watch: true },
    ],
  },
  {
    label: '系统',
    items: [
      { key: 'updates', href: '#/updates', label: '版本更新中心', icon: 'refresh' },
      { key: 'about', href: '#/about', label: '关于与免责', icon: 'info' },
    ],
  },
];

function navItemsHtml() {
  const watched = getWatchlist().length;
  return NAV_GROUPS.map((group) => `
    <div class="nav-group">
      <p class="nav-label">${group.label}</p>
      ${group.items.map((item) => `
        <a class="nav-item" href="${item.href}" data-nav-key="${item.key}">
          <span class="nav-ico">${icon(item.icon, 18)}</span>
          <span class="nav-text">${item.label}</span>
          ${item.watch && watched ? `<span class="nav-badge tone-gold" data-watch-count>${watched}</span>` : ''}
          ${item.badge ? `<span class="nav-badge tone-${item.badgeTone || 'muted'}">${item.badge}</span>` : ''}
        </a>`).join('')}
    </div>`).join('');
}

function shellHtml() {
  return `
    <div class="app-shell">
      <aside class="sidebar" id="sidebar">
        <a class="brand" href="#/home" aria-label="星轨档案库首页">
          ${logoMark(38)}
          <span class="brand-copy">
            <b>星轨档案库</b>
            <em>STELLAR ARCHIVE</em>
          </span>
        </a>
        <div class="side-status">
          <span class="dot"></span>
          <span>数据归档至</span>
          <strong>V${esc(APP.latestLive)}</strong>
        </div>
        <nav class="side-nav" aria-label="主导航">${navItemsHtml()}</nav>
        <div class="side-foot">
          <p>玩家自制 · 非官方工具</p>
          <p class="muted">与 miHoYo / HoYoverse 无关联</p>
          <a href="#/about">免责与数据来源 ${icon('chevronRight', 13)}</a>
        </div>
      </aside>

      <div class="app-main">
        <header class="topbar">
          <button class="icon-btn menu-btn" type="button" data-open-drawer aria-label="打开菜单">${icon('menu', 20)}</button>
          <button class="search-trigger" type="button" data-search-open aria-label="打开全局搜索">
            ${icon('search', 17)}
            <span class="st-placeholder">搜索角色、关卡、敌人、技能…</span>
            <kbd>/</kbd>
          </button>
          <div class="top-actions">
            <span class="net-status" id="net-status" title="离线模式状态"></span>
            <a class="icon-btn bell-btn" href="#/watchlist" aria-label="关注清单">
              ${icon('bell', 18)}
              <span class="bell-dot" data-watch-count hidden></span>
            </a>
            <span class="data-pill">V${esc(APP.dataVersion)}</span>
          </div>
        </header>

        <main id="view" class="view" tabindex="-1"></main>

        <footer class="app-footer">
          <div class="footer-mark">${logoMark(24)}<span>星轨档案库 · STELLAR ARCHIVE</span></div>
          <p>${esc(DISCLAIMER.short)}</p>
          <div class="footer-links">
            <a href="#/about">完整免责声明</a>
            <a href="#/updates">数据更新中心</a>
            <a href="#/unreleased">未实机前瞻</a>
            <span>App v${esc(APP.version)} · 数据 v${esc(APP.dataVersion)}</span>
          </div>
        </footer>
      </div>
    </div>

    <nav class="mobile-nav" aria-label="移动端导航">
      <a href="#/home" data-mobile-key="home">${icon('home', 20)}<span>概览</span></a>
      <a href="#/characters" data-mobile-key="characters">${icon('users', 20)}<span>角色</span></a>
      <a href="#/stages" data-mobile-key="stages">${icon('map', 20)}<span>关卡</span></a>
      <a href="#/updates" data-mobile-key="updates">${icon('refresh', 20)}<span>更新</span></a>
      <button type="button" data-open-drawer>${icon('menu', 20)}<span>菜单</span></button>
    </nav>

    <div class="drawer-backdrop" id="drawer" hidden>
      <div class="drawer" role="dialog" aria-modal="true" aria-label="全部导航">
        <header class="drawer-head">
          <span class="brand-copy"><b>星轨档案库</b><em>ALL SECTIONS</em></span>
          <button class="icon-btn" type="button" data-close-drawer aria-label="关闭菜单">${icon('close', 20)}</button>
        </header>
        <nav class="drawer-nav">${navItemsHtml()}</nav>
        <div class="drawer-foot">
          <span>V${esc(APP.latestLive)} · 非官方档案</span>
          <a href="#/about">免责说明</a>
        </div>
      </div>
    </div>

    <div class="search-overlay" id="search-overlay" hidden>
      <div class="search-panel" role="dialog" aria-modal="true" aria-label="全局搜索">
        <div class="search-bar">
          ${icon('search', 19)}
          <input id="global-search-input" type="search" placeholder="搜索角色、关卡、敌人、光锥、技能关键词…" autocomplete="off" spellcheck="false" aria-label="搜索关键词">
          <kbd>ESC</kbd>
          <button class="icon-btn" type="button" data-search-close aria-label="关闭搜索">${icon('close', 18)}</button>
        </div>
        <div class="search-body" id="search-body"></div>
        <footer class="search-foot">
          <label class="toggle-line">
            <input type="checkbox" id="search-unreleased">
            <span>搜索包含未实机内容</span>
          </label>
          <span class="search-foot-note">未实机数据默认隔离 · 需要手动开启</span>
        </footer>
      </div>
    </div>

    <div id="compare-tray" class="compare-tray" hidden></div>
    <div id="toast-root" class="toast-root"></div>
    <div id="live-region" class="sr-only" aria-live="polite"></div>
  `;
}

/* ---------------- navigation ---------------- */

function activeKeyFor(path) {
  if (path.startsWith('/character')) return 'characters';
  if (path.startsWith('/characters')) return 'characters';
  if (path.startsWith('/stage')) return 'stages';
  if (path.startsWith('/lightcone')) return 'lightcones';
  if (path.startsWith('/relic')) return 'relics';
  if (path.startsWith('/enemies') || path.startsWith('/enemy/')) return 'enemies';
  if (path.startsWith('/compare')) return 'compare';
  if (path.startsWith('/unreleased')) return 'unreleased';
  if (path.startsWith('/watchlist')) return 'watchlist';
  if (path.startsWith('/updates')) return 'updates';
  if (path.startsWith('/about')) return 'about';
  if (path === '/' || path.startsWith('/home')) return 'home';
  return null;
}

function updateNavActive(path) {
  const key = activeKeyFor(path);
  document.querySelectorAll('[data-nav-key]').forEach((el) => {
    const on = el.getAttribute('data-nav-key') === key;
    el.classList.toggle('is-active', on);
    if (on) el.setAttribute('aria-current', 'page');
    else el.removeAttribute('aria-current');
  });
  document.querySelectorAll('[data-mobile-key]').forEach((el) => {
    el.classList.toggle('is-active', el.getAttribute('data-mobile-key') === key);
  });
}

function updateShellBadges() {
  const watched = getWatchlist().length;
  document.querySelectorAll('[data-watch-count]').forEach((el) => {
    el.textContent = String(watched);
    el.hidden = watched === 0;
  });
  const dot = document.querySelector('.bell-dot');
  if (dot) dot.hidden = watched === 0;
}

function updateNetStatus() {
  const settings = getSettings();
  const offline = settings.offline || !navigator.onLine;
  const el = document.getElementById('net-status');
  if (!el) return;
  el.className = `net-status ${offline ? 'is-offline' : 'is-online'}`;
  el.innerHTML = `${icon(offline ? 'wifiOff' : 'wifi', 13)}<span>${offline ? '离线' : '在线'}</span>`;
  el.title = offline
    ? '离线模式：仅使用本地已缓存数据与内置资源'
    : '在线：可检查数据包更新';
}

function compareTrayHtml() {
  const ids = getCompareTray().map((id) => CHARACTER_MAP[id]).filter(Boolean);
  if (!ids.length) return '';
  return `<div class="tray-inner">
    <div class="tray-chars">
      ${ids.map((c) => `<a class="tray-char" href="#/character/${c.id}" title="${esc(c.name)}">
        <img src="${avatarSrc(c, 64)}" alt="" width="30" height="30">
        <span>${esc(c.name)}</span>
      </a>`).join('')}
      ${ids.length < 4 ? `<span class="tray-hint">最多 4 名</span>` : ''}
    </div>
    <div class="tray-actions">
      <button class="btn btn-quiet btn-sm" type="button" data-tray-clear>清空</button>
      <a class="btn btn-primary btn-sm" href="#/compare?ids=${ids.map((c) => c.id).join(',')}">${icon('compare', 15)}开始对比</a>
    </div>
  </div>`;
}

function updateCompareTray(path = currentPath) {
  const tray = document.getElementById('compare-tray');
  if (!tray) return;
  const html = compareTrayHtml();
  tray.innerHTML = html;
  tray.hidden = !html || path.startsWith('/compare');
}

/* ---------------- drawer ---------------- */

function openDrawer() {
  const drawer = document.getElementById('drawer');
  if (!drawer) return;
  drawer.hidden = false;
  requestAnimationFrame(() => drawer.classList.add('is-in'));
  document.body.classList.add('drawer-open');
  setTimeout(() => drawer.querySelector('a, button')?.focus(), 30);
}

function closeDrawer() {
  const drawer = document.getElementById('drawer');
  if (!drawer) return;
  drawer.classList.remove('is-in');
  document.body.classList.remove('drawer-open');
  setTimeout(() => { drawer.hidden = true; }, 200);
}

/* ---------------- search ---------------- */

const KIND_META = {
  character: { label: '角色', icon: 'users', href: (id) => `#/character/${id}` },
  lightcone: { label: '光锥', icon: 'spark', href: (id) => `#/lightcone/${id}` },
  relic: { label: '遗器', icon: 'layers', href: (id) => `#/relic/${id}` },
  enemy: { label: '敌人', icon: 'skull', href: (id) => `#/enemy/${id}` },
  stage: { label: '关卡', icon: 'map', href: (id) => `#/stage/${id}` },
};

function defaultSearchHtml() {
  const featured = [...CHARACTERS]
    .sort((a, b) => versionIndex(b.releaseVersion) - versionIndex(a.releaseVersion))
    .slice(0, 5);
  return `<div class="search-default">
    <p class="search-section-label">快速进入</p>
    <div class="quick-links">
      <a href="#/stages"><span>${icon('map', 18)}</span><b>历代关卡档案</b><em>${STAGES.length} 期轮换</em></a>
      <a href="#/characters"><span>${icon('users', 18)}</span><b>角色档案</b><em>${COUNTS.characters} 名已上线</em></a>
      <a href="#/unreleased"><span>${icon('warning', 18)}</span><b>未实机前瞻</b><em>强警示隔离区</em></a>
    </div>
    <p class="search-section-label">近期上线</p>
    <div class="search-hot">
      ${featured.map((c) => `<a href="#/character/${c.id}">
        <img src="${avatarSrc(c, 80)}" alt="" width="36" height="36">
        <span>${esc(c.name)}</span>
      </a>`).join('')}
    </div>
    <div class="search-tip">${icon('info', 15)}<span>未实机数据默认不参与检索；开启底部开关后才会显示，并始终带强警示标签。</span></div>
  </div>`;
}

function searchResultsHtml(q) {
  const include = getSettings().includeUnreleased;
  if (!q.trim()) return defaultSearchHtml();
  const groups = searchAll(q, { includeUnreleased: include, limitPerKind: 5 });
  if (!groups.length) {
    return `<div class="search-empty">${icon('search', 26)}<h4>没有找到「${esc(q)}」</h4><p>试试角色名、关卡主题、敌人名或技能关键词。</p>${!include ? '<button class="btn btn-ghost btn-sm" type="button" data-enable-unreleased>包含未实机内容重新搜索</button>' : ''}</div>`;
  }
  return groups.map((g) => {
    const meta = KIND_META[g.kind];
    return `<section class="search-group">
      <p class="search-section-label">${meta.label}<span>${g.total}</span></p>
      ${g.items.map((item) => `<a class="search-result" href="${item.href}">
        <span class="sr-ico">${icon(meta.icon, 17)}</span>
        <span class="sr-main"><b>${highlight(item.title, q)}</b><em>${esc(item.subtitle)}</em></span>
        ${item.status !== 'live' ? statusBadge(item.status) : ''}
        ${icon('chevronRight', 14, 'sr-chev')}
      </a>`).join('')}
    </section>`;
  }).join('') + `<a class="search-all" href="#/search?q=${encodeURIComponent(q)}">查看全部结果 ${icon('arrowRight', 14)}</a>`;
}

function updateSearchBody(q) {
  const body = document.getElementById('search-body');
  if (body) body.innerHTML = searchResultsHtml(q);
}

function openSearch(prefill = '') {
  if (currentPath.startsWith('/search')) {
    document.getElementById('global-search-input')?.focus();
    return;
  }
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('global-search-input');
  const toggle = document.getElementById('search-unreleased');
  if (!overlay || !input) return;
  overlay.hidden = false;
  overlay.classList.add('is-in');
  document.body.classList.add('search-open');
  input.value = prefill;
  input.focus();
  input.select();
  if (toggle) toggle.checked = getSettings().includeUnreleased;
  updateSearchBody(prefill);
  setTimeout(() => input.focus(), 30);
}

function closeSearch() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  overlay.classList.remove('is-in');
  document.body.classList.remove('search-open');
  setTimeout(() => { overlay.hidden = true; }, 160);
}

function bindSearch() {
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('global-search-input');
  const toggle = document.getElementById('search-unreleased');
  if (!overlay || !input) return;
  const run = debounce(() => updateSearchBody(input.value), 120);
  input.addEventListener('input', run);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      closeSearch();
      location.hash = `#/search?q=${encodeURIComponent(q)}`;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      overlay.querySelector('.search-body a, .search-body button')?.focus();
    }
  });
  toggle?.addEventListener('change', () => {
    saveSettings({ includeUnreleased: toggle.checked });
    updateSearchBody(input.value);
    document.dispatchEvent(new CustomEvent('sra:settings'));
    toast(toggle.checked ? '已临时纳入未实机内容，仍保留强警示标签' : '未实机内容已从搜索中隔离', { tone: toggle.checked ? 'warning' : 'info' });
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
    if (e.target.closest('a')) closeSearch();
    if (e.target.closest('[data-search-close]')) closeSearch();
    if (e.target.closest('[data-enable-unreleased]')) {
      saveSettings({ includeUnreleased: true });
      if (toggle) toggle.checked = true;
      updateSearchBody(input.value);
      document.dispatchEvent(new CustomEvent('sra:settings'));
    }
  });
  overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSearch();
      return;
    }
    if (e.key !== 'Tab') return;
    const focusables = [...overlay.querySelectorAll('a[href], button, input, summary')].filter((el) => !el.hidden && el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* ---------------- router ---------------- */

const ROUTES = [
  { re: /^\/home\/?$/, load: () => import('./pages/home.js'), key: 'home' },
  { re: /^\/characters\/?$/, load: () => import('./pages/characters.js'), key: 'characters' },
  { re: /^\/character\/([^/]+)\/compare\/?$/, load: () => import('./pages/character-compare.js'), key: 'character-compare' },
  { re: /^\/character\/([^/]+)\/?$/, load: () => import('./pages/character-detail.js'), key: 'character' },
  { re: /^\/lightcones\/?$/, load: () => import('./pages/lightcones.js'), key: 'lightcones' },
  { re: /^\/lightcone\/([^/]+)\/?$/, load: () => import('./pages/lightcone-detail.js'), key: 'lightcone' },
  { re: /^\/relics\/?$/, load: () => import('./pages/relics.js'), key: 'relics' },
  { re: /^\/relic\/([^/]+)\/?$/, load: () => import('./pages/relic-detail.js'), key: 'relic' },
  { re: /^\/enemies\/?$/, load: () => import('./pages/enemies.js'), key: 'enemies' },
  { re: /^\/enemy\/([^/]+)\/?$/, load: () => import('./pages/enemy-detail.js'), key: 'enemy' },
  { re: /^\/stages\/?$/, load: () => import('./pages/stages.js'), key: 'stages' },
  { re: /^\/stage\/([^/]+)\/?$/, load: () => import('./pages/stage-detail.js'), key: 'stage' },
  { re: /^\/compare\/?$/, load: () => import('./pages/compare.js'), key: 'compare' },
  { re: /^\/unreleased\/?$/, load: () => import('./pages/unreleased.js'), key: 'unreleased' },
  { re: /^\/watchlist\/?$/, load: () => import('./pages/watchlist.js'), key: 'watchlist' },
  { re: /^\/updates\/?$/, load: () => import('./pages/updates.js'), key: 'updates' },
  { re: /^\/search\/?$/, load: () => import('./pages/search.js'), key: 'search' },
  { re: /^\/about\/?$/, load: () => import('./pages/about.js'), key: 'about' },
];

function parseHash() {
  const raw = location.hash.replace(/^#/, '') || '/home';
  const qIndex = raw.indexOf('?');
  const path = (qIndex >= 0 ? raw.slice(0, qIndex) : raw) || '/home';
  const query = {};
  if (qIndex >= 0) {
    new URLSearchParams(raw.slice(qIndex + 1)).forEach((v, k) => { query[k] = v; });
  }
  return { path: path.replace(/\/+$/, '') || '/home', query, raw };
}

function setTitle(title) {
  document.title = title ? `${title} · ${APP.name}` : `${APP.name} · ${APP.tagline}`;
}

async function renderRoute() {
  const token = ++navToken;
  const { path, query } = parseHash();
  currentPath = path;
  updateNavActive(path);
  updateCompareTray(path);
  closeDrawer();
  closeSearch();
  updateNetStatus();

  let route = ROUTES.find((r) => r.re.test(path));
  if (!route && path === '/') route = ROUTES[0];
  const view = document.getElementById('view');
  if (!view) return;

  if (!route) {
    setTitle('页面不存在');
    view.innerHTML = `<div class="page narrow-page">${notFoundHtml()}</div>`;
    view.focus();
    return;
  }

  const match = path.match(route.re);
  const params = match ? match.slice(1).map((p) => decodeURIComponent(p)) : [];
  view.innerHTML = `<div class="route-loading" aria-label="正在加载"><span></span><span></span><span></span></div>`;
  view.classList.remove('is-entered');

  try {
    const mod = await route.load();
    if (token !== navToken) return;
    const ctx = { path, query, params, setTitle, route: route.key };
    const result = await mod.render(ctx);
    if (token !== navToken) return;
    if (result?.redirect) {
      location.hash = result.redirect;
      return;
    }
    view.innerHTML = result?.html || '';
    window.scrollTo({ top: 0, behavior: 'auto' });
    view.focus({ preventScroll: true });
    if (typeof result?.mount === 'function') await result.mount(view, ctx);
    if (token !== navToken) return;
    requestAnimationFrame(() => view.classList.add('is-entered'));
    updateNavActive(path);
    updateCompareTray(path);
  } catch (err) {
    console.error('[route]', err);
    if (token !== navToken) return;
    view.innerHTML = `<div class="page narrow-page">
      <div class="error-panel">
        ${icon('warning', 28)}
        <h2>页面加载失败</h2>
        <p>${esc(err?.message || '未知错误')}</p>
        <a class="btn btn-primary" href="#/home">返回概览</a>
      </div></div>`;
  }
}

function notFoundHtml() {
  return `<div class="empty-state tall">
    <div class="empty-ico">${icon('compass', 30)}</div>
    <h2>这条星轨不存在</h2>
    <p>页面可能已归档或链接有误。</p>
    <div class="empty-actions"><a class="btn btn-primary" href="#/home">返回概览</a><a class="btn btn-ghost" href="#/stages">关卡档案</a></div>
  </div>`;
}

/* ---------------- global actions ---------------- */

function bindGlobal() {
  document.addEventListener('click', async (e) => {
    const searchOpen = e.target.closest('[data-search-open]');
    if (searchOpen) { e.preventDefault(); openSearch(); return; }

    const searchClose = e.target.closest('[data-search-close]');
    if (searchClose) { closeSearch(); return; }

    if (e.target.closest('[data-open-drawer]')) { openDrawer(); return; }
    if (e.target.closest('[data-close-drawer]')) { closeDrawer(); return; }
    if (e.target.closest('#drawer a')) { closeDrawer(); return; }

    const watchBtn = e.target.closest('[data-watch]');
    if (watchBtn) {
      e.preventDefault();
      const id = watchBtn.getAttribute('data-watch');
      const list = toggleWatch(id);
      const on = list.includes(id);
      document.querySelectorAll(`[data-watch="${CSS.escape(id)}"]`).forEach((btn) => {
        btn.outerHTML = watchMarkup(id, on);
      });
      updateShellBadges();
      toast(on ? `已关注「${esc(CHARACTER_MAP[id]?.name || id)}」，变更将记录在关注清单` : '已取消关注', { tone: on ? 'good' : 'info' });
      document.dispatchEvent(new CustomEvent('sra:watchlist'));
      return;
    }

    const compBtn = e.target.closest('[data-compare-toggle]');
    if (compBtn) {
      e.preventDefault();
      const id = compBtn.getAttribute('data-compare-toggle');
      const before = getCompareTray();
      if (!before.includes(id) && before.length >= 4) {
        toast('最多同时对比 4 名角色', { tone: 'warning' });
        return;
      }
      const list = toggleCompareTray(id);
      const on = list.includes(id);
      document.querySelectorAll(`[data-compare-toggle="${CSS.escape(id)}"]`).forEach((btn) => {
        btn.outerHTML = compareMarkup(id, on);
      });
      updateCompareTray();
      if (on) toast('已加入对比栏', { tone: 'good', duration: 1600 });
      document.dispatchEvent(new CustomEvent('sra:compare'));
      return;
    }

    if (e.target.closest('[data-tray-clear]')) {
      setCompareTray([]);
      updateCompareTray();
      document.querySelectorAll('[data-compare-toggle]').forEach((btn) => {
        const id = btn.getAttribute('data-compare-toggle');
        btn.outerHTML = compareMarkup(id, false);
      });
      toast('已清空对比栏', { tone: 'info' });
      return;
    }

    if (e.target.closest('[data-tray-close]')) {
      setCompareTray([]);
      updateCompareTray();
      return;
    }

    const chartBtn = e.target.closest('[data-export-chart]');
    if (chartBtn) {
      e.preventDefault();
      await exportChartPNG(chartBtn.closest('[data-chart-card]'));
      return;
    }

    if (e.target.closest('[data-install-app]')) {
      e.preventDefault();
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const choice = await deferredInstallPrompt.userChoice;
        if (choice?.outcome === 'accepted') toast('正在安装星轨档案库', { tone: 'good' });
        deferredInstallPrompt = null;
      } else {
        toast('浏览器未提供安装入口。可在地址栏菜单选择「安装应用 / 添加到主屏幕」。', { tone: 'info', duration: 4200 });
      }
      return;
    }

    const action = e.target.closest('[data-action]');
    if (action) {
      const name = action.getAttribute('data-action');
      if (name === 'copy-link') {
        e.preventDefault();
        try {
          await navigator.clipboard.writeText(location.href);
          toast('链接已复制', { tone: 'good' });
        } catch {
          toast('复制失败，请手动复制地址栏链接', { tone: 'warning' });
        }
      }
    }
  });

  document.getElementById('search-overlay')?.addEventListener('click', (e) => {
    // handled by bindSearch
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      if (!document.getElementById('drawer')?.hidden) closeDrawer();
    }
  });

  window.addEventListener('online', () => { updateNetStatus(); toast('网络已恢复，可检查数据包更新', { tone: 'good' }); });
  window.addEventListener('offline', () => { updateNetStatus(); toast('当前处于离线状态，已缓存内容可继续浏览', { tone: 'warning' }); });

  document.addEventListener('sra:settings', () => { updateNetStatus(); });
  document.addEventListener('sra:watchlist', () => updateShellBadges());
  document.addEventListener('sra:compare', () => updateCompareTray());

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
  });

  window.addEventListener('hashchange', renderRoute);
}

function watchMarkup(id, on) {
  return `<button class="watch-btn${on ? ' is-on' : ''}" type="button" data-watch="${esc(id)}" aria-pressed="${on}" title="${on ? '取消关注' : '关注该条目'}">
    ${icon(on ? 'starFill' : 'star', 16)}<span>${on ? '已关注' : '关注'}</span>
  </button>`;
}

function compareMarkup(id, on) {
  return `<button class="compare-btn${on ? ' is-on' : ''}" type="button" data-compare-toggle="${esc(id)}" aria-pressed="${on}">
    ${icon(on ? 'check' : 'compare', 15)}<span>${on ? '已加入对比' : '加入对比'}</span>
  </button>`;
}

/* ---------------- first visit ---------------- */

function showDisclaimerIfNeeded() {
  const settings = getSettings();
  if (settings.disclaimerAck) return;
  openModal({
    title: '进入星轨档案库之前',
    dismissable: false,
    className: 'disclaimer-modal',
    content: `<div class="disclaimer-content">
      <div class="disc-emblem">${logoMark(52)}</div>
      <p class="disc-lead">这是一个<strong>玩家自制的静态数值档案库</strong>，与米哈游（miHoYo / HoYoverse）无任何关联。</p>
      <ul class="disc-list">
        <li>${icon('database', 16)}<span>数据来自社区公开整理、测试服资源与版本预下载埋包。已上线数据以正式服稳定版本为准。</span></li>
        <li>${icon('warning', 16)}<span>测试服与未实机内容<strong>存在大幅改动或直接作废的风险</strong>，不代表游戏最终效果。</span></li>
        <li>${icon('image', 16)}<span>官方素材位置当前为程序生成占位图；同人画作（演示占位）版权归原画师所有，仅作非商用氛围展示。</span></li>
        <li>${icon('shield', 16)}<span>本工具无账号系统，不读取游戏账号，不提供配队模拟、伤害计算或用户投稿。</span></li>
      </ul>
      <p class="disc-note">继续使用即表示你理解以上说明。数据与图片资源均由后台统一维护，你无需也无法录入任何数据。</p>
    </div>`,
    actions: [
      {
        label: '我已了解，进入档案库',
        variant: 'btn-primary',
        onClick: () => {
          saveSettings({ disclaimerAck: true });
          toast('欢迎来到星轨档案库', { tone: 'good' });
        },
      },
      {
        label: '先看完整说明',
        variant: 'btn-ghost',
        onClick: () => {
          saveSettings({ disclaimerAck: true });
          location.hash = '#/about';
          return true;
        },
      },
    ],
  });
}

/* ---------------- boot ---------------- */

function boot() {
  appRoot.innerHTML = shellHtml();
  bindGlobal();
  bindSearch();
  updateNetStatus();
  updateShellBadges();
  updateNavActive(parseHash().path);
  renderRoute();
  updateCompareTray(parseHash().path);
  showDisclaimerIfNeeded();

  ensureBuiltinPack().then(() => {
    document.dispatchEvent(new CustomEvent('sra:packs'));
  }).catch((err) => console.warn('builtin pack', err));

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // 首次安装时不触发自动刷新；只有「旧缓存 → 新版本」才刷新一次，避免卡在旧外壳。
      const hadController = !!navigator.serviceWorker.controller;
      let reloading = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!hadController || reloading) return;
        if (sessionStorage.getItem('sra.sw-reload') === APP.version) return;
        reloading = true;
        sessionStorage.setItem('sra.sw-reload', APP.version);
        location.reload();
      });
      navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).then((reg) => {
        reg.update().catch(() => {});
        reg.addEventListener('updatefound', () => {
          const worker = reg.installing;
          worker?.addEventListener('statechange', () => {
            if (worker.state === 'installed' && navigator.serviceWorker.controller) {
              toast('档案库有新版本，正在切换…', { tone: 'good', duration: 4000 });
            }
          });
        });
      }).catch((err) => console.warn('SW register failed', err));
    });
  }
}

boot();

export { renderRoute };
