import {
  CHARACTER_MAP, characterVersions, getCharacterSnapshot,
  compareCharacterVersions, statPercentiles, growthSeries, STAT_META,
  ELEMENTS, VERSION_BY_ID, versionIndex, APP, DISCLAIMER,
} from '../data/index.js';
import {
  esc, icon, fmt, rarityStars, elementChip, pathChip, limitedChip, statusBadge,
  watchButton, compareToggle, sourceBlock, statTile, toast,
} from '../ui.js';
import { portraitSrc, fanArtSrc } from '../assets.js';
import { isWatched, getCompareTray } from '../store.js';
import { chartCard, mountChartCard, fmtNum } from '../charts.js';
import {
  characterBundle, characterAllVersionsBundle, characterCSV, downloadJSON, downloadCSV,
} from '../export.js';
import { breadcrumb, pageFootNote, warningBanner } from './shared.js';

export async function render(ctx) {
  const id = ctx.params[0];
  const c = CHARACTER_MAP[id];
  if (!c) {
    ctx.setTitle('未找到角色');
    return {
      html: `<div class="page narrow-page">
        <div class="empty-state tall"><div class="empty-ico">${icon('compass', 30)}</div>
          <h2>角色未收录</h2><p>该条目可能不在当前档案范围内。</p>
          <a class="btn btn-primary" href="#/characters">返回角色档案</a></div>
      </div>`,
    };
  }

  const isLive = c.status === 'live';
  const versions = isLive ? characterVersions(c) : [];
  const requested = ctx.query.v;
  const version = isLive
    ? (versions.includes(requested) ? requested : versions[versions.length - 1])
    : (c.betaVersion || c.leakVersion || '—');
  const snap = isLive ? getCharacterSnapshot(c, version) : c;
  const stats = snap.stats || c.lv80;
  const skills = snap.skills || c.skills;
  const patchList = snap.appliedPatches || [];
  const pct = statPercentiles()[c.id];
  const vIndex = isLive ? versionIndex(version) : -1;
  const prevVersion = isLive && vIndex > 0 ? versions[versions.indexOf(version) - 1] : null;
  const diff = prevVersion ? compareCharacterVersions(c.id, prevVersion, version) : null;
  const diffCount = diff ? diff.statDiffs.length + diff.skillDiffs.length : 0;

  ctx.setTitle(`${c.name} · 角色档案`);

  const html = `<div class="page character-detail-page">
    ${breadcrumb([{ label: '角色档案', href: '#/characters' }, { label: c.name }])}

    ${isLive ? '' : nonLiveWarning(c)}

    <section class="character-hero">
      <div class="ch-art" style="--el:${elementColor(c.element)}">
        <img src="${portraitSrc(c)}" alt="${esc(c.name)}立绘占位图" width="660" height="880">
        <div class="ch-art-badges">
          <span class="rarity-float">${rarityStars(c.rarity)}</span>
          ${statusBadge(c.status)}
        </div>
        <p class="ch-art-note">官方美术占位 · 程序生成</p>
      </div>
      <div class="ch-main">
        <p class="eyebrow">CHARACTER ARCHIVE${c.en ? ` · ${esc(c.en.toUpperCase())}` : ''}</p>
        <div class="ch-title"><h1>${esc(c.name)}</h1>${c.en ? `<em>${esc(c.en)}</em>` : ''}</div>
        <div class="ch-chips">
          ${elementChip(c.element)}${pathChip(c.path)}${limitedChip(c.limited)}${statusBadge(c.status, { long: true })}
        </div>
        <p class="ch-intro">${esc(c.intro || [c.faction, c.positioning].filter(Boolean).join(' · '))}</p>
        <div class="ch-meta">
          <div><span>上线版本</span><b>${isLive ? `V${esc(c.releaseVersion)}` : esc(version)}</b><em>${isLive ? `${c.releaseDate ? `${c.releaseDate} 实装 · ` : ''}${VERSION_BY_ID[c.releaseVersion]?.title || ''}` : '非正式版本'}</em></div>
          <div><span>当前快照</span><b>${isLive ? `V${esc(version)}` : esc(version)}</b><em>${isLive ? (VERSION_BY_ID[version]?.title || '') : '前瞻数据'}</em></div>
          <div><span>数据状态</span><b>${esc(statusWord(c.status))}</b><em>${isLive ? '可长期回溯' : '随时可能改动'}</em></div>
          <div><span>数值口径</span><b>Lv.80</b><em>基础面板</em></div>
        </div>
        <div class="detail-actions">
          ${watchButton(c.id, isWatched(c.id))}
          ${isLive ? compareToggle(c.id, getCompareTray().includes(c.id)) : ''}
          <button class="btn btn-quiet btn-sm" type="button" data-export-json>${icon('download', 14)}JSON</button>
          ${isLive ? `<button class="btn btn-quiet btn-sm" type="button" data-export-all>${icon('database', 14)}全部版本</button>` : ''}
          ${isLive ? `<button class="btn btn-quiet btn-sm" type="button" data-export-csv>${icon('table', 14)}CSV</button>` : ''}
          <button class="btn btn-quiet btn-sm" type="button" data-action="copy-link">${icon('share', 14)}复制链接</button>
        </div>
      </div>
    </section>

    <div class="stat-row">
      ${STAT_META.map((m) => statTile(m.name, fmt.int(stats[m.key]), {
        sub: pct ? `全角色百分位 ${pct[m.key]}%` : '前瞻数据，不参与百分位',
        accent: m.color,
      })).join('')}
    </div>

    ${isLive ? versionPanel(c, versions, version, prevVersion, diffCount, patchList) : ''}

    <section class="section chart-section">
      <div class="chart-heading">
        <div><p class="eyebrow">GROWTH CURVE</p><h2>等级成长曲线</h2><p>由 Lv.80 公开数值反推的拟合曲线；速度不随等级成长。</p></div>
        <div class="metric-tabs" id="growth-tabs" role="group" aria-label="选择成长指标">
          ${STAT_META.map((m, i) => `<button type="button" class="${i === 0 ? 'is-active' : ''}" data-metric="${m.key}">${m.name}</button>`).join('')}
        </div>
      </div>
      <div id="growth-zone">${growthCard(stats, 'hp')}</div>
    </section>

    <section class="section">
      <div class="chart-heading">
        <div><p class="eyebrow">SKILL MULTIPLIERS</p><h2>技能与倍率</h2><p>展示满级数值。不同单位不可直接横向比较，图表按单位分组。</p></div>
      </div>
      <div class="skill-grid">
        ${skills.map((s) => `<article class="skill-card${s.chart ? '' : ' is-muted'}">
          <header><span class="skill-tag">${esc(s.tag)}</span><em>${esc(s.unit)}</em></header>
          <h3>${esc(s.name)}</h3>
          <p>${esc(s.desc)}</p>
          <div class="skill-values">
            <span><em>Lv.1</em><b>${s.chart ? s.lv1 : '—'}</b></span>
            <span class="is-main"><em>满级</em><b>${s.chart ? s.lv10 : '—'}</b></span>
          </div>
        </article>`).join('')}
      </div>
      <div id="skill-chart-zone">${skillChartZone(skills, c.element)}</div>
    </section>

    <section class="section two-col-section">
      <div>
        <div class="chart-heading compact"><div><p class="eyebrow">EIDOLONS</p><h2>星魂</h2><p>按米游社 Wiki 角色页整理的星魂名称与效果文本。</p></div></div>
        <ol class="eidolon-list">
          ${(snap.eidolons || []).map((e, i) => `<li>
            <span class="eido-no">0${i + 1}</span>
            <div><h4>${esc(e.name)}</h4><p>${esc(e.desc)}</p></div>
          </li>`).join('')}
        </ol>
      </div>
      <div>
        <div class="chart-heading compact"><div><p class="eyebrow">TRACES</p><h2>行迹</h2><p>按米游社 Wiki 角色页整理的额外能力与效果文本。</p></div></div>
        <div class="trace-list">
          ${(snap.traces || []).map((t, i) => `<article class="trace-card">
            <span class="trace-ico">${['A', 'B', 'C'][i] || '·'}</span>
            <div><h4>${esc(t.name)}</h4><p>${esc(t.desc)}</p></div>
          </article>`).join('')}
        </div>
      </div>
    </section>

    ${isLive ? versionTimeline(c, versions, version) : ''}

    ${fanArtSection(c)}

    ${sourceBlock(c.source)}
    ${pageFootNote(isLive
      ? '角色基础数值、技能、星魂与行迹整理自米游社《崩坏：星穹铁道》WIKI。不同版本的面板调整未被逐版收录；版本切换只展示当前归档，缺少改动记录不代表历史上从未调整。'
      : '测试服 / 未实机 / 已废弃内容仅作前瞻与考据展示，不代表最终效果，不进入正式快照链，也不挂载同人图。')}
  </div>`;

  return {
    html,
    mount(root) {
      mountChartCard(growthCardSpec(stats, 'hp'));
      drawSkillChart(root, skills, c.element, firstUnit(skills));

      root.querySelector('#growth-tabs')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-metric]');
        if (!btn) return;
        const metric = btn.getAttribute('data-metric');
        root.querySelectorAll('#growth-tabs [data-metric]').forEach((b) => b.classList.toggle('is-active', b === btn));
        const zone = root.querySelector('#growth-zone');
        zone.innerHTML = growthCard(stats, metric);
        mountChartCard(growthCardSpec(stats, metric));
      });

      root.querySelector('#skill-chart-zone')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-unit-tab]');
        if (!btn) return;
        const unit = btn.getAttribute('data-unit-tab');
        root.querySelectorAll('[data-unit-tab]').forEach((b) => b.classList.toggle('is-active', b === btn));
        const zone = root.querySelector('#skill-chart-zone');
        zone.innerHTML = skillChartZone(skills, c.element, unit);
        drawSkillChart(root, skills, c.element, unit);
      });

      const verSelect = root.querySelector('#version-select');
      verSelect?.addEventListener('change', (e) => {
        location.hash = `#/character/${c.id}?v=${encodeURIComponent(e.target.value)}`;
      });

      root.querySelector('[data-export-json]')?.addEventListener('click', () => {
        if (isLive) {
          downloadJSON(characterBundle(c, version), `${c.name}-V${version}`);
        } else {
          downloadJSON({
            archive: APP.name, dataVersion: APP.dataVersion, exportedAt: new Date().toISOString(),
            disclaimer: DISCLAIMER.short, kind: 'preview-character',
            character: {
              id: c.id, name: c.name, status: c.status, element: c.element, path: c.path,
              rarity: c.rarity, version, lv80: c.lv80, skills: c.skills, eidolons: c.eidolons,
              traces: c.traces, source: c.source, note: '测试 / 未实机 / 废弃演示数据，随时可能作废。',
            },
          }, `${c.name}-${version}-前瞻`);
        }
        toast('角色数据已导出 JSON', { tone: 'good' });
      });

      root.querySelector('[data-export-all]')?.addEventListener('click', () => {
        downloadJSON(characterAllVersionsBundle(c), `${c.name}-全部版本快照`);
        toast('全部正式版本快照已导出', { tone: 'good' });
      });

      root.querySelector('[data-export-csv]')?.addEventListener('click', () => {
        const { headers, rows } = characterCSV({ ...snap, snapshotVersion: version, stats });
        downloadCSV(headers, rows, `${c.name}-V${version}`);
        toast('角色数据已导出 CSV', { tone: 'good' });
      });
    },
  };
}

