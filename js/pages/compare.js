import {
  CHARACTERS, CHARACTER_MAP, ELEMENTS, ELEMENT_ORDER, PATHS,
  getCharacterSnapshot, statPercentiles, STAT_META, APP, DISCLAIMER,
} from '../data/index.js';
import { esc, icon, elementChip, pathChip, toast, emptyState } from '../ui.js';
import { avatarSrc } from '../assets.js';
import { getCompareTray, setCompareTray } from '../store.js';
import { chartCard, mountChartCard, drawRadar } from '../charts.js';
import { CHART_COLORS } from '../data/meta.js';
import { downloadJSON } from '../export.js';
import { pageHead, pageFootNote } from './shared.js';

const DASHES = ['', '6 4', '2 4', '10 4'];

export async function render(ctx) {
  const idsParam = (ctx.query.ids || '').split(',').map((s) => s.trim()).filter(Boolean);
  let ids = [...new Set(idsParam)].filter((id) => CHARACTER_MAP[id]?.status === 'live').slice(0, 4);
  if (ids.length < 2 && !ctx.query.ids) {
    ids = [...new Set(getCompareTray())].filter((id) => CHARACTER_MAP[id]?.status === 'live').slice(0, 4);
  }

  if (ids.length < 2) {
    ctx.setTitle('角色对比');
    const selected = new Set(ids);
    return {
      html: `<div class="page compare-page">
        ${pageHead({
          eyebrow: 'CHARACTER COMPARE',
          title: '多角色对比',
          desc: '选择 2–4 名已上线角色，并排查看基础面板百分位与技能倍率。只做静态对照，不提供配队、伤害或抽取建议。',
          meta: `<span class="meta-pill">样本 ${CHARACTERS.length} 名已上线角色</span><span class="meta-pill">1–4 人</span><span class="meta-pill">百分位口径</span>`,
        })}
        <div class="compare-picker">
          <div class="picker-preview" id="picker-preview"></div>
          <div class="picker-toolbar">
            <label class="search-field">${icon('search', 16)}<input type="search" id="picker-search" placeholder="搜索要对比的角色…" autocomplete="off"></label>
            <div class="picker-filters" id="picker-elements">
              <button class="el-filter is-active" type="button" data-el="all">全部</button>
              ${ELEMENT_ORDER.map((k) => `<button class="el-filter" type="button" data-el="${k}" style="--ec:${ELEMENTS[k].color};--ecs:${ELEMENTS[k].soft}"><i>${ELEMENTS[k].short}</i>${ELEMENTS[k].name}</button>`).join('')}
            </div>
            <button class="btn btn-quiet btn-sm" type="button" id="picker-clear">清空</button>
          </div>
          <div class="picker-grid" id="picker-grid">
            ${CHARACTERS.map((c) => pickerCard(c, selected.has(c.id))).join('')}
          </div>
          <div class="picker-empty" id="picker-empty" hidden>${emptyState('没有匹配的角色', '换一个关键词或属性试试。', '', 'users')}</div>
        </div>
        ${pageFootNote(`对比仅针对 Lv.80 基础面板与技能倍率；百分位以当前 ${CHARACTERS.length} 名已上线角色为样本。不含光锥、遗器、队伍增益与伤害计算。`)}
      </div>`,
      mount(root) {
        bindPicker(root, [...ids]);
      },
    };
  }

  const chars = ids.map((id) => CHARACTER_MAP[id]);
  const snaps = chars.map((c) => getCharacterSnapshot(c, APP.latestLive));
  const pct = statPercentiles();
  ctx.setTitle(`${chars.map((c) => c.name).join(' / ')} · 角色对比`);

  const best = {};
  for (const m of STAT_META) {
    let max = -Infinity;
    let who = [];
    chars.forEach((c) => {
      const v = c.lv80[m.key];
      if (v > max) { max = v; who = [c.name]; } else if (v === max) who.push(c.name);
    });
    best[m.key] = { max, who };
  }

  const html = `<div class="page compare-page compare-results">
    ${pageHead({
      eyebrow: 'CHARACTER COMPARE · RESULT',
      title: `${chars.map((c) => esc(c.name)).join(' <span class="vs-word">vs</span> ')}`,
      desc: '雷达使用全角色百分位（0–100，越外越靠前），表格保留真实 Lv.80 数值。每条序列均配不同虚线样式与图例，不以颜色单独区分。',
      actions: `<a class="btn btn-ghost btn-sm" href="#/compare">${icon('compare', 15)}调整角色</a>
        <button class="btn btn-quiet btn-sm" type="button" data-export-compare>${icon('download', 14)}JSON</button>
        <button class="btn btn-quiet btn-sm" type="button" data-action="copy-link">${icon('share', 14)}复制链接</button>`,
    })}

    <div class="compare-roster">
      ${chars.map((c, i) => `<a class="compare-char" href="#/character/${c.id}" style="--el:${ELEMENTS[c.element].color};--cc:${CHART_COLORS.series[i]}">
        <span class="crc-bar"></span>
        <div class="crc-art"><img src="${avatarSrc(c, 160)}" alt="" width="64" height="64"></div>
        <div class="crc-main">
          <h3>${esc(c.name)}</h3><em>${esc(c.en)}</em>
          <div>${elementChip(c.element, { compact: true })}${pathChip(c.path)}</div>
        </div>
        <span class="crc-index">0${i + 1}</span>
      </a>`).join('')}
      ${chars.length < 4 ? `<a class="compare-add" href="#/compare">${icon('plus', 18)}<span>添加角色</span></a>` : ''}
    </div>

    <div class="best-strip">
      ${STAT_META.map((m) => `<div class="best-item"><span>${m.name}最高</span><b>${esc(best[m.key].who.join(' / '))}</b><em>${fmtInt(best[m.key].max)}</em></div>`).join('')}
    </div>

    <section class="section chart-section">
      <div class="chart-heading compact"><div><p class="eyebrow">PANEL PERCENTILE</p><h2>基础面板雷达</h2><p>百分位越高表示在已上线角色中越靠前；悬停查看实际数值。</p></div></div>
      ${radarCard(chars, pct)}
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">STAT TABLE</p><h2>面板对照</h2><p>真实 Lv.80 数值与百分位并列展示；每列最高值以文字标签标注。</p></div></div>
      <div class="table-wrap compare-table">
        <table>
          <thead><tr><th>角色</th>${STAT_META.map((m) => `<th>${m.name}<em>${m.short}</em></th>`).join('')}</tr></thead>
          <tbody>${chars.map((c) => `<tr>
            <th scope="row"><span class="tbl-char" style="--el:${ELEMENTS[c.element].color}">${esc(c.name)}<em>${c.rarity}★ · ${S(c.element)}</em></span></th>
            ${STAT_META.map((m) => {
              const isBest = c.lv80[m.key] === best[m.key].max;
              return `<td class="${isBest ? 'is-best' : ''}"><b>${fmtInt(c.lv80[m.key])}</b><em>${pct[c.id]?.[m.key] ?? '—'}%</em>${isBest ? '<span class="best-mark">最高</span>' : ''}</td>`;
            }).join('')}
          </tr>`).join('')}</tbody>
        </table>
      </div>
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">SKILL SMALL MULTIPLES</p><h2>技能倍率小图</h2><p>每位角色独立成图，自动选择其技能数量最多的单位分组，避免跨单位误读。倍率不等于最终伤害。</p></div></div>
      <div class="skill-multiples">
        ${chars.map((c, i) => `<div class="skill-multiple" data-skill-mount="${c.id}"></div>`).join('')}
      </div>
    </section>

    <div class="compare-notes">
      <div>${icon('info', 16)}<p><b>百分位样本</b> 仅由 ${CHARACTERS.length} 名已上线角色的 Lv.80 基础面板计算，样本变化时百分位会改变。</p></div>
      <div>${icon('shield', 16)}<p><b>不做结论</b> 本页不计算伤害、不模拟行动轴、不推荐配队、不评估抽取优先级。</p></div>
      <div>${icon('database', 16)}<p><b>静态快照</b> 所有数值来自 V${esc(APP.latestLive)} 档案，光锥、遗器与战斗增益均未计入。</p></div>
    </div>

    ${pageFootNote('角色基础面板与技能倍率按米游社 Wiki 的角色页面整理。对比结果仅反映档案中的静态面板，不构成玩家强度评价。')}
  </div>`;

  return {
    html,
    mount(root) {
      setCompareTray(ids);
      mountRadar(chars, pct);
      chars.forEach((c) => mountSkillMultiple(root, c));
      root.querySelector('[data-export-compare]')?.addEventListener('click', () => {
        downloadJSON({
          archive: APP.name, dataVersion: APP.dataVersion, exportedAt: new Date().toISOString(),
          disclaimer: DISCLAIMER.short, kind: 'multi-character-compare',
          snapshotVersion: APP.latestLive,
          characters: chars.map((c, i) => ({
            id: c.id, name: c.name, en: c.en, rarity: c.rarity, element: c.element, path: c.path,
            lv80: c.lv80, percentiles: pct[c.id], skillUnit: pickUnit(c.skills),
            skills: c.skills.map((s) => ({ key: s.key, tag: s.tag, name: s.name, unit: s.unit, lv1: s.lv1, lv10: s.lv10, chart: s.chart })),
          })),
          best,
        }, `角色对比-${chars.map((c) => c.name).join('-')}`);
        toast('对比数据已导出 JSON', { tone: 'good' });
      });
    },
  };
}

