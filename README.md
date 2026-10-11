# Prospark — Marketing Agency Template

**A two-page marketing agency template with scroll-triggered animations and a dedicated service page.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-mister2314.github.io/Prospark--template-2ea44f?style=flat-square&logo=vercel&logoColor=white)](https://mister2314.github.io/Prospark-template/)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?style=flat-square&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?style=flat-square&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-0969da?style=flat-square&logoColor=white)

<p align="center">
  <a href="https://mister2314.github.io/Prospark-template/">
    <img src="docs/preview.png" alt="Prospark — Marketing Agency Template — desktop preview" width="100%">
  </a>
</p>

## Overview

A template build: a landing page plus a service detail page, styled as a marketing agency site. The brief was to reproduce a commercial template layout in hand-written HTML and CSS.

Scroll animations are handled by AOS — elements fade, zoom and slide in as they enter the viewport — and the two pages share a single stylesheet plus a second sheet for service-specific blocks.

## Features

- Landing page with hero, service boxes and a contact section
- Separate service detail page
- Scroll-triggered entrance animations via AOS
- Reusable component classes shared across both pages
- Responsive navigation with dropdown affordance
- SVG and WebP assets for crisp, lightweight graphics

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5, two pages |
| Styling | CSS3, split into `style.css` and `service.css` |
| Animation | AOS |
| Deploy | GitHub Pages |

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| <img src="docs/preview.png" alt="Desktop view"> | <img src="docs/preview-mobile.png" alt="Mobile view" width="230"> |

## Getting Started

No build step and no dependencies — clone the repo and open the entry file, or serve the folder locally:

```bash
git clone https://github.com/Mister2314/Prospark-template.git
cd Prospark-template

# Option 1 — open it directly
start index.html      # Windows
open  index.html      # macOS

# Option 2 — serve it locally
npx serve .
```

## Project Structure

```
index.html — landing page
service.html — service detail page
assets/css/style.css — shared layout and components
assets/css/service.css — service-page specific blocks
assets/img/ — SVG and WebP assets
```

## Author

**Xəyal Hüseynli** — Junior Front-End Developer

[Portfolio](https://hypnosdev.vercel.app) · [GitHub](https://github.com/Mister2314) · [LinkedIn](https://www.linkedin.com/in/x%C9%99yal-h%C3%BCseynli-3487b91ba/) · [xeyalhuseynli06@gmail.com](mailto:xeyalhuseynli06@gmail.com)
