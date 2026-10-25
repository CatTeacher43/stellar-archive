import {
  STAGE_MAP, STAGE_TYPES,
  stageNodes, stageEnemyNames, stageWaveCount, stageEnemyCount, stageTitle,
  adjacentRotations, getRotationsByMode, getRotationsByVersion,
  ELEMENTS, VERSION_BY_ID,
} from '../data/index.js';
import { esc, icon, fmt, modeBadge, sourceBlock, toast } from '../ui.js';
import { stageArtSrc } from '../assets.js';
import { stageBundle, stageCSV, downloadJSON, downloadCSV } from '../export.js';
import { breadcrumb, pageFootNote } from './shared.js';

const CN_ELEMENT = {
  物理: 'physical', 火: 'fire', 冰: 'ice', 雷: 'lightning',
  风: 'wind', 量子: 'quantum', 虚数: 'imaginary',
};

const NODE_KIND = {
  knight: { label: '骑士', note: '独立队伍 · 6 轮行动值' },
  king: { label: '王棋', note: '最终关 · 可用任意队伍' },
  'king-hard': { label: '王棋 · 绝境', note: '高难王棋 · 可用任意队伍' },
  boss: { label: '首领', note: '首领记录' },
};

export async function render(ctx) {
  const r = STAGE_MAP[ctx.params[0]];
  if (!r) {
    ctx.setTitle('未找到关卡');
    return {
      html: `<div class="page narrow-page"><div class="empty-state tall"><div class="empty-ico">${icon('compass', 28)}</div>
        <h2>关卡未收录</h2><p>该期轮换可能不在当前档案范围内。</p><a class="btn btn-primary" href="#/stages">返回关卡档案</a></div></div>`,
    };
  }
  const meta = STAGE_TYPES[r.mode];
  const nodes = stageNodes(r);
  const title = stageTitle(r);
  const enemyCount = stageEnemyCount(r);
  const nav = adjacentRotations(r);
  const modeList = getRotationsByMode(r.mode);
  const sameVersion = getRotationsByVersion(r.version).filter((s) => s.id !== r.id);
  const vMeta = VERSION_BY_ID[r.version];
  const waveCount = stageWaveCount(r);
  const enemyNames = stageEnemyNames(r);
  const hasWaves = waveCount > 0;
  const bossOnly = !hasWaves && enemyNames.length > 0;
  ctx.setTitle(`${title} · ${meta.name}`);

  const html = `<div class="page stage-detail-page">
    ${breadcrumb([{ label: '关卡档案', href: '#/stages' }, { label: `V${r.version}`, href: `#/stages?version=${encodeURIComponent(r.version)}` }, { label: title }])}

    <section class="stage-hero" style="--mc:${meta.color}">
      <div class="stage-hero-art">
        <img src="${stageArtSrc(r, meta, { labels: false })}" alt="${esc(title)}程序占位图" width="640" height="360">
        <span class="sha-mode">${modeBadge(r.mode)}</span>
        <span class="sha-label">程序占位图 · 非官方美术</span>
      </div>
      <div class="stage-hero-main">
        <p class="eyebrow">${esc(meta.en).toUpperCase()} · V${esc(r.version)}</p>
        <h1>${esc(title)}</h1>
        ${r.name !== title ? `<p class="stage-fullname">${esc(r.name)}</p>` : ''}
        <div class="ch-chips">
          ${modeBadge(r.mode, { long: true })}
          <span class="tag tag-soft">V${esc(r.version)} · ${esc(vMeta?.title || '')}</span>
          ${r.startDate ? `<span class="tag tag-soft">${fmt.date(r.startDate)}${r.endDate ? ` – ${fmt.date(r.endDate)}` : ''}</span>` : ''}
          ${r.mode === 'aa' ? '<span class="tag tag-gold">三骑士 + 王棋</span>' : ''}
        </div>
        <div class="stage-facts">
          <div><span>战斗节点</span><b>${nodes.length || '—'}</b><em>${r.mode === 'aa' ? `3 骑士 + 王棋${nodes.some((n) => n.kind === 'king-hard') ? '（含绝境）' : ''}` : r.mode === 'as' ? '首领记录' : '层 / 半区'}</em></div>
          <div><span>波次</span><b>${hasWaves ? waveCount : '—'}</b><em>${hasWaves ? '按社区页面收录' : bossOnly ? '仅首领名称' : '编成未收录'}</em></div>
          <div><span>敌人条目</span><b>${hasWaves ? enemyCount : bossOnly ? enemyNames.length : '—'}</b><em>${hasWaves ? '含重复出现' : bossOnly ? '首领名称' : '编成未收录'}</em></div>
          <div><span>环境效果</span><b>${r.effects.length}</b><em>${r.effects.length ? '本期记录' : '社区页面未单列'}</em></div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-quiet btn-sm" type="button" data-export-stage>${icon('download', 14)}JSON</button>
          <button class="btn btn-quiet btn-sm" type="button" data-export-stage-csv>${icon('table', 14)}CSV</button>
          <button class="btn btn-quiet btn-sm" type="button" data-action="copy-link">${icon('share', 14)}复制链接</button>
          <a class="btn btn-ghost btn-sm" href="#/stages?mode=${r.mode}">${icon('map', 14)}同模式历代</a>
        </div>
      </div>
    </section>

    <section class="section stage-record-section">
      <div class="stage-record-grid">
        <div class="side-panel stage-effects">
          <div class="sp-head">${icon('settings', 16)}<h3>本期环境效果</h3><span>${r.effects.length} 条</span></div>
          ${r.effects.length
            ? `<ol class="modifier-list">${r.effects.map((m, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><p>${esc(m)}</p></li>`).join('')}</ol>`
            : `<p class="side-note">该期社区页面未单独列出环境效果。</p>`}
        </div>
        <div class="side-panel">
          <div class="sp-head">${icon('archive', 16)}<h3>收录范围</h3><span>${hasWaves ? '含编成' : bossOnly ? '仅首领' : '仅名称 / 目标'}</span></div>
          <ul class="record-list">
            <li>${icon('check', 13)}<span>关卡名称：${esc(r.name)}</span></li>
            <li>${icon('check', 13)}<span>版本与日期：V${esc(r.version)}${r.startDate ? ` · ${fmt.date(r.startDate)} 起` : ''}</span></li>
            <li>${icon('check', 13)}<span>环境效果：${r.effects.length} 条</span></li>
            <li class="${hasWaves ? '' : 'is-gap'}">${icon(hasWaves ? 'check' : 'warning', 13)}<span>敌方编成：${hasWaves ? `${waveCount} 波 / ${enemyCount} 条` : bossOnly ? `仅首领名称 ${enemyNames.length} 条` : '社区页面未收录'}</span></li>
          </ul>
          <p class="side-note">档案只记录社区 Wiki 已公开的内容；缺失部分留空，不使用估算或生成值填充。</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">BATTLE NODES</p><h2>${r.mode === 'aa' ? '骑士与王棋' : r.mode === 'as' ? '首领记录' : '层数与敌方编成'}</h2><p>按社区页面逐节点整理；敌人以名称记录，不链接到演示敌人数值。</p></div>
        <span class="node-total">${nodes.length} 个节点</span>
      </div>
      ${nodes.length ? `<div class="node-list">${nodes.map((node, i) => nodeCard(node, i, r)).join('')}</div>`
        : `<div class="stage-gap"><span>${icon('warning', 18)}</span><div><b>本期未收录战斗节点</b><p>社区页面只保留了名称、日期或挑战目标，没有可核对的波次与敌人编成。此处不做补写。</p></div></div>`}
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">HISTORICAL LINE</p><h2>${esc(meta.name)}历代轮换</h2><p>同一模式的 ${modeList.length} 期档案，可沿版本回溯。</p></div>
        <a class="link-more" href="#/stages?mode=${r.mode}">完整模式档案 ${icon('arrowRight', 14)}</a>
      </div>
      <div class="stage-history-rail">
        ${modeList.map((s) => `<a class="shr-chip${s.id === r.id ? ' is-active' : ''}" href="#/stage/${s.id}">
          <b>V${s.version}</b><em>${esc(stageTitle(s))}</em>${s.id === r.id ? '<span>当前</span>' : ''}
        </a>`).join('')}
      </div>
      <div class="adjacent-nav">
        ${nav.older ? `<a class="adj-card" href="#/stage/${nav.older.id}">${icon('arrowLeft', 15)}<span><em>更早一期 · V${esc(nav.older.version)}</em><b>${esc(stageTitle(nav.older))}</b></span></a>` : '<span class="adj-card is-disabled"><em>已是档案中最早一期</em></span>'}
        ${nav.newer ? `<a class="adj-card align-right" href="#/stage/${nav.newer.id}"><span><em>更新一期 · V${esc(nav.newer.version)}</em><b>${esc(stageTitle(nav.newer))}</b></span>${icon('arrowRight', 15)}</a>` : '<span class="adj-card align-right is-disabled"><em>已是档案中最新一期</em></span>'}
      </div>
      ${sameVersion.length ? `<div class="same-version">
        <span>同版本其他关卡</span>
        ${sameVersion.map((s) => `<a href="#/stage/${s.id}" style="--mc:${STAGE_TYPES[s.mode].color}">${STAGE_TYPES[s.mode].icon} ${esc(stageTitle(s))}</a>`).join('')}
      </div>` : ''}
    </section>

    ${sourceBlock(r.source)}
    ${pageFootNote('关卡名称、日期、环境效果与敌方编成整理自 BWIKI 崩坏：星穹铁道 Wiki；缺失编成的期数保持留空。页面不提供配队、伤害或行动轴模拟。异相仲裁机制说明参考官方公告与公开社区资料。')}
  </div>`;

  return {
    html,
    mount(root) {
      root.querySelector('[data-export-stage]')?.addEventListener('click', () => {
        downloadJSON(stageBundle(r), `${r.mode.toUpperCase()}-V${r.version}-${title}`);
        toast('关卡档案已导出 JSON', { tone: 'good' });
      });
      root.querySelector('[data-export-stage-csv]')?.addEventListener('click', () => {
        const { headers, rows } = stageCSV(r);
        downloadCSV(headers, rows, `${r.mode.toUpperCase()}-V${r.version}-${title}`);
        toast('关卡编成已导出 CSV', { tone: 'good' });
      });
    },
  };
}

