import {
  APP, COUNTS, STAGE_TYPES, CHANGELOG, CHANGE_TYPES, CHARACTERS, versionIndex, LIVE_VERSIONS,
  latestRotationByMode, stageTitle, stageEnemyNames,
} from '../data/index.js';
import {
  esc, icon, fmt, elementChip, pathChip, rarityStars, modeBadge,
  changeBadge, sectionHead,
} from '../ui.js';
import { portraitSrc, stageArtSrc } from '../assets.js';
import { availablePacks, getCachedPacks } from '../store.js';
import { chartCard, mountChartCard } from '../charts.js';
import { CHART_COLORS } from '../data/meta.js';
import { modeSummaryCard, pageFootNote } from './shared.js';

const MODE_KEYS = ['moc', 'pf', 'as', 'aa'];

export async function render(ctx) {
  ctx.setTitle('概览');
  const featured = [...CHARACTERS]
    .sort((a, b) => versionIndex(b.releaseVersion) - versionIndex(a.releaseVersion))
    .slice(0, 6);
  const latestAA = latestRotationByMode('aa');
  const latestMoc = latestRotationByMode('moc');
  const latestPf = latestRotationByMode('pf');
  const latestAs = latestRotationByMode('as');

  const html = `<div class="page home-page">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">STELLAR ARCHIVE · 数据归档至 V${esc(APP.latestLive)}</p>
        <h1>把每一次版本改动，<br><span>留在星轨上。</span></h1>
        <p class="hero-lead">非官方、纯静态的《崩坏：星穹铁道》战斗数据档案馆。角色数值、光锥遗器与历代高难关卡轮换，按信任等级分区归档，可回溯、可对比、可离线查阅。</p>
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" href="#/stages">${icon('map', 17)}进入关卡档案</a>
          <button class="btn btn-ghost btn-lg" type="button" data-search-open>${icon('search', 16)}搜索全档案 <kbd>/</kbd></button>
        </div>
        <div class="hero-stats">
          <div><b>${COUNTS.characters}</b><span>已上线角色</span></div>
          <div><b>${COUNTS.stages}</b><span>历代关卡轮换</span></div>
          <div><b>${COUNTS.versions}</b><span>归档正式版本</span></div>
          <div><b>${COUNTS.stageModes}</b><span>常驻高难玩法</span></div>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-orbit">
          <span class="ho-ring r1"></span><span class="ho-ring r2"></span><span class="ho-ring r3"></span>
          <span class="ho-core"><img src="${stageArtSrc(latestAA, STAGE_TYPES.aa, { labels: false })}" alt=""></span>
          <span class="ho-node n1" style="--nc:${STAGE_TYPES.moc.color}"><b>◈</b><em>混沌回忆</em></span>
          <span class="ho-node n2" style="--nc:${STAGE_TYPES.pf.color}"><b>❖</b><em>虚构叙事</em></span>
          <span class="ho-node n3" style="--nc:${STAGE_TYPES.as.color}"><b>✶</b><em>末日幻影</em></span>
          <span class="ho-node n4" style="--nc:${STAGE_TYPES.aa.color}"><b>♛</b><em>异相仲裁</em></span>
        </div>
        <p class="hero-visual-cap">V${esc(APP.latestLive)} · ${fmt.date(APP.lastUpdated)} 归档</p>
      </div>
    </section>

    <section class="update-banner" id="home-update-banner">
      <span class="ub-ico">${icon('refresh', 19)}</span>
      <div class="ub-copy">
        <strong>数据档案已更新至 V${esc(APP.dataVersion)}</strong>
        <p>${esc(APP.lastUpdated)} 归档 · 查看 V${esc(LIVE_VERSIONS[0].id)}–V${esc(LIVE_VERSIONS[LIVE_VERSIONS.length - 1].id)} 历代关卡轮换、异相仲裁与全角色档案。</p>
      </div>
      <div class="ub-side" id="home-pack-status"><span class="ub-pill">本机数据包检查中…</span></div>
      <a class="btn btn-quiet btn-sm" href="#/updates">更新中心 ${icon('arrowRight', 14)}</a>
    </section>

    <section class="section">
      ${sectionHead('本期星轨焦点', '先看关卡，再看角色。历代高难轮换是这座档案库的主轴。', `<a class="link-more" href="#/stages">全部 ${COUNTS.stages} 期轮换 ${icon('arrowRight', 14)}</a>`, 'STAGE ARCHIVE')}
      <div class="stage-spotlight">
        <a class="spotlight-main" href="#/stage/${esc(latestAA.id)}">
          <div class="spotlight-art">
            <img src="${stageArtSrc(latestAA, STAGE_TYPES.aa, { labels: false })}" alt="${esc(latestAA.name)}关卡占位图" width="640" height="360">
            <span class="spot-art-badge">${modeBadge('aa')}</span>
            <span class="sha-label">程序占位图 · 非官方美术</span>
          </div>
          <div class="spotlight-body">
            <p class="eyebrow">LATEST ROTATION · V${esc(latestAA.version)}</p>
            <h3>${esc(stageTitle(latestAA))}</h3>
            <p class="spot-desc">本期三关「骑士」各需一支不重复队伍，每关 6 轮行动值；通关骑士可削弱最终「王棋」。本页记录该期真实节点与敌人。</p>
            <div class="spot-facts">
              <span>${icon('layers', 14)}3 骑士 + 1 王棋</span>
              <span>${icon('clock', 14)}每关 6 轮行动值</span>
              <span>${icon('users', 14)}3 队角色不重复</span>
            </div>
            <div class="spot-tags">${(latestAA.effects.length ? latestAA.effects.slice(0, 2) : stageEnemyNames(latestAA).slice(0, 3)).map((m) => `<span>${esc(m)}</span>`).join('')}</div>
            <span class="spot-cta">查看本期完整档案 ${icon('arrowRight', 15)}</span>
          </div>
        </a>
        <div class="spotlight-side">
          ${[latestMoc, latestPf, latestAs].map((r) => `<a class="spot-mini" href="#/stage/${esc(r.id)}" style="--mc:${STAGE_TYPES[r.mode].color}">
            <span class="sm-mode">${modeBadge(r.mode)}</span>
            <strong>${esc(stageTitle(r))}</strong>
            <em>V${esc(r.version)} · ${r.startDate ? fmt.date(r.startDate) : '日期未收录'}</em>
            <span class="sm-link">${icon('chevronRight', 14)}</span>
          </a>`).join('')}
          <a class="spot-all" href="#/stages">${icon('map', 16)}<span><b>历代关卡时间线</b><em>${COUNTS.stages} 期 · 4 种模式 · 可追溯至 V1.0</em></span>${icon('arrowRight', 15)}</a>
        </div>
      </div>
      <div class="mode-summary-grid">
        ${MODE_KEYS.map((m) => modeSummaryCard(m)).join('')}
      </div>
    </section>

    <section class="section">
      ${sectionHead('三条入口，一个档案库', '正式档案与未实机前瞻在物理与视觉上隔离；当前前瞻区为空，不用虚构内容填充。', '', 'ENTRY POINTS')}
      <div class="entry-grid">
        <a class="entry-card tone-gold" href="#/stages">
          <span class="ec-kicker">P0 · 核心</span>
          <span class="ec-icon">${icon('map', 24)}</span>
          <h3>历代关卡档案馆</h3>
          <p>混沌回忆、虚构叙事、末日幻影与异相仲裁，按版本归档真实关卡名、日期、环境效果与敌方编成；缺收录处明确留空。</p>
          <span class="ec-foot">${COUNTS.stages} 期轮换 <b>${icon('arrowRight', 14)}</b></span>
        </a>
        <a class="entry-card tone-blue" href="#/characters">
          <span class="ec-kicker">P0 · 角色</span>
          <span class="ec-icon">${icon('users', 24)}</span>
          <h3>角色与装备档案</h3>
          <p>${COUNTS.characters} 名角色满级数值、成长曲线、技能倍率、星魂行迹与版本快照；光锥、遗器与敌人档案为独立演示目录。</p>
          <span class="ec-foot">${COUNTS.characters} 名角色 · ${COUNTS.lightCones} 光锥 <b>${icon('arrowRight', 14)}</b></span>
        </a>
        <a class="entry-card tone-red" href="#/unreleased">
          <span class="ec-kicker">隔离区 · 强警示</span>
          <span class="ec-icon">${icon('warning', 24)}</span>
          <h3>未实机前瞻专区</h3>
          <p>为测试服与预下载埋包预留的隔离区。当前没有可核对条目，不用虚构内容填充；默认不进入搜索，也不挂载同人图。</p>
          <span class="ec-foot">${COUNTS.beta + COUNTS.unreleased + COUNTS.scrapped} 条前瞻 / 废弃 <b>${icon('arrowRight', 14)}</b></span>
        </a>
      </div>
    </section>

    <section class="section">
      ${sectionHead('近期上线', '按上线版本从新到旧排列；官方美术位置使用程序占位图，数值整理自米游社 Wiki。', `<a class="link-more" href="#/characters">全部角色 ${icon('arrowRight', 14)}</a>`, 'NEW RELEASES')}
      <div class="featured-rail">
        ${featured.map((c) => `<a class="featured-card" href="#/character/${esc(c.id)}" style="--el:${elementColor(c.element)}">
          <div class="fc-art"><img src="${portraitSrc(c)}" alt="${esc(c.name)}立绘占位图" loading="lazy" width="660" height="880"></div>
          <div class="fc-info">
            <span class="fc-rarity">${rarityStars(c.rarity)}</span>
            <h3>${esc(c.name)}</h3>
            <div>${elementChip(c.element, { compact: true })}${pathChip(c.path)}</div>
            ${c.en ? `<em>${esc(c.en)}</em>` : ''}
          </div>
        </a>`).join('')}
      </div>
    </section>

    <section class="section">
      ${sectionHead('角色分布速览', '横轴速度、纵轴攻击力。金色标签为重点角色；悬停或聚焦查看数值。', `<a class="link-more" href="#/characters">进入角色档案 ${icon('arrowRight', 14)}</a>`, 'DATA SNAPSHOT')}
      ${chartCard(scatterSpec(featured))}
    </section>

    <section class="section split-section">
      <div class="split-main">
        ${sectionHead('最近归档', '按版本记录的数据包与关卡变更。', `<a class="link-more" href="#/updates">完整更新日志 ${icon('arrowRight', 14)}</a>`, 'CHANGELOG')}
        <div class="change-preview">
          ${CHANGELOG.slice(0, 4).map((log) => `<a class="change-row" href="#/updates?v=${encodeURIComponent(log.version)}">
            <div class="cr-ver"><b>V${esc(log.version)}</b><span>${fmt.date(log.date)}</span></div>
            <div class="cr-main">
              <p>${esc(log.summary)}</p>
              <div class="cr-tags">${log.entries.slice(0, 3).map((e) => changeBadge(e.type, CHANGE_TYPES)).join('')}<em>${log.entries.length} 条记录</em></div>
            </div>
            ${icon('chevronRight', 15)}
          </a>`).join('')}
        </div>
      </div>
      <aside class="split-side">
        ${sectionHead('装备与敌人', '静态档案，均可离线浏览。', '', 'CATALOG')}
        <div class="catalog-links">
          <a href="#/lightcones"><span>${icon('spark', 18)}</span><div><b>光锥档案</b><em>${COUNTS.lightCones} 张 · 叠影数值</em></div>${icon('chevronRight', 14)}</a>
          <a href="#/relics"><span>${icon('layers', 18)}</span><div><b>遗器档案</b><em>${COUNTS.relics} 套 · 主副词条</em></div>${icon('chevronRight', 14)}</a>
          <a href="#/enemies"><span>${icon('skull', 18)}</span><div><b>敌人档案</b><em>${COUNTS.enemies} 名 · 抗性成长</em></div>${icon('chevronRight', 14)}</a>
          <a href="#/compare"><span>${icon('compare', 18)}</span><div><b>多角色对比</b><em>2–4 名 · 雷达与技能</em></div>${icon('chevronRight', 14)}</a>
        </div>
      </aside>
    </section>

    ${pageFootNote('角色数值、技能、星魂与行迹整理自米游社《崩坏：星穹铁道》WIKI；关卡名称、日期、环境效果与敌方编成整理自 BWIKI。缺失内容保持留空，不做估算补写。光锥、遗器与敌人目录仍标注为结构演示。非官方工具，与 miHoYo / HoYoverse 无关联。')}
  </div>`;

  return {
    html,
    async mount(root) {
      mountChartCard(scatterSpec(featured));
      const status = root.querySelector('#home-pack-status');
      if (status) {
        try {
          const [cached, avail] = await Promise.all([getCachedPacks(), availablePacks()]);
          status.innerHTML = `<span class="ub-pill tone-good">本机已缓存 ${cached.length} 个数据包</span>${avail.length ? `<span class="ub-pill tone-warn">${avail.length} 个增量包可下载</span>` : '<span class="ub-pill">已是最新</span>'}`;
        } catch {
          status.innerHTML = '<span class="ub-pill">离线缓存可用</span>';
        }
      }
    },
  };
}

