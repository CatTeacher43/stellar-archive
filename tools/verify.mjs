import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { mkdirSync } from 'node:fs';

const pw = await import(pathToFileURL(
  'C:/Users/Kentany/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js'
).href);
const chromium = pw.chromium || pw.default?.chromium;
const root = resolve(import.meta.dirname, '..');
const shots = resolve(root, 'tools/shots');
mkdirSync(shots, { recursive: true });

const BASE = 'http://127.0.0.1:8765/';
const errors = [];
const failedRequests = [];

const browser = await chromium.launch({ channel: 'chrome' });

async function makeContext(opts = {}) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 920 },
    deviceScaleFactor: 1,
    acceptDownloads: true,
    ...opts,
  });
  await context.addInitScript(() => {
    localStorage.setItem('sra.settings.v1', JSON.stringify({
      includeUnreleased: false, offline: false, disclaimerAck: true, lastCheck: null,
    }));
  });
  return context;
}

function watch(page, label) {
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`[console:${label}] ${msg.text()}`);
  });
  page.on('pageerror', (err) => errors.push(`[pageerror:${label}] ${err.message}`));
  page.on('requestfailed', (req) => {
    if (!req.url().includes('favicon')) failedRequests.push(`[${label}] ${req.url()} — ${req.failure()?.errorText}`);
  });
}

/* ---------- disclaimer modal on a fresh profile ---------- */
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 920 } });
  const page = await ctx.newPage();
  watch(page, 'disclaimer');
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForSelector('.modal.disclaimer-modal', { timeout: 8000 });
  await page.waitForTimeout(350);
  await page.screenshot({ path: resolve(shots, '00-disclaimer.png') });
  await page.locator('.modal-foot .btn-primary').click();
  await ctx.close();
}

const ctx = await makeContext();
const page = await ctx.newPage();
watch(page, 'desktop');

const routes = [
  ['home', '#/home', '.hero'],
  ['characters', '#/characters', '.char-grid'],
  ['character-detail', '#/character/c2674', '.character-hero'],
  ['character-version-compare', '#/character/c2674/compare', '.compare-table, .vp-head'],
  ['stages', '#/stages', '.stage-timeline, .mode-tabs'],
  ['stage-detail', '#/stage/moc-46-035', '.stage-hero'],
  ['stage-arbitration', '#/stage/aa-46-010', '.stage-hero, .node-card.is-knight'],
  ['lightcones', '#/lightcones', '.lc-grid'],
  ['lightcone-detail', '#/lightcone/night-on-the-milky-way', '.lc-hero'],
  ['relics', '#/relics', '.relic-grid'],
  ['relic-detail', '#/relic/champion-of-streetwise-boxing', '.relic-hero'],
  ['enemies', '#/enemies', '.enemy-grid'],
  ['enemy-detail', '#/enemy/doomsday-beast', '.enemy-hero'],
  ['compare', '#/compare?ids=c2674,c2300,c2087', '.compare-results'],
  ['unreleased', '#/unreleased', '.risk-grid'],
  ['updates', '#/updates', '.pack-grid'],
  ['watchlist', '#/watchlist', '.watchlist-page'],
  ['search', '#/search?q=流萤', '#search-results .search-summary'],
  ['about', '#/about', '.about-hero'],
];

for (const [name, hash, selector] of routes) {
  await page.goto(BASE + hash, { waitUntil: 'networkidle' });
  try {
    await page.waitForSelector(selector, { timeout: 10000 });
  } catch {
    errors.push(`[smoke:${name}] selector not found: ${selector}`);
  }
  await page.waitForTimeout(550);
  await page.screenshot({ path: resolve(shots, `${name}.png`), fullPage: true });
  console.log('shot', name);
}

/* ---------- search overlay ---------- */
await page.goto(BASE + '#/home', { waitUntil: 'networkidle' });
await page.locator('[data-search-open]').first().click();
await page.waitForSelector('#search-overlay:not([hidden])');
await page.locator('#global-search-input').fill('流萤');
await page.waitForTimeout(500);
await page.screenshot({ path: resolve(shots, 'search-overlay.png') });
const searchRows = await page.locator('#search-body .search-result').count();
if (!searchRows) errors.push('[interaction] global search returned no rows for 流萤');
await page.keyboard.press('Escape');

/* ---------- watch + compare tray ---------- */
await page.goto(BASE + '#/characters', { waitUntil: 'networkidle' });
await page.locator('[data-watch]').first().click();
await page.waitForTimeout(400);
if (!(await page.locator('#compare-tray').isVisible())) {
  await page.locator('[data-compare-toggle]').first().click();
  await page.waitForTimeout(400);
}
await page.screenshot({ path: resolve(shots, 'character-cards-actions.png') });
const trayVisible = await page.locator('#compare-tray').isVisible();
if (!trayVisible) errors.push('[interaction] compare tray did not appear');

