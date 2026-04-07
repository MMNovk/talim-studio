import sharp from 'sharp';
import { createRequire } from 'module';

const src = 'public/images/ts-logo.png';
const dest = 'public/images/ts-logo-transparent.png';

const img = sharp(src);
const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

// Walk pixels, set near-white pixels to transparent
for (let i = 0; i < data.length; i += 4) {
  if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240) {
    data[i + 3] = 0;
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(dest);

console.log(`Written: ${dest} (${info.width}x${info.height})`);

// Generate favicon sizes from transparent PNG
const padding32 = Math.round(32 * 0.10);
const padding16 = Math.round(16 * 0.10);
const padding180 = Math.round(180 * 0.10);

// favicon-32x32.png — transparent background
const inner32 = 32 - padding32 * 2;
await sharp(dest)
  .resize(inner32, inner32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: padding32, bottom: padding32, left: padding32, right: padding32, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/favicon-32x32.png');
console.log('Written: public/favicon-32x32.png');

// favicon-16x16.png — transparent background
const inner16 = 16 - padding16 * 2;
await sharp(dest)
  .resize(inner16, inner16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: padding16, bottom: padding16, left: padding16, right: padding16, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/favicon-16x16.png');
console.log('Written: public/favicon-16x16.png');

// apple-touch-icon.png — WHITE background (Apple requirement)
const inner180 = 180 - padding180 * 2;
await sharp(dest)
  .resize(inner180, inner180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .extend({ top: padding180, bottom: padding180, left: padding180, right: padding180, background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .flatten({ background: { r: 255, g: 255, b: 255 } })
  .png()
  .toFile('public/apple-touch-icon.png');
console.log('Written: public/apple-touch-icon.png');

// favicon.ico — from 32x32 transparent
// sharp can't write .ico natively; write a 32x32 PNG buffer and rename/copy as ico fallback
// For broad browser support, copy the 32x32 PNG as favicon.ico (modern browsers accept PNG-in-ICO)
import { readFile, writeFile } from 'fs/promises';
const ico32 = await readFile('public/favicon-32x32.png');
await writeFile('public/favicon.ico', ico32);
console.log('Written: public/favicon.ico (PNG-format ICO)');
