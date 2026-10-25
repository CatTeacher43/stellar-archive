import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await ctx.addInitScript(() => localStorage.setItem('sra.settings.v1', JSON.stringify({ includeUnreleased: false, offline: false, disclaimerAck: true, lastCheck: null })));
const p = await ctx.newPage();

for (const [name, hash] of [['updates', '#/updates'], ['unreleased', '#/unreleased']]) {
  await p.goto(`http://127.0.0.1:8765/${hash}`, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1000);
  console.log(name, await p.evaluate(() => {
    const box = (s) => { const e = document.querySelector(s); if (!e) return null; const r = e.getBoundingClientRect(); return { l: +r.left.toFixed(1), r: +r.right.toFixed(1), w: +r.width.toFixed(1), h: +r.height.toFixed(1) }; };
    return {
      scrollW: document.documentElement.scrollWidth,
      legend: box('.pack-legend'),
      legendItems: [...document.querySelectorAll('.pack-legend span')].map((e) => ({ text: e.textContent.trim(), w: +e.getBoundingClientRect().width.toFixed(1), h: +e.getBoundingClientRect().height.toFixed(1) })),
      strip: box('.update-status-strip'),
      stripItems: [...document.querySelectorAll('.us-item')].map((e) => ({ text: e.textContent.trim().replace(/\s+/g, ' '), w: +e.getBoundingClientRect().width.toFixed(1), h: +e.getBoundingClientRect().height.toFixed(1) })),
      banner: box('.warn-banner'),
      bannerText: document.querySelector('.warn-banner p')?.innerText,
    };
  }));
  await p.screenshot({ path: `tools/shots/z-m-${name}.png`, fullPage: false });
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.waitForTimeout(300);
  await p.screenshot({ path: `tools/shots/z-m-${name}-top.png`, fullPage: false });
}

await b.close();