function nonLiveWarning(c) {
  if (c.status === 'beta') {
    return warningBanner({
      tone: 'warning',
      title: '测试服条目 · 存在大幅改动风险',
      text: '该角色来自测试服数据包整理，正式上线前技能、数值、星魂均可能调整甚至重做。本页不进入正式快照链，也不挂载同人图。',
    });
  }
  if (c.status === 'scrapped') {
    return warningBanner({
      tone: 'critical',
      title: '已废弃条目 · 不会实装',
      text: `该条目仅保留作考据演示，最后出现于 V${esc(c.leakVersion || '—')} 的历史埋包中。请勿将其视为未来角色或抽取建议。`,
    });
  }
  return warningBanner({
    tone: 'critical',
    title: '未实机内容 · 随时作废，非最终数值',
    text: '该角色来自版本预下载埋包整理，未进入正式服。名称、数值、机制与实装可能性均不保证，禁止作为抽取或配队依据。',
  });
}

function versionPanel(c, versions, version, prevVersion, diffCount, patchList) {
  const latestPatch = patchList[patchList.length - 1];
  const compareHref = prevVersion
    ? `#/character/${c.id}/compare?v1=${encodeURIComponent(prevVersion)}&v2=${encodeURIComponent(version)}`
    : '';
  return `<section class="version-panel">
    <div class="vp-head">
      <div>
        <p class="eyebrow">VERSION SNAPSHOT</p>
        <h2>版本快照</h2>
        <p>按正式版本浏览归档快照。当前只逐角色保留了上线时的基础面板与技能，未逐版收录平衡改动。</p>
      </div>
      <div class="vp-controls">
        <label class="select-field inline"><span>快照版本</span>
          <select id="version-select">
            ${[...versions].reverse().map((v) => {
              const hasPatch = (c.patches || []).some((p) => p.version === v);
              return `<option value="${v}"${v === version ? ' selected' : ''}>V${v} · ${VERSION_BY_ID[v]?.title || ''}${hasPatch ? ' · 有改动' : ''}</option>`;
            }).join('')}
          </select>
        </label>
        ${prevVersion
          ? `<a class="btn btn-ghost btn-sm" href="${compareHref}">${icon('compare', 15)}对比上一版本${diffCount ? `<em class="btn-count">${diffCount}</em>` : ''}</a>`
          : '<span class="btn btn-quiet btn-sm is-disabled">最早快照</span>'}
      </div>
    </div>
    <div class="vp-body">
      <div class="vp-current">
        <span class="vp-label">当前快照</span>
        <b>V${esc(version)}</b>
        <em>${esc(VERSION_BY_ID[version]?.title || '')} · ${fmt.date(VERSION_BY_ID[version]?.date)}</em>
        ${prevVersion ? `<span class="vp-diff">与 V${esc(prevVersion)} 相比记录到 ${diffCount} 处差异</span>` : '<span class="vp-diff">首次上线版本</span>'}
      </div>
      <div class="vp-patches">
        ${patchList.length
          ? `<span class="vp-label">已记录的数值改动</span>
            ${patchList.map((p) => `<span class="patch-chip"><b>V${esc(p.version)}</b>${esc(p.title)}</span>`).join('')}
            <p class="vp-note">${icon('info', 13)}只记录有来源的数值型改动；未记录不代表历史上从未调整。${latestPatch ? `最近一笔为 V${esc(latestPatch.version)}。` : ''}</p>`
          : `<span class="vp-label">改动记录</span><p class="vp-note">${icon('info', 13)}当前档案没有该角色的逐版本改动记录。切换版本显示的是同一份上线快照，不代表官方完整改动史。</p>`}
      </div>
    </div>
  </section>`;
}

