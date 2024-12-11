import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/unified_song_db_dev': {
        target: 'https://jchlib.com',
        changeOrigin: true,
        secure: false
      },
      '/sermon_db_new_dev': {
        target: 'https://jchlib.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
