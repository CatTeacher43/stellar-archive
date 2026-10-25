import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 } });
const p = await ctx.newPage();
p.on('request', (r) => {
  const u = r.url();
  if (/api|hoyowiki|wiki/i.test(u)) console.log('REQ', r.method(), u);
});
p.on('response', async (r) => {
  const u = r.url();
  if (/hoyowiki|getContent|getMenu|wiki/i.test(u)) console.log('RES', r.status(), u);
});
try {
  await p.goto('https://bbs.mihoyo.com/sr/wiki/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await p.waitForTimeout(8000);
  console.log('TITLE', await p.title());
  console.log('URL', p.url());
  console.log('TEXT', (await p.locator('body').innerText()).slice(0, 1500));
  console.log('LINKS', await p.locator('a').evaluateAll((as) => as.slice(0, 80).map((a) => `${a.textContent.trim()} -> ${a.href}`)));
  await p.screenshot({ path: 'tools/shots/z-mys-home.png', fullPage: false });
} catch (e) {
  console.error('ERR', e.message);
}
await b.close();
