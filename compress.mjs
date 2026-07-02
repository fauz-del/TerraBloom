import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const imgDir = './public/flowers';
const files = readdirSync(imgDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));

for (const file of files) {
  const input = join(imgDir, file);
  const before = statSync(input).size;

  await sharp(input)
    .resize(1400, null, {
      withoutEnlargement: true,
      fit: 'inside'
    })
    .jpeg({ quality: 65, progressive: true, mozjpeg: true })
    .toFile(input + '.tmp');

  import('fs').then(fs => {
    fs.renameSync(input + '.tmp', input);
    const after = fs.statSync(input).size;
    console.log(`${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`);
  });
}
