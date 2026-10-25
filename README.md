# Prospark-template

A two-page marketing agency template — landing page plus service detail page — with choreographed scroll reveals and a full mobile composition.

**Live demo:** <https://prospark-template.vercel.app/>

<div align="center">

<img src="docs/demo.gif" alt="Prospark-template — animated demo" width="700">

| Desktop | Mobile |
|---|---|
| <img src="docs/shot-desktop.png" alt="Desktop view" width="700"> | <img src="docs/shot-mobile.png" alt="Mobile view" width="290"> |

<details>
<summary>More screenshots</summary>

| Desktop | Mobile |
|---|---|
| <img src="docs/preview.png" alt="Desktop, alternate view" width="700"> | <img src="docs/preview-mobile.png" alt="Mobile, alternate view" width="290"> |

</details>

</div>

## What it does

A hand-written reproduction of a commercial agency template, rebuilt on React 19 + Vite. The landing page carries hero, about, values, awards, team and contact sections; the service page lists six services with strategy and process sections. Both pages share the same `Nav`, `Hero` and `Footer` components, so navigation and branding stay identical everywhere.

Motion follows one rule: the heading is the hero. Big "Word ✶ Word" headlines rise out of a mask with an expo-out curve while body copy settles with a quiet fade — everything driven by a 40-line IntersectionObserver hook, no animation library.

## Tech stack

React 19 · TypeScript · Vite · hand-written CSS (no UI framework)

## Features

- Two pages sharing reusable components (`Nav`, `Hero`, `Footer`) and cross-linked navigation
- **Dark / light mode**: follows the OS preference by default, a persisted header toggle (desktop and mobile menu) once the visitor chooses, and a render-blocking inline script that resolves the theme before first paint — no white flash. Dark is a designed surface system (deep violet surfaces, lifted ink, AA-checked accents), not an inversion
- AOS-style scroll reveals via a custom IntersectionObserver hook — `fade-up`, `zoom-out`, plus a masked `rise` variant for headlines, with delay and stagger steps
- Motion tokens (`--ease-out`, `--dur*`) shared by every transition; `prefers-reduced-motion` fully honored — reveals, counters, shakes and the float loop all render statically
- Responsive at every width: burger menu under 900px, fluid `clamp()` headings, single-column grids, ≥44px touch targets, no horizontal scroll from 320px up
- Accessible nav and footer: real link targets, skip-style focus rings, `aria-current` page state, Escape closes the mobile menu
- Working newsletter form with email validation, a shake + error state, and an `aria-live` confirmation
- Animated stat counters that count up once on first view (static under reduced motion)
- Self-hosted value icons (no CDN dependency) and a scroll-shadow nav with press feedback on every CTA
- Animation coverage audit for every element and state: see [`docs/animation-audit.md`](docs/animation-audit.md)

## Run locally

```bash
git clone https://github.com/Mister2314/Prospark-template.git
cd Prospark-template
npm install
npm run dev
```

`npm run build` type-checks and outputs both pages to `dist/`.
