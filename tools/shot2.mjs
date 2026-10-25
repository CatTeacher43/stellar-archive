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
for (const [path, name] of [
  ['#/stage/aa-46-010', 'aa-detail'],
  ['#/character/c389', 'char-jingyuan'],
  ['#/character/c7935', 'char-zhenzhu'],
  ['#/updates', 'updates'],
  ['#/about', 'about'],
  ['#/search?q=%E6%9D%A5%E7%94%9F', 'search'],
]) {
  await p.evaluate((h) => { location.hash = h; }, path);
  await p.waitForTimeout(1100);
  console.log(name, 'len', (await p.locator('body').innerText()).length, 'err', errs.length);
  await p.screenshot({ path: `tools/shots/v2-${name}.png`, fullPage: false });
}
console.log('ERRS', [...new Set(errs)].slice(0, 20));
await b.close();
