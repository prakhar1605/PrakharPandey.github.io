import { defineConfig } from 'vite'

// Plain static site: one HTML page and one stylesheet. Relative base so the same
// build works on prakharpandey.dev (Vercel) and the GitHub Pages project URL.
export default defineConfig({
  base: './',
})
