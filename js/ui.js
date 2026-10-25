import { ELEMENTS, PATHS, STATUS, RARITY, STAGE_TYPES } from './data/index.js';

export function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const ICONS = {
  home: '<path d="M4 11.5 12 4l8 7.5M6 10.5V20h12v-9.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m15.5 15.5 4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  archive: '<path d="M4 7.5h16v4H4zM5.5 11.5V20h13v-8.5M9 15h6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  book: '<path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5zM5 5.5v16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  grid: '<rect x="4" y="4" width="6.5" height="6.5" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  compare: '<path d="M4 7h11m0 0-3-3m3 3-3 3M20 17H9m0 0 3-3m-3 3 3 3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  warning: '<path d="M12 3.5 21 19.5H3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 9v4.5M12 16.8v.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  upload: '<path d="M12 16V4m0 0 4 4m-4-4-4 4M5 20h14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  bell: '<path d="M6.5 16V10a5.5 5.5 0 0 1 11 0v6l1.5 2h-14zM10 20h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  info: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 11v5M12 8v.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  chevronRight: '<path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  chevronDown: '<path d="m5 9 7 7 7-7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  arrowLeft: '<path d="M19 12H5m0 0 6-6m-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  arrowRight: '<path d="M5 12h14m0 0-6-6m6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  close: '<path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M21 20H3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  table: '<rect x="3.5" y="5" width="17" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 10h17M9 10v9M15 10v9" stroke="currentColor" stroke-width="1.3" opacity=".7"/>',
  star: '<path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  starFill: '<path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" fill="currentColor"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 6.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 6.2M20 5v6h-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  database: '<ellipse cx="12" cy="6" rx="7.5" ry="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  wifi: '<path d="M3.5 9a13 13 0 0 1 17 0M6.5 12.5a8.5 8.5 0 0 1 11 0M9.5 16a4.2 4.2 0 0 1 5 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="19" r="1.2" fill="currentColor"/>',
  wifiOff: '<path d="M4 4l16 16M3.5 9a13 13 0 0 1 4.3-2.5M8.5 13a8 8 0 0 1 3-1.5M3 3l18 18M16.5 12.5a8.5 8.5 0 0 0-2-1M14.5 16a4.2 4.2 0 0 0-5-.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="19" r="1.2" fill="currentColor"/>',
  trash: '<path d="M4.5 7h15M9 7V4.5h6V7M6.5 7l1 13h9l1-13M10 10.5v6M14 10.5v6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  plus: '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  minus: '<path d="M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  filter: '<path d="M4 6h16l-6.2 7v5l-3.6 2v-7z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  clock: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5.3l3.5 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  users: '<circle cx="9" cy="8" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 20c.4-4.2 2.5-6 5.5-6s5.1 1.8 5.5 6M16 5.2a3 3 0 0 1 0 5.6M17 14c2.2.4 3.4 2.3 3.6 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  map: '<path d="m3.5 6 5-2 7 2 5-2v14l-5 2-7-2-5 2zM8.5 4v14M15.5 6v14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  sword: '<path d="m4 20 3.5-3.5M6 14 3 17l4 4 3-3M14 4l6-1-1 6-9.5 9.5-4-4zM13 5l6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  skull: '<path d="M12 3.5c-4.4 0-7.5 3-7.5 7.2 0 2.8 1.3 4.5 3 5.5V20h9v-3.8c1.7-1 3-2.7 3-5.5 0-4.2-3.1-7.2-7.5-7.2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="9.3" cy="11" r="1.3" fill="currentColor"/><circle cx="14.7" cy="11" r="1.3" fill="currentColor"/><path d="M12 13v2.5M10 20v-2M14 20v-2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  compass: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m15.5 8.5-2 5-5 2 2-5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  external: '<path d="M14 4h6v6M20 4l-8 8M18 14v5.5H4.5V5.5H10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  spark: '<path d="m12 3 2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="9" cy="10" r="1.8" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="m5 17 5-4.5 4 3.5 2.5-2 3.5 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  cloud: '<path d="M7 18.5a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17.2 9a4.8 4.8 0 0 1 .3 9.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  target: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4.8" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
  shield: '<path d="M12 3 20 6v6c0 4.6-3.3 7.7-8 9-4.7-1.3-8-4.4-8-9V6z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  pin: '<path d="M12 21s7-6.4 7-12A7 7 0 0 0 5 9c0 5.6 7 12 7 12Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/>',
  list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.2M4 12h.2M4 18h.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  share: '<circle cx="6" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="18" cy="6" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="18" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="m8.3 10.8 7.4-3.6M8.3 13.2l7.4 3.6" stroke="currentColor" stroke-width="1.5"/>',
  settings: '<circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M19 13.5v-3l-2-.5a6 6 0 0 0-.8-1.9l1-1.8-2.1-2.1-1.8 1a6 6 0 0 0-1.9-.8L11 2.5H8l-.5 2a6 6 0 0 0-1.9.8l-1.8-1-2.1 2.1 1 1.8a6 6 0 0 0-.8 1.9l-2 .5v3l2 .5a6 6 0 0 0 .8 1.9l-1 1.8 2.1 2.1 1.8-1a6 6 0 0 0 1.9.8l.5 2h3l.5-2a6 6 0 0 0 1.9-.8l1.8 1 2.1-2.1-1-1.8a6 6 0 0 0 .8-1.9z" fill="none" stroke="currentColor" stroke-width="1.1" transform="translate(2 0)"/>',
};

