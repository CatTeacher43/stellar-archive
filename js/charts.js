import { CHART_COLORS } from './data/meta.js';

/** 轻量 SVG 图表层：无第三方依赖，支持悬停、键盘、数据表与 PNG 导出。 */

const FONT = `ui-sans-serif, system-ui, -apple-system, 'Segoe UI', 'Microsoft YaHei', sans-serif`;
const VB_W = 760;
const INK = '#e8ecf7';
const INK_2 = '#aab5cc';
const MUTED = CHART_COLORS.inkMuted;
const GRID = CHART_COLORS.grid;
const AXIS = CHART_COLORS.axis;
const SURFACE = CHART_COLORS.surface;

let uid = 0;
const nextId = (p) => `${p}-${++uid}`;

export function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function fmtNum(n) {
  if (n == null || Number.isNaN(n)) return '—';
  const abs = Math.abs(n);
  if (abs >= 10000) {
    const v = n / 10000;
    return `${Number.isInteger(v) ? v.toFixed(0) : v.toFixed(1)}万`;
  }
  if (abs >= 1000) return n.toLocaleString('zh-CN');
  if (Number.isInteger(n)) return String(n);
  return String(Math.round(n * 100) / 100);
}

export function fmtPct(n, digits = 0) {
  if (n == null) return '—';
  return `${n > 0 ? '+' : ''}${Number(n).toFixed(digits)}%`;
}

function niceTicks(min, max, count = 4) {
  if (min === max) {
    return [0, min || 1];
  }
  const span = max - min;
  const rough = span / Math.max(1, count);
  const pow = Math.pow(10, Math.floor(Math.log10(rough)));
  const err = rough / pow;
  const step = (err >= 7 ? 10 : err >= 3 ? 5 : err >= 1.5 ? 2 : 1) * pow;
  const start = Math.floor(min / step) * step;
  const end = Math.ceil(max / step) * step;
  const ticks = [];
  for (let v = start; v <= end + step * 0.5; v += step) ticks.push(Math.round(v * 1000) / 1000);
  return ticks;
}

function svgOpen(w, h, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" tabindex="0" class="viz-svg" style="font-family:${FONT}">`;
}

function text(x, y, str, opts = {}) {
  const {
    size = 11, fill = MUTED, anchor = 'start', weight = 400, rotate = '',
    opacity = 1, letter = 0, family = FONT,
  } = opts;
  const transform = rotate ? ` transform="rotate(${rotate} ${x} ${y})"` : '';
  return `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" opacity="${opacity}" letter-spacing="${letter}"${transform}>${esc(str)}</text>`;
}

function line(x1, y1, x2, y2, color, width = 1, extra = '') {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
}