function growthCard(stats, metric) {
  return chartCard(growthCardSpec(stats, metric));
}

function growthCardSpec(stats, metric) {
  const meta = STAT_META.find((m) => m.key === metric) || STAT_META[0];
  const series = [{ name: meta.name, color: meta.color, points: growthSeries(stats[meta.key], meta.key) }];
  return {
    id: 'growth-chart',
    title: `等级成长 · ${meta.name}`,
    subtitle: 'Lv.1–80 拟合曲线 · 以 Lv.80 公开基础数值反推',
    chart: {
      type: 'line',
      series,
      xTicks: [1, 10, 20, 30, 40, 50, 60, 70, 80],
      xLabel: '等级',
      yLabel: meta.name,
      height: 300,
      xName: 'Lv.',
      formatX: (v) => String(v),
      formatY: (v) => fmtNum(v),
      ariaLabel: `${meta.name}等级成长曲线`,
    },
    table: {
      headers: ['等级', meta.name],
      rows: [1, 10, 20, 30, 40, 50, 60, 70, 80].map((lv) => {
        const point = series[0].points.find((p) => p.x === lv);
        return [lv, point?.y ?? '—'];
      }),
    },
    footnote: metric === 'spd' ? '速度不随等级成长，曲线为水平线。' : '拟合曲线仅用于档案可视化，非官方成长公式。',
  };
}

