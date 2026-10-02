# Drive Backup Services — Website

Marketing and compliance site for Drive Backup Services: a backup engine for offline
desktop applications that uploads encrypted snapshots straight to the user's own
Google Drive.

React + TypeScript + Vite, styled with Tailwind CSS.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + build + generate per-page HTML
npm run preview   # preview the production build
npm run lint      # eslint
npm run deploy    # build and push ./dist to GitHub Pages
```

## URL structure

The site is deployed to a GitHub Pages project subpath
(`https://sherkhan32.github.io/Drive-Backup-Services/`), which does not support
server-side rewrites. Every route therefore has its own **real, extensionless URL**
with no `#` fragments and no in-page section jumps:

| URL                        | Page                     |
| -------------------------- | ------------------------ |
| `/`                        | Home                     |
| `/architecture/`           | System Architecture      |
| `/how-it-works/`           | How Backup Works         |
| `/security/`               | Encryption & Data Protection |
| `/google-drive-access/`    | Google Drive Access      |
| `/privacy-policy/`         | Privacy Policy           |
| `/terms-of-service/`       | Terms of Service         |
| `/contact/`                | Contact & Support        |

### How the clean URLs work

- `vite.config.ts` uses an absolute `base` so assets resolve at any depth.
- `src/App.tsx` uses `BrowserRouter` with `basename = SITE_BASE`.
- `scripts/generate-pages.mjs` runs after `vite build` and writes one
  `dist/<route>/index.html` per route. Each generated file is the built
  `index.html` with route-specific `<title>`, `description`, `canonical`, Open Graph
  and Twitter tags, plus a `<noscript>` block containing the full static text of that
  page (so crawlers and reviewers without JavaScript still get real content).
- `dist/404.html` is generated the same way, so GitHub Pages serves the React
  not-found page for unknown URLs.
- Legacy `/privacy.html` and `/terms.html` are kept in `public/` as redirect stubs
  to the new URLs.

Route metadata (title, description, static fallback text) lives in
`scripts/generate-pages.mjs`; shared runtime constants such as the Drive permission
string live in `src/lib/site.ts`.

## Editing content

- Site-wide constants: `src/lib/site.ts`
- Navigation and footer links: `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- Page content: `src/pages/*.tsx`
- Architecture diagrams: `src/components/CloudEcosystemGraphic.tsx`,
  `src/components/SecurityFlowDiagram.tsx`, `src/components/BackupFlowStrip.tsx`
- The Google Drive permission card: `src/components/GoogleScopeCard.tsx`
