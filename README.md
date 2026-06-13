# ilken.github.io

Personal portfolio at [ilken.github.io](https://ilken.github.io), skinned as a music-streaming app. The home page renders my actual music taste — Linkin Park, maNga and Duman — live from the iTunes Search API, and the player really plays 30-second previews.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- TanStack Router (file-based) + TanStack Query
- iTunes Search API (no key, client-side fetch)
- Deployed to GitHub Pages via Actions

## Develop

```bash
yarn install
yarn dev       # local dev server
yarn validate  # typecheck + eslint + prettier
yarn build     # production build (includes 404.html SPA fallback)
```

Pushing to `main` deploys automatically.
