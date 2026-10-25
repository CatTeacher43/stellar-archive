import { ELEMENTS, RARITY } from './data/meta.js';

/** 程序生成的占位视觉素材。正式接入后台资源包时，以 URL 覆盖这些占位图。 */

const cache = new Map();

function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed) {
  let a = hashSeed(String(seed));
  return function next() {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function esc(str) {
  return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function svgUri(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function stars(seed, count, w, h, color = '#ffffff') {
  const rand = rng(seed);
  let out = '';
  for (let i = 0; i < count; i++) {
    const x = rand() * w;
    const y = rand() * h;
    const r = rand() * 1.35 + 0.35;
    const o = (rand() * 0.55 + 0.15).toFixed(2);
    out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" fill="${color}" opacity="${o}"/>`;
  }
  return out;
}

function orbit(cx, cy, rx, ry, rotate, color, opacity = 0.45, dash = '') {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${color}" stroke-width="1.2" opacity="${opacity}" transform="rotate(${rotate} ${cx} ${cy})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

function bustPath(color, opacity = 0.28) {
  return `<g fill="${color}" opacity="${opacity}">
    <circle cx="0" cy="-72" r="46"/>
    <path d="M-86 120 C-80 34 -44 6 0 6 C44 6 80 34 86 120 Z"/>
    <path d="M-52 -104 C-34 -142 34 -142 52 -104 C34 -122 -34 -122 -52 -104Z"/>
  </g>`;
}

export function elementOf(character) {
  return ELEMENTS[character?.element] || ELEMENTS.physical;
}

/** 角色头像占位图 */
export function avatarSrc(character, size = 160) {
  if (character?.officialAvatar) return character.officialAvatar;
  const key = `avatar-${character?.id}-${size}`;
  if (cache.has(key)) return cache.get(key);
  const el = elementOf(character);
  const rand = rng(character?.id || 'x');
  const initials = esc((character?.name || '?').replace(/[·\s]/g, '').slice(0, 2));
  const starsSvg = stars(character?.id + 'a', 18, size, size);
  const ringR = size * 0.38;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <defs>
      <radialGradient id="g" cx="35%" cy="28%" r="80%">
        <stop offset="0" stop-color="${el.color}" stop-opacity=".38"/>
        <stop offset=".55" stop-color="#16203a"/>
        <stop offset="1" stop-color="#070b18"/>
      </radialGradient>
      <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${el.color}" stop-opacity=".85"/>
        <stop offset="1" stop-color="${el.color}" stop-opacity=".08"/>
      </linearGradient>
      <clipPath id="clip"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 3}"/></clipPath>
    </defs>
    <g clip-path="url(#clip)">
      <rect width="${size}" height="${size}" fill="url(#g)"/>
      ${starsSvg}
      <g transform="translate(${size / 2} ${size * 0.78})">${bustPath(el.color, 0.3)}</g>
      <text x="${size / 2}" y="${size * 0.56}" text-anchor="middle" font-family="'Noto Serif SC','Songti SC',serif" font-size="${size * 0.42}" font-weight="600" fill="${el.color}" opacity=".16">${initials}</text>
      ${orbit(size / 2, size / 2, ringR, ringR * 0.42, -24, el.color, 0.58)}
      <circle cx="${size * 0.28 + rand() * 6}" cy="${size * 0.32}" r="1.8" fill="${el.color}" opacity=".9"/>
    </g>
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="none" stroke="url(#rim)" stroke-width="1.5"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 6}" fill="none" stroke="#f2c96b" stroke-width=".6" opacity=".28"/>
  </svg>`;
  const uri = svgUri(svg);
  cache.set(key, uri);
  return uri;
}

/** 角色立绘占位图（3:4 竖版） */
export function portraitSrc(character) {
  if (character?.officialArt) return character.officialArt;
  const key = `portrait-${character?.id}`;
  if (cache.has(key)) return cache.get(key);
  const el = elementOf(character);
  const w = 660;
  const h = 880;
  const rand = rng(character?.id + 'p');
  const name = esc(character?.name || '未知条目');
  const en = esc(character?.en || '');
  const glyph = esc(el.short);
  const badge = character?.status === 'unreleased' || character?.status === 'scrapped'
    ? '前瞻埋包 · 程序占位'
    : character?.status === 'beta'
      ? '测试服 · 程序占位'
      : '官方素材占位 · 非游戏原图';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2=".7" y2="1">
        <stop offset="0" stop-color="#0a1124"/>
        <stop offset=".5" stop-color="${el.color}" stop-opacity=".16"/>
        <stop offset="1" stop-color="#070b18"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="36%" r="60%">
        <stop offset="0" stop-color="${el.color}" stop-opacity=".34"/>
        <stop offset=".55" stop-color="${el.color}" stop-opacity=".05"/>
        <stop offset="1" stop-color="${el.color}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="figure" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${el.color}" stop-opacity=".5"/>
        <stop offset="1" stop-color="${el.color}" stop-opacity=".08"/>
      </linearGradient>
      <clipPath id="frame"><rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="18"/></clipPath>
    </defs>
    <g clip-path="url(#frame)">
      <rect width="${w}" height="${h}" fill="url(#bg)"/>
      ${stars(character?.id + 'ps', 120, w, h)}
      <circle cx="${w * 0.5}" cy="${h * 0.4}" r="${w * 0.36}" fill="url(#glow)"/>
      ${orbit(w * 0.5, h * 0.4, 250, 92, -18, el.color, 0.4)}
      ${orbit(w * 0.5, h * 0.4, 300, 140, 22, '#f2c96b', 0.18, '2 6')}
      ${orbit(w * 0.5, h * 0.4, 360, 200, -6, el.color, 0.12)}
      <text x="${w * 0.5}" y="${h * 0.56}" text-anchor="middle" font-family="'Noto Serif SC','Songti SC',serif" font-size="380" font-weight="700" fill="${el.color}" opacity=".06">${glyph}</text>
      <g transform="translate(${w * 0.5} ${h * 0.72}) scale(2.35)" fill="url(#figure)">
        <circle cx="0" cy="-72" r="46"/>
        <path d="M-86 120 C-80 34 -44 6 0 6 C44 6 80 34 86 120 Z"/>
        <path d="M-52 -104 C-34 -142 34 -142 52 -104 C34 -122 -34 -122 -52 -104Z"/>
      </g>
      <rect x="0" y="${h - 190}" width="${w}" height="190" fill="#070b18" opacity=".62"/>
      <line x1="40" y1="${h - 158}" x2="${w - 40}" y2="${h - 158}" stroke="${el.color}" stroke-opacity=".32"/>
      <text x="42" y="${h - 108}" font-family="'Noto Serif SC','Songti SC',serif" font-size="40" font-weight="600" fill="#f4f1e7">${name}</text>
      <text x="44" y="${h - 76}" font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" letter-spacing="2.4" fill="#8d9ab8">${en.toUpperCase()}</text>
      <text x="${w - 42}" y="${h - 78}" text-anchor="end" font-family="ui-sans-serif,system-ui,sans-serif" font-size="11" fill="#8d9ab8">${esc(badge)}</text>
      <circle cx="${w - 54}" cy="${h - 112}" r="7" fill="none" stroke="${el.color}" stroke-opacity=".8"/>
      <circle cx="${w - 54}" cy="${h - 112}" r="2.4" fill="${el.color}"/>
      <text x="${w - 42}" y="${h - 34}" text-anchor="end" font-family="ui-sans-serif,system-ui,sans-serif" font-size="10" fill="#6f7c9a">STELLAR ARCHIVE · ${RARITY[character?.rarity]?.stars || ''}</text>
      ${Array.from({ length: 5 }, (_, i) => `<circle cx="${44 + i * 15}" cy="${h - 32}" r="2" fill="${i < (character?.rarity || 0) ? '#f2c96b' : '#33405c'}"/>`).join('')}
    </g>
    <rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="18" fill="none" stroke="${el.color}" stroke-opacity=".24"/>
  </svg>`;
  const uri = svgUri(svg);
  cache.set(key, uri);
  return uri;
}

/** 同人画廊占位插画 */
export function fanArtSrc(fanArt) {
  const key = `fan-${fanArt?.seed || fanArt?.title}`;
  if (cache.has(key)) return cache.get(key);
  const pal = fanArt?.palette || ['#16203a', '#f2c96b', '#8d9ab8'];
  const w = 1200;
  const h = 820;
  const rand = rng(key);
  const starsSvg = stars(key + 's', 150, w, h, '#ffffff');
  let mountain = `M0 ${h * 0.78}`;
  const steps = 9;
  for (let i = 1; i <= steps; i++) {
    mountain += ` L${(w / steps) * i} ${h * (0.6 + rand() * 0.18)}`;
  }
  mountain += ` L${w} ${h} L0 ${h} Z`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${pal[0]}"/>
        <stop offset=".62" stop-color="${pal[0]}" stop-opacity=".9"/>
        <stop offset="1" stop-color="#070b18"/>
      </linearGradient>
      <radialGradient id="moon" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="${pal[1]}" stop-opacity=".95"/>
        <stop offset=".72" stop-color="${pal[1]}" stop-opacity=".35"/>
        <stop offset="1" stop-color="${pal[1]}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="sil" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#070b18"/>
        <stop offset="1" stop-color="#03060f"/>
      </linearGradient>
      <clipPath id="f"><rect width="${w}" height="${h}" rx="10"/></clipPath>
    </defs>
    <g clip-path="url(#f)">
      <rect width="${w}" height="${h}" fill="url(#sky)"/>
      ${starsSvg}
      <circle cx="${w * 0.7}" cy="${h * 0.3}" r="210" fill="url(#moon)"/>
      <circle cx="${w * 0.7}" cy="${h * 0.3}" r="86" fill="${pal[1]}" opacity=".18"/>
      <circle cx="${w * 0.7}" cy="${h * 0.3}" r="86" fill="none" stroke="${pal[2]}" stroke-opacity=".5"/>
      ${orbit(w * 0.7, h * 0.3, 180, 58, -16, pal[1], 0.55)}
      ${orbit(w * 0.7, h * 0.3, 250, 96, 14, pal[2], 0.22)}
      <path d="${mountain}" fill="url(#sil)"/>
      <path d="M0 ${h * 0.72} C ${w * 0.2} ${h * 0.64}, ${w * 0.35} ${h * 0.86}, ${w * 0.55} ${h * 0.76} S ${w * 0.86} ${h * 0.68}, ${w} ${h * 0.78} L${w} ${h} L0 ${h} Z" fill="${pal[0]}" opacity=".45"/>
      <g transform="translate(${w * 0.48} ${h * 0.72}) scale(1.05)" fill="#050914" opacity=".86">
        <circle cx="0" cy="-70" r="29"/>
        <path d="M-54 96 C-50 20 -28 4 0 4 C28 4 50 20 54 96 Z"/>
        <path d="M-26 -92 C-16 -116 16 -116 26 -92 C16 -104 -16 -104 -26 -92Z" opacity=".8"/>
      </g>
      <text x="46" y="${h - 52}" font-family="'Noto Serif SC','Songti SC',serif" font-size="30" fill="#f4f1e7" opacity=".9">${esc(fanArt?.title || '未命名')}</text>
      <text x="${w - 46}" y="${h - 52}" text-anchor="end" font-family="ui-sans-serif,system-ui,sans-serif" font-size="12" letter-spacing="1.6" fill="#c3c9dc" opacity=".7">ILLUSTRATION PLACEHOLDER · NON-CANON</text>
      <rect x="0" y="0" width="${w}" height="${h}" fill="none" stroke="${pal[2]}" stroke-opacity=".3"/>
    </g>
  </svg>`;
  const uri = svgUri(svg);
  cache.set(key, uri);
  return uri;
}

export function lightConeSrc(lightCone) {
  if (lightCone?.officialArt) return lightCone.officialArt;
  const key = `lc-${lightCone?.id}`;
  if (cache.has(key)) return cache.get(key);
  const el = ELEMENTS.physical;
  const w = 520;
  const h = 700;
  const rand = rng(key);
  const color = ['#f2c96b', '#8d9ab8', '#74d8ff', '#c9a0ff', '#ff9c8a'][hashSeed(key) % 5];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0b1226"/>
        <stop offset=".55" stop-color="${color}" stop-opacity=".18"/>
        <stop offset="1" stop-color="#060a15"/>
      </linearGradient>
      <radialGradient id="gl" cx="50%" cy="42%" r="58%">
        <stop offset="0" stop-color="${color}" stop-opacity=".3"/>
        <stop offset="1" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
      <clipPath id="c"><rect width="${w}" height="${h}" rx="12"/></clipPath>
    </defs>
    <g clip-path="url(#c)">
      <rect width="${w}" height="${h}" fill="url(#bg)"/>
      ${stars(key + 's', 55, w, h)}
      <circle cx="${w / 2}" cy="${h * 0.4}" r="170" fill="url(#gl)"/>
      ${orbit(w / 2, h * 0.4, 150, 150, 0, color, 0.32)}
      ${orbit(w / 2, h * 0.4, 185, 70, -20, '#f2c96b', 0.35)}
      ${orbit(w / 2, h * 0.4, 210, 100, 25, color, 0.18, '2 7')}
      <g transform="translate(${w / 2} ${h * 0.4})">
        <circle r="58" fill="none" stroke="${color}" stroke-opacity=".55" stroke-width="1.2"/>
        <path d="M0 -78 L18 -18 L78 0 L18 18 L0 78 L-18 18 L-78 0 L-18 -18 Z" fill="${color}" opacity=".12"/>
        <path d="M0 -46 L11 -11 L46 0 L11 11 L0 46 L-11 11 L-46 0 L-11 -11 Z" fill="none" stroke="${color}" stroke-opacity=".7"/>
        <circle r="6" fill="${color}" opacity=".8"/>
      </g>
      <rect x="0" y="${h * 0.74}" width="${w}" height="${h * 0.26}" fill="#060a15" opacity=".7"/>
      <text x="34" y="${h - 74}" font-family="'Noto Serif SC','Songti SC',serif" font-size="30" fill="#f4f1e7">${esc(lightCone?.name || '')}</text>
      <text x="35" y="${h - 50}" font-family="ui-sans-serif,system-ui,sans-serif" font-size="11" letter-spacing="2" fill="#8d9ab8">LIGHT CONE · ${lightCone?.rarity || ''}★</text>
      <text x="${w - 34}" y="${h - 38}" text-anchor="end" font-family="ui-sans-serif,system-ui,sans-serif" font-size="9" fill="#6f7c9a">占位素材 · 非游戏原图</text>
      <circle cx="35" cy="${h - 32}" r="2" fill="${color}"/>
    </g>
  </svg>`;
  const uri = svgUri(svg);
  cache.set(key, uri);
  return uri;
}

export function relicIconSrc(relic) {
  if (relic?.icon) return relic.icon;
  const key = `relic-${relic?.id}`;
  if (cache.has(key)) return cache.get(key);
  const color = relic?.type === 'planar' ? '#c9a0ff' : '#f2c96b';
  const glyph = relic?.type === 'planar' ? '◇' : '❖';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
    <defs>
      <radialGradient id="g" cx="35%" cy="30%" r="80%">
        <stop offset="0" stop-color="${color}" stop-opacity=".28"/>
        <stop offset="1" stop-color="#0a1020"/>
      </radialGradient>
    </defs>
    <rect width="120" height="120" rx="18" fill="url(#g)" stroke="${color}" stroke-opacity=".25"/>
    <circle cx="60" cy="60" r="34" fill="none" stroke="${color}" stroke-opacity=".6"/>
    <circle cx="60" cy="60" r="44" fill="none" stroke="${color}" stroke-opacity=".16"/>
    <text x="60" y="73" text-anchor="middle" font-family="serif" font-size="30" fill="${color}">${glyph}</text>
    <circle cx="94" cy="28" r="2" fill="${color}" opacity=".8"/>
  </svg>`;
  const uri = svgUri(svg);
  cache.set(key, uri);
  return uri;
}

export function enemyIconSrc(enemy) {
  if (enemy?.icon) return enemy.icon;
  const key = `enemy-${enemy?.id}`;
  if (cache.has(key)) return cache.get(key);
  const color = '#ff9c8a';
  const rand = rng(key);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <defs>
      <radialGradient id="g" cx="50%" cy="42%" r="62%">
        <stop offset="0" stop-color="${color}" stop-opacity=".22"/>
        <stop offset="1" stop-color="#080d1b"/>
      </radialGradient>
      <clipPath id="c"><rect width="160" height="160" rx="16"/></clipPath>
    </defs>
    <g clip-path="url(#c)">
      <rect width="160" height="160" fill="url(#g)"/>
      ${stars(key + 's', 18, 160, 160)}
      <path d="M46 96 C42 62 58 40 80 40 C102 40 118 62 114 96 C104 112 92 120 80 120 C68 120 56 112 46 96Z" fill="#050914" stroke="${color}" stroke-opacity=".5"/>
      <path d="M48 58 L34 30 L62 44 M112 58 L126 30 L98 44" fill="none" stroke="${color}" stroke-opacity=".55" stroke-width="2"/>
      <circle cx="66" cy="76" r="4.5" fill="${color}" opacity=".9"/>
      <circle cx="94" cy="76" r="4.5" fill="${color}" opacity=".9"/>
      <path d="M66 98 Q80 108 94 98" fill="none" stroke="${color}" stroke-opacity=".5" stroke-width="1.6"/>
      ${orbit(80, 80, 60, 26, -18, color, 0.25)}
      <circle cx="${30 + rand() * 8}" cy="30" r="1.6" fill="${color}" opacity=".7"/>
    </g>
  </svg>`;
  const uri = svgUri(svg);
  cache.set(key, uri);
  return uri;
}

export function stageArtSrc(stage, typeMeta, { labels = true } = {}) {
  if (stage?.art) return stage.art;
  const key = `stage-${stage?.id}${labels ? '' : '-plain'}`;
  if (cache.has(key)) return cache.get(key);
  const color = typeMeta?.color || '#9db6ff';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0a1124"/>
        <stop offset=".55" stop-color="${color}" stop-opacity=".16"/>
        <stop offset="1" stop-color="#060a15"/>
      </linearGradient>
      <radialGradient id="gl" cx="72%" cy="30%" r="55%">
        <stop offset="0" stop-color="${color}" stop-opacity=".32"/>
        <stop offset="1" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="640" height="360" fill="url(#bg)"/>
    ${stars(key + 's', 40, 640, 360)}
    <circle cx="470" cy="110" r="150" fill="url(#gl)"/>
    ${orbit(470, 120, 130, 48, -16, color, 0.4)}
    ${orbit(470, 120, 190, 80, 12, '#f2c96b', 0.18)}
    <path d="M0 270 L90 240 L160 262 L250 226 L330 258 L420 232 L520 260 L640 230 L640 360 L0 360 Z" fill="#060a15" opacity=".82"/>
    <path d="M0 300 C120 270 220 320 340 292 S 540 270 640 296 L640 360 L0 360 Z" fill="${color}" opacity=".08"/>
    ${labels ? `<text x="320" y="76" text-anchor="middle" font-family="'Noto Serif SC','Songti SC',serif" font-size="32" fill="#f4f1e7">${esc(stage?.title || stage?.name || '')}</text>
    <text x="320" y="102" text-anchor="middle" font-family="ui-sans-serif,system-ui,sans-serif" font-size="11" letter-spacing="2.4" fill="${color}">${esc(typeMeta?.name || '')} · VERSION ${esc(stage?.version || '')}</text>` : ''}
    ${labels ? `<text x="38" y="332" font-family="ui-sans-serif,system-ui,sans-serif" font-size="9" fill="#6f7c9a" letter-spacing="1.2">PROGRAMMATIC ARCHIVE ART · NOT OFFICIAL</text>` : ''}
  </svg>`;
  const uri = svgUri(svg);
  cache.set(key, uri);
  return uri;
}

export function placeholderNeutral(label = '暂无素材') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="240" viewBox="0 0 320 240">
    <rect width="320" height="240" fill="#0d1426"/>
    <path d="M160 58 C138 58 122 76 122 98 C122 118 132 132 146 138 C116 146 100 174 100 206 L220 206 C220 174 204 146 174 138 C188 132 198 118 198 98 C198 76 182 58 160 58Z" fill="#1b2740"/>
    <text x="160" y="228" text-anchor="middle" font-family="ui-sans-serif,system-ui,sans-serif" font-size="10" fill="#6f7c9a">${esc(label)}</text>
  </svg>`;
  return svgUri(svg);
}
