import {
  APP, DISCLAIMER, COUNTS, LIVE_VERSIONS, STAGES, DATA_PACKS,
} from '../data/index.js';
import { esc, icon, logoMark, fmt, toast, statusBadge } from '../ui.js';
import { allVersionsBundle, allStagesBundle, downloadJSON } from '../export.js';
import { pageFootNote } from './shared.js';

export async function render(ctx) {
  ctx.setTitle('关于与免责');
  const html = `<div class="page about-page">
    <section class="about-hero">
      <div class="ah-mark">${logoMark(72)}</div>
      <div class="ah-copy">
        <p class="eyebrow">ABOUT · NON-OFFICIAL ARCHIVE</p>
        <h1>${esc(APP.name)}<em>${esc(APP.nameEn)}</em></h1>
        <p class="ah-tagline">${esc(APP.tagline)}</p>
        <p class="ah-lead">一个玩家自制的静态战斗数据档案库：把正式服、测试服、未实机与已废弃内容按可信等级分开存放，让每次版本改动都能被回溯，而不是被下一次爆料冲走。</p>
        <div class="ah-meta">
          <span>应用 v${esc(APP.version)}</span><span>数据 v${esc(APP.dataVersion)}</span>
          <span>${COUNTS.versions} 个正式版本</span><span>${STAGES.length} 期关卡轮换</span>
        </div>
        <div class="detail-actions">
          <button class="btn btn-primary btn-sm" type="button" data-export-all-versions>${icon('download', 14)}导出全部版本快照</button>
          <button class="btn btn-quiet btn-sm" type="button" data-export-all-stages>${icon('map', 14)}导出历代关卡</button>
          <button class="btn btn-ghost btn-sm" type="button" data-install-app>${icon('download', 14)}安装 PWA</button>
        </div>
      </div>
    </section>

    <div class="affiliation-banner">
      <span class="ab-mark">${icon('shield', 24)}</span>
      <div>
        <h2>与米哈游无关联</h2>
        <p>本工具与 miHoYo / HoYoverse 无任何隶属、合作或授权关系，亦未获得其背书。游戏名称、角色与相关设定版权归原权利方所有。本站不包含游戏原生模型、音频或受版权保护的官方美术资源。</p>
      </div>
    </div>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">TRUST TIERS</p><h2>四层可信等级</h2><p>数据在存储与展示上物理分离，避免前瞻内容污染正式档案。</p></div></div>
      <div class="tier-grid">
        ${[
          ['live', '正式服', '稳定版本归档，拥有永久快照，可做版本回溯与对比。', '默认进入全局搜索'],
          ['beta', '测试服', '测试包整理的 V1 数据，上线前可能大幅调整。', '默认隔离 · 不挂同人图'],
          ['unreleased', '未实机', '版本预下载埋包内容，随时可能改动或直接作废。', '独立专区 · 默认隔离'],
          ['scrapped', '已废弃', '历史埋包中确认不会实装的内容，仅作考据留档。', '仅留档 · 搜索不返回'],
        ].map(([key, title, desc, policy], i) => `<article class="tier-card tier-${key}">
          <span class="tc-no">0${i + 1}</span>
          <div class="tc-head">${statusBadge(key, { long: true })}<h3>${title}</h3></div>
          <p>${esc(desc)}</p>
          <span class="tc-policy">${icon('filter', 12)}${policy}</span>
        </article>`).join('')}
      </div>
    </section>

    <section class="section two-col-section">
      <div class="col-panel">
        <div class="col-head">${icon('check', 18)}<h2>它做什么</h2></div>
        <ul class="about-list is-yes">
          <li>静态展示角色与历代关卡的真实公开资料，并提供光锥、遗器、敌人演示目录</li>
          <li>按版本切片回溯，比较两次快照的数值与倍率差异</li>
          <li>用折线、雷达、散点与条形图呈现结构与趋势</li>
          <li>2–4 名角色并排比较，收藏本地关注清单</li>
          <li>导出 JSON / CSV / PNG，离线浏览</li>
        </ul>
      </div>
      <div class="col-panel tone-no">
        <div class="col-head">${icon('close', 18)}<h2>它不做什么</h2></div>
        <ul class="about-list is-no">
          <li>不提供用户数据录入、配装或遗器副词条输入</li>
          <li>不做配队模拟、伤害 / DPS 计算或行动轴推演</li>
          <li>不读取游戏账号，不抓包，不修改客户端</li>
          <li>没有账号、评论、投稿、排行或公开主页</li>
          <li>不把未实机内容包装成「最终数值」</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">DATA PROVENANCE</p><h2>数据来源与校验</h2><p>无法确认的机制保留原文备注，不强行补全。</p></div></div>
      <div class="provenance-grid">
        <div class="prov-card">
          <h3>${icon('database', 16)}来源分层</h3>
          <ol>
            ${DISCLAIMER.sources.map((s) => `<li>${esc(s)}</li>`).join('')}
          </ol>
        </div>
        <div class="prov-card">
          <h3>${icon('shield', 16)}入库校验</h3>
          <p>${esc(DISCLAIMER.validation)}</p>
          <p class="prov-note">角色满级面板、技能倍率、星魂与行迹按米游社 Wiki 整理；关卡名称、日期、环境效果与敌方编成按 BWIKI 逐期录入，社区页面缺失的部分保持留空。光锥、遗器与敌人目录仍是结构演示，不冒充完整数值库。</p>
        </div>
        <div class="prov-card">
          <h3>${icon('refresh', 16)}版本与数据包</h3>
          <p>当前归档 ${LIVE_VERSIONS.length} 个正式版本（V${esc(LIVE_VERSIONS[0].id)} → V${esc(LIVE_VERSIONS[LIVE_VERSIONS.length - 1].id)}），每个有角色或关卡内容的版本生成一个本地数据包，共 ${DATA_PACKS.length} 个。</p>
          <p class="prov-note">正式版本之间可以切换快照；当前没有测试服或埋包数据入库，未实机专区保持空置并继续隔离。</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">IMAGE POLICY</p><h2>图片与同人创作</h2><p>官方素材位置当前全部使用程序生成占位图。</p></div></div>
      <div class="image-policy">
        <div class="ip-card">
          <span class="ip-ico">${icon('image', 22)}</span>
          <h3>官方图位</h3>
          <p>头像、立绘、光锥、遗器、敌人与关卡图均为程序生成的抽象占位图，不含游戏原生美术资源。接入真实素材前须逐项确认授权。</p>
        </div>
        <div class="ip-card">
          <span class="ip-ico">${icon('spark', 22)}</span>
          <h3>同人图规则</h3>
          <ul>
            <li>仅已上线角色可挂载，最多 2 幅</li>
            <li>必须标注作者、授权方式与来源</li>
            <li>固定标签「同人创作｜非官方设定，仅氛围展示」</li>
            <li>测试服 / 未实机 / 已废弃内容不挂载</li>
          </ul>
        </div>
        <div class="ip-card">
          <span class="ip-ico">${icon('pin', 22)}</span>
          <h3>版权与下架</h3>
          <p>同人画作版权归原画师所有，仅作非商用氛围展示。若权利人提出异议，相关图片将被移除并保留占位图。</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">ARBITRATION NOTE</p><h2>关于异相仲裁</h2><p>第四个常驻高难玩法，3.6 版本上线。</p></div></div>
      <div class="arb-about">
        <div>
          <p>异相仲裁采用「三骑士 + 王棋」结构：每期 3 个骑士关与 1 个王棋关，骑士关需使用三支不重复的队伍，每关限定 6 轮行动值；通关骑士关会阻断王棋的能量输送并降低其难度。该玩法不产出星琼。</p>
          <p>档案中记录了三骑士 / 王棋结构、每期真实关卡名与可核对到的敌方编成，但<strong>不提供配队建议或行动轴模拟</strong>。社区页面未收录的编成会明确标注留空。</p>
          <p class="arb-src">结构说明参考官方版本公告与公开社区资料；各期名称与敌人来自 BWIKI「仲裁一览」。</p>
        </div>
        <div class="arb-about-tags">
          <span>3 骑士 + 1 王棋</span><span>3 队角色不重复</span><span>每关 6 轮行动值</span><span>骑士通关削弱王棋</span><span>无星琼</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="chart-heading compact"><div><p class="eyebrow">PRIVACY & OFFLINE</p><h2>本地优先</h2></div></div>
      <div class="privacy-row">
        <div><b>无账号系统</b><p>不需要登录，也不存在服务器端用户档案。</p></div>
        <div><b>关注与设置仅存本机</b><p>使用 localStorage 保存；清理浏览器数据会一并移除。</p></div>
        <div><b>离线可读</b><p>Service Worker 缓存应用外壳；数据包写入 IndexedDB。</p></div>
        <div><b>无统计埋点</b><p>搜索词与浏览行为不会上传，也不做用户画像。</p></div>
      </div>
    </section>

    <section class="section disclaimer-full">
      <div class="chart-heading compact"><div><p class="eyebrow">FULL DISCLAIMER</p><h2>完整免责声明</h2><p>更新于 ${fmt.date(APP.lastUpdated)}</p></div></div>
      <div class="disc-body">
        ${DISCLAIMER.long.map((p, i) => `<p><span>${String(i + 1).padStart(2, '0')}</span>${esc(p)}</p>`).join('')}
      </div>
      <p class="disc-final">${esc(DISCLAIMER.short)}</p>
    </section>

    ${pageFootNote('这是玩家自制的非官方项目：角色与关卡资料来自公开 Wiki 整理，缺失内容留空；光锥、遗器与敌人目录仍为结构演示。所有内容不应作为抽取、配队或伤害计算的依据。与 miHoYo / HoYoverse 无关联。')}
  </div>`;

  return {
    html,
    mount(root) {
      root.querySelector('[data-export-all-versions]')?.addEventListener('click', () => {
        const data = allVersionsBundle();
        downloadJSON(data, `星轨档案-全部版本快照-V${APP.dataVersion}`);
        toast('全部正式版本快照已导出', { tone: 'good' });
      });
      root.querySelector('[data-export-all-stages]')?.addEventListener('click', () => {
        const data = allStagesBundle();
        downloadJSON(data, `星轨档案-历代关卡-V${APP.dataVersion}`);
        toast(`已导出 ${data.count} 期关卡档案`, { tone: 'good' });
      });
    },
  };
}
