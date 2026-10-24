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
- AOS-style scroll reveals via a custom IntersectionObserver hook — `fade-up`, `zoom-out`, plus a masked `rise` variant for headlines, with delay and stagger steps
- `prefers-reduced-motion` fully honored: reveals and animations are disabled and content renders statically
- Responsive at every width: burger menu under 900px, fluid `clamp()` headings, single-column grids, no horizontal scroll from 390px up
- Accessible nav and footer: real link targets, skip-style focus rings, `aria-current` page state, Escape closes the mobile menu
- Working newsletter form with email validation and an `aria-live` confirmation
- Animated stat counters that count up once on first view (static under reduced motion)
- Self-hosted value icons (no CDN dependency) and a scroll-shadow nav with press feedback on every CTA

## Run locally

```bash
git clone https://github.com/Mister2314/Prospark-template.git
cd Prospark-template
npm install
npm run dev
```

`npm run build` type-checks and outputs both pages to `dist/`.
