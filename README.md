# ORGCAP — sitio web

Sitio institucional de ORGCAP Capacitación Profesional. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Formulario de contacto enviado por correo con [Resend](https://resend.com).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Variables de entorno

Copia `.env.example` a `.env.local` y complétalo:

```bash
cp .env.example .env.local
```

- `RESEND_API_KEY`: API key de Resend.
- `CONTACT_FROM_EMAIL`: remitente del correo del formulario (debe ser un dominio verificado en Resend; mientras tanto puedes usar `onboarding@resend.dev`).
- `CONTACT_TO_EMAIL`: a qué correo llegan los mensajes del formulario (por defecto `contacto@orgcap.cl`).

Sin `RESEND_API_KEY`, el formulario sigue funcionando pero mostrará un mensaje de error pidiendo escribir directo al correo de contacto.

## Imágenes

Las fotos del sitio están optimizadas y copiadas desde la carpeta `../ORGCAP` con los scripts en `scripts/`:

```bash
node scripts/prepare-images.mjs      # fotos de Pexels + SML + logos
node scripts/crop-team-photos.mjs    # recorta las fotos del directorio
```

Solo hace falta volver a correrlos si cambian las fotos originales.

## Estructura de contenido

Todo el copy del sitio (equipo, sectores, valores, blog, videos de YouTube) vive en `src/lib/content.ts`. Editar ese archivo es la forma más simple de actualizar textos sin tocar componentes.

## Build de producción

```bash
npm run build
npm start
```
