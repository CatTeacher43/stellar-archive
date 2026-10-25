import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 } });
const p = await ctx.newPage();
p.on('request', (r) => {
  const u = r.url();
  if (/blackboard|hoyowiki|api/i.test(u) && !/device-fp|passport|sdk-static/.test(u)) console.log('REQ', r.method(), u);
});
p.on('response', async (r) => {
  const u = r.url();
  if (/blackboard|hoyowiki/i.test(u)) console.log('RES', r.status(), u);
});
try {
  await p.goto('https://bbs.mihoyo.com/sr/wiki/content/814/detail', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await p.waitForTimeout(9000);
  console.log('TITLE', await p.title());
  console.log('URL', p.url());
  const text = await p.locator('body').innerText();
  console.log('TEXT', text.slice(0, 3000));
  console.log('LINKS', await p.locator('a').evaluateAll((as) => as.map((a) => `${a.textContent.trim().slice(0, 30)} -> ${a.getAttribute('href')}`).filter((x) => x.includes('content')).slice(0, 200)));
  await p.screenshot({ path: 'tools/shots/z-mys-characters.png', fullPage: false });
} catch (e) {
  console.error('ERR', e.message);
}
await b.close();
