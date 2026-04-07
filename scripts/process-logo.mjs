import sharp from 'sharp';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';

const input = existsSync('public/images/ts-logo-v2.png')
  ? 'public/images/ts-logo-v2.png'
  : 'public/images/ts-logo.png';

console.log(`Using source: ${input}`);

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  if (data[i] > 230 && data[i + 1] > 230 && data[i + 2] > 230) {
    data[i + 3] = 0;
  }
}

const transparent = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 }
}).png().toBuffer();

// Navbar logo — transparent, full size
await sharp(transparent).toFile('public/images/ts-logo-transparent.png');
console.log('Written: public/images/ts-logo-transparent.png');

// Tight crop: find bounding box of non-transparent pixels and crop to it
const { data: td, info: ti } = await sharp(transparent).raw().toBuffer({ resolveWithObject: true });
let minX = ti.width, maxX = 0, minY = ti.height, maxY = 0;
for (let y = 0; y < ti.height; y++) {
  for (let x = 0; x < ti.width; x++) {
    const alpha = td[(y * ti.width + x) * 4 + 3];
    if (alpha > 10) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
console.log(`Mark bounding box: (${minX},${minY}) → (${maxX},${maxY}) in ${ti.width}x${ti.height}`);

const pad = 40;
const cropped = await sharp(transparent)
  .extract({
    left: Math.max(0, minX - pad),
    top: Math.max(0, minY - pad),
    width: Math.min(ti.width - Math.max(0, minX - pad), maxX - minX + pad * 2),
    height: Math.min(ti.height - Math.max(0, minY - pad), maxY - minY + pad * 2),
  })
  .toBuffer();

// Generate favicon sizes from tight-cropped transparent mark
await sharp(cropped).resize(32, 32).png().toFile('public/favicon-32x32.png');
console.log('Written: public/favicon-32x32.png');

await sharp(cropped).resize(16, 16).png().toFile('public/favicon-16x16.png');
console.log('Written: public/favicon-16x16.png');

// Apple touch icon: white background, mark centered with padding
await sharp({
  create: { width: 180, height: 180, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
})
  .composite([{ input: await sharp(cropped).resize(140, 140).toBuffer(), gravity: 'center' }])
  .png()
  .toFile('public/apple-touch-icon.png');
console.log('Written: public/apple-touch-icon.png');

// favicon.ico from 32x32 transparent
await sharp(cropped).resize(32, 32).png().toFile('public/favicon.ico');
console.log('Written: public/favicon.ico');

console.log('Done.');