/* ---------------- picker ---------------- */

function pickerCard(c, selected) {
  return `<button class="picker-card${selected ? ' is-selected' : ''}" type="button" data-pick="${c.id}" style="--el:${ELEMENTS[c.element].color}" aria-pressed="${selected}">
    <span class="pk-check">${selected ? icon('check', 13) : ''}</span>
    <img src="${avatarSrc(c, 120)}" alt="" width="52" height="52" loading="lazy">
    <span class="pk-main"><b>${esc(c.name)}</b><em>${c.rarity}★ · ${S(c.element)} · ${PATHS[c.path]?.name || ''}</em></span>
    <span class="pk-order" hidden></span>
  </button>`;
}

function bindPicker(root, initial) {
  let selected = [...initial];
  const grid = root.querySelector('#picker-grid');
  const preview = root.querySelector('#picker-preview');
  const search = root.querySelector('#picker-search');
  let elFilter = 'all';

  const paint = () => {
    setCompareTray(selected);
    root.querySelectorAll('[data-pick]').forEach((btn) => {
      const id = btn.getAttribute('data-pick');
      const idx = selected.indexOf(id);
      const on = idx >= 0;
      btn.classList.toggle('is-selected', on);
      btn.setAttribute('aria-pressed', String(on));
      const check = btn.querySelector('.pk-check');
      if (check) check.innerHTML = on ? icon('check', 13) : '';
      const order = btn.querySelector('.pk-order');
      if (order) { order.hidden = !on; order.textContent = on ? String(idx + 1) : ''; }
    });
    preview.innerHTML = `<div class="preview-slots">
      ${[0, 1, 2, 3].map((i) => selected[i] ? (() => {
        const c = CHARACTER_MAP[selected[i]];
        return `<div class="preview-slot is-filled" style="--el:${ELEMENTS[c.element].color}">
          <img src="${avatarSrc(c, 96)}" alt="" width="38" height="38">
          <span><b>${esc(c.name)}</b><em>${S(c.element)}</em></span>
          <button type="button" data-remove="${c.id}" aria-label="移除${esc(c.name)}">${icon('close', 13)}</button>
        </div>`;
      })() : `<div class="preview-slot is-empty"><span class="ps-num">0${i + 1}</span><em>待选择</em></div>`).join('')}
    </div>
    <div class="preview-side">
      <span class="preview-count"><b>${selected.length}</b> / 4</span>
      <button class="btn btn-primary btn-sm" type="button" id="start-compare"${selected.length < 2 ? ' disabled' : ''}>${icon('compare', 15)}开始对比</button>
      <p>至少选择 2 名，最多 4 名。</p>
    </div>`;
  };

  const filter = () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    grid.querySelectorAll('[data-pick]').forEach((btn) => {
      const c = CHARACTER_MAP[btn.getAttribute('data-pick')];
      const matchQ = !q || `${c.name} ${c.en} ${c.path} ${c.element}`.toLowerCase().includes(q);
      const matchEl = elFilter === 'all' || c.element === elFilter;
      const on = matchQ && matchEl;
      btn.hidden = !on;
      if (on) shown++;
    });
    root.querySelector('#picker-empty').hidden = shown > 0;
  };

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-pick]');
    if (!btn) return;
    const id = btn.getAttribute('data-pick');
    const idx = selected.indexOf(id);
    if (idx >= 0) selected.splice(idx, 1);
    else {
      if (selected.length >= 4) { toast('最多同时对比 4 名角色', { tone: 'warning' }); return; }
      selected.push(id);
    }
    paint();
  });

  preview.addEventListener('click', (e) => {
    const rm = e.target.closest('[data-remove]');
    if (rm) {
      selected = selected.filter((x) => x !== rm.getAttribute('data-remove'));
      paint();
      return;
    }
    if (e.target.closest('#start-compare')) {
      if (selected.length < 2) return;
      location.hash = `#/compare?ids=${selected.map(encodeURIComponent).join(',')}`;
    }
  });

  search.addEventListener('input', filter);
  root.querySelector('#picker-elements')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-el]');
    if (!btn) return;
    elFilter = btn.getAttribute('data-el');
    root.querySelectorAll('#picker-elements [data-el]').forEach((b) => b.classList.toggle('is-active', b === btn));
    filter();
  });
  root.querySelector('#picker-clear')?.addEventListener('click', () => {
    selected = [];
    paint();
  });

  paint();
  filter();
}

