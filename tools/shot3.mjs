import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 } });
const p = await ctx.newPage();
const errs = [];
p.on('pageerror', (e) => errs.push('PAGEERR ' + e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text()); });
await p.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
await p.waitForTimeout(900);
const accept = p.getByRole('button', { name: /我已了解/ });
if (await accept.count()) { await accept.click(); await p.waitForTimeout(300); }
await p.evaluate(() => { location.hash = '#/'; });
await p.waitForTimeout(1100);
await p.screenshot({ path: 'tools/shots/v3-home.png', fullPage: false });
for (const [path, name] of [['#/stage/moc-46-035','moc-detail'],['#/character/c2674','char-firefly'],['#/compare','compare'],['#/watchlist','watchlist']]) {
  await p.evaluate((h) => { location.hash = h; }, path);
  await p.waitForTimeout(1000);
  console.log(name, (await p.locator('body').innerText()).length, 'errs', errs.length);
  await p.screenshot({ path: `tools/shots/v3-${name}.png`, fullPage: false });
}
console.log('ERRS', [...new Set(errs)]);
await b.close();
