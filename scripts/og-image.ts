// Renders public/og.png (1200x630): the hero rosette engraved beside the real logo.
// Run: node scripts/og-image.ts
import sharp from 'sharp';
import { heroRosette, ringPaths, bandPaths } from '../src/lib/guilloche.ts';

const W = 1200;
const H = 630;
const inks = { teal: '#3fb4d8', orange: '#f07022', paper: '#eef2ef' } as const;
const opacity = { teal: 0.75, orange: 0.8, paper: 0.45 } as const;

const cx = 905;
const cy = 315;
const scale = 0.6;
const rings = heroRosette
  .map(
    ({ ink, ring }) =>
      `<g stroke="${inks[ink]}" stroke-opacity="${opacity[ink]}" stroke-width="${0.9 / scale}" fill="none">${ringPaths(ring)
        .map((d) => `<path d="${d}"/>`)
        .join('')}</g>`,
  )
  .join('');
const band = bandPaths(560, 26, 7, 6)
  .map((d) => `<path d="${d}"/>`)
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#0a2e40"/>
  <rect x="16.5" y="16.5" width="${W - 33}" height="${H - 33}" fill="none" stroke="#eef2ef" stroke-opacity=".18"/>
  <rect x="24.5" y="24.5" width="${W - 49}" height="${H - 49}" fill="none" stroke="#eef2ef" stroke-opacity=".08"/>
  <g transform="translate(${cx} ${cy}) scale(${scale})">${rings}</g>
  <g transform="translate(80 452)" stroke="#f07022" stroke-opacity=".8" stroke-width=".8" fill="none">${band}</g>
</svg>`;

const logo = await sharp('src/assets/brand/logo-on-dark.png').resize({ width: 500 }).toBuffer();
const meta = await sharp(logo).metadata();
// The mark inside the rosette's watermark window.
const mark = await sharp('src/assets/brand/mark.png').resize({ width: 104 }).toBuffer();
const markMeta = await sharp(mark).metadata();

await sharp(Buffer.from(svg))
  .composite([
    { input: logo, left: 80, top: Math.round(315 - (meta.height ?? 150) / 2 - 20) },
    { input: mark, left: Math.round(cx - (markMeta.width ?? 104) / 2 - 4), top: Math.round(cy - (markMeta.height ?? 64) / 2) },
  ])
  // Palette PNG keeps the hairlines crisp and the file small enough for WhatsApp previews.
  .png({ palette: true, quality: 92, colours: 160, compressionLevel: 9, effort: 10 })
  .toFile('public/og.png');

console.log('public/og.png written');
