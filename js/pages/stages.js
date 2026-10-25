import {
  STAGES, STAGE_TYPES, STAGE_COUNTS, VERSION_BY_ID, LIVE_VERSIONS,
  versionIndex, DISCLAIMER, stageTitle, stageNodes, stageEnemyNames,
  stageWaveCount, stageEnemyCount,
} from '../data/index.js';
import { esc, icon, fmt, toast } from '../ui.js';
import { allStagesBundle, downloadJSON } from '../export.js';
import { pageHead, stageCard, pageFootNote } from './shared.js';

const MODE_ORDER = ['moc', 'pf', 'as', 'aa'];
const STATE = { mode: 'all', version: 'all', q: '', sort: 'newest' };

export async function render(ctx) {
  ctx.setTitle('历代关卡档案');
  const modeKeys = Object.keys(STAGE_TYPES);
  STATE.mode = modeKeys.includes(ctx.query.mode) ? ctx.query.mode : 'all';
  STATE.version = ctx.query.version || 'all';
  STATE.q = ctx.query.q || '';
  STATE.sort = ctx.query.sort === 'oldest' ? 'oldest' : 'newest';

  const modeMeta = STATE.mode === 'all' ? null : STAGE_TYPES[STATE.mode];
  const versionsWithStages = [...new Set(STAGES.map((s) => s.version))]
    .sort((a, b) => versionIndex(b) - versionIndex(a));
  const latest = {};
  for (const s of STAGES) {
    if (!latest[s.mode] || versionIndex(s.version) >= versionIndex(latest[s.mode].version)) latest[s.mode] = s;
  }

  const html = `<div class="page stages-page">
    ${pageHead({
      eyebrow: 'HISTORICAL STAGE ARCHIVE',
      title: '历代关卡档案',
      desc: `V${LIVE_VERSIONS[0].id} 至 V${LIVE_VERSIONS[LIVE_VERSIONS.length - 1].id} 的高难关卡轮换记录：混沌回忆、虚构叙事、末日幻影与异相仲裁。名称、起止日期、环境效果与敌方编成按社区 Wiki 逐期整理；页面未收录的部分明确留空，不作补写。`,
      actions: `<button class="btn btn-quiet btn-sm" type="button" data-export-stages>${icon('download', 15)}导出全部关卡</button>`,
      meta: `<span class="meta-pill">${STAGES.length} 期已收录</span><span class="meta-pill">${versionsWithStages.length} 个版本有轮换</span><span class="meta-pill tone-gold">异相仲裁 3.6 起</span>`,
    })}

    <nav class="mode-tabs" aria-label="按关卡模式筛选">
      <a class="mode-tab${STATE.mode === 'all' ? ' is-active' : ''}" href="#/stages">
        ${icon('grid', 15)}全部模式<em>${STAGES.length}</em>
      </a>
      ${modeKeys.map((k) => {
        const m = STAGE_TYPES[k];
        return `<a class="mode-tab${STATE.mode === k ? ' is-active' : ''}" href="#/stages?mode=${k}" style="--mc:${m.color}">
          <span>${m.icon}</span>${m.name}<em>${STAGE_COUNTS[k]}</em>
        </a>`;
      }).join('')}
    </nav>

    <div class="stage-overview">
      ${MODE_ORDER.filter((k) => STAGE_TYPES[k]).map((k) => {
        const m = STAGE_TYPES[k];
        const list = STAGES.filter((s) => s.mode === k);
        const newest = latest[k];
        return `<a class="so-tile${STATE.mode === k ? ' is-active' : ''}" href="#/stages?mode=${k}" style="--mc:${m.color}">
          <span class="so-icon">${m.icon}</span>
          <div><b>${m.name}</b><em>${list.length} 期 · ${newest ? `最新 V${newest.version}「${esc(stageTitle(newest))}」` : '未归档'}</em></div>
          <span class="so-arrow">${icon('arrowRight', 13)}</span>
        </a>`;
      }).join('')}
    </div>

    ${STATE.mode === 'aa' || STATE.mode === 'all' ? arbitrationCallout() : ''}

    ${modeMeta ? `<section class="mode-focus">
      <div class="mf-copy">
        <span class="mf-icon" style="--mc:${modeMeta.color}">${modeMeta.icon}</span>
        <div>
          <p class="eyebrow">${esc(modeMeta.en).toUpperCase()}</p>
          <h2>${esc(modeMeta.name)}</h2>
          <p>${esc(modeMeta.desc)}</p>
          <div class="mf-meta"><span>起始 V${esc(modeMeta.startVersion)}</span><span>${esc(modeMeta.cadence)}</span><span>${STAGE_COUNTS[STATE.mode]} 期已归档</span></div>
        </div>
      </div>
      ${modeRealityNote(STATE.mode)}
    </section>` : ''}

    <div class="stage-filter-bar">
      <div class="sfb-row">
        <label class="search-field">${icon('search', 16)}<input type="search" id="stage-q" placeholder="搜索关卡名、敌人、环境效果…" value="${esc(STATE.q)}" autocomplete="off"></label>
        <label class="select-field"><span>版本</span>
          <select id="stage-version">
            <option value="all">全部版本</option>
            ${versionsWithStages.map((v) => `<option value="${v}"${STATE.version === v ? ' selected' : ''}>V${v} · ${VERSION_BY_ID[v]?.title || ''}</option>`).join('')}
          </select>
        </label>
        <label class="select-field"><span>排序</span>
          <select id="stage-sort">
            <option value="newest"${STATE.sort === 'newest' ? ' selected' : ''}>版本从新到旧</option>
            <option value="oldest"${STATE.sort === 'oldest' ? ' selected' : ''}>版本从旧到新</option>
          </select>
        </label>
        <button class="btn btn-quiet btn-sm" type="button" id="stage-reset">${icon('refresh', 14)}重置</button>
      </div>
      <div class="result-bar"><span id="stage-count"></span><span class="result-hint" id="stage-hint">按社区 Wiki 收录 · 点击进入完整档案</span></div>
    </div>

    <div id="stage-timeline" class="stage-timeline"></div>

    ${pageFootNote('关卡名称、起止日期、环境效果与敌方编成整理自 BWIKI 崩坏：星穹铁道 Wiki 的历代轮换页面；部分早期期数或首领页仅收录名称 / 挑战目标，页面会标注「未收录编成」，不做推测补写。本档案只做静态记录，不提供配队、伤害或行动轴模拟。')}
  </div>`;

  return {
    html,
    mount(root) {
      const timeline = root.querySelector('#stage-timeline');
      const count = root.querySelector('#stage-count');

      const draw = () => {
        const q = STATE.q.trim().toLowerCase();
        let list = STAGES.filter((s) => {
          if (STATE.mode !== 'all' && s.mode !== STATE.mode) return false;
          if (STATE.version !== 'all' && s.version !== STATE.version) return false;
          if (q) {
            const hay = [
              s.name, stageTitle(s), s.mode, STAGE_TYPES[s.mode]?.name,
              s.startDate, s.endDate, s.effects.join(' '),
              stageNodes(s).map((n) => n.label).join(' '),
              stageEnemyNames(s).join(' '),
            ].join(' ').toLowerCase();
            if (!hay.includes(q)) return false;
          }
          return true;
        });
        const direction = STATE.sort === 'oldest' ? 1 : -1;
        list = [...list].sort((a, b) => direction * (versionIndex(a.version) - versionIndex(b.version))
          || direction * String(a.startDate || '').localeCompare(String(b.startDate || '')));
        const groups = new Map();
        for (const s of list) {
          if (!groups.has(s.version)) groups.set(s.version, []);
          groups.get(s.version).push(s);
        }
        count.innerHTML = `<b>${list.length}</b> 期轮换 · ${groups.size} 个版本`;
        if (!list.length) {
          timeline.innerHTML = `<div class="empty-state tall"><div class="empty-ico">${icon('map', 28)}</div>
            <h2>没有匹配的关卡</h2><p>尝试清空关键词或切换版本。</p>
            <button class="btn btn-ghost btn-sm" type="button" id="stage-empty-reset">清空筛选</button></div>`;
          timeline.querySelector('#stage-empty-reset')?.addEventListener('click', reset);
          return;
        }
        timeline.innerHTML = [...groups.entries()].map(([version, items]) => {
          const v = VERSION_BY_ID[version];
          const modeBits = MODE_ORDER.filter((m) => items.some((x) => x.mode === m)).map((m) => `<span style="--mc:${STAGE_TYPES[m].color}">${STAGE_TYPES[m].icon} ${STAGE_TYPES[m].name}</span>`).join('');
          return `<section class="timeline-group">
            <header class="tg-head">
              <div class="tg-ver"><b>V${esc(version)}</b><em>${esc(v?.title || '')}</em></div>
              <span class="tg-date">${fmt.date(v?.date || items[0]?.startDate)}</span>
              <span class="tg-count">${items.length} 期</span>
              <div class="tg-modes">${modeBits}</div>
              <a class="tg-link" href="#/updates?v=${encodeURIComponent(version)}">版本更新 ${icon('chevronRight', 12)}</a>
            </header>
            <div class="tg-grid">${items.map((s) => stageCard(s)).join('')}</div>
          </section>`;
        }).join('');
      };

      const reset = () => {
        STATE.version = 'all';
        STATE.q = '';
        STATE.sort = 'newest';
        root.querySelector('#stage-q').value = '';
        root.querySelector('#stage-version').value = 'all';
        root.querySelector('#stage-sort').value = 'newest';
        draw();
      };

      root.querySelector('#stage-q')?.addEventListener('input', (e) => { STATE.q = e.target.value; draw(); });
      root.querySelector('#stage-version')?.addEventListener('change', (e) => { STATE.version = e.target.value; draw(); });
      root.querySelector('#stage-sort')?.addEventListener('change', (e) => { STATE.sort = e.target.value; draw(); });
      root.querySelector('#stage-reset')?.addEventListener('click', reset);
      root.querySelector('[data-export-stages]')?.addEventListener('click', () => {
        downloadJSON({ ...allStagesBundle(), disclaimer: DISCLAIMER.short }, '星轨档案-全部历代关卡');
        toast(`已导出 ${STAGES.length} 期关卡档案`, { tone: 'good' });
      });

      draw();
    },
  };
}

