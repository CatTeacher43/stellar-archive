import {
  CHARACTER_MAP, characterVersions, getCharacterSnapshot, STAT_META,
  growthSeries, VERSION_BY_ID, APP, DISCLAIMER,
} from '../data/index.js';
import { esc, icon, fmt, toast } from '../ui.js';
import { chartCard, mountChartCard, fmtNum, lineTable } from '../charts.js';
import { CHART_COLORS } from '../data/meta.js';
import { downloadJSON } from '../export.js';
import { breadcrumb, pageFootNote, warningBanner } from './shared.js';

export async function render(ctx) {
  const id = ctx.params[0];
  const c = CHARACTER_MAP[id];
  if (!c || c.status !== 'live') {
    ctx.setTitle('无法对比');
    return {
      html: `<div class="page narrow-page"><div class="empty-state tall">
        <div class="empty-ico">${icon('warning', 28)}</div>
        <h2>该条目不支持版本对比</h2>
        <p>测试服、未实机与已废弃内容不进入正式快照链。</p>
        <a class="btn btn-primary" href="#/characters">返回角色档案</a>
      </div></div>`,
    };
  }
  const versions = characterVersions(c);
  if (versions.length < 2) {
    ctx.setTitle('无法对比');
    return {
      html: `<div class="page narrow-page"><div class="empty-state tall">
        <div class="empty-ico">${icon('compare', 28)}</div>
        <h2>暂无可对比的版本</h2>
        <p>${esc(c.name)} 只有一个正式快照。</p>
        <a class="btn btn-primary" href="#/character/${c.id}">返回角色详情</a>
      </div></div>`,
    };
  }

  const latest = versions[versions.length - 1];
  let v2 = versions.includes(ctx.query.v2) ? ctx.query.v2 : latest;
  let v1 = versions.includes(ctx.query.v1) ? ctx.query.v1 : versions[Math.max(0, versions.indexOf(v2) - 1)];
  if (!ctx.query.v1 && v2 === versions[0]) v1 = versions[0];
  const same = v1 === v2;

  const a = getCharacterSnapshot(c, v1);
  const b = getCharacterSnapshot(c, v2);
  const statDiffs = STAT_META.map((m) => ({ ...m, from: a.stats[m.key], to: b.stats[m.key], delta: b.stats[m.key] - a.stats[m.key] }));
  const skillRows = c.skills.map((base) => {
    const sa = a.skills.find((s) => s.key === base.key) || base;
    const sb = b.skills.find((s) => s.key === base.key) || base;
    return { ...base, a: sa, b: sb, changed: sa.lv1 !== sb.lv1 || sa.lv10 !== sb.lv10 };
  });
  const changedStats = statDiffs.filter((d) => d.delta !== 0).length;
  const changedSkills = skillRows.filter((s) => s.changed).length;
  const totalChanges = changedStats + changedSkills;
  const betweenPatches = b.appliedPatches.filter((p) => !a.appliedPatches.includes(p));

  ctx.setTitle(`${c.name} · 版本对比`);

  const html = `<div class="page version-compare-page">
    ${breadcrumb([{ label: '角色档案', href: '#/characters' }, { label: c.name, href: `#/character/${c.id}` }, { label: '版本对比' }])}

    <header class="compare-head">
      <div>
        <p class="eyebrow">VERSION DIFF · ${esc((c.en || '').toUpperCase())}</p>
        <h1>${esc(c.name)} <span>版本对比</span></h1>
        <p class="ph-desc">把两个正式快照并排查看。绿色表示数值上调、红色表示下调，仅记录档案差异，不代表强度结论。</p>
      </div>
      <div class="ph-actions">
        <button class="btn btn-quiet btn-sm" type="button" data-export-compare>${icon('download', 14)}导出对比 JSON</button>
        <button class="btn btn-quiet btn-sm" type="button" data-action="copy-link">${icon('share', 14)}复制链接</button>
      </div>
    </header>

    <div class="compare-switch">
      <label class="vs-select"><span>旧快照</span>
        <select id="compare-v1">${optionHtml(versions, v1)}</select>
      </label>
      <button class="vs-swap" type="button" data-swap title="交换版本">${icon('compare', 16)}</button>
      <label class="vs-select"><span>新快照</span>
        <select id="compare-v2">${optionHtml(versions, v2)}</select>
      </label>
      <div class="vs-summary">
        ${same ? '<span class="tone-warn">请选择两个不同版本</span>' : `<strong>${totalChanges}</strong> 处记录差异 <em>${changedStats} 项面板 · ${changedSkills} 个技能</em>`}
      </div>
      <a class="btn btn-ghost btn-sm" href="#/character/${c.id}?v=${encodeURIComponent(v2)}">返回角色 ${icon('arrowRight', 14)}</a>
    </div>

    ${same ? warningBanner({ tone: 'warning', title: '同一版本', text: '旧快照与新快照相同，无法产生差异。请在上方切换其中一个版本。' }) : ''}

    ${!same && totalChanges === 0 ? `<div class="no-diff-panel">
      ${icon('check', 20)}
      <div><strong>两个版本之间没有记录到数值差异</strong><p>当前档案只保留角色上线时的满级面板与技能倍率，没有逐版本的平衡调整记录，因此两个快照之间通常不会产生差异。此处不补写改动。</p></div>
    </div>` : ''}

    ${!same ? `<section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">STAT DIFF</p><h2>基础面板差异</h2><p>Lv.80 基础数值。绿色上调、红色下调，未变项保持静默。</p></div>
        <div class="diff-legend"><span class="is-up">▲ 上调</span><span class="is-down">▼ 下调</span><span>— 未变</span></div>
      </div>
      <div class="table-wrap compare-table">
        <table>
          <thead><tr><th>属性</th><th>V${esc(v1)}</th><th>V${esc(v2)}</th><th>变化</th></tr></thead>
          <tbody>${statDiffs.map((d) => `<tr class="${d.delta > 0 ? 'is-up' : d.delta < 0 ? 'is-down' : ''}">
            <th scope="row">${esc(d.name)} <em>${d.short}</em></th>
            <td>${fmt.int(d.from)}</td>
            <td><b>${fmt.int(d.to)}</b></td>
            <td>${deltaCell(d.delta)}</td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">SKILL DIFF</p><h2>技能倍率差异</h2><p>变化行高亮。不同单位不可直接比较。</p></div></div>
      <div class="table-wrap compare-table">
        <table>
          <thead><tr><th>技能</th><th>单位</th><th>Lv.1 旧</th><th>Lv.1 新</th><th>Lv.10 旧</th><th>Lv.10 新</th><th>变化</th></tr></thead>
          <tbody>${skillRows.map((s) => `<tr class="${s.changed ? 'is-changed' : ''}">
            <th scope="row"><b>${esc(s.name)}</b><em>${esc(s.tag)}</em></th>
            <td>${esc(s.unit)}</td>
            <td>${s.chart ? s.a.lv1 : '—'}</td>
            <td>${s.chart ? s.b.lv1 : '—'}</td>
            <td>${s.chart ? s.a.lv10 : '—'}</td>
            <td>${s.chart ? s.b.lv10 : '—'}</td>
            <td>${skillDelta(s)}</td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
    </section>

    <section class="section chart-section">
      <div class="chart-heading">
        <div><p class="eyebrow">GROWTH OVERLAY</p><h2>成长曲线叠加</h2><p>两个快照的同一指标叠加。旧快照使用虚线，新快照为实线。</p></div>
        <div class="metric-tabs" id="compare-growth-tabs" role="group" aria-label="选择成长指标">
          ${STAT_META.map((m, i) => `<button type="button" class="${i === 0 ? 'is-active' : ''}" data-metric="${m.key}">${m.name}</button>`).join('')}
        </div>
      </div>
      <div id="compare-growth-zone">${growthCard(a, b, v1, v2, 'hp')}</div>
    </section>

    ${betweenPatches.length ? `<section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">CHANGE NOTES</p><h2>版本间记录</h2><p>档案中可核对的版本条目。</p></div></div>
      <div class="between-patches">
        ${betweenPatches.map((p) => `<div class="bp-row"><b>V${esc(p.version)}</b><span>${esc(p.title)}</span></div>`).join('')}
      </div>
    </section>` : ''}` : ''}

    ${pageFootNote('版本对比只展示基础面板与技能倍率，不包含光锥、遗器、敌人环境或战斗模拟。当前档案只保留角色上线快照，没有逐版本平衡调整记录，不作补写；对比结果不构成强度结论。')}
  </div>`;

  return {
    html,
    mount(root) {
      if (same) {
        bindSelectors(root, versions, v1, v2, c.id);
        return;
      }
      mountChartCard(growthSpec(a, b, v1, v2, 'hp'));

      root.querySelector('#compare-growth-tabs')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-metric]');
        if (!btn) return;
        const metric = btn.getAttribute('data-metric');
        root.querySelectorAll('#compare-growth-tabs [data-metric]').forEach((b) => b.classList.toggle('is-active', b === btn));
        const zone = root.querySelector('#compare-growth-zone');
        zone.innerHTML = growthCard(a, b, v1, v2, metric);
        mountChartCard(growthSpec(a, b, v1, v2, metric));
      });

      bindSelectors(root, versions, v1, v2, c.id);
      root.querySelector('[data-swap]')?.addEventListener('click', () => {
        location.hash = `#/character/${c.id}/compare?v1=${encodeURIComponent(v2)}&v2=${encodeURIComponent(v1)}`;
      });

      root.querySelector('[data-export-compare]')?.addEventListener('click', () => {
        downloadJSON({
          archive: APP.name, dataVersion: APP.dataVersion, exportedAt: new Date().toISOString(),
          disclaimer: DISCLAIMER.short, kind: 'character-version-compare',
          character: { id: c.id, name: c.name, en: c.en, rarity: c.rarity, element: c.element, path: c.path },
          versions: {
            [v1]: { stats: a.stats, skills: a.skills.map(pickSkill), appliedPatches: a.appliedPatches.map(pickPatch) },
            [v2]: { stats: b.stats, skills: b.skills.map(pickSkill), appliedPatches: b.appliedPatches.map(pickPatch) },
          },
          summary: { changedStats, changedSkills, totalChanges, betweenPatches: betweenPatches.map(pickPatch) },
        }, `${c.name}-V${v1}-vs-V${v2}`);
        toast('版本对比数据已导出', { tone: 'good' });
      });
    },
  };
}

