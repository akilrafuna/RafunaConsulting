// Builds the transparent logo variants, favicons and the logo colour grid
// from the original logo (navy square JPEG). Run: node scripts/brand-assets.mjs
import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';

const SRC = 'scripts/source/logo-source.jpg';
const NAVY = [10, 46, 64];

const { data, info } = await sharp(SRC).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;

// Background = median of the four corners.
const px = (x, y) => { const i = (y * W + x) * 3; return [data[i], data[i + 1], data[i + 2]]; };
const corners = [px(4, 4), px(W - 5, 4), px(4, H - 5), px(W - 5, H - 5)];
const bg = [0, 1, 2].map((c) => corners.map((p) => p[c]).sort((a, b) => a - b)[1]);

// Ink colours: sample the solid middle of each shape.
const sample = (x, y) => px(x, y);
const INKS = {
  white: sample(560, 1050),
  teal: sample(780, 930),
  orange: sample(800, 840),
};

const sub = (a, b) => a.map((v, i) => v - b[i]);
const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);

// Un-mix every pixel against the background: pixel = bg + alpha * (ink - bg).
const rgba = Buffer.alloc(W * H * 4);
const inkOf = new Uint8Array(W * H); // 0 none, 1 white, 2 teal, 3 orange
let minX = W, minY = H, maxX = 0, maxY = 0;
const names = Object.keys(INKS);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = px(x, y);
    const d = sub(p, bg);
    let best = null;
    for (let k = 0; k < names.length; k++) {
      const c = INKS[names[k]];
      const v = sub(c, bg);
      const a = Math.max(0, Math.min(1, dot(d, v) / dot(v, v)));
      const r = sub(d, v.map((t) => t * a));
      const err = dot(r, r);
      if (!best || err < best.err) best = { k, a, err, c };
    }
    const o = (y * W + x) * 4;
    // The JPEG carries a faint frame along its edges; drop it.
    const edge = x < 12 || y < 12 || x >= W - 12 || y >= H - 12;
    const alpha = edge || best.a < 0.04 ? 0 : best.a;
    rgba[o] = best.c[0]; rgba[o + 1] = best.c[1]; rgba[o + 2] = best.c[2];
    rgba[o + 3] = Math.round(alpha * 255);
    if (alpha > 0.5) inkOf[y * W + x] = best.k + 1;
    if (alpha > 0.1) {
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    }
  }
}

const pad = 8;
const crop = { left: minX - pad, top: minY - pad, width: maxX - minX + 1 + pad * 2, height: maxY - minY + 1 + pad * 2 };
const keyed = sharp(rgba, { raw: { width: W, height: H, channels: 4 } }).extract(crop);

await mkdir('src/assets/brand', { recursive: true });
await mkdir('public/brand', { recursive: true });
await keyed.clone().resize({ width: 960 }).png({ compressionLevel: 9 }).toFile('src/assets/brand/logo-on-dark.png');

// Light-ground variant: the white parts become navy.
const onLight = Buffer.from(rgba);
for (let i = 0; i < W * H; i++) {
  const o = i * 4;
  if (onLight[o] > 200 && onLight[o + 1] > 200 && onLight[o + 2] > 200) {
    onLight[o] = NAVY[0]; onLight[o + 1] = NAVY[1]; onLight[o + 2] = NAVY[2];
  }
}
await sharp(onLight, { raw: { width: W, height: H, channels: 4 } })
  .extract(crop).resize({ width: 960 }).png({ compressionLevel: 9 })
  .toFile('src/assets/brand/logo-on-light.png');
// Stable public URL for structured data (schema.org logo).
await sharp('src/assets/brand/logo-on-light.png').flatten({ background: '#ffffff' }).png({ compressionLevel: 9 }).toFile('public/brand/logo.png');

// Mark only: everything left of the wordmark.
let markMaxX = 0;
for (let y = minY; y <= maxY; y++) for (let x = minX; x < W * 0.5; x++) if (inkOf[y * W + x]) markMaxX = Math.max(markMaxX, x);
let markMinY = H, markMaxY = 0;
for (let y = 0; y < H; y++) for (let x = minX; x <= markMaxX; x++) if (inkOf[y * W + x]) { markMinY = Math.min(markMinY, y); markMaxY = Math.max(markMaxY, y); }
const markBox = { left: minX, top: markMinY, width: markMaxX - minX + 1, height: markMaxY - markMinY + 1 };

// Colour grid of the mark for generated artwork: cols x rows cells, each the dominant ink.
const COLS = 96;
const ROWS = Math.round((COLS * markBox.height) / markBox.width);
const grid = [];
for (let r = 0; r < ROWS; r++) {
  let row = '';
  for (let c = 0; c < COLS; c++) {
    const counts = [0, 0, 0, 0];
    const x0 = markBox.left + Math.floor((c * markBox.width) / COLS);
    const x1 = markBox.left + Math.floor(((c + 1) * markBox.width) / COLS);
    const y0 = markBox.top + Math.floor((r * markBox.height) / ROWS);
    const y1 = markBox.top + Math.floor(((r + 1) * markBox.height) / ROWS);
    for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) counts[inkOf[y * W + x]]++;
    const total = (x1 - x0) * (y1 - y0);
    const k = counts.indexOf(Math.max(...counts.slice(1)), 1);
    row += counts[k] / total > 0.5 ? 'wto'[k - 1] : '.';
  }
  grid.push(row);
}
await mkdir('src/data', { recursive: true });
await writeFile('src/data/mark-grid.json', JSON.stringify({ cols: COLS, rows: ROWS, inks: INKS, grid }, null, 0));

// Favicons from the mark on navy.
const markPng = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } }).extract(markBox).png().toBuffer();
await sharp(markPng).resize({ width: 480 }).png({ compressionLevel: 9 }).toFile('src/assets/brand/mark.png');
const iconOnNavy = async (size, inset) => {
  const inner = Math.round(size * (1 - inset * 2));
  const m = await sharp(markPng).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: { r: NAVY[0], g: NAVY[1], b: NAVY[2], alpha: 1 } } })
    .composite([{ input: m, gravity: 'center' }]).png({ compressionLevel: 9 }).toBuffer();
};
await writeFile('public/apple-touch-icon.png', await iconOnNavy(180, 0.14));
await writeFile('public/icon-192.png', await iconOnNavy(192, 0.14));
await writeFile('public/icon-512.png', await iconOnNavy(512, 0.14));

// favicon.ico holding a single 32px PNG.
const ico32 = await iconOnNavy(32, 0.08);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(ico32.length, 14); header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, ico32]));

console.log({ W, H, bg, INKS, crop, markBox, grid: `${COLS}x${ROWS}` });
