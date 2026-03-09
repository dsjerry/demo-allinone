import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    fs: {
      allow: [path.join(__dirname, '../'), path.join(__dirname, '../../')]
    }
  },
  plugins: [vue()],
})