/* ---------------- results ---------------- */

function radarCard(chars, pct) {
  const series = chars.map((c, i) => ({
    name: c.name,
    color: CHART_COLORS.series[i],
    dash: DASHES[i] || '',
    values: STAT_META.map((m) => pct[c.id]?.[m.key] ?? 0),
    actuals: STAT_META.map((m) => c.lv80[m.key]),
  }));
  return chartCard({
    id: 'compare-radar',
    title: '基础面板百分位雷达',
    subtitle: '0–100 百分位 · 实际数值见悬停提示与数据表',
    legend: chars.map((c, i) => ({ label: c.name, color: CHART_COLORS.series[i], dash: Boolean(DASHES[i]) })),
    chart: {
      type: 'radar',
      axes: STAT_META.map((m) => ({ label: m.name, sub: m.short })),
      series,
      max: 100,
      height: 400,
      axisUnit: '%',
      formatValue: (v) => v,
      ariaLabel: '多角色基础面板百分位雷达图',
    },
    table: {
      headers: ['角色', ...STAT_META.map((m) => m.name)],
      rows: chars.map((c) => [c.name, ...STAT_META.map((m) => `${c.lv80[m.key]}（${pct[c.id]?.[m.key] ?? '—'}%）`)]),
    },
    footnote: `百分位以 ${CHARACTERS.length} 名已上线角色为样本；越靠外表示该面板在样本中越靠前，不代表实战强弱。`,
  });
}

