# DARKXLUFICER — 3D Cinematic AI Engineering Portfolio

[![Deploy to GitHub Pages](https://github.com/DarkxLucifer/darkxlucifer.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/DarkxLucifer/darkxlucifer.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-Site-ff5a1f?style=flat&logo=github)](https://darkxlucifer.github.io/)

A state-of-the-art, dark brutalist developer portfolio powered by a **600vh scroll-driven 3D cinematic canvas animation**, upscaled with local AI Real-ESRGAN to crisp 1080p, and styled with typography (`Unbounded`, `Space Grotesk`, `JetBrains Mono`) and vibrant ember-orange accents.

---

## ⚡ Highlights & Features

- **Cinematic Canvas Scroller**: 48 full-resolution 1080p frames rendered to an HTML5 canvas via direct GPU blitting for buttery-smooth 60fps scrub control.
- **Interactive Orange Glow**: Dynamic click-to-orange glow interaction throughout the portfolio without obtrusive popups.
- **Dark Brutalist Design System**: Monochromatic noir palette (`#080706`) with ember orange accents (`#ff5a1f`), subtle grid overlays, and sleek borders.
- **Structured Showcase**:
  - `01 Profile` — Engineering background, core research areas, and credentials.
  - `02 Capabilities` — Agentic workflows, model distillation, inference optimization, multi-modal perception.
  - `03 Work` — Featured AI systems & engineering projects.
  - `04 Stack` — Frameworks, libraries, hardware, and deployment infrastructure.
  - `05 Contact` — Terminal-style direct communication channel.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + Canvas 2D Blitting
- **AI Upscaling**: `RealESRGAN_x4plus_anime_6B` local model

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/DarkxLucifer/darkxlucifer.github.io.git
cd darkxlucifer.github.io

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deployment

This project uses **GitHub Actions** to automatically build and deploy the production bundle to **GitHub Pages** whenever changes are pushed to `main`.