function elementColor(el) {
  const map = {
    physical: '#d7ddea', fire: '#ff7a5c', ice: '#74d8ff', lightning: '#c9a0ff',
    wind: '#63e2b4', quantum: '#a196ff', imaginary: '#ffd479',
  };
  return map[el] || '#f2c96b';
}

function scatterSpec(featured = []) {
  const chars = CHARACTERS;
  const labels = new Set(featured.map((c) => c.id));
  return {
    id: 'home-scatter',
    title: '已上线角色满级攻击 / 速度分布',
    subtitle: `${chars.length} 名已上线角色 · Lv.80 满级基础数值 · 单系列散点，金色为近期上线角色`,
    chart: {
      type: 'scatter',
      points: chars.map((c) => ({ id: c.id, x: c.lv80.spd, y: c.lv80.atk, label: c.name })),
      xLabel: '速度 SPD',
      yLabel: '攻击力 ATK',
      height: 360,
      color: CHART_COLORS.series[0],
      labelIds: [...labels],
      ariaLabel: '已上线角色满级攻击力与速度散点图',
      formatX: (v) => String(v),
      formatY: (v) => fmt.int(v),
    },
    table: {
      headers: ['角色', '攻击力', '速度', '命途', '上线版本'],
      rows: [...chars].sort((a, b) => b.lv80.atk - a.lv80.atk).map((c) => [c.name, c.lv80.atk, c.lv80.spd, c.path, c.releaseVersion]),
    },
    footnote: '仅展示基础面板，不含光锥、遗器与战斗增益，不构成强度或配队建议。',
  };
}
