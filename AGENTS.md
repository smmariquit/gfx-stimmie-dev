# AGENTS.md

Personal graphic design portfolio (gfx.stimmie): a gallery of pubmats and posters with a lightbox viewer.

## Stack

Vanilla JavaScript + Vite 8. No framework, no TypeScript, no test or lint tooling. Single static page. Deployed via Vercel CLI (`.vercel/` is linked, gitignored).

## Key files

- `index.html` - the only page: header, gallery grid, lightbox markup, footer. Loads Google Fonts (Space Grotesk, Space Mono) and AdSense.
- `src/main.js` - all behavior: renders the grid from data, lightbox open/close (click, Enter/Space, Escape, backdrop click).
- `src/data.js` - the content. Array of pubmat entries; the `PubmatEntry` JSDoc typedef at the bottom documents the shape.
- `src/style.css` - all styles.
- `public/pubmats/` - the artwork images, referenced by root-relative paths like `/pubmats/foo.png`.

## Commands

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build` (outputs `dist/`, gitignored)
- Preview build: `npm run preview`

There are no test or lint scripts. Do not invent them.

## Conventions and gotchas

- To add a piece: drop the image in `public/pubmats/`, then append an object to the array in `src/data.js` with at minimum `{ id, title, image }`. `id` is a URL-safe slug. The grid renders whatever is in that array; an empty array shows an empty-state message.
- Entry fields are interpolated into innerHTML in `main.js`, so keep titles/descriptions plain text.
- First grid image loads eager with `fetchpriority="high"`; the rest are lazy. Keep that when touching `renderGrid`.
- `category` and `tags` exist on entries but filtering is not built; only tags render, inside the lightbox.
- `src/assets/` holds leftover Vite scaffold assets (vite.svg, javascript.svg) plus hero.png; nothing imports them.
- `.env.local` holds only the Vercel CLI OIDC token; the site itself uses no env vars.
