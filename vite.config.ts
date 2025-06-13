import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const basePath = 'https://github.com/Yo0GuitarIT/github-actions-demo' 

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react()],
})
