import {
  DATA_PACKS, CHANGELOG, CHANGE_TYPES, APP, VERSION_BY_ID,
  CHARACTER_MAP,
} from '../data/index.js';
import {
  esc, icon, fmt, changeBadge, confirmDialog, toast,
} from '../ui.js';
import {
  getCachedPacks, downloadPack, deletePack, formatBytes, getStorageEstimate,
  getSettings, saveSettings, clearCache,
} from '../store.js';
import { pageHead, pageFootNote } from './shared.js';

const TYPE_FILTERS = [
  ['all', '全部变动'],
  ['pack', '数据包'],
  ['stage', '关卡'],
  ['character', '角色'],
  ['balance', '数值改动'],
  ['system', '功能'],
  ['fanart', '同人图'],
];

export async function render(ctx) {
  ctx.setTitle('版本更新中心');
  const initialVersion = CHANGELOG.some((l) => l.version === ctx.query.v) ? ctx.query.v : 'all';
  const settings = getSettings();

  const html = `<div class="page updates-page">
    ${pageHead({
      eyebrow: 'UPDATE CENTER',
      title: '版本更新中心',
      desc: '版本数据包、快照与档案变动集中在这里。每个正式版本按真实角色上线与关卡轮换生成快照；不包含测试服或埋包内容。',
      meta: `<span class="meta-pill">数据 V${esc(APP.dataVersion)}</span><span class="meta-pill">${CHANGELOG.length} 个版本记录</span><span class="meta-pill tone-gold">${DATA_PACKS.length} 个版本包</span>`,
      actions: `<button class="btn btn-quiet btn-sm" type="button" data-check-updates>${icon('refresh', 14)}检查更新</button>
        <button class="btn btn-ghost btn-sm" type="button" data-install-app>${icon('download', 14)}安装应用</button>`,
    })}

    <div class="update-status-strip">
      <div class="us-item"><span class="us-ico">${icon('wifi', 16)}</span><div><b id="us-net">在线</b><em>网络状态</em></div></div>
      <div class="us-item"><span class="us-ico">${icon('database', 16)}</span><div><b id="us-storage">计算中</b><em>IndexedDB 占用</em></div></div>
      <div class="us-item"><span class="us-ico">${icon('cloud', 16)}</span><div><b id="us-sw">检查中</b><em>离线缓存</em></div></div>
      <div class="us-item"><span class="us-ico">${icon('clock', 16)}</span><div><b id="us-check">${settings.lastCheck ? fmt.date(settings.lastCheck.slice(0, 10)) : '尚未检查'}</b><em>上次检查</em></div></div>
      <p class="us-note">${icon('shield', 13)}数据包写入本机 IndexedDB；不登录、不上传。</p>
    </div>

    <section class="section pack-section">
      <div class="chart-heading compact"><div><p class="eyebrow">DATA PACKS</p><h2>数据包管理</h2><p>内置包不可删除；其余版本包含对应的角色与关卡快照，用于离线回溯。</p></div>
        <div class="pack-legend"><span class="tone-good">正式版本</span><span class="tone-warning">内置包</span></div>
      </div>
      <div class="pack-grid" id="pack-grid">
        <div class="route-loading"><span></span><span></span><span></span></div>
      </div>
      <div class="cache-actions">
        <button class="btn btn-quiet btn-sm" type="button" data-clear-cache>${icon('trash', 14)}清理非内置缓存</button>
        <button class="btn btn-ghost btn-sm" type="button" data-hard-reload>${icon('refresh', 14)}强制刷新应用</button>
        <span>内置 V${esc(APP.latestLive)} 数据包会保留；「强制刷新」只清应用外壳缓存，不动本机数据包。</span>
      </div>
    </section>

    <section class="section changelog-section">
      <div class="chart-heading compact"><div><p class="eyebrow">CHANGELOG</p><h2>档案变动记录</h2><p>按版本记录真实角色上线与关卡轮换归档。</p></div>
        <label class="select-field inline-select"><span>版本</span>
          <select id="log-version">
            <option value="all">全部版本</option>
            ${CHANGELOG.map((l) => `<option value="${l.version}"${initialVersion === l.version ? ' selected' : ''}>V${l.version} · ${esc(VERSION_BY_ID[l.version]?.title || '')}</option>`).join('')}
          </select>
        </label>
      </div>
      <div class="type-filter-row" id="log-types" role="group" aria-label="按变动类型筛选">
        ${TYPE_FILTERS.map(([k, label]) => `<button type="button" class="type-chip${k === 'all' ? ' is-active' : ''}" data-type="${k}"${k !== 'all' ? ` style="--tc:var(--tone-${CHANGE_TYPES[k]?.tone || 'info'})"` : ''}>${k === 'all' ? '' : `<i>${CHANGE_TYPES[k]?.icon || '·'}</i>`}${label}</button>`).join('')}
      </div>
      <div class="log-timeline" id="log-timeline"></div>
    </section>

    ${pageFootNote('更新中心只写入本地 IndexedDB 的版本快照，不会联网下载游戏资源。数据包条目与版本日志由真实角色 / 关卡档案生成；体积为归档 JSON 的近似值。正式包永久保留，其余包可删除后重建。')}
  </div>`;

  return {
    html,
    mount: async (root) => {
      /* ---------- status ---------- */
      const netEl = root.querySelector('#us-net');
      const paintNet = () => {
        const online = navigator.onLine;
        netEl.textContent = online ? '在线' : '离线';
        netEl.className = online ? 'is-good' : 'is-warn';
      };
      paintNet();
      window.addEventListener('online', paintNet, { once: true });
      window.addEventListener('offline', paintNet, { once: true });

      const swEl = root.querySelector('#us-sw');
      const swReady = 'serviceWorker' in navigator
        ? await navigator.serviceWorker.getRegistration().catch(() => null)
        : null;
      swEl.textContent = swReady ? '已缓存' : ('serviceWorker' in navigator ? '注册中' : '不支持');
      swEl.className = swReady ? 'is-good' : 'is-warn';

      const paintStorage = async () => {
        const est = await getStorageEstimate();
        root.querySelector('#us-storage').textContent = est.supported
          ? `${formatBytes(est.usage)} / ${formatBytes(est.quota)}`
          : '浏览器未提供';
      };
      paintStorage();

      /* ---------- packs ---------- */
      const grid = root.querySelector('#pack-grid');
      const paintPacks = async () => {
        const cached = await getCachedPacks();
        const byId = new Map(cached.map((p) => [p.id, p]));
        grid.innerHTML = DATA_PACKS.map((p) => packCard(p, byId.get(p.id))).join('');
      };
      await paintPacks();

      grid.addEventListener('click', async (ev) => {
        const installBtn = ev.target.closest('[data-install-pack]');
        if (installBtn) {
          const pack = DATA_PACKS.find((p) => p.id === installBtn.getAttribute('data-install-pack'));
          if (!pack) return;
          const card = installBtn.closest('.pack-card');
          const progress = card.querySelector('.pack-progress');
          const bar = progress.querySelector('span');
          const label = progress.querySelector('em');
          progress.hidden = false;
          installBtn.disabled = true;
          installBtn.textContent = '安装中…';
          try {
            await downloadPack(pack, (pct, text) => {
              bar.style.width = `${pct}%`;
              label.textContent = `${pct}% · ${text}`;
            });
            toast(`已安装「${pack.label}」`, { tone: 'good' });
            await paintPacks();
            paintStorage();
          } catch (err) {
            console.error(err);
            toast('数据包安装失败，请检查浏览器存储权限', { tone: 'critical' });
            installBtn.disabled = false;
            installBtn.textContent = '重试安装';
            progress.hidden = true;
          }
          return;
        }

        const delBtn = ev.target.closest('[data-delete-pack]');
        if (delBtn) {
          const pack = DATA_PACKS.find((p) => p.id === delBtn.getAttribute('data-delete-pack'));
          if (!pack) return;
          const ok = await confirmDialog({
            title: `删除「${pack.label}」？`,
            message: '将移除本机缓存的数据包与版本快照，可随时重新下载。不影响正式档案。',
            confirmLabel: '删除',
            danger: true,
          });
          if (!ok) return;
          const done = await deletePack(pack.id);
          if (done) {
            toast('数据包已删除', { tone: 'info' });
            await paintPacks();
            paintStorage();
          } else {
            toast('内置数据包不可删除', { tone: 'warning' });
          }
        }
      });

      root.querySelector('[data-clear-cache]')?.addEventListener('click', async () => {
        const ok = await confirmDialog({
          title: '清理非内置数据包？',
          message: `所有手动安装的数据包会被移除，内置 V${APP.latestLive} 正式包保留。`,
          confirmLabel: '清理',
          danger: true,
        });
        if (!ok) return;
        await clearCache(true);
        toast('非内置缓存已清理', { tone: 'info' });
        await paintPacks();
        paintStorage();
      });

      root.querySelector('[data-hard-reload]')?.addEventListener('click', async () => {
        const ok = await confirmDialog({
          title: '强制刷新应用？',
          message: '会注销 Service Worker、清除浏览器中的应用外壳缓存，然后重新加载最新版本。本机 IndexedDB 里已安装的数据包不受影响。',
          confirmLabel: '刷新',
        });
        if (!ok) return;
        try {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(regs.map((r) => r.unregister()));
          const keys = await caches.keys();
          await Promise.all(keys.filter((k) => k.startsWith('stellar-')).map((k) => caches.delete(k)));
        } catch (err) {
          console.warn('hard reload', err);
        }
        location.replace(`${location.pathname}?fresh=${Date.now()}${location.hash}`);
      });

      root.querySelector('[data-check-updates]')?.addEventListener('click', async (ev) => {
        const btn = ev.currentTarget;
        btn.disabled = true;
        btn.textContent = '检查中…';
        let shellStale = false;
        try {
          const reg = await navigator.serviceWorker?.getRegistration();
          if (reg) {
            await reg.update();
            shellStale = !!reg.waiting || !!reg.installing;
          }
        } catch (err) {
          console.warn('update check', err);
        }
        await new Promise((r) => setTimeout(r, 600));
        const stamp = new Date().toISOString();
        saveSettings({ lastCheck: stamp });
        root.querySelector('#us-check').textContent = fmt.date(stamp.slice(0, 10));
        btn.disabled = false;
        if (shellStale) {
          btn.innerHTML = `${icon('refresh', 14)}有新版本`;
          toast('发现新版本，点击「强制刷新应用」即可切换', { tone: 'warning', duration: 6000 });
          setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = `${icon('refresh', 14)}检查更新`;
          }, 4000);
        } else {
          btn.innerHTML = `${icon('check', 14)}已是最新`;
          toast('应用外壳与数据包均为最新（数据 V' + APP.dataVersion + '）', { tone: 'good' });
          setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = `${icon('refresh', 14)}检查更新`;
          }, 2600);
        }
      });

      /* ---------- changelog ---------- */
      let logType = 'all';
      let logVersion = initialVersion;
      const logList = root.querySelector('#log-timeline');
      const paintLog = () => {
        let logs = CHANGELOG.filter((l) => logVersion === 'all' || l.version === logVersion);
        if (logType !== 'all') {
          logs = logs.map((l) => ({ ...l, entries: l.entries.filter((e) => e.type === logType) }))
            .filter((l) => l.entries.length);
        }
        if (!logs.length) {
          logList.innerHTML = `<div class="empty-state"><div class="empty-ico">${icon('clock', 26)}</div><h4>该筛选下暂无记录</h4><p>换一个类型或版本查看。</p></div>`;
          return;
        }
        logList.innerHTML = logs.map((log) => `<article class="log-item">
          <div class="log-rail"><span class="log-dot"></span></div>
          <div class="log-card">
            <header class="log-head">
              <div><b>V${esc(log.version)}</b><em>${esc(VERSION_BY_ID[log.version]?.title || '档案变动')}</em></div>
              <span class="log-date">${fmt.date(log.date)}</span>
            </header>
            <p class="log-summary">${esc(log.summary)}</p>
            <ul class="log-entries">
              ${log.entries.map((e) => `<li>
                ${changeBadge(e.type, CHANGE_TYPES)}
                <span>${esc(e.text)}</span>
                ${e.characterId && CHARACTER_MAP[e.characterId] ? `<a href="#/character/${esc(e.characterId)}">${esc(CHARACTER_MAP[e.characterId].name)} ${icon('chevronRight', 11)}</a>` : ''}
              </li>`).join('')}
            </ul>
            <div class="log-foot">
              <a href="#/updates?v=${encodeURIComponent(log.version)}" data-log-version="${esc(log.version)}">只看该版本</a>
              <a href="#/stages?version=${encodeURIComponent(log.version)}">该版本关卡</a>
            </div>
          </div>
        </article>`).join('');
      };

      root.querySelector('#log-types')?.addEventListener('click', (ev) => {
        const btn = ev.target.closest('[data-type]');
        if (!btn) return;
        logType = btn.getAttribute('data-type');
        root.querySelectorAll('#log-types .type-chip').forEach((b) => b.classList.toggle('is-active', b === btn));
        paintLog();
      });
      root.querySelector('#log-version')?.addEventListener('change', (ev) => {
        logVersion = ev.target.value;
        paintLog();
      });
      paintLog();

      window.addEventListener('sra:packs', paintPacks);
    },
  };
}

