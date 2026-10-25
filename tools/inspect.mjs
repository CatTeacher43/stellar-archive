import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const pw = await import(pathToFileURL(
  'C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js'
).href);
const chromium = pw.chromium || pw.default?.chromium;
const root = resolve(import.meta.dirname, '..');
const shots = resolve(root, 'tools/shots');
const BASE = 'http://127.0.0.1:8765/';

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 920 }, deviceScaleFactor: 2, acceptDownloads: true,
});
await ctx.addInitScript(() => {
  localStorage.setItem('sra.settings.v1', JSON.stringify({
    includeUnreleased: false, offline: false, disclaimerAck: true, lastCheck: null,
  }));
});
const page = await ctx.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));

async function go(hash) {
  await page.goto(BASE + hash, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    document.querySelectorAll('.toast').forEach((t) => t.remove());
  });
}

await go('#/updates');
await page.locator('.log-item').first().screenshot({ path: resolve(shots, 'z-log-item.png') });

await go('#/character/firefly');
await page.locator('.fan-card').first().screenshot({ path: resolve(shots, 'z-fan-card.png') });

await go('#/home');
await page.locator('[data-chart-card="home-scatter"]').screenshot({ path: resolve(shots, 'z-home-scatter.png') });

await go('#/stage/moc-4-3');
await page.locator('.wave-card').first().screenshot({ path: resolve(shots, 'z-wave-card.png') });

/* mobile */
const mctx = await browser.newContext({
  viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
});
await mctx.addInitScript(() => {
  localStorage.setItem('sra.settings.v1', JSON.stringify({
    includeUnreleased: false, offline: false, disclaimerAck: true, lastCheck: null,
  }));
});
const mp = await mctx.newPage();
mp.on('pageerror', (e) => console.log('MOBILE PAGEERROR', e.message));

async function mgo(hash) {
  await mp.goto(BASE + hash, { waitUntil: 'networkidle' });
  await mp.waitForTimeout(700);
  await mp.evaluate(() => {
    window.scrollTo(0, 0);
    document.querySelectorAll('.toast').forEach((t) => t.remove());
  });
  await mp.waitForTimeout(400);
}

await mgo('#/character/firefly');
console.log('mobile char scroll:', await mp.evaluate(() => window.scrollY));
await mp.screenshot({ path: resolve(shots, 'z-mobile-char-top.png') });
await mp.locator('.character-detail-page .detail-actions').screenshot({ path: resolve(shots, 'z-mobile-char-actions.png') });
await mp.locator('.ch-art').screenshot({ path: resolve(shots, 'z-mobile-char-art.png') });

await browser.close();
console.log('done');