function circle(cx, cy, r, fill, extra = '') {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${extra}/>`;
}

function tooltipEl(mount) {
  let tip = mount.querySelector('.chart-tip');
  if (!tip) {
    tip = document.createElement('div');
    tip.className = 'chart-tip';
    tip.setAttribute('role', 'status');
    tip.hidden = true;
    mount.appendChild(tip);
  }
  return tip;
}

function renderTip(tip, mount, { title, rows }, x, y) {
  tip.replaceChildren();
  if (title) {
    const t = document.createElement('div');
    t.className = 'chart-tip-title';
    t.textContent = title;
    tip.appendChild(t);
  }
  const list = document.createElement('div');
  list.className = 'chart-tip-list';
  for (const row of rows) {
    const item = document.createElement('div');
    item.className = 'chart-tip-row';
    if (row.color) {
      const key = document.createElement('span');
      key.className = 'chart-tip-key';
      key.style.background = row.color;
      item.appendChild(key);
    }
    const label = document.createElement('span');
    label.className = 'chart-tip-label';
    label.textContent = row.label;
    const value = document.createElement('strong');
    value.className = 'chart-tip-value';
    value.textContent = row.value;
    item.appendChild(label);
    item.appendChild(value);
    list.appendChild(item);
  }
  tip.appendChild(list);
  tip.hidden = false;
  const mw = mount.clientWidth || 600;
  const mh = mount.clientHeight || 300;
  const tw = tip.offsetWidth || 160;
  const th = tip.offsetHeight || 60;
  let left = x + 16;
  let top = y - th - 12;
  if (left + tw > mw - 4) left = x - tw - 16;
  if (left < 4) left = 4;
  if (top < 4) top = y + 18;
  if (top + th > mh - 4) top = Math.max(4, mh - th - 4);
  tip.style.left = `${left}px`;
  tip.style.top = `${top}px`;
}

function hideTip(tip) {
  tip.hidden = true;
}

function svgPoint(svg, evt) {
  const pt = svg.createSVGPoint();
  pt.x = evt.clientX;
  pt.y = evt.clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  return pt.matrixTransform(ctm.inverse());
}

/* ---------------- Line chart ---------------- */

export function drawLine(mount, spec) {
  const {
    series, xTicks = null, height = 320, xLabel = '', yLabel = '',
    formatX = (v) => v, formatY = fmtNum, zeroBaseline = true, endLabels = true,
    ariaLabel = '折线图', xName = 'X',
  } = spec;
  if (!series?.length) return;
  const w = VB_W;
  const h = height;
  const m = { l: 58, r: series.length <= 2 && endLabels ? 74 : 28, t: 18, b: 42 };
  const all = series.flatMap((s) => s.points.map((p) => p.y));
  let yMin = zeroBaseline ? Math.min(0, ...all) : Math.min(...all);
  let yMax = Math.max(...all);
  if (yMax === yMin) yMax = yMin + 1;
  if (!zeroBaseline) {
    const pad = (yMax - yMin) * 0.18 || 1;
    yMin -= pad;
    yMax += pad;
  } else {
    yMax *= 1.06;
  }
  const ticks = niceTicks(yMin, yMax, 4);
  yMin = ticks[0];
  yMax = ticks[ticks.length - 1];

  const xs = series[0].points.map((p) => p.x);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const sx = (v) => m.l + ((v - xMin) / (xMax - xMin || 1)) * (w - m.l - m.r);
  const sy = (v) => h - m.b - ((v - yMin) / (yMax - yMin || 1)) * (h - m.t - m.b);

  let grid = '';
  for (const t of ticks) {
    const y = sy(t);
    grid += line(m.l, y, w - m.r, y, GRID, 1);
    grid += text(m.l - 10, y + 4, formatY(t), { anchor: 'end', size: 10.5, fill: MUTED });
  }
  const xTickVals = xTicks || [xMin, Math.round((xMin + xMax) / 2), xMax];
  let xAxis = '';
  for (const t of xTickVals) {
    const x = sx(t);
    xAxis += line(x, h - m.b, x, h - m.b + 4, AXIS, 1);
    xAxis += text(x, h - m.b + 19, formatX(t), { anchor: 'middle', size: 10.5, fill: MUTED });
  }
  xAxis += line(m.l, h - m.b, w - m.r, h - m.b, AXIS, 1);
  xAxis += text((m.l + w - m.r) / 2, h - 7, xLabel, { anchor: 'middle', size: 10.5, fill: MUTED });
  if (yLabel) xAxis += text(m.l, m.t - 6, yLabel, { size: 10.5, fill: MUTED });

  const paths = series.map((s) => {
    const d = s.points.map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p.x).toFixed(1)} ${sy(p.y).toFixed(1)}`).join(' ');
    let g = '';
    if (series.length === 1) {
      const first = s.points[0];
      const last = s.points[s.points.length - 1];
      g += `<path d="${d} L${sx(last.x).toFixed(1)} ${h - m.b} L${sx(first.x).toFixed(1)} ${h - m.b} Z" fill="${s.color}" opacity=".09"/>`;
    }
    g += `<path d="${d}" fill="none" stroke="${s.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${s.dash ? ` stroke-dasharray="${s.dash}"` : ''}/>`;
    return `<g data-series="${esc(s.name)}">${g}</g>`;
  }).join('');

  const last = series.map((s) => ({ s, p: s.points[s.points.length - 1] }));
  let endSvg = '';
  if (endLabels && series.length <= 2) {
    const labels = last.map(({ s, p }) => ({
      s, x: sx(p.x), y: sy(p.y), value: formatY(p.y),
    }));
    labels.sort((a, b) => a.y - b.y);
    for (let i = 1; i < labels.length; i++) {
      if (labels[i].y - labels[i - 1].y < 15) labels[i].y = labels[i - 1].y + 15;
    }
    for (const l of labels) {
      endSvg += circle(l.x, sy(last.find(({ s }) => s === l.s).p.y), 4, l.s.color, `stroke="${SURFACE}" stroke-width="2"`);
      endSvg += text(l.x + 9, l.y + 4, l.value, { size: 11, fill: INK_2, weight: 600 });
    }
  }

  const hoverId = nextId('line-hover');
  const hover = `<g id="${hoverId}" visibility="hidden">
    <line data-crosshair x1="0" x2="0" y1="${m.t}" y2="${h - m.b}" stroke="${INK_2}" stroke-width="1" opacity=".45"/>
    ${series.map((s) => `<circle data-dot="${esc(s.name)}" r="4.5" fill="${s.color}" stroke="${SURFACE}" stroke-width="2"/>`).join('')}
  </g>`;

  mount.innerHTML = `${svgOpen(w, h, ariaLabel)}
    <rect width="${w}" height="${h}" fill="${SURFACE}"/>
    ${grid}${xAxis}${paths}${endSvg}${hover}
    <rect class="viz-hit" x="${m.l}" y="${m.t}" width="${w - m.l - m.r}" height="${h - m.t - m.b}" fill="transparent"/>
  </svg>`;

  const svg = mount.querySelector('svg');
  const tip = tooltipEl(mount);
  const hoverG = mount.querySelector(`#${hoverId}`);
  const cross = hoverG.querySelector('[data-crosshair]');
  const dots = [...hoverG.querySelectorAll('[data-dot]')];
  const values = series[0].points.map((p) => p.x);

  function showAt(index, pointerX, pointerY) {
    const x = values[index];
    hoverG.setAttribute('visibility', 'visible');
    const px = sx(x);
    cross.setAttribute('x1', px);
    cross.setAttribute('x2', px);
    const rows = [];
    series.forEach((s, i) => {
      const p = s.points[index];
      dots[i].setAttribute('cx', px);
      dots[i].setAttribute('cy', sy(p.y));
      rows.push({ label: s.name, value: formatY(p.y), color: s.color });
    });
    const cx = pointerX ?? (px / w) * (mount.clientWidth || w);
    const cy = pointerY ?? (sy(series[0].points[index].y) / h) * (mount.clientHeight || h);
    renderTip(tip, mount, { title: `${xName} ${formatX(x)}`, rows }, cx, cy);
  }

  function hide() {
    hoverG.setAttribute('visibility', 'hidden');
    hideTip(tip);
  }

  function nearest(vx) {
    let best = 0;
    let dist = Infinity;
    values.forEach((v, i) => {
      const d = Math.abs(sx(v) - vx);
      if (d < dist) { dist = d; best = i; }
    });
    return best;
  }

  svg.addEventListener('pointermove', (evt) => {
    const p = svgPoint(svg, evt);
    const i = nearest(p.x);
    const rect = mount.getBoundingClientRect();
    showAt(i, evt.clientX - rect.left, evt.clientY - rect.top);
  });
  svg.addEventListener('pointerleave', hide);

  let keyIndex = 0;
  svg.addEventListener('keydown', (evt) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(evt.key)) return;
    evt.preventDefault();
    if (evt.key === 'ArrowLeft') keyIndex = Math.max(0, keyIndex - 1);
    if (evt.key === 'ArrowRight') keyIndex = Math.min(values.length - 1, keyIndex + 1);
    if (evt.key === 'Home') keyIndex = 0;
    if (evt.key === 'End') keyIndex = values.length - 1;
    const px = sx(values[keyIndex]);
    const py = sy(series[0].points[keyIndex].y);
    const rect = mount.getBoundingClientRect();
    showAt(keyIndex, (px / w) * rect.width, (py / h) * rect.height);
  });
  svg.addEventListener('focus', () => showAt(0, undefined, undefined));
  svg.addEventListener('blur', hide);
}