function packCard(pack, installed) {
  const typeMeta = pack.type === 'live'
    ? { label: '正式档案', tone: 'good' }
    : pack.type === 'beta'
      ? { label: '测试服', tone: 'warning' }
      : { label: '埋包前瞻', tone: 'critical' };
  const versionMeta = VERSION_BY_ID[pack.version];
  return `<article class="pack-card is-${pack.type}" data-pack="${esc(pack.id)}">
    <header class="pack-head">
      <span class="pack-ver">V${esc(pack.version)}</span>
      <span class="pack-type tone-${typeMeta.tone}">${typeMeta.label}</span>
      ${pack.builtin ? '<span class="pack-builtin">内置</span>' : ''}
      <span class="pack-size">${esc(pack.size)}</span>
    </header>
    <h3>${esc(pack.label)}</h3>
    <p class="pack-date">${esc(versionMeta?.title || '')} · ${fmt.date(pack.date)}</p>
    <p class="pack-items">${icon('database', 13)}${esc(pack.items)}</p>
    <p class="pack-notes">${esc(pack.notes)}</p>
    <div class="pack-progress" hidden><span style="width:0%"></span><em>准备中…</em></div>
    <footer class="pack-foot">
      ${installed
        ? `<span class="pack-state">${icon('check', 14)}已安装${installed.installedAt ? ` · ${fmt.date(installed.installedAt.slice(0, 10))}` : ''}</span>
           ${pack.builtin ? '<span class="pack-lock">不可删除</span>' : `<button class="btn btn-quiet btn-sm" type="button" data-delete-pack="${esc(pack.id)}">${icon('trash', 13)}删除</button>`}`
        : `<span class="pack-state is-off">${icon('cloud', 14)}未缓存</span>
           <button class="btn btn-primary btn-sm" type="button" data-install-pack="${esc(pack.id)}">${icon('download', 13)}下载安装</button>`}
    </footer>
  </article>`;
}
