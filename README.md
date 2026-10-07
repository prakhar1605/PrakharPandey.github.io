# Prakhar Pandey — portfolio

Live: https://prakhar1605.github.io/PrakharPandey.github.io/

React + Three.js (react-three-fiber) + GSAP, built with Vite and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Editing content

All copy lives in [`src/data.js`](src/data.js): profile and links, experience, publications,
projects and skills. Components in `src/components/` only render that data.

The resume served by the site is `public/Prakhar_Pandey_Resume.pdf`; replace that file to update it.
The link-preview card is `public/og.jpg` (1200×630).

## Local development

```bash
npm install
npm run dev
```
