# Prakhar Pandey — personal site

Live: https://prakharpandey.dev

A single static page: `index.html` plus `src/style.css`, built with Vite. Vercel deploys
`prakharpandey.dev` on every push to `main`. The GitHub Pages copy (built by
`.github/workflows/deploy.yml`) only redirects old `github.io` links to the domain.

## Editing content

All text is in [`index.html`](index.html); edit it directly.

- Resume: replace `public/Prakhar_Pandey_Resume.pdf`.
- Link-preview card: `public/og.jpg` (1200×630).
- Update the "Updated <month>" line in the footer when you change things.

## Local development

```bash
npm install
npm run dev
```
