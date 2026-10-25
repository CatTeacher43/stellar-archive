// Fetch 米游社 wiki character detail JSON for every row in the character index.
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';

const rows = JSON.parse(readFileSync('tools/mys-characters.json', 'utf8'));
const seen = new Map();
for (const row of rows) {
  const name = row.cells[0];
  if (seen.has(name)) continue;
  const href = (row.html.match(/href="([^"]+)"/) || [])[1] || '';
  const id = (href.match(/content\/(\d+)\/detail/) || [])[1];
  if (!id) {
    console.warn('no content id', name, href);
    continue;
  }
  seen.set(name, { name, id, href, cells: row.cells, tag: (row.html.match(/data-filter-tag="([^"]*)"/) || [])[1] || '' });
}
mkdirSync('tools/mys-chars', { recursive: true });
const list = [...seen.values()];
console.log('characters', list.length);

let done = 0;
async function fetchOne(item) {
  const path = `tools/mys-chars/${item.id}.json`;
  if (existsSync(path)) {
    done++;
    return;
  }
  const url = `https://act-api-takumi-static.mihoyo.com/common/blackboard/sr_wiki/v1/content/info?app_sn=sr_wiki&content_id=${item.id}`;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', Referer: 'https://bbs.mihoyo.com/sr/wiki/content/814/detail' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.retcode !== 0) throw new Error(`retcode ${json.retcode}`);
      writeFileSync(path, JSON.stringify(json));
      done++;
      if (done % 10 === 0) console.log('fetched', done, '/', list.length);
      return;
    } catch (err) {
      console.warn('retry', item.name, attempt, err.message);
      await new Promise((r) => setTimeout(r, 1200 * attempt));
    }
  }
  throw new Error(`failed ${item.name}`);
}

const queue = [...list];
const workers = Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const item = queue.shift();
    await fetchOne(item);
  }
});
await Promise.all(workers);
writeFileSync('tools/mys-character-list.json', JSON.stringify(list, null, 2));
console.log('done', done);