/* ---------------- Column chart ---------------- */

function roundedTop(x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h);
  return `M${x} ${y + h} L${x} ${y + rr} Q${x} ${y} ${x + rr} ${y} L${x + w - rr} ${y} Q${x + w} ${y} ${x + w} ${y + rr} L${x + w} ${y + h} Z`;
}

export function drawBars(mount, spec) {
  const {
    categories, unit = '%', height = 310, color = CHART_COLORS.series[0],
    ariaLabel = '柱状图', maxOverride = null,
  } = spec;
  const items = (categories || []).filter((c) => c.value != null);
  if (!items.length) {
    mount.innerHTML = `<div class="chart-empty">暂无可视化数值</div>`;
    return;
  }
  const w = VB_W;
  const h = height;
  const m = { l: 48, r: 24, t: 34, b: 46 };
  const maxVal = Math.max(...items.map((c) => c.value));
  const ticks = niceTicks(0, maxOverride || maxVal, 4);
  const yMax = maxOverride || ticks[ticks.length - 1];
  const plotW = w - m.l - m.r;
  const band = plotW / items.length;
  const barW = Math.min(24, band * 0.42);
  const sy = (v) => h - m.b - (v / yMax) * (h - m.t - m.b);

  let grid = '';
  for (const t of ticks) {
    const y = sy(t);
    grid += line(m.l, y, w - m.r, y, GRID, 1);
    grid += text(m.l - 8, y + 4, fmtNum(t), { anchor: 'end', size: 10.5, fill: MUTED });
  }
  let bars = '';
  items.forEach((c, i) => {
    const cx = m.l + band * i + band / 2;
    const y = sy(c.value);
    const barH = Math.max(1, h - m.b - y);
    const cColor = c.color || color;
    bars += `<g data-bar="${i}">
      <path d="${roundedTop(cx - barW / 2, y, barW, barH, 4)}" fill="${cColor}"/>
      ${text(cx, y - 9, `${Number(c.value)}${unit}`, { anchor: 'middle', size: 11, fill: INK_2, weight: 600 })}
      ${text(cx, h - m.b + 20, c.label, { anchor: 'middle', size: 11, fill: INK_2 })}
      ${c.sublabel ? text(cx, h - m.b + 35, c.sublabel, { anchor: 'middle', size: 9.5, fill: MUTED }) : ''}
    </g>`;
  });
  const axis = line(m.l, h - m.b, w - m.r, h - m.b, AXIS, 1);
  const hoverId = nextId('bar-hover');
  const hover = `<g id="${hoverId}" visibility="hidden">${line(0, m.t, 0, h - m.b, INK_2, 1, 'opacity=".35"')}</g>`;

  mount.innerHTML = `${svgOpen(w, h, ariaLabel)}
    <rect width="${w}" height="${h}" fill="${SURFACE}"/>
    ${grid}${axis}${bars}${hover}
    ${items.map((c, i) => `<rect class="viz-hit" data-hit="${i}" x="${m.l + band * i}" y="${m.t}" width="${band}" height="${h - m.t - m.b}" fill="transparent"/>`).join('')}
  </svg>`;

  const svg = mount.querySelector('svg');
  const tip = tooltipEl(mount);
  const hoverG = mount.querySelector(`#${hoverId}`);
  const hline = hoverG.querySelector('line');
  const barsEls = [...svg.querySelectorAll('[data-bar]')];

  function show(i, evt) {
    const c = items[i];
    const cx = m.l + band * i + band / 2;
    hoverG.setAttribute('visibility', 'visible');
    hline.setAttribute('x1', cx);
    hline.setAttribute('x2', cx);
    barsEls.forEach((el, j) => el.setAttribute('opacity', j === i ? '1' : '.55'));
    const rect = mount.getBoundingClientRect();
    renderTip(tip, mount, {
      title: c.detail || c.label,
      rows: [{ label: c.unit || unit, value: `${Number(c.value)}${c.unit || unit}`, color: c.color || color }],
    }, evt ? evt.clientX - rect.left : (cx / w) * rect.width, evt ? evt.clientY - rect.top : 80);
  }
  function hide() {
    hoverG.setAttribute('visibility', 'hidden');
    barsEls.forEach((el) => el.removeAttribute('opacity'));
    hideTip(tip);
  }
  svg.querySelectorAll('[data-hit]').forEach((hit) => {
    const i = Number(hit.getAttribute('data-hit'));
    hit.addEventListener('pointermove', (e) => show(i, e));
    hit.addEventListener('pointerleave', hide);
  });
  svg.addEventListener('pointerleave', hide);
  svg.addEventListener('blur', hide);
  let keyIndex = -1;
  svg.addEventListener('keydown', (evt) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter', ' '].includes(evt.key)) return;
    evt.preventDefault();
    if (evt.key === 'ArrowLeft') keyIndex = Math.max(0, (keyIndex < 0 ? 0 : keyIndex) - 1);
    else if (evt.key === 'ArrowRight') keyIndex = Math.min(items.length - 1, (keyIndex < 0 ? -1 : keyIndex) + 1);
    else if (evt.key === 'Home') keyIndex = 0;
    else if (evt.key === 'End') keyIndex = items.length - 1;
    show(Math.max(0, keyIndex));
  });
  svg.addEventListener('focus', () => show(0));
}

