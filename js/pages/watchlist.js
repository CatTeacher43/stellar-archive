import {
  CHARACTER_MAP, STATUS, ELEMENTS, PATHS, CHANGE_TYPES, changesForCharacter,
  APP, DISCLAIMER, VERSION_BY_ID, versionIndex,
} from '../data/index.js';
import {
  esc, icon, fmt, statusBadge, changeBadge, confirmDialog, toast,
} from '../ui.js';
import { getWatchlist, toggleWatch } from '../store.js';
import { avatarSrc } from '../assets.js';
import { downloadJSON } from '../export.js';
import { pageHead, pageFootNote } from './shared.js';

export async function render(ctx) {
  ctx.setTitle('关注清单');

  const build = () => {
    const ids = getWatchlist();
    const chars = ids.map((id) => CHARACTER_MAP[id]).filter(Boolean);
    const changes = chars.flatMap((c) => changesForCharacter(c.id).map((ch) => ({ ...ch, character: c })))
      .sort((a, b) => versionIndex(b.version) - versionIndex(a.version));
    return { ids, chars, changes };
  };

  let { ids, chars, changes } = build();
  const watchable = ids.length;

  const html = `<div class="page watchlist-page">
    ${pageHead({
      eyebrow: 'WATCHLIST · LOCAL ONLY',
      title: '关注清单',
      desc: '把在意的角色放在一条独立的星轨上。关注只保存在本机浏览器，不注册账号、不上传、不参与任何排行。',
      meta: `<span class="meta-pill">${watchable} 个关注</span><span class="meta-pill">${changes.length} 条相关变动</span><span class="meta-pill tone-gold">本地存储</span>`,
      actions: `<button class="btn btn-quiet btn-sm" type="button" data-export-watchlist${chars.length ? '' : ' disabled'}>${icon('download', 14)}导出清单</button>
        <button class="btn btn-ghost btn-sm" type="button" data-clear-watchlist${chars.length ? '' : ' disabled'}>${icon('trash', 14)}清空</button>`,
    })}

    ${chars.length ? `
      <div class="watch-strip">
        <div class="ws-item"><span>${icon('starFill', 16)}</span><div><b>${chars.length}</b><em>已关注角色</em></div></div>
        <div class="ws-item"><span>${icon('refresh', 16)}</span><div><b>${changes.length}</b><em>历史变动记录</em></div></div>
        <div class="ws-item"><span>${icon('database', 16)}</span><div><b>V${esc(APP.latestLive)}</b><em>当前数据版本</em></div></div>
        <p class="ws-note">${icon('shield', 13)}关注信息仅存于 localStorage；清理浏览器数据会一并移除。</p>
      </div>
      <div class="watch-grid" id="watch-grid">
        ${chars.map(watchCard).join('')}
      </div>
      <section class="section watch-changes">
        <div class="chart-heading compact"><div><p class="eyebrow">CHANGE FEED</p><h2>关注角色的版本记录</h2><p>按版本从新到旧排列，只展示可核对的角色上线与关卡归档，不补写未公开的平衡改动。</p></div>
          <a class="link-more" href="#/updates">完整更新中心 ${icon('arrowRight', 14)}</a>
        </div>
        ${changes.length ? `<ol class="change-feed">
          ${changes.map((ch) => `<li>
            <span class="cf-ver">V${esc(ch.version)}</span>
            <span class="cf-dot tone-${CHANGE_TYPES[ch.type]?.tone || 'info'}"></span>
            <div class="cf-main">
              <div class="cf-head">${changeBadge(ch.type, CHANGE_TYPES)}<b>${esc(ch.character.name)}</b><em>${fmt.date(ch.date)}</em></div>
              <p>${esc(ch.text)}</p>
            </div>
            <a class="cf-link" href="#/character/${esc(ch.character.id)}">角色档案 ${icon('chevronRight', 12)}</a>
          </li>`).join('')}
        </ol>` : `<p class="inline-note">${icon('info', 14)}关注角色暂时没有可回溯的版本记录。</p>`}
      </section>
    ` : emptyWatchlist()}

    ${pageFootNote('关注清单是纯本地收藏夹，不是账号数据。档案库不提供用户投稿、评论或公开主页。')}
  </div>`;

  return {
    html,
    mount(root) {
      root.querySelector('[data-export-watchlist]')?.addEventListener('click', () => {
        downloadJSON({
          archive: APP.name, exportedAt: new Date().toISOString(), kind: 'watchlist',
          disclaimer: DISCLAIMER.short,
          characters: chars.map((c) => ({
            id: c.id, name: c.name, status: c.status, element: c.element, path: c.path,
            releaseVersion: c.releaseVersion, latestStats: c.lv80,
          })),
        }, '星轨档案-关注清单');
        toast('关注清单已导出', { tone: 'good' });
      });

      root.querySelector('[data-clear-watchlist]')?.addEventListener('click', async () => {
        if (!chars.length) return;
        const ok = await confirmDialog({
          title: '清空关注清单？',
          message: `将从本机移除 ${chars.length} 个关注条目，不影响任何档案数据。`,
          confirmLabel: '清空',
          danger: true,
        });
        if (!ok) return;
        getWatchlist().forEach((id) => toggleWatch(id));
        document.dispatchEvent(new CustomEvent('sra:watchlist'));
        toast('关注清单已清空', { tone: 'info' });
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      });
    },
  };
}

function watchCard(c) {
  const status = STATUS[c.status] || STATUS.live;
  const version = c.releaseVersion || c.betaVersion || c.leakVersion || '—';
  return `<article class="watch-card">
    <a class="wc-link" href="#/character/${esc(c.id)}">
      <img class="wc-avatar" src="${avatarSrc(c, 160)}" alt="${esc(c.name)}头像占位" width="64" height="64" loading="lazy">
      <div class="wc-main">
        <div class="wc-head"><h3>${esc(c.name)}</h3>${c.status !== 'live' ? statusBadge(c.status) : ''}</div>
        <p>${esc(c.en)}</p>
        <div class="wc-meta"><span>V${esc(version)}</span><span>${esc(ELEMENTS[c.element]?.name || c.element)} · ${esc(PATHS[c.path]?.name || c.path)}</span><span>ATK ${fmt.int(c.lv80.atk)}</span></div>
      </div>
      ${icon('chevronRight', 15)}
    </a>
    <div class="wc-foot">
      <span class="wc-status tone-${status.tone}">${status.icon} ${status.short}</span>
      <span>${icon('bell', 13)} ${esc(VERSION_BY_ID[c.releaseVersion]?.title || '版本待定')}</span>
      <button class="watch-btn is-on" type="button" data-watch="${esc(c.id)}" aria-pressed="true">${icon('starFill', 14)}<span>已关注</span></button>
    </div>
  </article>`;
}

function emptyWatchlist() {
  return `<div class="empty-state tall watch-empty">
    <div class="empty-ico">${icon('star', 30)}</div>
    <h2>星轨上还没有标记</h2>
    <p>在任意角色卡片或详情页点击「关注」，角色就会出现在这里，并汇总其版本变动。</p>
    <div class="empty-actions">
      <a class="btn btn-primary" href="#/characters">浏览角色档案</a>
      <a class="btn btn-ghost" href="#/stages">查看历代关卡</a>
    </div>
  </div>`;
}
