import { execSync } from 'child_process';
import { existsSync, statSync } from 'fs';
import { mkdirSync } from 'fs';

mkdirSync('public/images/vela', { recursive: true });

const images = [
  {
    name: 'classic-manicure.jpg',
    // Person getting nails painted - confirmed Unsplash photo by Kris Atomic
    url: 'https://unsplash.com/photos/Xa8fX8bQCgs/download?force=true',
    description: 'classic manicure - person getting nails painted'
  },
  {
    name: 'gel-extensions.jpg',
    // Long gel nail extensions full hand - confirmed Unsplash photo
    url: 'https://unsplash.com/photos/zhRYFdnmXX0/download?force=true',
    description: 'gel extensions - long nails on full hand'
  },
  {
    name: 'nail-art.jpg',
    // Hand with blue nail art - confirmed Unsplash photo by Alexander Yuhchenko
    url: 'https://unsplash.com/photos/brwT1V-RpCY/download?force=true',
    description: 'nail art - decorative nail design on hand'
  },
  {
    name: 'pedicure.jpg',
    // Feet with painted toenails - confirmed Unsplash photo by Konstantin Shmatov
    url: 'https://unsplash.com/photos/oy8LFbcB8hQ/download?force=true',
    description: 'pedicure - feet with painted toenails'
  },
  {
    name: 'mia-portrait.jpg',
    // Professional woman portrait, natural light
    url: 'https://unsplash.com/photos/rDEOVtE7vOs/download?force=true',
    description: 'mia portrait - woman smiling natural light'
  }
];

for (const img of images) {
  const path = `public/images/vela/${img.name}`;
  console.log(`Downloading: ${img.description}`);
  try {
    execSync(`curl -L --max-time 30 -o "${path}" "${img.url}"`, { stdio: 'inherit' });
    const size = statSync(path).size;
    if (size < 10000) {
      console.error(`ERROR: ${img.name} is only ${size} bytes — download likely failed`);
      process.exit(1);
    }
    console.log(`OK: ${img.name} (${Math.round(size/1024)}kb)`);
  } catch (e) {
    console.error(`FAILED: ${img.name}`);
    process.exit(1);
  }
}

console.log('All images downloaded successfully.');