function bindSelectors(root, versions, v1, v2, id) {
  root.querySelector('#compare-v1')?.addEventListener('change', (e) => {
    location.hash = `#/character/${id}/compare?v1=${encodeURIComponent(e.target.value)}&v2=${encodeURIComponent(v2)}`;
  });
  root.querySelector('#compare-v2')?.addEventListener('change', (e) => {
    location.hash = `#/character/${id}/compare?v1=${encodeURIComponent(v1)}&v2=${encodeURIComponent(e.target.value)}`;
  });
}

function optionHtml(versions, selected) {
  return [...versions].reverse().map((v) => `<option value="${v}"${v === selected ? ' selected' : ''}>V${v} · ${VERSION_BY_ID[v]?.title || ''}</option>`).join('');
}

function deltaCell(delta) {
  if (!delta) return '<span class="delta zero">— 未变</span>';
  const cls = delta > 0 ? 'up' : 'down';
  const arrow = delta > 0 ? '▲' : '▼';
  return `<span class="delta ${cls}">${arrow} ${delta > 0 ? '+' : ''}${delta}</span>`;
}

function skillDelta(s) {
  if (!s.chart) return '<span class="delta zero">无倍率</span>';
  const d1 = s.b.lv1 - s.a.lv1;
  const d10 = s.b.lv10 - s.a.lv10;
  if (!d1 && !d10) return '<span class="delta zero">— 未变</span>';
  const bits = [];
  if (d1) bits.push(`Lv.1 ${d1 > 0 ? '+' : ''}${d1}`);
  if (d10) bits.push(`Lv.10 ${d10 > 0 ? '+' : ''}${d10}`);
  const cls = (d10 || d1) > 0 ? 'up' : 'down';
  return `<span class="delta ${cls}">${bits.join(' · ')}</span>`;
}