function arbitrationCallout() {
  return `<div class="aa-callout">
    <div class="aa-badge"><span>♛</span><em>异相仲裁</em><b>3.6 上线</b></div>
    <div class="aa-copy">
      <h3>第四个常驻高难玩法 · 三骑士 + 王棋</h3>
      <p>每期 3 个「骑士」关 + 1 个「王棋」关；骑士关需使用三支不重复的队伍，每关限定 6 轮行动值。通关骑士关会阻断王棋的能量输送并降低其难度。该玩法不产出星琼。</p>
      <div class="aa-tags"><span>3 队不重复</span><span>每关 6 轮行动值</span><span>骑士通关削弱王棋</span><span>无星琼奖励</span></div>
    </div>
    <a class="btn btn-ghost btn-sm" href="#/stages?mode=aa">查看 ${STAGE_COUNTS.aa} 期 ${icon('arrowRight', 14)}</a>
  </div>`;
}

function modeRealityNote(mode) {
  const list = STAGES.filter((s) => s.mode === mode);
  const withRecords = list.filter((s) => stageEnemyNames(s).length > 0).length;
  const withWaves = list.filter((s) => stageWaveCount(s) > 0).length;
  const missingWaves = list.length - withWaves;
  const newest = list[list.length - 1] || { levels: [], bosses: [], nodes: [] };
  const newestWaves = stageWaveCount(newest);
  return `<div class="mf-reality">
    <div class="mfr-num"><b>${withRecords}</b><span>/ ${list.length} 期含敌方记录</span></div>
    <p>${missingWaves ? `其中 ${missingWaves} 期只收录了关卡 / 首领名称、日期或挑战目标，没有逐波编成，页面明确标注「未收录」。` : '当前收录的各期均带有逐波编成。'}</p>
    <div class="mfr-facts">
      ${newestWaves
        ? `<span>${newestWaves} 波（最新一期）</span><span>${stageEnemyCount(newest)} 名敌人（最新一期）</span>`
        : `<span>最新一期：${stageEnemyNames(newest).length ? `仅首领名称 ${stageEnemyNames(newest).length} 条` : '编成未收录'}</span>`}
    </div>
  </div>`;
}
