// Generate the two brand PNG files used outside the site (favicons,
// social previews, slide decks). Mirrors app/components/BrandMark.tsx
// and app/components/Wordmark.tsx so the exports stay in lock-step
// with what renders on the live site.
//
// Run: npm run brand:png

import { Resvg } from '@resvg/resvg-js';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'brand');
const FONT_CACHE = path.join(ROOT, 'node_modules', '.cache', 'codio-brand');
const FONT_PATH = path.join(FONT_CACHE, 'Fraunces144ptSoft-Italic.ttf');

// Design tokens (oklch → hex approximations matching app/globals.css)
const PAPER = '#f6f3ec';
const INK = '#1a1f33';
const SIGNAL_DEEP = '#7ac43a';

// resvg-js can't apply variable-font axes, so we fetch the static
// "Soft Italic" cut at 144pt — this corresponds to the opsz 144 /
// SOFT 100 / wght 400 settings used by Wordmark.tsx on the live site.
const FONT_URLS = [
  'https://raw.githubusercontent.com/undercasetype/Fraunces/master/fonts/ttf/Fraunces144ptSoft-Italic.ttf',
  'https://cdn.jsdelivr.net/gh/undercasetype/Fraunces@master/fonts/ttf/Fraunces144ptSoft-Italic.ttf',
];

async function ensureFont() {
  if (existsSync(FONT_PATH)) return FONT_PATH;
  await mkdir(FONT_CACHE, { recursive: true });

  let lastErr = null;
  for (const url of FONT_URLS) {
    try {
      console.log(`[font] fetching ${url}`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`status ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 50_000) throw new Error(`suspicious size ${buf.length}`);
      await writeFile(FONT_PATH, buf);
      console.log(`[font] cached ${buf.length} bytes → ${FONT_PATH}`);
      return FONT_PATH;
    } catch (err) {
      console.warn(`[font] failed: ${err.message}`);
      lastErr = err;
    }
  }
  throw new Error(`could not fetch Fraunces font: ${lastErr?.message ?? 'unknown'}`);
}

function renderToPng(svg, { width, fontPath }) {
  const resvg = new Resvg(svg, {
    background: 'rgba(0,0,0,0)',
    fitTo: { mode: 'width', value: width },
    font: fontPath
      ? {
          fontFiles: [fontPath],
          loadSystemFonts: false,
          defaultFontFamily: 'Fraunces',
        }
      : { loadSystemFonts: false },
  });
  return resvg.render().asPng();
}

// ─────────────────────────────────────────────────────────────────────────
// MARK — square frame with signal-green cursor bar at column 0.
// Mirrors app/components/BrandMark.tsx exactly (24×24 viewBox).
// ─────────────────────────────────────────────────────────────────────────

function buildMarkSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="0.7" y="0.7" width="22.6" height="22.6"
        stroke="${INK}" stroke-width="1.4" fill="none" />
  <rect x="5.5" y="7.5" width="3" height="9" fill="${SIGNAL_DEEP}" />
</svg>`;
}

// ─────────────────────────────────────────────────────────────────────────
// WORDMARK — lowercase Fraunces italic "codio" + signal-green period.
// Mirrors app/components/Wordmark.tsx (no .studio submark).
// ─────────────────────────────────────────────────────────────────────────

function buildWordmarkSvg() {
  // Mirrors Wordmark.tsx — Fraunces italic 144pt Soft (regular weight),
  // letter-spacing −0.02em, period upright in signal-green sized 0.95×
  // the wordmark height. Dot is offset right by ~0.55× the cap height
  // beyond the last glyph advance so it sits flush after the "o".
  const W = 220;
  const H = 110;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <text x="6" y="86"
        font-family="Fraunces"
        font-size="96"
        font-style="italic"
        letter-spacing="-2"
        fill="${INK}">codio</text>
  <text x="185" y="86"
        font-family="Fraunces"
        font-size="92"
        fill="${SIGNAL_DEEP}">.</text>
</svg>`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const fontPath = await ensureFont();

  // Mark: 1024px PNG (also looks good downscaled to 16/32/64).
  const markPng = renderToPng(buildMarkSvg(), { width: 1024 });
  const markFile = path.join(OUT_DIR, 'codio-mark.png');
  await writeFile(markFile, markPng);
  console.log(`[mark] wrote ${markPng.length} bytes → ${markFile}`);

  // Wordmark: 1600px PNG keeps the italic strokes crisp on retina.
  const wordmarkPng = renderToPng(buildWordmarkSvg(), { width: 1600, fontPath });
  const wordmarkFile = path.join(OUT_DIR, 'codio-wordmark.png');
  await writeFile(wordmarkFile, wordmarkPng);
  console.log(`[wordmark] wrote ${wordmarkPng.length} bytes → ${wordmarkFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
