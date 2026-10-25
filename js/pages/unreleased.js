import {
  BETA_CHARACTERS, UNRELEASED_CHARACTERS, COUNTS, STATUS,
} from '../data/index.js';
import { esc, icon, fmt, statusBadge, rarityStars, elementChip, pathChip, toast } from '../ui.js';
import { avatarSrc } from '../assets.js';
import { getSettings, saveSettings } from '../store.js';
import { pageHead, pageFootNote, warningBanner } from './shared.js';

const STATE = { status: 'all', q: '' };

export async function render(ctx) {
  ctx.setTitle('未实机前瞻区');
  const initStatus = ['unreleased', 'scrapped', 'beta'].includes(ctx.query.status) ? ctx.query.status : 'all';
  STATE.status = initStatus;
  STATE.q = ctx.query.q || '';

  const all = [
    ...UNRELEASED_CHARACTERS.map((c) => ({ ...c, zone: c.status })),
    ...BETA_CHARACTERS.map((c) => ({ ...c, zone: 'beta' })),
  ];
  const settings = getSettings();

  const html = `<div class="page unreleased-page">
    ${pageHead({
      eyebrow: 'UNRELEASED FORESHADOW ZONE',
      title: '未实机前瞻区',
      desc: '为测试服与埋包内容预留的独立隔离区。当前没有可核对的条目；该区与已上线档案物理隔离，默认不进入全局搜索，也不挂载任何同人图。',
      meta: `<span class="meta-pill tone-danger">未实机 ${COUNTS.unreleased}</span><span class="meta-pill tone-muted">已废弃 ${COUNTS.scrapped}</span><span class="meta-pill tone-warning">测试服 ${BETA_CHARACTERS.length}</span>`,
      actions: '<a class="btn btn-quiet btn-sm" href="#/about">数据分级说明</a>',
    })}

    ${warningBanner({
      tone: 'critical',
      title: '未实机内容 · 不建议作为养成或抽取依据',
      text: '当前档案<strong>没有入库任何测试服、埋包或已废弃条目</strong>。该专区保留分级、搜索隔离与警示机制；若未来收录，相关内容都可能被改写、推迟、回滚或直接作废，且不会用虚构条目填充。',
      extra: `<span class="wb-stamp">当前无收录</span>`,
    })}

    <div class="isolation-grid">
      <div class="iso-item"><span>${icon('search', 16)}</span><b>默认隔离</b><p>全局搜索默认不返回未实机 / 已废弃条目，需要手动开启。</p></div>
      <div class="iso-item"><span>${icon('image', 16)}</span><b>无同人图</b><p>非正式内容不挂载同人创作，避免把想象当作设定传播。</p></div>
      <div class="iso-item"><span>${icon('shield', 16)}</span><b>单独警示</b><p>详情页常驻风险横幅，不以「最新角色」口吻呈现。</p></div>
      <div class="iso-item"><span>${icon('refresh', 16)}</span><b>可被清除</b><p>正式上线后归档重做，或整条标记为已废弃。</p></div>
    </div>

    <div class="zone-toolbar">
      <div class="zone-tabs" role="group" aria-label="按可信等级筛选">
        <button type="button" class="zone-tab${STATE.status === 'all' ? ' is-active' : ''}" data-zone="all">全部 <em>${all.length}</em></button>
        <button type="button" class="zone-tab tone-warning${STATE.status === 'beta' ? ' is-active' : ''}" data-zone="beta">测试服 <em>${BETA_CHARACTERS.length}</em></button>
        <button type="button" class="zone-tab tone-danger${STATE.status === 'unreleased' ? ' is-active' : ''}" data-zone="unreleased">未实机 <em>${COUNTS.unreleased}</em></button>
        <button type="button" class="zone-tab tone-muted${STATE.status === 'scrapped' ? ' is-active' : ''}" data-zone="scrapped">已废弃 <em>${COUNTS.scrapped}</em></button>
      </div>
      <label class="toggle-line iso-toggle">
        <input type="checkbox" id="zone-search-toggle"${settings.includeUnreleased ? ' checked' : ''}>
        <span>允许全局搜索返回前瞻内容</span>
      </label>
    </div>

    <div class="zone-search-row">
      <label class="search-field">${icon('search', 16)}<input type="search" id="zone-q" placeholder="在本区内搜索代号、关键词…" value="${esc(STATE.q)}" autocomplete="off"></label>
      <span>仅搜索本页隔离条目</span>
    </div>

    <div class="zone-note-line">
      <span id="zone-count"></span>
      <span>${icon('info', 13)} ${all.length ? '条目名称与内容均标注来源；无法核对的爆料不收录' : '当前没有入库的测试服、埋包或已废弃条目'}</span>
    </div>

    <div class="risk-grid" id="risk-grid"></div>

    <section class="section zone-policy">
      <div class="chart-heading compact"><div><p class="eyebrow">ISOLATION POLICY</p><h2>隔离规则</h2><p>可信等级不是装饰：它决定搜索可见性、图片策略与文案措辞。</p></div></div>
      <div class="policy-table-wrap">
        <table class="policy-table">
          <thead><tr><th>分级</th><th>来源</th><th>全局搜索</th><th>同人图</th><th>归档策略</th></tr></thead>
          <tbody>
            <tr><td>${statusBadge('live')}</td><td>正式服稳定版本</td><td class="yes">默认包含</td><td class="yes">最多 2 幅 · 强制标注</td><td>永久快照，可版本回溯</td></tr>
            <tr><td>${statusBadge('beta')}</td><td>测试包整理</td><td class="warn">默认隐藏</td><td class="no">不挂载</td><td>上线后归档重做</td></tr>
            <tr><td>${statusBadge('unreleased')}</td><td>预下载埋包</td><td class="warn">默认隐藏</td><td class="no">不挂载</td><td>随时作废</td></tr>
            <tr><td>${statusBadge('scrapped')}</td><td>历史失效埋包</td><td class="no">不包含</td><td class="no">不挂载</td><td>仅考据留档</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    ${pageFootNote('当前没有可核对的测试服、埋包或已废弃条目，页面不使用虚构内容填充。未实机内容若收录，也不会进入正式统计、不参与版本对比，也不提供配队或伤害推演。')}
  </div>`;

  return {
    html,
    mount(root) {
      const grid = root.querySelector('#risk-grid');
      const count = root.querySelector('#zone-count');

      const draw = () => {
        const q = STATE.q.trim().toLowerCase();
        let list = all.filter((c) => {
          if (STATE.status !== 'all' && c.zone !== STATE.status) return false;
          if (q && !`${c.name} ${c.en} ${c.intro} ${(c.keywords || []).join(' ')}`.toLowerCase().includes(q)) return false;
          return true;
        });
        count.innerHTML = `<b>${list.length}</b> 个前瞻条目 · 与正式档案隔离`;
        if (!list.length) {
          const noneStored = !all.length;
          grid.innerHTML = `<div class="empty-state tall"><div class="empty-ico">${icon(noneStored ? 'compass' : 'filter', 28)}</div>
            <h4>${noneStored ? '暂无前瞻条目' : '该分级下暂无条目'}</h4>
            <p>${noneStored ? '当前档案没有可核对的测试服、埋包或已废弃内容；此处不使用虚构条目填充。' : '切换分级或清空筛选再试。'}</p></div>`;
          return;
        }
        const order = { beta: 0, unreleased: 1, scrapped: 2 };
        list = [...list].sort((a, b) => order[a.zone] - order[b.zone]);
        grid.innerHTML = list.map(riskCard).join('');
      };

      root.querySelector('.zone-tabs')?.addEventListener('click', (ev) => {
        const btn = ev.target.closest('[data-zone]');
        if (!btn) return;
        STATE.status = btn.getAttribute('data-zone');
        root.querySelectorAll('.zone-tab').forEach((b) => b.classList.toggle('is-active', b === btn));
        draw();
      });
      root.querySelector('#zone-search-toggle')?.addEventListener('change', (ev) => {
        saveSettings({ includeUnreleased: ev.target.checked });
        document.dispatchEvent(new CustomEvent('sra:settings'));
        toast(ev.target.checked ? '全局搜索将包含测试服与未实机内容' : '全局搜索已恢复默认隔离', {
          tone: ev.target.checked ? 'warning' : 'good',
        });
      });
      root.querySelector('#zone-q')?.addEventListener('input', (ev) => { STATE.q = ev.target.value; draw(); });
      draw();
    },
  };
}

