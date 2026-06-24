import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on a GitHub Pages project page
// (served from /PrakharPandey.github.io/) without hardcoding the path.
export default defineConfig({
  base: './',
  plugins: [react()],
})