/* ---------------- Radar chart ---------------- */

export function drawRadar(mount, spec) {
  const {
    axes, series, max = 100, height = 360, ariaLabel = '雷达图', formatValue = (v) => v,
    axisUnit = '',
  } = spec;
  if (!axes?.length || !series?.length) return;
  const w = VB_W;
  const h = height;
  const cx = w / 2;
  const cy = h / 2 + 4;
  const R = Math.min(w, h) * 0.31;
  const n = axes.length;
  const angle = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const px = (i, v) => cx + Math.cos(angle(i)) * R * (v / max);
  const py = (i, v) => cy + Math.sin(angle(i)) * R * (v / max);

  let grid = '';
  for (const lv of [0.25, 0.5, 0.75, 1]) {
    const pts = axes.map((_, i) => `${px(i, max * lv).toFixed(1)},${py(i, max * lv).toFixed(1)}`).join(' ');
    grid += `<polygon points="${pts}" fill="none" stroke="${GRID}" stroke-width="1"/>`;
  }
  axes.forEach((a, i) => {
    grid += line(cx, cy, px(i, max), py(i, max), GRID, 1);
    const lx = cx + Math.cos(angle(i)) * (R + 30);
    const ly = cy + Math.sin(angle(i)) * (R + 30);
    const anchor = Math.abs(Math.cos(angle(i))) < 0.2 ? 'middle' : Math.cos(angle(i)) > 0 ? 'start' : 'end';
    grid += text(lx, ly + 4, a.label, { anchor, size: 12, fill: INK_2 });
    if (a.sub) grid += text(lx, ly + 19, a.sub, { anchor, size: 10, fill: MUTED });
  });

  let shapes = '';
  series.forEach((s) => {
    const pts = s.values.map((v, i) => `${px(i, v).toFixed(1)},${py(i, v).toFixed(1)}`).join(' ');
    shapes += `<polygon points="${pts}" fill="${s.color}" fill-opacity=".1" stroke="${s.color}" stroke-width="2" stroke-linejoin="round"${s.dash ? ` stroke-dasharray="${s.dash}"` : ''}/>`;
    s.values.forEach((v, i) => {
      shapes += circle(px(i, v), py(i, v), 3.6, s.color, `stroke="${SURFACE}" stroke-width="2"`);
    });
  });

  let hits = '';
  series.forEach((s, si) => {
    s.values.forEach((v, i) => {
      hits += `<circle class="viz-hit" data-s="${si}" data-a="${i}" cx="${px(i, v)}" cy="${py(i, v)}" r="13" fill="transparent" tabindex="0" role="button" aria-label="${esc(`${s.name} ${axes[i].label} ${formatValue(v)}`)}"/>`;
    });
  });

  mount.innerHTML = `${svgOpen(w, h, ariaLabel)}
    <rect width="${w}" height="${h}" fill="${SURFACE}"/>
    ${grid}${shapes}${hits}
  </svg>`;

  const svg = mount.querySelector('svg');
  const tip = tooltipEl(mount);

  function show(si, ai, evt) {
    const s = series[si];
    const a = axes[ai];
    const v = s.values[ai];
    const rect = mount.getBoundingClientRect();
    const x = evt ? evt.clientX - rect.left : (px(ai, v) / w) * rect.width;
    const y = evt ? evt.clientY - rect.top : (py(ai, v) / h) * rect.height;
    const rows = [{ label: a.label, value: `${formatValue(v)}${axisUnit}`, color: s.color }];
    if (s.actuals?.[ai] != null) rows.push({ label: '实际数值', value: s.actuals[ai], color: null });
    renderTip(tip, mount, { title: s.name, rows }, x, y);
  }
  mount.querySelectorAll('[data-s]').forEach((el) => {
    const si = Number(el.getAttribute('data-s'));
    const ai = Number(el.getAttribute('data-a'));
    el.addEventListener('pointerenter', (e) => show(si, ai, e));
    el.addEventListener('pointermove', (e) => show(si, ai, e));
    el.addEventListener('pointerleave', () => hideTip(tip));
    el.addEventListener('focus', () => show(si, ai));
    el.addEventListener('blur', () => hideTip(tip));
  });
  svg.addEventListener('pointerleave', () => hideTip(tip));
}