/* ---------- watchlist after adding a character ---------- */
await page.goto(BASE + '#/watchlist', { waitUntil: 'networkidle' });
await page.waitForSelector('.watch-grid', { timeout: 8000 }).catch(() => errors.push('[watchlist] watched character did not appear'));
await page.waitForTimeout(400);
await page.screenshot({ path: resolve(shots, 'watchlist.png'), fullPage: true });

/* ---------- stage filters / modes ---------- */
await page.goto(BASE + '#/stages', { waitUntil: 'networkidle' });
await page.locator('.mode-tab').nth(4).click();
await page.waitForTimeout(500);
await page.screenshot({ path: resolve(shots, 'stages-filtered.png') });

/* ---------- update pack install ---------- */
await page.goto(BASE + '#/updates', { waitUntil: 'networkidle' });
await page.waitForSelector('.pack-card');
const installBtn = page.locator('[data-install-pack]').first();
if (await installBtn.count()) {
  await installBtn.click();
  await page.waitForTimeout(3200);
  await page.screenshot({ path: resolve(shots, 'updates-installed.png') });
  const state = await page.locator('.pack-state').allTextContents();
  console.log('pack states:', state.join(' | '));
}

/* ---------- exports ---------- */
await page.goto(BASE + '#/stage/moc-46-035', { waitUntil: 'networkidle' });
const dlJson = page.waitForEvent('download', { timeout: 8000 }).catch(() => null);
await page.locator('[data-export-stage]').click();
const json = await dlJson;
if (!json) errors.push('[export] stage JSON download did not start');
else console.log('download:', json.suggestedFilename());

await page.goto(BASE + '#/home', { waitUntil: 'networkidle' });
const chartBtn = page.locator('[data-export-chart]').first();
await chartBtn.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
const dlPng = page.waitForEvent('download', { timeout: 12000 }).catch(() => null);
if (await chartBtn.count()) {
  await chartBtn.click();
  const png = await dlPng;
  if (!png) errors.push('[export] chart PNG download did not start');
  else console.log('chart download:', png.suggestedFilename());
} else {
  errors.push('[export] no chart export button on home');
}

/* ---------- service worker + offline ---------- */
await page.goto(BASE + '#/home', { waitUntil: 'networkidle' });
await page.waitForTimeout(2200);
const swState = await page.evaluate(async () => {
  if (!('serviceWorker' in navigator)) return 'unsupported';
  const reg = await navigator.serviceWorker.getRegistration();
  return reg ? (reg.active ? 'active' : reg.installing ? 'installing' : 'waiting') : 'none';
});
console.log('service worker:', swState);
if (swState !== 'active') errors.push(`[pwa] service worker not active: ${swState}`);
const cacheCount = await page.evaluate(async () => {
  const keys = await caches.keys();
  let n = 0;
  for (const k of keys) n += (await (await caches.open(k)).keys()).length;
  return n;
});
console.log('cached requests:', cacheCount);
if (!cacheCount) errors.push('[pwa] no precached requests');

await ctx.setOffline(true);
await page.reload({ waitUntil: 'domcontentloaded' }).catch(() => {});
await page.waitForTimeout(1600);
const offlineOk = await page.locator('.hero').count();
console.log('offline home hero:', offlineOk);
if (!offlineOk) errors.push('[pwa] offline reload did not render home');
await page.screenshot({ path: resolve(shots, 'offline-home.png'), fullPage: true });
await ctx.setOffline(false);

/* ---------- mobile ---------- */
const mctx = await makeContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const mp = await mctx.newPage();
watch(mp, 'mobile');
for (const [name, hash, selector] of [
  ['mobile-home', '#/home', '.hero'],
  ['mobile-stages', '#/stages', '.stage-timeline, .mode-tabs'],
  ['mobile-stage-detail', '#/stage/moc-46-035', '.stage-hero'],
  ['mobile-stage-aa', '#/stage/aa-46-010', '.node-card.is-knight'],
  ['mobile-character', '#/character/c2674', '.character-hero'],
  ['mobile-search', '#/search?q=王棋', '#search-results .search-summary'],
  ['mobile-unreleased', '#/unreleased', '.risk-grid'],
  ['mobile-updates', '#/updates', '.pack-grid'],
]) {
  await mp.goto(BASE + hash, { waitUntil: 'networkidle' });
  await mp.waitForSelector(selector, { timeout: 8000 }).catch(() => errors.push(`[mobile:${name}] ${selector} missing`));
  await mp.waitForTimeout(500);
  await mp.screenshot({ path: resolve(shots, `${name}.png`), fullPage: true });
  console.log('shot', name);
}
await mp.locator('[data-open-drawer]').first().click();
await mp.waitForTimeout(400);
await mp.screenshot({ path: resolve(shots, 'mobile-drawer.png') });

await mctx.close();
await ctx.close();
await browser.close();

console.log('\n--- ERRORS ---');
console.log(errors.length ? errors.join('\n') : 'none');
console.log('\n--- FAILED REQUESTS ---');
console.log(failedRequests.length ? failedRequests.join('\n') : 'none');
