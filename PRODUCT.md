# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Decisores de capacitación en instituciones chilenas: directivos/RRHH de empresas y corporaciones, equipos directivos y técnico-pedagógicos de establecimientos educacionales (incluyendo licitaciones vía Mercado Público), y jefaturas de operaciones/HSE en empresas mineras. Llegan evaluando si ORGCAP es un proveedor (OTEC) serio y pertinente para resolver un desafío concreto de su equipo.

## Product Purpose

ORGCAP Capacitación Profesional es una OTEC chilena (nacida 2025) que diseña capacitación a medida —no cursos genéricos— combinando contenidos técnicos con comunicación, liderazgo y bienestar, para educación, empresas y minería. Éxito del sitio = que un decisor entienda la propuesta de valor, confíe en la seriedad de la organización, y escriba por el formulario de contacto.

## Positioning

A diferencia de capacitación genérica "de catálogo", ORGCAP levanta la necesidad real del cliente antes de diseñar la intervención, y respalda esa promesa con un caso ejecutado real (licitación pública ganada y ejecutada para el Servicio Médico Legal de Chile) y metodologías específicas (Comunicación Neuroefectiva, neurociencia aplicada, Biomentoría Neuroemocional).

## Operating Context

Formación presencial, online o mixta: cursos, talleres, jornadas, charlas, foros y consultorías. El sitio es la vitrina pública (orgcap.cl) con formulario de contacto como conversión principal; no hay plataforma de alumnos ni checkout.

## Capabilities and Constraints

- Next.js 16 (App Router) + Tailwind v4, Vercel.
- Formulario de contacto: Server Action que envía correo vía Resend.
- Sin CMS: contenido vive en `src/lib/content.ts`.
- Blog: 3 notas reales fijas (sin editor de contenido todavía).
- No existen cifras de participantes/impacto documentadas — no se inventan.
- Alianza PPDU y evento ACTOS 2025 están en desarrollo/sin confirmar: se comunican con lenguaje cauteloso, nunca como hechos consumados.

## Brand Commitments

- Nombre: ORGCAP Capacitación Profesional. Logo: ícono de persona+libro en azul marino (`public/images/brand/logo-navy.png`, versión blanca en `logo-white.png`).
- Color institucional confirmado por el cliente: **azul** (el del logo). Referencia de elegancia/estructura corporativa dada por el cliente: accop.cl.
- Tipografía pedida por el cliente: sans-serif moderna, sin serif, afín al lettering del logo (no la serif editorial usada en el primer intento).
- El sitio anterior (Strikingly, capturas en `../ORGCAP/screencapture-*.png`) es la referencia de **estructura de contenido por página** que el cliente pidió preservar (qué categorías de información van en cada página y en qué agrupación), no de estilo visual — su paleta multicolor/duotono no es la dirección visual a seguir, el azul elegante sí.
- El directorio del equipo va solo en "Sobre Nosotros", no en Inicio. Inicio debe privilegiar fotos grupales/de trabajo en equipo, no retratos individuales.

## Evidence on Hand

- Dossier técnico completo (`../ORGCAP/Dossier_Tecnico_ORGCAP.docx`): identidad, sectores, valores, metodologías, caso SML, alianza PPDU, iniciativa ACTOS.
- Caso real ejecutado: capacitación "Gestión de las emociones con perspectiva neurocientífica" para el Servicio Médico Legal (licitación pública, jornadas en Santiago y Talca + Zoom nacional). Fotos reales en `../ORGCAP/FOTOS SML ORGCAP/`.
- Equipo real con bios (Manuel Octavio Díaz, Aida Cristi Cortés, Tatiana Dinamarca) y fotos (`public/images/team/`).
- Datos de contacto reales confirmados por el cliente desde capturas del sitio anterior: teléfono +56 9 8218 6901, correo orgcap@orgcap.cl, dirección Av. Kennedy 6800, Of. 318, Vitacura, Santiago, Chile; Instagram @orgcapcl; Facebook "ORGCAP OTEC" (URL exacta por confirmar con el cliente).
- 6 videos reales del canal de YouTube @ORGCAP (IDs en `src/lib/content.ts`).
- Fotos de stock (Pexels) curadas por el cliente en `../ORGCAP/` para ilustrar educación/empresas/minería/bienestar — deben usarse recortadas a su zona de interés real, nunca estiradas o mal encuadradas.

## Product Principles

1. Pertinencia sobre genérico: cada sección debe sonar a ORGCAP, no a plantilla de capacitación.
2. Evidencia real por sobre marketing: el caso SML y el equipo real cargan la credibilidad; nunca inventar cifras, testimonios o datos de contacto.
3. Fotografía como prueba de actividad: priorizar fotos grupales/de jornadas reales, especialmente en Inicio.
4. Estructura heredada, piel nueva: mismas categorías de información que el sitio anterior, ejecutadas con un sistema visual azul, sans-serif, elegante y corporativo.
5. Cautela editorial: lo no confirmado (PPDU, ACTOS) se comunica como "en desarrollo", nunca como logro.
