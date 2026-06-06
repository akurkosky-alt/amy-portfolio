# Amy Kurkosky-Landis — Portfolio

A React + TypeScript + Vite portfolio site, deployable to Vercel.

## Links

- Live site: https://akurkosky.com
- Source repo: https://github.com/akurkosky-alt/amy-portfolio

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

You can deploy with Vercel (recommended) or Netlify. Both are pre-configured.

### Vercel
Option A — GitHub import (recommended):
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Framework: Vite (auto-detected). Build: `npm run build`. Output: `dist`.

Option B — CLI:
```bash
npm run build
npm run deploy:vercel
```
Follow the interactive prompts. The included [vercel.json](vercel.json) uses `dist/`.

### Netlify
Option A — Website:
1. New site from Git. Build command: `npm run build`. Publish directory: `dist`. Redirects/SPA handled by [netlify.toml](netlify.toml).

Option B — CLI:
```bash
npm run build
npm run deploy:netlify
```
This uses the `dist/` output and redirects in [netlify.toml](netlify.toml).

## Adding screenshots

Place your screenshot images in the `public/images/` folder:

- `public/images/supportops-dashboard.png`
- `public/images/supportops-governance.png`
- `public/images/supportops-quick-process.png`

Images will appear in the Platform Interface Showcase section. If images are missing, the cards show a graceful placeholder until you add them.

## Customization

All content (skills, projects, screenshots, bio) lives in `src/components/PortfolioSite.tsx` at the top of the file in typed arrays — easy to edit without touching layout code.
# amy-portfolio
