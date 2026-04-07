/**
 * Run once after placing ts-logo.png in /public/images/:
 *   node scripts/generate-favicons.mjs
 */
import sharp from 'sharp'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = resolve(__dirname, '../public/images/ts-logo.png')
const out = resolve(__dirname, '../public')

async function main() {
  const input = readFileSync(src)

  // Trim whitespace and square-crop tight to the mark
  const trimmed = await sharp(input).trim({ threshold: 10 }).toBuffer()

  await sharp(trimmed).resize(32, 32, { fit: 'contain', background: '#ffffff' }).toFile(`${out}/favicon.ico`)
  await sharp(trimmed).resize(16, 16, { fit: 'contain', background: '#ffffff' }).png().toFile(`${out}/favicon-16x16.png`)
  await sharp(trimmed).resize(32, 32, { fit: 'contain', background: '#ffffff' }).png().toFile(`${out}/favicon-32x32.png`)
  await sharp(trimmed).resize(180, 180, { fit: 'contain', background: '#ffffff' }).png().toFile(`${out}/apple-touch-icon.png`)

  console.log('Favicons generated in /public/')
}

main().catch(err => { console.error(err); process.exit(1) })