/* ---------------- Scatter chart ---------------- */

export function drawScatter(mount, spec) {
  const {
    points, xLabel = '', yLabel = '', height = 340, ariaLabel = '散点图',
    formatX = fmtNum, formatY = fmtNum, labelIds = [], color = CHART_COLORS.series[0],
  } = spec;
  if (!points?.length) {
    mount.innerHTML = `<div class="chart-empty">当前筛选下暂无角色</div>`;
    return;
  }
  const w = VB_W;
  const h = height;
  const m = { l: 58, r: 30, t: 28, b: 48 };
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const xTicks = niceTicks(Math.min(...xs), Math.max(...xs), 4);
  const yTicks = niceTicks(Math.min(...ys), Math.max(...ys), 4);
  const xMin = xTicks[0];
  const xMax = xTicks[xTicks.length - 1];
  const yMin = yTicks[0];
  const yMax = yTicks[yTicks.length - 1];
  const sx = (v) => m.l + ((v - xMin) / (xMax - xMin || 1)) * (w - m.l - m.r);
  const sy = (v) => h - m.b - ((v - yMin) / (yMax - yMin || 1)) * (h - m.t - m.b);

  let grid = '';
  for (const t of yTicks) {
    const y = sy(t);
    grid += line(m.l, y, w - m.r, y, GRID, 1);
    grid += text(m.l - 9, y + 4, formatY(t), { anchor: 'end', size: 10.5, fill: MUTED });
  }
  for (const t of xTicks) {
    const x = sx(t);
    grid += line(x, h - m.b, x, h - m.b + 4, AXIS, 1);
    grid += text(x, h - m.b + 19, formatX(t), { anchor: 'middle', size: 10.5, fill: MUTED });
  }
  grid += line(m.l, h - m.b, w - m.r, h - m.b, AXIS, 1);
  grid += text((m.l + w - m.r) / 2, h - 7, xLabel, { anchor: 'middle', size: 10.5, fill: MUTED });
  grid += text(m.l, m.t - 11, yLabel, { size: 10.5, fill: MUTED });

  const labeled = new Set(labelIds);
  let dots = '';
  let labels = '';
  const placed = [];
  const overlaps = (a, b) => a.l < b.r && a.r > b.l && a.t < b.b && a.b > b.t;
  const inside = (box) => box.l >= m.l + 2 && box.r <= w - m.r - 2 && box.t >= m.t + 2 && box.b <= h - m.b - 4;
  points.forEach((p) => {
    const x = sx(p.x);
    const y = sy(p.y);
    const highlight = labeled.has(p.id);
    dots += `<g data-point="${esc(p.id)}">
      <circle cx="${x}" cy="${y}" r="4" fill="${highlight ? '#f2c96b' : color}" stroke="${SURFACE}" stroke-width="2"/>
      <circle class="viz-hit" data-hit="${esc(p.id)}" cx="${x}" cy="${y}" r="14" fill="transparent"/>
    </g>`;
    if (highlight) {
      const bw = p.label.length * 11.5 + 6;
      const bh = 13;
      const candidates = [
        { x, y: y - 12, anchor: 'middle' },
        { x: x + 9, y: y + 4, anchor: 'start' },
        { x: x - 9, y: y + 4, anchor: 'end' },
        { x, y: y + 20, anchor: 'middle' },
      ];
      let chosen = null;
      for (const c of candidates) {
        const l = c.anchor === 'middle' ? c.x - bw / 2 : c.anchor === 'start' ? c.x : c.x - bw;
        const box = { l, r: l + bw, t: c.y - 10, b: c.y + 3 };
        if (inside(box) && !placed.some((r) => overlaps(box, r))) {
          chosen = { ...c, box };
          break;
        }
      }
      if (!chosen) {
        let ly = y - 12;
        while (placed.some((r) => overlaps({ l: x - bw / 2, r: x + bw / 2, t: ly - 10, b: ly + 3 }, r))) ly -= bh + 1;
        ly = Math.max(m.t + 12, ly);
        chosen = { x, y: ly, anchor: 'middle', box: { l: x - bw / 2, r: x + bw / 2, t: ly - 10, b: ly + 3 } };
      }
      placed.push(chosen.box);
      labels += text(chosen.x, chosen.y, p.label, { anchor: chosen.anchor, size: 10.5, fill: INK_2, weight: 600 });
    }
  });

  mount.innerHTML = `${svgOpen(w, h, ariaLabel)}
    <rect width="${w}" height="${h}" fill="${SURFACE}"/>
    ${grid}${dots}${labels}
  </svg>`;

  const svg = mount.querySelector('svg');
  const tip = tooltipEl(mount);
  const pointMap = Object.fromEntries(points.map((p) => [p.id, p]));
  mount.querySelectorAll('[data-hit]').forEach((hit) => {
    const p = pointMap[hit.getAttribute('data-hit')];
    const show = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = e ? e.clientX - rect.left : (sx(p.x) / w) * rect.width;
      const y = e ? e.clientY - rect.top : (sy(p.y) / h) * rect.height;
      renderTip(tip, mount, {
        title: p.label,
        rows: [
          { label: xLabel, value: formatX(p.x), color },
          { label: yLabel, value: formatY(p.y), color },
        ],
      }, x, y);
    };
    hit.addEventListener('pointerenter', show);
    hit.addEventListener('pointermove', show);
    hit.addEventListener('pointerleave', () => hideTip(tip));
    hit.setAttribute('tabindex', '0');
    hit.setAttribute('role', 'button');
    hit.setAttribute('aria-label', `${p.label}，${xLabel} ${p.x}，${yLabel} ${p.y}`);
    hit.addEventListener('focus', () => show());
    hit.addEventListener('blur', () => hideTip(tip));
  });
  svg.addEventListener('pointerleave', () => hideTip(tip));
  let ki = 0;
  svg.addEventListener('keydown', (evt) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(evt.key)) return;
    evt.preventDefault();
    ki = Math.max(0, Math.min(points.length - 1, ki + (evt.key === 'ArrowRight' ? 1 : -1)));
    mount.querySelector(`[data-hit="${CSS.escape(points[ki].id)}"]`)?.focus();
  });
}

