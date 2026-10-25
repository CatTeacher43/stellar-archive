import { pathToFileURL } from 'node:url';
import { writeFileSync } from 'node:fs';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 1600, height: 1200 } });
const p = await ctx.newPage();
await p.goto('https://bbs.mihoyo.com/sr/wiki/content/814/detail', { waitUntil: 'domcontentloaded', timeout: 60000 });
await p.waitForTimeout(10000);

const data = await p.evaluate(() => {
  const tables = [...document.querySelectorAll('table')];
  const rows = [];
  for (const table of tables) {
    const heads = [...table.querySelectorAll('thead th, thead td')].map((e) => e.innerText.trim());
    for (const tr of table.querySelectorAll('tbody tr')) {
      const cells = [...tr.querySelectorAll('td')].map((td) => td.innerText.trim().replace(/\s+/g, ' '));
      if (cells.length) rows.push({ heads, cells, html: tr.outerHTML.slice(0, 3000) });
    }
  }
  return { rows, count: rows.length, bodyText: document.body.innerText.slice(0, 500) };
});
console.log('rows', data.count);
console.log(JSON.stringify(data.rows.slice(0, 3), null, 2));
writeFileSync('tools/mys-characters.json', JSON.stringify(data.rows, null, 2));
await b.close();
