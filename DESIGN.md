---
name: ORGCAP Capacitación Profesional
description: Institutional-blue, photography-led corporate site for a Chilean OTEC, proving seriousness through real jornadas and a real case, not genericity.
colors:
  institutional-blue-950: "#061534"
  institutional-blue-900: "#0a2259"
  institutional-blue-800: "#0d2f7a"
  institutional-blue-700: "#0e3c96"
  institutional-blue-600: "#004aad"
  institutional-blue-500: "#1f63c4"
  institutional-blue-400: "#4a85d6"
  institutional-blue-100: "#dbe7f8"
  institutional-blue-50: "#eff4fc"
  ink: "#0c1930"
  slate-600: "#475569"
  slate-400: "#94a3b8"
  slate-200: "#e2e8f0"
  slate-100: "#f1f5f9"
  slate-50: "#f8fafc"
  surface-white: "#ffffff"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  pill: "9999px"
  lg: "1rem"
  xl: "1.5rem"
spacing:
  section-y: "5rem"
  section-y-sm: "6rem"
  card-gap: "1.5rem"
  container-max: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.institutional-blue-900}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.institutional-blue-50}"
    textColor: "{colors.institutional-blue-900}"
    rounded: "{rounded.pill}"
  button-solid:
    backgroundColor: "{colors.institutional-blue-600}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-solid-hover:
    backgroundColor: "{colors.institutional-blue-700}"
    textColor: "{colors.surface-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.institutional-blue-600}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  card-photo:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.xl}"
  input-field:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
---

# Design System: ORGCAP Capacitación Profesional

## Overview

**Creative North Star: "The Institutional Blue Dossier"**

ORGCAP's site reads like a corporate dossier built around one committed color and real photographic evidence, not a boutique editorial brochure. The world is structured, blue, and photography-first: large real jornada images carry the proof (the SML case, real teams, real videos), and a single institutional blue — sampled directly from the logo mark, #004aad — is applied as a committed surface color (header, CTA bands, dark overlay sections) rather than a thin accent. Geist, a geometric grounded sans with no serif anywhere, carries both display and body type, matching the lettering of the logo. This replaced an earlier serif/editorial first pass and a multicolor/duotone treatment inherited from the client's prior Strikingly site — both rejected; only the azul institucional direction and Geist shipped.

