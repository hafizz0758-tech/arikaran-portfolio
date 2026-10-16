# Arikaran M. — Premium Developer Portfolio

A responsive, dark futuristic portfolio built with React, Vite, Framer Motion, Three.js via React Three Fiber/Drei, and tsParticles.

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm

## Run locally in VS Code
1. Extract the ZIP and open the `arikaran-portfolio` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Install packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
- **Resume:** Put your real PDF at `public/resume/Arikaran_M_Resume.pdf`. The Download Resume buttons look for this file. Do not publish until you add it.
- **Email:** The contact form opens the visitor's email app using a `mailto:` fallback. It does not send email silently from the website.
- **Social accounts:** Edit `src/data/siteData.js`. Instagram, YouTube, X/Twitter, LeetCode, HackerRank, CodeChef, and GeeksforGeeks are intentionally left as placeholders until you provide real profile URLs.
- **Projects:** Edit `src/data/siteData.js`. The Food Delivery Microservices project has no repository URL because one was not supplied.
- **Articles:** Articles are shown as an empty-state until you add real articles to the data file.

## Deploy
Run `npm run build`, then deploy the generated `dist/` folder to a static hosting provider such as Vercel or Netlify. Configure the provider to serve `index.html` for client-side routes. Vercel generally detects Vite automatically.

## Notes
- The hero uses actual React Three Fiber / Three.js geometry, lighting, and materials—not a flat 3D illustration.
- tsParticles provides the interactive particle layer.
- Page transitions and interface motion use Framer Motion.
- Particle and 3D scenes are intentionally lightweight, and reduced-motion preferences are respected for key UI animation.
