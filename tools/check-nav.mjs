import { pathToFileURL } from 'node:url';
const pw = await import(pathToFileURL('C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js').href);
const chromium = pw.chromium || pw.default?.chromium;
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 920 } });
await ctx.addInitScript(() => localStorage.setItem('sra.settings.v1', JSON.stringify({ includeUnreleased:false, offline:false, disclaimerAck:true, lastCheck:null })));
const p = await ctx.newPage();
await p.goto('http://127.0.0.1:8765/#/search?q=流萤', { waitUntil: 'networkidle' });
await p.waitForTimeout(800);
console.log(await p.evaluate(() => ({
  activeKeys: [...document.querySelectorAll('[data-nav-key].is-active')].map(e => [e.getAttribute('data-nav-key'), e.textContent.trim()]),
  mobileActive: [...document.querySelectorAll('[data-mobile-key].is-active')].map(e => e.getAttribute('data-mobile-key')),
  href: location.hash,
})));
await b.close();
