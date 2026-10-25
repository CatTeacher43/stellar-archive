import {
  APP, STAGES, STAGE_TYPES, VERSION_BY_ID, versionIndex,
  stageTitle, stageNodes, stageEnemyNames, stageEnemyCount, stageWaveCount,
} from '../data/index.js';
import {
  esc, fmt, icon, elementChip, pathChip, rarityStars, limitedChip,
  statusBadge, modeBadge, watchButton, compareToggle, emptyState,
} from '../ui.js';
import { avatarSrc } from '../assets.js';
import { isWatched, getCompareTray } from '../store.js';

export function pageHead({ eyebrow = '', title, desc = '', actions = '', meta = '' }) {
  return `<header class="page-head">
    <div class="ph-copy">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      <h1>${title}</h1>
      ${desc ? `<p class="ph-desc">${desc}</p>` : ''}
      ${meta ? `<div class="ph-meta">${meta}</div>` : ''}
    </div>
    ${actions ? `<div class="ph-actions">${actions}</div>` : ''}
  </header>`;
}

export function breadcrumb(items) {
  return `<nav class="breadcrumb" aria-label="面包屑">${items.map((it, i) => {
    const last = i === items.length - 1;
    const node = it.href && !last
      ? `<a href="${it.href}">${esc(it.label)}</a>`
      : `<span${last ? ' aria-current="page"' : ''}>${esc(it.label)}</span>`;
    return `${node}${last ? '' : icon('chevronRight', 12)}`;
  }).join('')}</nav>`;
}

export function pageFootNote(text) {
  return `<p class="page-foot-note">${icon('info', 14)}<span>${esc(text)}</span></p>`;
}

export function characterCard(c, { actions = true } = {}) {
  const watched = isWatched(c.id);
  const compared = getCompareTray().includes(c.id);
  return `<article class="char-card" style="--el:${elementChipColor(c.element)}">
    <a class="char-card-link" href="#/character/${esc(c.id)}">
      <div class="cc-avatar">
        <img src="${avatarSrc(c, 160)}" alt="${esc(c.name)}头像占位图" loading="lazy" width="72" height="72">
        <span class="cc-rarity">${rarityStars(c.rarity)}</span>
      </div>
      <div class="cc-main">
        <div class="cc-name"><h3>${esc(c.name)}</h3>${c.en ? `<em>${esc(c.en)}</em>` : ''}</div>
        <div class="cc-chips">
          ${elementChip(c.element, { compact: true })}
          ${pathChip(c.path)}
          ${limitedChip(c.limited)}
          ${c.status !== 'live' ? statusBadge(c.status) : ''}
        </div>
        <div class="cc-stats">
          <span><em>ATK</em>${fmt.int(c.lv80.atk)}</span>
          <span><em>SPD</em>${c.lv80.spd}</span>
          <span class="cc-ver">V${esc(c.releaseVersion || c.betaVersion || c.leakVersion || '—')}</span>
        </div>
      </div>
    </a>
    ${actions ? `<div class="cc-actions">${watchButton(c.id, watched)}${compareToggle(c.id, compared)}</div>` : ''}
  </article>`;
}

function elementChipColor(el) {
  const map = {
    physical: '#d7ddea', fire: '#ff7a5c', ice: '#74d8ff', lightning: '#c9a0ff',
    wind: '#63e2b4', quantum: '#a196ff', imaginary: '#ffd479',
  };
  return map[el] || '#f2c96b';
}

export function stageLineup(rotation, max = 3) {
  const names = stageEnemyNames(rotation).slice(0, max);
  if (!names.length) return '<span class="lineup-empty">该期社区页面未收录敌方编成</span>';
  return names.map((name) => `<span class="lineup-enemy" title="${esc(name)}">
    <em>${esc(name)}</em>
  </span>`).join('');
}

/** 真实关卡结构摘要，替代原先虚构的压力小条 */
export function stageFactsMini(rotation) {
  const nodes = stageNodes(rotation);
  const levels = rotation.levels.length;
  const extras = rotation.bosses.length + rotation.nodes.length;
  const waves = stageWaveCount(rotation);
  const enemies = stageEnemyCount(rotation);
  const bossNames = stageEnemyNames(rotation).length;
  const bossOnly = !waves && bossNames > 0;
  return `<div class="stage-facts-mini" aria-label="关卡结构摘要">
    <span><b>${nodes.length}</b> ${rotation.mode === 'aa' ? '节点' : rotation.mode === 'as' ? '首领' : '层'}</span>
    ${bossOnly
      ? '<span class="is-gap"><b>—</b> 波次未收录</span>'
      : `<span><b>${waves || '—'}</b> 波</span><span><b>${enemies || '—'}</b> 敌人</span>`}
    <span><b>${rotation.effects.length}</b> 效果</span>
    ${extras && levels ? `<i>${levels} 层 + ${extras} 特殊节点</i>` : ''}
  </div>`;
}