function nodeCard(node, index, stage) {
  const kind = NODE_KIND[node.kind];
  const waves = node.waves || [];
  const teams = [...new Set(waves.map((w) => w.team).filter((t) => t != null))];
  const hasTeamSplit = teams.length > 1;
  const kindLabel = kind?.label || '节点';
  return `<article class="node-card${node.kind ? ` is-${node.kind}` : ''}">
    <header class="node-head">
      <span class="node-no">${String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>${esc(node.label)}</h3>
        <em>${kindLabel}${kind?.note ? ` · ${kind.note}` : ''}${node.level ? ` · 敌方等级 ${node.level}` : ''}</em>
      </div>
      <span class="node-count">${waves.length ? `${waves.length} 波` : '编成未收录'}</span>
    </header>
    ${waves.length ? (hasTeamSplit
      ? teams.map((team) => `<div class="wave-team">
          <div class="wave-team-head">队伍${team === 1 ? '一' : team === 2 ? '二' : ` ${team}`}</div>
          <div class="wave-list">${waves.filter((w) => w.team === team).map((w, i) => waveCard(w, i)).join('')}</div>
        </div>`).join('')
      : `<div class="wave-list">${waves.map((w, i) => waveCard(w, i)).join('')}</div>`)
      : `<p class="node-gap">${icon('info', 13)}该节点在社区页面只收录了名称${node.kind === 'boss' ? '，没有波次与敌人明细' : '，没有波次编成'}。</p>`}
  </article>`;
}

function waveCard(w, i) {
  return `<div class="wave-card">
    <header class="wave-head">
      <span class="wave-no">${esc(w.label || `第${i + 1}波`)}</span>
      <span class="wave-count">${(w.enemies || []).length} 名敌人</span>
    </header>
    <div class="wave-enemies">
      ${(w.enemies || []).map((name) => `<span class="wave-enemy is-plain"><span class="we-main"><b>${esc(name)}</b></span></span>`).join('')}
    </div>
    ${w.elements?.length ? `<p class="wave-elements"><span>弱点属性</span>${w.elements.map((el) => {
      const key = CN_ELEMENT[el];
      const meta = key ? ELEMENTS[key] : null;
      return `<i style="--wc:${meta?.color || 'var(--gold)'}">${esc(el)}</i>`;
    }).join('')}</p>` : ''}
  </div>`;
}
