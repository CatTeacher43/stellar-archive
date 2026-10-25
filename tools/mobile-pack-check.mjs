import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await ctx.addInitScript(() => localStorage.setItem('sra.settings.v1', JSON.stringify({ includeUnreleased: false, offline: false, disclaimerAck: true, lastCheck: null })));
const p = await ctx.newPage();
await p.goto('http://127.0.0.1:8765/#/updates', { waitUntil: 'networkidle' });
await p.waitForTimeout(900);
await p.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
await p.waitForTimeout(500);
console.log(await p.evaluate(() => ({ scrollW: document.documentElement.scrollWidth, y: scrollY, sh: document.documentElement.scrollHeight })));
await p.screenshot({ path: 'tools/shots/z-m-updates-bottom.png' });

await p.goto('http://127.0.0.1:8765/#/character/firefly', { waitUntil: 'networkidle' });
await p.waitForTimeout(900);
await p.locator('.fanart-section').scrollIntoViewIfNeeded();
await p.waitForTimeout(400);
console.log(await p.evaluate(() => {
  const box = (s) => { const e = document.querySelector(s); if (!e) return null; const r = e.getBoundingClientRect(); return { l: +r.left.toFixed(1), r: +r.right.toFixed(1), w: +r.width.toFixed(1) }; };
  return { scrollW: document.documentElement.scrollWidth, card: box('.fan-card'), grid: box('.fan-grid'), chip: box('.fan-policy-chip') };
}));
await p.screenshot({ path: 'tools/shots/z-m-fan-final.png' });
await b.close();
