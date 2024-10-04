import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Avance-2--Marcos-de-desarrollo-Web/",
  build: {
    chunkSizeWarningLimit: 1000, // por ejemplo, ajusta a 1000 kB
  },
})

