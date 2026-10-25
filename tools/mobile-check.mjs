import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await ctx.addInitScript(() => localStorage.setItem('sra.settings.v1', JSON.stringify({ includeUnreleased:false, offline:false, disclaimerAck:true, lastCheck:null })));
const p = await ctx.newPage();
await p.goto('http://127.0.0.1:8765/#/character/firefly', { waitUntil: 'networkidle' });
await p.waitForTimeout(900);
console.log(await p.evaluate(() => {
  const box = (s) => { const e=document.querySelector(s); if(!e) return null; const r=e.getBoundingClientRect(); return {l:r.left,r:r.right,w:r.width,top:r.top}; };
  return {
    inner: innerWidth, scroll: document.documentElement.scrollWidth,
    page: box('.page'), heading: box('.fanart-section .chart-heading'), chip: box('.fan-policy-chip'),
    strip: box('.fan-label-strip'), grid: box('.fan-grid'), card: box('.fan-card'),
    fanSection: box('.fanart-section'),
  };
}));
await p.locator('.fanart-section').scrollIntoViewIfNeeded();
await p.waitForTimeout(400);
await p.screenshot({ path: 'tools/shots/z-m-fan-viewport.png' });
await b.close();