function skillUnitGroups(skills) {
  const groups = new Map();
  for (const s of skills) {
    if (!s.chart || !s.lv10) continue;
    if (!groups.has(s.unit)) groups.set(s.unit, []);
    groups.get(s.unit).push(s);
  }
  return groups;
}

function firstUnit(skills) {
  return [...skillUnitGroups(skills).keys()][0] || '';
}

function skillChartZone(skills, element, unit = null) {
  const groups = skillUnitGroups(skills);
  const units = [...groups.keys()];
  if (!units.length) {
    return `<p class="inline-note">该角色暂无可视化技能倍率。</p>`;
  }
  const selected = unit && groups.has(unit) ? unit : units[0];
  const list = groups.get(selected);
  const spec = {
    id: 'skill-chart',
    title: `满级技能数值${selected ? ` · ${selected}` : ''}`,
    subtitle: '满级数值 · 同一单位内对比，不代表实战伤害',
    chart: {
      type: 'bars',
      categories: list.map((s) => ({
        label: s.tag,
        sublabel: s.name,
        value: s.lv10,
        detail: `${s.tag} · ${s.name}（${s.unit}）`,
        unit: selected,
      })),
      unit: selected,
      height: 300,
      color: elementColor(element),
      ariaLabel: `满级技能倍率，单位${selected}`,
    },
    table: {
      headers: ['技能', '类型', '单位', 'Lv.1', '满级'],
      rows: list.map((s) => [s.name, s.tag, s.unit, s.lv1, s.lv10]),
    },
    footnote: '不同单位的技能不可直接比较；切换单位标签查看对应分组。倍率不等于最终伤害。',
    actions: units.length > 1
      ? `<div class="chart-unit-tabs">${units.map((u) => `<button type="button" class="${u === selected ? 'is-active' : ''}" data-unit-tab="${esc(u)}">${esc(u)}</button>`).join('')}</div>`
      : '',
  };
  return chartCard(spec);
}