/** @deprecated 保留导出名；旧版压力条已由真实结构摘要取代 */
export function pressureMini(rotation) {
  return stageFactsMini(rotation);
}

export function stageCard(rotation, { showMode = true } = {}) {
  const meta = STAGE_TYPES[rotation.mode];
  const isAA = rotation.mode === 'aa';
  const title = stageTitle(rotation);
  const waves = stageWaveCount(rotation);
  const enemies = stageEnemyCount(rotation);
  const bossNames = stageEnemyNames(rotation).length;
  const recordLine = waves
    ? `${waves} 波次 · ${enemies} 名敌人`
    : bossNames
      ? `仅首领名称 ${bossNames} 条 · 波次未收录`
      : '波次与编成未收录';
  return `<a class="stage-card${isAA ? ' is-aa' : ''}" href="#/stage/${esc(rotation.id)}" style="--mc:${meta.color}">
    <div class="sc-top">
      ${showMode ? modeBadge(rotation.mode) : `<span class="sc-mode-plain">${meta.icon} ${meta.name}</span>`}
      <span class="sc-ver">V${esc(rotation.version)} · ${fmt.date(rotation.startDate)}</span>
    </div>
    <h3 class="sc-title">${esc(title)}</h3>
    ${rotation.name !== title || isAA ? `<p class="sc-sub">${rotation.name !== title ? esc(rotation.name) : ''}${isAA ? `${rotation.name !== title ? ' · ' : ''}三骑士 + 王棋` : ''}</p>` : ''}
    <div class="sc-lineup">${stageLineup(rotation)}</div>
    ${stageFactsMini(rotation)}
    <div class="sc-foot">
      <span>${icon('layers', 13)} ${recordLine}</span>
      <span>${rotation.startDate ? `${fmt.date(rotation.startDate)} 起` : '日期未收录'}</span>
      <span class="sc-go">${icon('arrowRight', 14)}</span>
    </div>
  </a>`;
}

export function modeSummaryCard(modeKey) {
  const meta = STAGE_TYPES[modeKey];
  const list = STAGES.filter((s) => s.mode === modeKey);
  const latest = list[list.length - 1];
  return `<a class="mode-summary" href="#/stages?mode=${modeKey}" style="--mc:${meta.color}">
    <span class="ms-icon">${meta.icon}</span>
    <div class="ms-main">
      <div class="ms-title"><h3>${esc(meta.name)}</h3><em>${esc(meta.en)}</em></div>
      <p>${meta.startVersion} 起 · ${list.length} 期已归档</p>
      ${latest ? `<span class="ms-latest">最新 V${esc(latest.version)}「${esc(stageTitle(latest))}」</span>` : ''}
    </div>
    <span class="ms-arrow">${icon('chevronRight', 16)}</span>
  </a>`;
}

export function warningBanner({ tone = 'warning', title, text, extra = '' }) {
  return `<div class="warn-banner tone-${tone}">
    <span class="wb-ico">${icon(tone === 'critical' ? 'warning' : 'info', 20)}</span>
    <div><strong>${esc(title)}</strong><p>${text}</p></div>
    ${extra}
  </div>`;
}

export function statPair(label, value, sub = '') {
  return `<div class="stat-pair"><span>${esc(label)}</span><b>${esc(value)}</b>${sub ? `<em>${esc(sub)}</em>` : ''}</div>`;
}

export function versionLabel(version) {
  const v = VERSION_BY_ID[version];
  return v ? `V${version} · ${v.title}` : `V${version}`;
}

export function latestVersionOf(character) {
  if (!character || character.status !== 'live') return character?.betaVersion || character?.leakVersion || null;
  return APP.latestLive;
}

export function sortVersionsDesc(versions) {
  return [...versions].sort((a, b) => versionIndex(b) - versionIndex(a));
}

export function emptyPanel(title, desc, action = '') {
  return emptyState(title, desc, action, 'compass');
}

export function chipLink(label, href, active = false, count = null, color = '') {
  return `<a class="chip-link${active ? ' is-active' : ''}" href="${href}"${color ? ` style="--chip:${color}"` : ''}>
    ${esc(label)}${count != null ? `<em>${count}</em>` : ''}
  </a>`;
}

export function versionOptions(versions, selected, { includeLatest = false } = {}) {
  return versions.map((v) => {
    const meta = VERSION_BY_ID[v];
    return `<option value="${esc(v)}"${v === selected ? ' selected' : ''}>V${esc(v)}${meta ? ` · ${esc(meta.title)}` : ''}${v === APP.latestLive && includeLatest ? ' · 最新' : ''}</option>`;
  }).join('');
}

export function stageModeCounts() {
  return Object.fromEntries(Object.keys(STAGE_TYPES).map((m) => [m, STAGES.filter((s) => s.mode === m).length]));
}
