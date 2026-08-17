import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2015' /* <-- Esta linha obriga o Vite a gerar um código compatível com celulares mais antigos */
  },
  server: {
    port: 5173,
    open: true
  }
})