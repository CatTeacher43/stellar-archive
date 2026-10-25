import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await ctx.addInitScript(() => localStorage.setItem('sra.settings.v1', JSON.stringify({ includeUnreleased:false, offline:false, disclaimerAck:true, lastCheck:null })));
const p = await ctx.newPage();
async function go(h) {
  await p.goto('http://127.0.0.1:8765/' + h, { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.evaluate(() => window.scrollTo(0,0));
  await p.waitForTimeout(300);
}
await go('#/character/firefly');
await p.locator('[data-chart-card="growth"]').screenshot({ path: 'tools/shots/z-m-growth.png' }).catch(async () => {
  await p.locator('.chart-card').first().screenshot({ path: 'tools/shots/z-m-growth.png' });
});
await p.locator('[data-chart-card="skill"]').screenshot({ path: 'tools/shots/z-m-skill.png' }).catch(async () => {
  const cards = p.locator('.chart-card');
  await cards.nth(1).screenshot({ path: 'tools/shots/z-m-skill.png' });
});
await p.locator('.fan-gallery, .fanart-section').last().screenshot({ path: 'tools/shots/z-m-fan.png' });
await go('#/search?q=王棋');
await p.screenshot({ path: 'tools/shots/z-m-search-top.png' });
await go('#/unreleased');
await p.screenshot({ path: 'tools/shots/z-m-unreleased-top.png' });
await go('#/updates');
await p.screenshot({ path: 'tools/shots/z-m-updates-top.png' });
await b.close();
