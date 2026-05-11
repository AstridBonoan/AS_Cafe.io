import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Production base path for GitHub project Pages: https://<user>.github.io/AS_Cafe.io/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === 'production' ? '/AS_Cafe.io/' : '/',
}))
