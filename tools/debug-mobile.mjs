import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const pw = await import(pathToFileURL(
  'C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js'
).href);
const chromium = pw.chromium || pw.default?.chromium;
const shots = resolve(import.meta.dirname, 'shots');
const BASE = 'http://127.0.0.1:8765/';

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await ctx.addInitScript(() => {
  localStorage.setItem('sra.settings.v1', JSON.stringify({ includeUnreleased: false, offline: false, disclaimerAck: true, lastCheck: null }));
});

async function report(mp, label) {
  return mp.evaluate(() => {
    const nav = document.querySelector('.mobile-nav')?.getBoundingClientRect();
    const shell = document.querySelector('.app-shell')?.getBoundingClientRect();
    return {
      scrollY: window.scrollY,
      innerHeight: window.innerHeight,
      docH: document.documentElement.scrollHeight,
      nav: nav && { top: nav.top, bottom: nav.bottom, left: nav.left, width: nav.width, height: nav.height },
      shell: shell && { top: shell.top, height: shell.height },
      navStyle: getComputedStyle(document.querySelector('.mobile-nav')).position,
      active: document.querySelector('.mobile-nav .is-active')?.textContent?.trim(),
      heading: document.querySelector('.page h1')?.textContent?.trim(),
      hash: location.hash,
    };
  });
}

const mp = await ctx.newPage();
mp.on('pageerror', (e) => console.log('PAGEERROR', e.message));

await mp.goto(BASE + '#/home', { waitUntil: 'networkidle' });
await mp.waitForTimeout(500);
console.log('home', await report(mp, 'home'));
await mp.screenshot({ path: resolve(shots, 'zz-home-top.png') });

await mp.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await mp.waitForTimeout(300);
console.log('home bottom', await report(mp, 'home-bottom'));

// simulate nav click via hash link, like a user
await mp.evaluate(() => { location.hash = '#/character/firefly'; });
await mp.waitForTimeout(900);
console.log('after hash change', await report(mp, 'char'));
await mp.evaluate(() => window.scrollTo(0, 0));
await mp.waitForTimeout(400);
console.log('after scroll top', await report(mp, 'char-top'));
await mp.screenshot({ path: resolve(shots, 'zz-char-top.png') });

await browser.close();
