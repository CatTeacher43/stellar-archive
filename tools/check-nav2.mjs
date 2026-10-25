import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 920 } });
await ctx.addInitScript(() => localStorage.setItem('sra.settings.v1', JSON.stringify({ includeUnreleased:false, offline:false, disclaimerAck:true, lastCheck:null })));
const p = await ctx.newPage();
await p.goto('http://127.0.0.1:8765/#/search?q=流萤', { waitUntil: 'networkidle' });
await p.waitForTimeout(800);
console.log(await p.evaluate(() => {
  const links = [...document.querySelectorAll('.side-nav a')].slice(0,3).map(e => ({ text: e.textContent.trim(), cls: e.className, bg: getComputedStyle(e).backgroundColor, color: getComputedStyle(e).color }));
  return links;
}));
await p.locator('.side-nav').screenshot({ path: 'tools/shots/z-side-nav.png' });
await b.close();