function drawSkillChart(root, skills, element, unit) {
  const groups = skillUnitGroups(skills);
  const selected = unit && groups.has(unit) ? unit : [...groups.keys()][0];
  if (!selected) return;
  const list = groups.get(selected);
  mountChartCard({
    id: 'skill-chart',
    chart: {
      type: 'bars',
      categories: list.map((s) => ({
        label: s.tag, sublabel: s.name, value: s.lv10,
        detail: `${s.tag} · ${s.name}（${s.unit}）`, unit: selected,
      })),
      unit: selected, height: 300, color: elementColor(element),
    },
  });
}

function versionTimeline(c, versions, version) {
  const patches = new Set((c.patches || []).map((p) => p.version));
  return `<section class="section">
    <div class="chart-heading compact"><div><p class="eyebrow">VERSION TIMELINE</p><h2>版本轨迹</h2><p>从上线版本 V${esc(versions[0])} 到 V${esc(versions[versions.length - 1])}，共 ${versions.length} 个正式版本。标记表示有来源的数值改动记录。</p></div></div>
    <div class="version-timeline">
      ${versions.map((v) => `<a class="vt-chip${v === version ? ' is-active' : ''}${patches.has(v) ? ' has-patch' : ''}" href="#/character/${c.id}?v=${encodeURIComponent(v)}">
        <b>V${esc(v)}</b>
        <em>${esc(VERSION_BY_ID[v]?.title || '')}</em>
        ${patches.has(v) ? '<i>改动</i>' : ''}
      </a>`).join('')}
    </div>
    <div class="vt-legend"><span><i class="dot current"></i>当前快照</span><span><i class="dot patch"></i>有记录改动</span><span>未逐版校对全部官方调整；缺少标记不代表没有改动。</span></div>
  </section>`;
}

function fanArtSection(c) {
  if (c.status !== 'live') {
    return `<section class="section fanart-section">
      <div class="chart-heading compact"><div><p class="eyebrow">FAN ART · UNAVAILABLE</p><h2>同人画廊</h2><p>未实机 / 测试服 / 废弃条目不允许挂载同人图，避免将非正式内容误认为官方设定。</p></div></div>
      <div class="art-locked">${icon('shield', 20)}<span>该条目位于隔离区，同人画廊关闭。</span></div>
    </section>`;
  }
  const arts = (c.fanArts || []).slice(0, 2);
  return `<section class="section fanart-section">
    <div class="chart-heading compact"><div><p class="eyebrow">FAN ART GALLERY</p><h2>同人画廊</h2><p>每位已上线角色最多收录 2 幅；须注明画师、授权协议与来源，且固定在显眼位置标注同人属性。目前没有已授权同人图，因此画廊留空。</p></div><span class="fan-policy-chip">${icon('image', 14)}非官方设定 · 仅氛围展示</span></div>
    <div class="fan-label-strip">同人创作｜非官方设定，仅氛围展示</div>
    ${arts.length ? `<div class="fan-grid">
      ${arts.map((a) => `<figure class="fan-card">
        <div class="fan-img"><img src="${fanArtSrc(a)}" alt="${esc(a.title)}同人占位插画" loading="lazy" width="1200" height="820"><span class="fan-watermark">同人创作 · 非官方</span></div>
        <figcaption>
          <h4>${esc(a.title)}</h4>
          <p>画师：${esc(a.artist)}</p>
          <div class="fan-meta"><span>${esc(a.license)}</span><span>来源：演示占位</span></div>
          <p class="fan-note">${esc(a.note || '')}</p>
        </figcaption>
      </figure>`).join('')}
    </div>` : `<div class="art-locked">${icon('image', 20)}<span>暂未收录授权同人图。此位置不会使用官方美术替代。</span></div>`}
  </section>`;
}

function elementColor(el) {
  return ELEMENTS[el]?.color || '#f2c96b';
}

function statusWord(status) {
  return {
    live: '已上线 · 稳定',
    beta: '测试服 · 风险',
    unreleased: '未实机 · 隔离',
    scrapped: '已废弃 · 留档',
  }[status] || status;
}
