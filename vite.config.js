import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "9474-2407-5200-400-22ad-44c4-d467-dcb8-2257.ngrok-free.app"
    ]
  }
})