function riskCard(c) {
  const label = STATUS[c.zone] || STATUS.unreleased;
  const version = c.betaVersion || c.leakVersion || '—';
  return `<article class="risk-card zone-${c.zone}">
    <div class="risk-ribbon tone-${label.tone}">${label.icon} ${label.short}</div>
    <a class="risk-avatar" href="#/character/${esc(c.id)}">
      <img src="${avatarSrc(c, 160)}" alt="${esc(c.name)}占位头像" width="96" height="96" loading="lazy">
      <span class="risk-no-art">${icon('image', 12)} 无同人图</span>
    </a>
    <div class="risk-main">
      <div class="risk-head"><h3>${esc(c.name)}</h3><em>${esc(c.en)}</em></div>
      <div class="ch-chips">${elementChip(c.element)}${pathChip(c.path)}<span class="tag tag-soft">${rarityStars(c.rarity)}</span></div>
      <p>${esc(c.intro)}</p>
      <div class="risk-meta">
        <span>${icon('clock', 13)} V${esc(version)} · ${label.label}</span>
        <span>${icon('chart', 13)} HP ${fmt.int(c.lv80.hp)} / ATK ${fmt.int(c.lv80.atk)}</span>
      </div>
      <div class="risk-foot">
        <span class="risk-warn">${icon('warning', 13)} 数值与机制随时可能作废</span>
        <a class="btn btn-ghost btn-sm" href="#/character/${esc(c.id)}">查看条目 ${icon('chevronRight', 13)}</a>
      </div>
    </div>
  </article>`;
}