export function icon(name, size = 18, cls = '') {
  const body = ICONS[name] || ICONS.info;
  return `<svg class="ico ${cls}" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" focusable="false">${body}</svg>`;
}

export function logoMark(size = 40) {
  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true" class="logo-mark">
    <circle cx="32" cy="32" r="27" fill="none" stroke="#f2c96b" stroke-opacity=".4"/>
    <ellipse cx="32" cy="32" rx="28" ry="11" fill="none" stroke="#f2c96b" stroke-opacity=".35" transform="rotate(-24 32 32)"/>
    <path d="M32 9 36.5 27.5 55 32 36.5 36.5 32 55 27.5 36.5 9 32 27.5 27.5Z" fill="#f2c96b" opacity=".85"/>
    <circle cx="32" cy="32" r="4" fill="#0a1020"/>
    <circle cx="53" cy="19" r="1.7" fill="#e8ecf7"/>
  </svg>`;
}

export const fmt = {
  int(n) {
    return Number(n || 0).toLocaleString('zh-CN');
  },
  compact(n) {
    const abs = Math.abs(n || 0);
    if (abs >= 10000) {
      const v = n / 10000;
      return `${Number.isInteger(v) ? v : v.toFixed(1)}万`;
    }
    return Number(n || 0).toLocaleString('zh-CN');
  },
  date(iso) {
    if (!iso) return '—';
    return String(iso).replace(/-/g, '.');
  },
  delta(n, suffix = '') {
    if (!n) return '0';
    return `${n > 0 ? '+' : ''}${Number.isInteger(n) ? n : n.toFixed(1)}${suffix}`;
  },
};

export function rarityStars(rarity, { label = false } = {}) {
  const meta = RARITY[rarity] || RARITY[5];
  return `<span class="rarity rarity-${rarity}" aria-label="${meta.label}">${meta.stars}${label ? `<em>${meta.label}</em>` : ''}</span>`;
}

export function elementChip(key, { compact = false } = {}) {
  const el = ELEMENTS[key] || ELEMENTS.physical;
  const full = compact || el.name === el.short ? '' : `<b>${el.name}</b>`;
  return `<span class="elem-chip${compact ? ' is-compact' : ''}" style="--ec:${el.color};--ecs:${el.soft}" title="${el.name}属性">
    <i>${el.short}</i>${full}</span>`;
}

export function pathChip(key) {
  const p = PATHS[key];
  if (!p) return '';
  return `<span class="path-chip" style="--pc:${p.color}">${p.name}</span>`;
}

export function statusBadge(key, { long = false } = {}) {
  const s = STATUS[key] || STATUS.live;
  return `<span class="status-badge tone-${s.tone}" title="${esc(s.label)}"><span class="st-dot">${s.icon}</span>${long ? s.label : s.short}</span>`;
}

export function limitedChip(limited) {
  return limited
    ? '<span class="tag tag-limited">限定</span>'
    : '<span class="tag tag-standard">常驻</span>';
}

export function modeBadge(modeKey, { long = false } = {}) {
  const m = STAGE_TYPES[modeKey];
  if (!m) return '';
  return `<span class="mode-badge" style="--mc:${m.color}"><span>${m.icon}</span>${long ? m.name : m.name}</span>`;
}

export function changeBadge(type, map) {
  const t = map[type] || { label: type, icon: '·', tone: 'info' };
  return `<span class="change-badge tone-${t.tone}"><i>${t.icon}</i>${t.label}</span>`;
}

export function watchButton(id, watched) {
  return `<button class="watch-btn${watched ? ' is-on' : ''}" type="button" data-watch="${esc(id)}" aria-pressed="${watched}" title="${watched ? '取消关注' : '关注该条目'}">
    ${icon(watched ? 'starFill' : 'star', 16)}<span>${watched ? '已关注' : '关注'}</span>
  </button>`;
}

export function compareToggle(id, active, { small = false } = {}) {
  return `<button class="compare-btn${active ? ' is-on' : ''}${small ? ' btn-sm' : ''}" type="button" data-compare-toggle="${esc(id)}" aria-pressed="${active}">
    ${icon(active ? 'check' : 'compare', 15)}<span>${active ? '已加入对比' : '加入对比'}</span>
  </button>`;
}

export function sourceBlock(source) {
  if (!source) return '';
  return `<div class="source-block">
    <div class="src-head">${icon('database', 15)}<span>数据来源</span><em>${esc(source.label || '社区公开整理')}</em></div>
    <p>${esc(source.note || '')}</p>
    <div class="src-meta"><span>入库时间 ${fmt.date(source.updated)}</span><span>后台校验 · 字段完整性 / 单位一致性 / 版本差异</span></div>
  </div>`;
}

export function emptyState(title, desc = '', action = '', iconName = 'archive') {
  return `<div class="empty-state">
    <div class="empty-ico">${icon(iconName, 28)}</div>
    <h4>${esc(title)}</h4>
    ${desc ? `<p>${esc(desc)}</p>` : ''}
    ${action}
  </div>`;
}

export function statTile(label, value, { unit = '', sub = '', accent = 'var(--gold)', hero = false } = {}) {
  return `<div class="stat-tile${hero ? ' is-hero' : ''}" style="--st-accent:${accent}">
    <span class="st-label">${esc(label)}</span>
    <div class="st-value">${esc(value)}${unit ? `<em>${esc(unit)}</em>` : ''}</div>
    ${sub ? `<span class="st-sub">${esc(sub)}</span>` : ''}
  </div>`;
}

export function sectionHead(title, sub = '', actions = '', kicker = '') {
  return `<header class="section-head">
    <div class="sh-copy">
      ${kicker ? `<p class="eyebrow">${esc(kicker)}</p>` : ''}
      <h2>${esc(title)}</h2>
      ${sub ? `<p class="sh-sub">${esc(sub)}</p>` : ''}
    </div>
    ${actions ? `<div class="sh-actions">${actions}</div>` : ''}
  </header>`;
}

export function highlight(text, query) {
  const raw = String(text ?? '');
  const tokens = String(query || '').trim().split(/\s+/).filter((t) => t.length > 0);
  if (!tokens.length) return esc(raw);
  const escaped = tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`(${escaped.join('|')})`, 'gi');
  return raw.split(re).map((part) => {
    if (tokens.some((t) => part.toLowerCase() === t.toLowerCase())) return `<mark>${esc(part)}</mark>`;
    return esc(part);
  }).join('');
}

/* ---------------- toasts ---------------- */

export function toast(message, { tone = 'info', duration = 2800, action = null } = {}) {
  let root = document.getElementById('toast-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'toast-root';
    root.className = 'toast-root';
    document.body.appendChild(root);
  }
  const el = document.createElement('div');
  el.className = `toast tone-${tone}`;
  const dot = document.createElement('span');
  dot.className = 'toast-dot';
  el.appendChild(dot);
  const txt = document.createElement('span');
  txt.textContent = message;
  el.appendChild(txt);
  if (action) {
    const btn = document.createElement('button');
    btn.className = 'toast-action';
    btn.type = 'button';
    btn.textContent = action.label;
    btn.addEventListener('click', () => {
      action.onClick?.();
      el.remove();
    });
    el.appendChild(btn);
  }
  root.appendChild(el);
  requestAnimationFrame(() => el.classList.add('is-in'));
  setTimeout(() => {
    el.classList.remove('is-in');
    setTimeout(() => el.remove(), 260);
  }, duration);
}

/* ---------------- modal ---------------- */

let modalCleanup = null;

export function openModal({ title, content, actions = [], dismissable = true, className = '', onOpen = null }) {
  closeModal();
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal ${esc(className)}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <header class="modal-head">
        <h3 id="modal-title">${esc(title)}</h3>
        ${dismissable ? `<button class="icon-btn" type="button" data-modal-close aria-label="关闭">${icon('close', 18)}</button>` : ''}
      </header>
      <div class="modal-body">${content}</div>
      ${actions.length ? `<footer class="modal-foot"></footer>` : ''}
    </div>`;
  document.body.appendChild(backdrop);
  document.body.classList.add('modal-open');
  const foot = backdrop.querySelector('.modal-foot');
  const buttons = [];
  actions.forEach((a) => {
    const btn = document.createElement('button');
    btn.className = `btn ${a.variant || 'btn-primary'}`;
    btn.type = 'button';
    btn.textContent = a.label;
    btn.addEventListener('click', () => {
      const keep = a.onClick?.();
      if (keep !== false) closeModal();
    });
    foot?.appendChild(btn);
    buttons.push(btn);
  });
  const closeBtn = backdrop.querySelector('[data-modal-close]');
  closeBtn?.addEventListener('click', closeModal);
  if (dismissable) {
    backdrop.addEventListener('pointerdown', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }
  const onKey = (e) => {
    if (e.key === 'Escape' && dismissable) closeModal();
    if (e.key === 'Tab') {
      const focusables = [closeBtn, ...buttons, ...backdrop.querySelectorAll('button, a, input, select, textarea')].filter(Boolean);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };
  document.addEventListener('keydown', onKey);
  modalCleanup = () => {
    document.removeEventListener('keydown', onKey);
    backdrop.remove();
    document.body.classList.remove('modal-open');
  };
  requestAnimationFrame(() => backdrop.classList.add('is-in'));
  setTimeout(() => (buttons[0] || closeBtn)?.focus(), 30);
  onOpen?.(backdrop);
  return backdrop;
}

export function closeModal() {
  if (modalCleanup) {
    modalCleanup();
    modalCleanup = null;
  }
}

export function confirmDialog({ title, message, confirmLabel = '确认', cancelLabel = '取消', danger = false }) {
  return new Promise((resolve) => {
    openModal({
      title,
      content: `<p class="modal-text">${esc(message)}</p>`,
      actions: [
        { label: cancelLabel, variant: 'btn-ghost', onClick: () => resolve(false) },
        { label: confirmLabel, variant: danger ? 'btn-danger' : 'btn-primary', onClick: () => resolve(true) },
      ],
    });
  });
}

/* ---------------- misc ---------------- */

export function debounce(fn, wait = 180) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove();
    return ok;
  }
}

export function parseQuery(hash) {
  const qIndex = (hash || location.hash).indexOf('?');
  if (qIndex < 0) return {};
  const params = new URLSearchParams((hash || location.hash).slice(qIndex + 1));
  const out = {};
  params.forEach((v, k) => { out[k] = v; });
  return out;
}

export function hrefFor(path, query = {}) {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') params.set(k, v);
  });
  const qs = params.toString();
  return `#${path}${qs ? `?${qs}` : ''}`;
}

export function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

export function elementName(key) {
  return ELEMENTS[key]?.name || key;
}

export function pathName(key) {
  return PATHS[key]?.name || key;
}

export function statusMeta(key) {
  return STATUS[key] || STATUS.live;
}
