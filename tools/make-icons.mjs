import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

const pw = await import(pathToFileURL(
  'C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js'
).href);
const chromium = pw.chromium || pw.default?.chromium;

const root = resolve(import.meta.dirname, '..');
const jobs = [
  { svg: 'assets/icons/icon.svg', out: 'assets/icons/icon-192.png', size: 192 },
  { svg: 'assets/icons/icon.svg', out: 'assets/icons/icon-512.png', size: 512 },
  { svg: 'assets/icons/icon-maskable.svg', out: 'assets/icons/icon-maskable-512.png', size: 512 },
];

const browser = await chromium.launch({ channel: 'chrome' });
for (const job of jobs) {
  const page = await browser.newPage({ viewport: { width: job.size, height: job.size }, deviceScaleFactor: 1 });
  const svg = readFileSync(resolve(root, job.svg), 'utf8');
  await page.setContent(`<!doctype html><html><head><style>
    html,body{margin:0;background:#070b16;overflow:hidden}
    svg{display:block;width:${job.size}px!important;height:${job.size}px!important}
  </style></head><body>${svg}</body></html>`, { waitUntil: 'load' });
  await page.waitForTimeout(150);
  await page.screenshot({ path: resolve(root, job.out), clip: { x: 0, y: 0, width: job.size, height: job.size } });
  console.log('wrote', job.out);
  await page.close();
}
await browser.close();
