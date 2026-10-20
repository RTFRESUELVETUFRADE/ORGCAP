import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const SML = path.resolve("..", "ORGCAP", "FOTOS SML ORGCAP");
const ORGCAP = path.resolve("..", "ORGCAP");
const OUT = path.resolve("public", "images");

function ensure(p) {
  fs.mkdirSync(p, { recursive: true });
}

async function splitVertical(srcFile, outTop, outBottom, opts = {}) {
  const img = sharp(srcFile);
  const meta = await img.metadata();
  const halfH = Math.floor(meta.height / 2);
  const seam = opts.seam ?? 6; // trim thin divider line
  await sharp(srcFile)
    .extract({ left: 0, top: 0, width: meta.width, height: halfH - seam })
    .resize({ width: opts.width ?? 1400 })
    .jpeg({ quality: 87 })
    .toFile(outTop);
  await sharp(srcFile)
    .extract({ left: 0, top: halfH + seam, width: meta.width, height: meta.height - halfH - seam })
    .resize({ width: opts.width ?? 1400 })
    .jpeg({ quality: 87 })
    .toFile(outBottom);
}

async function copyResize(srcFile, outFile, width = 1600) {
  await sharp(srcFile).resize({ width }).jpeg({ quality: 87 }).toFile(outFile);
}

async function main() {
  ensure(path.join(OUT, "hero"));
  ensure(path.join(OUT, "sectors"));
  ensure(path.join(OUT, "sml"));
  ensure(path.join(OUT, "valores"));
  ensure(path.join(OUT, "about"));
  ensure(path.join(OUT, "blog"));
  ensure(path.join(OUT, "og"));
  ensure(path.join(OUT, "contact"));
  ensure(path.join(OUT, "brand"));

  // Splits from stacked composite photos
  await splitVertical(
    path.join(SML, "25.png"),
    path.join(OUT, "about", "manuel-hablando.jpg"),
    path.join(OUT, "sml", "sml-tecnicos-grupo.jpg")
  );
  await splitVertical(
    path.join(SML, "41.png"),
    path.join(OUT, "hero", "hero-facilitador.jpg"),
    path.join(OUT, "hero", "hero-circulo-grupo.jpg")
  );
  await splitVertical(
    path.join(SML, "30.png"),
    path.join(OUT, "sml", "sml-participantes-material.jpg"),
    path.join(OUT, "sml", "sml-dos-participantes.jpg")
  );
  await splitVertical(
    path.join(SML, "15.png"),
    path.join(OUT, "valores", "atencion-plena-1.jpg"),
    path.join(OUT, "valores", "atencion-plena-2.jpg")
  );

  // Single-use photos
  await copyResize(path.join(SML, "1.png"), path.join(OUT, "sml", "sml-portada-jornada.jpg"), 1800);
  await copyResize(path.join(SML, "5.png"), path.join(OUT, "sml", "sml-escuchando.jpg"), 1400);
  await copyResize(path.join(SML, "10.png"), path.join(OUT, "valores", "reflexion.jpg"), 1200);
  await copyResize(path.join(SML, "20.png"), path.join(OUT, "hero", "hero-gesto.jpg"), 1400);

  // Pexels
  const pexels = (name) => path.join(ORGCAP, name);
  await copyResize(pexels("pexels-ahmetkurt-35745340.jpg"), path.join(OUT, "hero", "hero-educacion.jpg"), 1400);
  await copyResize(pexels("pexels-diego-romero-471613950-19147326.jpg"), path.join(OUT, "sectors", "educacion.jpg"), 1600);
  await copyResize(pexels("pexels-la-bouala-2076164-10606212.jpg"), path.join(OUT, "sectors", "empresas.jpg"), 1600);
  await copyResize(pexels("pexels-gunshe-5125104.jpg"), path.join(OUT, "sectors", "mineria.jpg"), 1600);
  await copyResize(pexels("pexels-chetanvlad-2892618.jpg"), path.join(OUT, "blog", "mineria-aerea.jpg"), 1400);
  await copyResize(pexels("pexels-mikael-blomkvist-6476774.jpg"), path.join(OUT, "valores", "equipo-puños.jpg"), 1200);
  await copyResize(pexels("pexels-vlada-karpovich-8939952.jpg"), path.join(OUT, "valores", "autocuidado.jpg"), 1200);
  await copyResize(pexels("pexels-dreamcatchlight-14253835.jpg"), path.join(OUT, "valores", "cordada.jpg"), 1200);
  await copyResize(pexels("pexels-wilfredlazz-36463969.jpg"), path.join(OUT, "about", "cta-banda.jpg"), 1800);
  await copyResize(pexels("pexels-diohasbi-3280130.jpg"), path.join(OUT, "about", "ppdu-aula.jpg"), 1400);
  await copyResize(pexels("pexels-rahimegul-28000326.jpg"), path.join(OUT, "contact", "contacto-jardin.jpg"), 1400);
  await copyResize(pexels("pexels-cottonbro-4881619.jpg"), path.join(OUT, "blog", "comunicacion-equipo.jpg"), 1400);
  await copyResize(pexels("pexels-cup-of-couple-6962536.jpg"), path.join(OUT, "valores", "bienestar-pareja.jpg"), 1200);

  // Brand / OG
  await copyResize(path.join(ORGCAP, "collage portada hero section.png"), path.join(OUT, "og", "og-cover.jpg"), 1200);
  await sharp(path.join(ORGCAP, "logo en azul transparente.png")).resize({ width: 600 }).png().toFile(path.join(OUT, "brand", "logo-navy.png"));
  await sharp(path.join(ORGCAP, "ORGCAP transparente.png")).resize({ width: 600 }).png().toFile(path.join(OUT, "brand", "logo-white.png"));

  console.log("images ready");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
