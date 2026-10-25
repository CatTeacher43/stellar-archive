import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 920 } });
await ctx.addInitScript(() => localStorage.setItem('sra.settings.v1', JSON.stringify({ includeUnreleased:false, offline:false, disclaimerAck:true, lastCheck:null })));
await ctx.addInitScript(() => localStorage.setItem('sra.watchlist.v1', JSON.stringify(['firefly'])));
const p = await ctx.newPage();
await p.goto('http://127.0.0.1:8765/#/watchlist', { waitUntil: 'networkidle' });
await p.waitForTimeout(800);
console.log(JSON.stringify(await p.evaluate(() => {
  const box = (s) => { const e=document.querySelector(s); if(!e) return null; const r=e.getBoundingClientRect(); return {top:r.top,bottom:r.bottom,height:r.height,left:r.left,right:r.right}; };
  return { strip: box('.watch-strip'), grid: box('.watch-grid'), card: box('.watch-card'), changes: box('.watch-changes'), heading: box('.watch-changes .chart-heading'), page: box('.page'), footer: box('.app-footer') };
}), null, 2));
await p.locator('.watch-card').screenshot({ path: 'tools/shots/z-watch-card.png' });
await p.locator('.watch-changes').screenshot({ path: 'tools/shots/z-watch-changes.png' });
await b.close();
