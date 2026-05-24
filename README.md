# NULLFORM Industrial Interface

**NULLFORM** is a premium, futuristic industrial landing page concept. It showcases an advanced "glass-and-metal" control surface for next-generation factories, labs, and autonomous infrastructure — featuring a real-time WebGL shader background, precision magnetic interactions, and a fully functional interactive console.

Hero line: **ENGINEERED FOR THE NEXT ERA**

## ✨ Features

- Immersive full-viewport **WebGL fragment shader** background (pointer-reactive, time-animated, industrial aesthetic)
- **Magnetic panels & buttons** with real 3D tilt + light-follow on pointer move
- Interactive **console controls** (mode switch, transparent toggle, precision & density sliders)
- Technical hero with CSS hardware visualization + live readouts
- Feature grid, architecture timeline, floating product modules
- Fully responsive (desktop-first industrial design that degrades gracefully)
- Semantic HTML, ARIA labels, keyboard accessible
- Zero external dependencies beyond React + Vite

## 🛠 Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (blazing fast dev + optimized production builds)
- Modern **CSS3** (glassmorphism, custom properties, magnetic transforms, responsive grid)
- **WebGL 1** (custom fragment shader — no Three.js or external libs)
- **GitHub Actions** for CI + automatic deployment to GitHub Pages

## 📦 Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/sekirosevillans-sys/nullform-industrial-interface.git
cd nullform-industrial-interface

# Install dependencies
npm install

# Start development server (http://127.0.0.1:5173)
npm run dev
```

## 🏗 Build for Production

```bash
npm run build
```

Output is written to `dist/`. The build is completely self-contained (single HTML + assets).

## ✅ Lint

```bash
npm run lint
```

## 🚀 Deploy to GitHub Pages (Automated)

This repo includes a production-ready GitHub Actions workflow (`.github/workflows/deploy.yml`).

### One-time setup after first push:

1. Go to your repository **Settings → Pages**
2. Under "Build and deployment", set **Source** to **GitHub Actions**
3. Save

From that moment on:

- Every push to `main` automatically builds and deploys
- You can also trigger manually via **Actions → "Deploy to GitHub Pages" → Run workflow**

The live site will be available at:

```
https://sekirosevillans-sys.github.io/nullform-industrial-interface/
```

## 📁 Project Structure

```
nullform-industrial-interface/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment (build + upload + deploy)
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.css                 # All visual styles (glass, magnetic, console, hero)
│   ├── App.tsx                 # Main landing + WebGL shader + interactions
│   ├── index.css               # Global resets + CSS variables
│   └── main.tsx                # React root
├── index.html
├── vite.config.ts              # Vite + React plugin (base: './')
├── tsconfig*.json
├── eslint.config.js
├── package.json
└── README.md
```

**Explicitly excluded from the repository** (see `.gitignore`):

- `node_modules/`
- `dist/`
- `.env*` and secrets
- Logs, caches, IDE folders
- Binaries, audio, models, Electron folders, user/system paths

## 🔒 Security & Clean Repository Policy

This is a **frontend-only public showcase repository**.

- No API keys, tokens, or secrets
- No large binaries or media files
- No development caches or logs
- No Electron / backend / model folders
- History kept clean

## 🤝 Contributing

Pull requests are welcome for:
- Visual polish or new magnetic interactions
- Accessibility improvements
- Performance of the WebGL layer
- Better mobile experience

Please keep the industrial, restrained, high-precision aesthetic.

## 📄 License

This project is provided as a design & engineering showcase. Feel free to use the pattern and interaction ideas in your own work.

---

Built with precision. Presented without noise.
NULLFORM — Industrial Interface Systems · 2032
