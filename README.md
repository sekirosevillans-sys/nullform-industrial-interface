# NULLFORM Industrial Interface

NULLFORM is a high-end futuristic landing page for an industrial technology concept. It presents a glass-and-metal interface system with an immersive WebGL background, precision UI controls, magnetic interaction states, and responsive technical product sections.

## Preview

The first screen introduces the brand with:

- `NULLFORM` identity and fixed glass navigation.
- Hero headline: `ENGINEERED FOR THE NEXT ERA`.
- WebGL shader field that reacts to pointer movement.
- CSS-rendered transparent hardware core with orbiting readouts.
- Responsive technical indicators and interactive call-to-action buttons.

## Technologies

- **React 19** for component-driven UI.
- **TypeScript** for typed component data and safer interaction logic.
- **Vite** for fast local development and optimized production builds.
- **CSS3** for responsive layout, glassmorphism, magnetic panels, animated hardware visuals, and custom control styling.
- **WebGL** for the animated shader background.
- **GitHub Actions** for automatic GitHub Pages deployment.

## Features

- Futuristic industrial landing page design.
- Full-viewport WebGL canvas background.
- Pointer-reactive CSS lighting and magnetic hover panels.
- Technical hero section with hardware visualization.
- Feature cards, product modules, architecture timeline, and interactive console controls.
- Responsive layout for desktop and mobile screens.
- Accessible semantic sections and keyboard-visible focus states.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

The production files are generated in:

```text
dist/
```

## Lint

```bash
npm run lint
```

## Project Structure

```text
.
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Deployment

This repository includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

When changes are pushed to `main`, GitHub builds the Vite app and publishes `dist/` to GitHub Pages.

## Security Notes

This public repository intentionally excludes local environment files, build output, caches, binary tools, AI model files, logs, and private API keys.