function mountRadar(chars, pct) {
  const series = chars.map((c, i) => ({
    name: c.name,
    color: CHART_COLORS.series[i],
    dash: DASHES[i] || '',
    values: STAT_META.map((m) => pct[c.id]?.[m.key] ?? 0),
    actuals: STAT_META.map((m) => `${c.lv80[m.key]}`),
  }));
  const card = document.querySelector('[data-chart-card="compare-radar"]');
  const mount = card?.querySelector('[data-chart-mount]');
  if (mount) {
    drawRadar(mount, {
      axes: STAT_META.map((m) => ({ label: m.name, sub: m.short })),
      series, max: 100, height: 400, axisUnit: '%',
      formatValue: (v) => v,
      ariaLabel: '多角色基础面板百分位雷达图',
    });
  }
}

function mountSkillMultiple(root, c) {
  const holder = root.querySelector(`[data-skill-mount="${CSS.escape(c.id)}"]`);
  if (!holder) return;
  const grouped = skillGroups(c.skills);
  const unit = [...grouped.entries()].sort((a, b) => b[1].length - a[1].length)[0]?.[0];
  const list = unit ? grouped.get(unit) : [];
  if (!list.length) {
    holder.innerHTML = `<p class="inline-note">暂无可视化技能。</p>`;
    return;
  }
  holder.innerHTML = chartCard({
    id: `compare-skill-${c.id}`,
    title: `${c.name} · 满级技能`,
    subtitle: `单位 ${unit} · 同一角色内对比`,
    chart: {
      type: 'bars',
      categories: list.map((s) => ({ label: s.tag, sublabel: s.name, value: s.lv10, detail: `${s.tag} · ${s.name}（${s.unit}）`, unit: '%' })),
      unit: '%', height: 280, color: ELEMENTS[c.element].color,
      ariaLabel: `${c.name}满级技能倍率`,
    },
    table: {
      headers: ['技能', '类型', 'Lv.1', 'Lv.10'],
      rows: list.map((s) => [s.name, s.tag, s.lv1, s.lv10]),
    },
    footnote: `仅展示 ${unit} 分组；倍率不等于最终伤害。`,
  });
  mountChartCard({
    id: `compare-skill-${c.id}`,
    chart: {
      type: 'bars',
      categories: list.map((s) => ({ label: s.tag, sublabel: s.name, value: s.lv10, detail: `${s.tag} · ${s.name}（${s.unit}）`, unit: '%' })),
      unit: '%', height: 280, color: ELEMENTS[c.element].color,
    },
  });
}

function skillGroups(skills) {
  const groups = new Map();
  for (const s of skills) {
    if (!s.chart || !s.lv10) continue;
    if (!groups.has(s.unit)) groups.set(s.unit, []);
    groups.get(s.unit).push(s);
  }
  return groups;
}

function pickUnit(skills) {
  const g = skillGroups(skills);
  return [...g.entries()].sort((a, b) => b[1].length - a[1].length)[0]?.[0] || '';
}

function S(el) { return ELEMENTS[el]?.name || el; }
function fmtInt(n) { return Number(n).toLocaleString('zh-CN'); }
