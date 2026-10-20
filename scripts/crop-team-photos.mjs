import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const SRC_DIR = path.resolve("..", "ORGCAP");
const OUT_DIR = path.resolve("public", "images", "team");
fs.mkdirSync(OUT_DIR, { recursive: true });

const files = [
  { src: "MANUEL DIAZ.png", out: "manuel-octavio-diaz.jpg" },
  { src: "AIDA CRISTI.png", out: "aida-cristi-cortes.jpg" },
  { src: "TATIANA DINAMARCA.png", out: "tatiana-dinamarca.jpg" },
];

const THRESHOLD = 18; // mean luma below this = treated as letterbox bar

async function findContentBounds(img) {
  const { data, info } = await img
    .clone()
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  const rowMean = (y) => {
    let sum = 0;
    const base = y * width;
    for (let x = 0; x < width; x++) sum += data[base + x];
    return sum / width;
  };

  let top = 0;
  while (top < height && rowMean(top) < THRESHOLD) top++;
  let bottom = height - 1;
  while (bottom > top && rowMean(bottom) < THRESHOLD) bottom--;

  return { top, bottom, width, height };
}

for (const f of files) {
  const srcPath = path.join(SRC_DIR, f.src);
  const img = sharp(srcPath);
  const { top, bottom, width, height } = await findContentBounds(img);
  const cropHeight = bottom - top + 1;
  console.log(f.src, "->", { width, height, top, bottom, cropHeight });

  await sharp(srcPath)
    .extract({ left: 0, top, width, height: cropHeight })
    .resize({ width: 900 })
    .jpeg({ quality: 88 })
    .toFile(path.join(OUT_DIR, f.out));
}

console.log("done");