/* ---------------- Horizontal bar chart (single / diverging) ---------------- */

export function drawHBar(mount, spec) {
  const {
    items, mode = 'diverging', unit = '%', color = '#f2c96b', height = null,
    ariaLabel = '水平条形图', formatValue = (v) => `${v}${unit}`,
  } = spec;
  if (!items?.length) return;
  const w = VB_W;
  const rowH = 34;
  const h = height || items.length * rowH + 48;
  const m = { l: 108, r: 66, t: 18, b: 26 };
  const plotW = w - m.l - m.r;
  const vals = items.map((i) => i.value);
  let lo = Math.min(0, ...vals);
  let hi = Math.max(0, ...vals);
  if (mode === 'single') { lo = 0; hi = Math.max(...vals); }
  const ticks = niceTicks(lo, hi, 4);
  lo = ticks[0];
  hi = ticks[ticks.length - 1];
  const sx = (v) => m.l + ((v - lo) / (hi - lo || 1)) * plotW;
  const zero = sx(0);
  const barH = 14;

  let grid = '';
  for (const t of ticks) {
    const x = sx(t);
    grid += line(x, m.t, x, h - m.b, GRID, 1);
    grid += text(x, h - 8, fmtNum(t), { anchor: 'middle', size: 9.5, fill: MUTED });
  }
  grid += line(zero, m.t, zero, h - m.b, AXIS, 1);

  let bars = '';
  items.forEach((it, i) => {
    const y = m.t + i * rowH + 10;
    const x0 = it.value >= 0 ? zero : sx(it.value);
    const width = Math.max(1, Math.abs(sx(it.value) - zero));
    const fill = mode === 'single' ? (it.color || color) : it.value < 0 ? CHART_COLORS.divergingNeg : it.value > 0 ? CHART_COLORS.divergingPos : '#4b5670';
    bars += `<g data-bar="${i}">
      <rect x="${x0}" y="${y}" width="${width}" height="${barH}" rx="3" fill="${fill}"/>
      ${text(m.l - 12, y + barH / 2 + 4, it.label, { anchor: 'end', size: 11, fill: INK_2 })}
      ${text(it.value >= 0 ? sx(it.value) + 8 : sx(it.value) - 8, y + barH / 2 + 4, formatValue(it.value), { anchor: it.value >= 0 ? 'start' : 'end', size: 10.5, fill: INK_2, weight: 600 })}
    </g>`;
  });
  const hitRows = items.map((it, i) => `<rect class="viz-hit" data-hit="${i}" x="${m.l}" y="${m.t + i * rowH}" width="${plotW}" height="${rowH}" fill="transparent"/>`).join('');

  mount.innerHTML = `${svgOpen(w, h, ariaLabel)}
    <rect width="${w}" height="${h}" fill="${SURFACE}"/>
    ${grid}${bars}${hitRows}
  </svg>`;

  const svg = mount.querySelector('svg');
  const tip = tooltipEl(mount);
  const groups = [...svg.querySelectorAll('[data-bar]')];
  function show(i, evt) {
    const it = items[i];
    groups.forEach((g, j) => g.setAttribute('opacity', j === i ? '1' : '.55'));
    const rect = mount.getBoundingClientRect();
    const x = evt ? evt.clientX - rect.left : (sx(it.value) / w) * rect.width;
    const y = evt ? evt.clientY - rect.top : ((m.t + i * rowH) / h) * rect.height;
    renderTip(tip, mount, {
      title: it.label,
      rows: [{ label: it.tipLabel || '数值', value: formatValue(it.value), color: mode === 'single' ? (it.color || color) : it.value < 0 ? CHART_COLORS.divergingNeg : CHART_COLORS.divergingPos }],
    }, x, y);
  }
  function hide() {
    groups.forEach((g) => g.removeAttribute('opacity'));
    hideTip(tip);
  }
  mount.querySelectorAll('[data-hit]').forEach((hit) => {
    const i = Number(hit.getAttribute('data-hit'));
    hit.addEventListener('pointerenter', (e) => show(i, e));
    hit.addEventListener('pointermove', (e) => show(i, e));
    hit.addEventListener('pointerleave', hide);
  });
  svg.addEventListener('pointerleave', hide);
}

