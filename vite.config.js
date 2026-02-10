import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Для GitHub Pages base має дорівнювати назві репо (наприклад /Studio_energiya/).
// Локально (npm run dev) використовується '/'. Інша назва репо — задай VITE_BASE_URL при збірці.
const base = process.env.NODE_ENV === 'production'
  ? (process.env.VITE_BASE_URL || '/Studio_energiya/')
  : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
