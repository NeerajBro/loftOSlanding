import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Local: landing :5173 → trial signup redirects to POS :5174
    port: 5173,
    strictPort: true,
  },
})