function growthCard(a, b, v1, v2, metric) {
  return chartCard(growthSpec(a, b, v1, v2, metric));
}

function growthSpec(a, b, v1, v2, metric) {
  const meta = STAT_META.find((m) => m.key === metric) || STAT_META[0];
  const series = [
    { name: `V${v1}`, color: CHART_COLORS.compareOld, dash: '6 4', points: growthSeries(a.stats[meta.key], meta.key) },
    { name: `V${v2}`, color: CHART_COLORS.compareNew, points: growthSeries(b.stats[meta.key], meta.key) },
  ];
  const table = lineTable(series, [1, 20, 40, 60, 80], '等级');
  return {
    id: 'compare-growth',
    title: `成长曲线叠加 · ${meta.name}`,
    subtitle: `V${v1} 与 V${v2} · Lv.1–80 拟合曲线`,
    legend: [{ label: `V${v1}（旧）`, color: CHART_COLORS.compareOld, dash: true }, { label: `V${v2}（新）`, color: CHART_COLORS.compareNew }],
    chart: {
      type: 'line', series, height: 320,
      xTicks: [1, 10, 20, 30, 40, 50, 60, 70, 80],
      xLabel: '等级', yLabel: meta.name, xName: 'Lv.',
      formatX: (v) => String(v), formatY: (v) => fmtNum(v),
      ariaLabel: `V${v1}与V${v2}${meta.name}成长曲线对比`,
    },
    table,
    footnote: '叠加图使用按满级面板反推的拟合曲线，不是逐级实测数据；速度按游戏规则不随等级成长。',
  };
}

function pickSkill(s) {
  return { key: s.key, tag: s.tag, name: s.name, unit: s.unit, lv1: s.lv1, lv10: s.lv10, chart: s.chart };
}
function pickPatch(p) {
  return { version: p.version, title: p.title, demo: p.demo };
}
