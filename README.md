# Amy Kurkosky-Landis — Portfolio

A React + TypeScript + Vite portfolio site, deployable to Vercel.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. It auto-detects Vite. Accept defaults.

### Option B — GitHub + Vercel dashboard
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Framework: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Deploy.

## Adding screenshots

Place your screenshot images in the `public/images/` folder:

- `public/images/supportops-dashboard.png`
- `public/images/supportops-governance.png`
- `public/images/supportops-quick-process.png`

Images will appear in the Platform Interface Showcase section. If images are missing, the cards show a graceful placeholder until you add them.

## Customization

All content (skills, projects, screenshots, bio) lives in `src/components/PortfolioSite.tsx` at the top of the file in typed arrays — easy to edit without touching layout code.