/* ---------------- Card shell ---------------- */

export function chartCard(spec) {
  const { id, title, subtitle = '', legend = [], chart, table, footnote = '', actions = '' } = spec;
  const legendHtml = legend.length
    ? `<ul class="chart-legend">${legend.map((l) => `
        <li><span class="lg-key${l.dash ? ' is-dash' : ''}" style="--k:${l.color}"></span>${esc(l.label)}</li>`).join('')}
      </ul>`
    : '';
  const tableHtml = table
    ? `<details class="chart-table">
        <summary>查看数据表</summary>
        <div class="table-wrap">
          <table>
            <thead><tr>${table.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
            <tbody>${table.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        </div>
      </details>`
    : '';
  return `<article class="chart-card" data-chart-card="${esc(id)}" data-chart-name="${esc(title)}">
    <header class="chart-head">
      <div>
        <h3>${esc(title)}</h3>
        ${subtitle ? `<p class="chart-sub">${esc(subtitle)}</p>` : ''}
      </div>
      <div class="chart-actions">
        ${actions}
        <button class="btn btn-quiet btn-sm" type="button" data-export-chart title="将当前图表导出为 PNG">${iconInline('download')}PNG</button>
      </div>
    </header>
    ${legendHtml}
    <div class="chart-mount" data-chart-mount style="--chart-ratio:${(chart.height || 320)}"></div>
    ${footnote ? `<p class="chart-note">${footnote}</p>` : ''}
    ${tableHtml}
  </article>`;
}

function iconInline(name) {
  const paths = {
    download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  };
  return `<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">${paths[name] || ''}</svg>`;
}

export function mountChartCard(spec) {
  const card = document.querySelector(`[data-chart-card="${CSS.escape(spec.id)}"]`);
  if (!card) return;
  const mount = card.querySelector('[data-chart-mount]');
  if (!mount) return;
  const draw = {
    line: drawLine,
    bars: drawBars,
    radar: drawRadar,
    scatter: drawScatter,
    hbar: drawHBar,
  }[spec.chart.type];
  if (draw) draw(mount, spec.chart);
}

/** 通用数据表生成 */
export function lineTable(series, xTicks, xName = '等级') {
  const xs = xTicks || series[0].points.map((p) => p.x);
  return {
    headers: [xName, ...series.map((s) => s.name)],
    rows: xs.map((x) => [x, ...series.map((s) => {
      const p = s.points.find((q) => q.x === x);
      return p ? fmtNum(p.y) : '—';
    })]),
  };
}

export { SURFACE, INK, INK_2, MUTED, GRID, AXIS };