Sections alternate between white/slate-50 card zones and solid institutional-blue-950 bands (a direct, de-saturated descendant of the old site's orange transition bars). Photography is never duotoned or filtered — real color, cropped tight to its subject. Depth comes from soft shadows and dark gradient overlays over photos, never hard offset shadows; the world is not neobrutalist.

**Key Characteristics:**
- One committed institutional blue (#004aad) ramped dark-to-light, used for surfaces, not just accents
- Geist sans everywhere — no serif, no secondary display face
- Real, uncomposited photography with blue gradient overlays for text legibility
- Pill-shaped CTAs and nav; soft shadows, never hard-offset
- No eyebrow/kicker labels above any headline, anywhere

## Colors

A single institutional blue ramp (light to near-navy) over a white/slate neutral base; no amber, cream, or navy-indigo — those were the rejected first pass.

### Primary
- **Institutional Blue** (#004aad / `blue-600`): the logo blue. Solid-fill buttons (contact form submit), footer top band, sector-card eyebrow label text, link hover, borders on ghost buttons, focus rings, scrollbar thumb accent.
- **Institutional Blue, Deep** (#0a2259 / `blue-900`): the site's "committed surface" weight — sticky header background, mobile nav background, active nav pill text, primary CTA button text on white, footer bottom bar.
- **Institutional Blue, Deepest** (#061534 / `blue-950`): dark-overlay bands — full-bleed photo sections (hero, distinguishing section, CTA band, video gallery background, video modal scrim), always applied as a gradient or ~85-90% opacity scrim over a photograph, never as flat text-safe background alone.
- **Institutional Blue, Mid** (#0e3c96 / `blue-700`) and **Institutional Blue, Bright** (#1f63c4 / `blue-500`): secondary surface tint (footer contact card at 40% opacity) and interactive focus state (input border/ring on focus) respectively.
- **Institutional Blue, Light** (#4a85d6 / `blue-400`): small decorative marks on dark backgrounds — list bullets, scrollbar thumb, link hover on dark bands.
- **Institutional Blue, Pale** (#eff4fc / `blue-50`) and **Institutional Blue, Wash** (#dbe7f8 / `blue-100`): hover backgrounds for white buttons, success-state icon background.

### Neutral
- **Ink** (#0c1930): body text color (`--foreground`/`--color-ink`), the default text color set on `<body>`.
- **Slate, Body** (#475569 / `slate-600`): secondary body copy — card descriptions, bios, paragraph text on white.
- **Slate, Muted** (#94a3b8 / `slate-400`): placeholder text, inactive counters.
- **Slate, Line** (#e2e8f0 / `slate-200`): card rings/borders, dividers.
- **Slate, Wash** (#f1f5f9 / `slate-100`) and **Slate, Paper** (#f8fafc / `slate-50`): scrollbar track, alternate section backgrounds.
- **Paper** (#ffffff): the base background; cards, buttons-on-dark, and most page backgrounds.

### Named Rules
**The Committed Blue Rule.** Institutional blue is not a thin accent restricted to links and buttons — it is deliberately run as 30-60% of the surface (header, CTA bands, hero overlay, dark section bands), per the client's direction contract. Treat blue bands as a structural device, equivalent to the old site's colored transition bars, not as decoration.

**The No Duotone Rule.** Photography runs in real, uncropped-hue color. Blue only ever appears as a gradient/scrim *over* a photo for text legibility, never as a duotone or color-filter applied to the image itself.

## Typography

**Display Font:** Geist (with system-ui, sans-serif fallback)
**Body Font:** Geist (same family; no secondary face)

**Character:** One geometric, grounded sans used at every scale — matches the lettering of the ORGCAP logo mark. No serif anywhere in the system; this was an explicit rejection of the project's first editorial-serif pass.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 5vw, 3.75rem)` / `text-4xl sm:text-5xl lg:text-6xl`, leading 1.1, tracking tight): hero `<h1>` only, set in white over the photographic overlay.
- **Headline** (600, `text-3xl sm:text-4xl`, leading tight, tracking tight): every section `<h2>` (SectionHeading, DistinguishingSection, CtaBand).
- **Title** (600, `text-xl`): card/person names (team grid), bold inline lead-ins inside value list items.
- **Body** (400, `text-base`/`text-lg`, leading relaxed): paragraph copy, hero lead, section descriptions, bios.
- **Label** (500/600, `text-sm`, occasionally `text-xs uppercase tracking-wide` for the single footer micro-label "Información de contacto"): nav items, buttons, form labels, sector-card tag line.

### Named Rules
**The No Eyebrow Rule.** No small-caps or uppercase kicker/eyebrow label sits above any headline anywhere on the site. This is a standing, enforced rule, not a stylistic default: invented eyebrows were shipped on the 404 page, Servicios, Blog index, and the Blog article page during the build and were removed in the finish-review pass. The only uppercase micro-label in the system is the footer's "Información de contacto" heading inside a contact card — it labels a data block, it does not sit above a page or section headline, and it must not be treated as a precedent for reintroducing eyebrows elsewhere.

## Layout

A single centered container (`max-width: 72rem` / `max-w-6xl`, horizontal padding `1.25rem`→`2rem` at `sm`) wraps every section. Sections stack vertically full-width, alternating white/slate-50 panels with full-bleed institutional-blue-950 bands; vertical rhythm is consistently `py-20` (5rem) at mobile, `py-24` (6rem) at `sm` and up. Card grids are 1 column on mobile, 2-3 columns from `sm`/`md`/`lg` (sector cards: 3 at `md`; team grid: 2 at `sm`, 3 at `lg`; video gallery: 2 at `sm`, 3 at `lg`), with a `1.5rem` (`gap-6`) rhythm; the values section instead runs a 2-column `lg` split (text / 4:3 photo) that collapses to a single stacked column below `lg`. The header is `sticky top-0`; nothing else is pinned.

## Elevation & Depth

Flat-leaning with soft, diffuse shadows — never hard-offset (this is not a neobrutalist world). Depth over photography is conveyed through dark blue gradient/scrim overlays, not drop shadows; depth on card surfaces is conveyed through a thin `slate-200` ring plus a soft shadow that intensifies on hover.

### Shadow Vocabulary
- **Resting card** (`shadow-sm` + `ring-1 ring-slate-200`): sector cards, team cards at rest.
- **Hover lift** (`shadow-xl`): sector card on hover (paired with a slow 500ms image `scale-105`).
- **CTA emphasis** (`shadow-lg`): primary pill buttons (hero, CTA band, header "Conversemos").
- **Modal** (`shadow-2xl`): the video lightbox panel over a `blue-950/90` backdrop-blur scrim.

### Named Rules
**The Scrim-Not-Shadow Rule.** Photographic sections convey depth and text legibility through a `blue-950` gradient or opacity scrim laid over the image, never through a box-shadow on the image itself.

## Shapes

Two recurring radii carry the whole system: a full pill (`rounded-full`) for every interactive control — primary/secondary/ghost buttons, nav items, icon buttons — and a generous `rounded-2xl` for every photographic or card container (sector cards, team cards, video thumbnails, the values-section photo, the footer contact card, the video modal). Form inputs use a slightly tighter `rounded-xl`. Borders are thin and purposeful: `border-2` only on the ghost/outline button variants, `ring-1` for card edges, never decorative heavy borders. No sharp/square corners, no hard geometric cutouts — the form language is soft-cornered and photographic, not angular.

## Components

### Buttons
- **Shape:** full pill (`rounded-full`, `9999px`).
- **Primary (on dark/photo backgrounds):** white fill, institutional-blue-900 text, `shadow-lg`, lifts `-translate-y-0.5` on hover, background shifts to blue-50.
- **Solid (on light backgrounds):** institutional-blue-600 fill, white text, darkens to blue-700 on hover (contact form submit).
- **Ghost/Outline:** `border-2 border-white/40` (on dark) or `border-2 border-blue-600` (on light) with matching text color; fills solid on hover.
- **Disabled:** `opacity-60`, `cursor-not-allowed` (form submit while pending).

### Cards / Containers
- **Corner Style:** `rounded-2xl`.
- **Background:** white, with a `slate-200` ring at rest.
- **Shadow Strategy:** `shadow-sm` at rest, `shadow-xl` on hover (see Elevation).
- **Border:** `ring-1 ring-slate-200`, no visible border otherwise.
- **Internal Padding:** `p-6` for text body below a photo header.

### Inputs / Fields
- **Style:** `border border-slate-300`, white background, `rounded-xl`, `px-4 py-3`.
- **Focus:** border shifts to institutional-blue-500 with a soft `ring-2 ring-blue-500/20` glow — no hard outline.
- **Error:** inline `role="alert"` banner in `red-50` background / `red-700` text; this is the system's only non-blue semantic color, reserved for form error states.

### Navigation
- **Style:** sticky header, solid institutional-blue-900 fill, white wordmark + logo icon. Desktop nav items are pill buttons: inactive items are `white/85` text with a `white/10` hover fill; the active item is a solid white pill with blue-900 text. The primary "Conversemos" CTA is a white pill, separate from the nav items. Mobile collapses to a hamburger icon that expands a stacked list in the same blue-900 fill.

### Video Gallery (signature component)
Clickable photo-thumbnail grid (`rounded-2xl`, blue-950 gradient scrim, centered white circular play icon) that opens a lightbox dialog (blue-950/90 backdrop-blur scrim, `rounded-2xl` black panel, `shadow-2xl`) embedding the real YouTube video. This is the site's one interactive signature pattern tying "real evidence" (the client's own channel) to the visual system.

## Do's and Don'ts

### Do:
- **Do** treat institutional blue (#004aad and its ramp) as a committed structural color across header, CTA bands, and full-bleed overlay sections — not a restrained 10% accent.
- **Do** set every headline and body in Geist; never introduce a second typeface, serif or otherwise.
- **Do** crop real photography tight to its subject, in full color, with a blue gradient/scrim for text legibility — never a duotone or filter.
- **Do** use the full-pill shape for every clickable control and `rounded-2xl` for every photo/card container.
- **Do** keep team/people photography confined to "Sobre Nosotros"; Inicio uses group/activity photography, not individual portraits (a durable PRODUCT.md commitment, visually enforced via the hero and values-section images).

### Don't:
- **Don't** place an eyebrow/kicker label (small-caps or uppercase word) above any headline — a craft-floor ban this project enforces after removing invented instances from the 404 page, Servicios, Blog index, and the Blog article page during finish review. This is a defect profile to keep detecting, not a style to extend.
- **Don't** use generic icon+title+text card grids; sector and value content is carried by large photography and structured text, per the direction contract.
- **Don't** introduce hard-offset/neobrutalist shadows; all shadow use in this system is soft and diffuse.
- **Don't** reach for amber, cream, or navy-indigo — both were explored and explicitly rejected in favor of the institutional blue ramp sampled from the logo.
- **Don't** treat the stray default-Tailwind `blue-200`/`blue-300` classes seen in a few files (footer social icons, contacto/not-found/blog accents) as system tokens — they resolve to Tailwind's un-themed default blue, not the institutional ramp, and read as a slightly off, more saturated blue next to the rest of the palette. Future work should map these to the defined `blue-400`/`blue-100` tokens rather than inheriting the stray values.
