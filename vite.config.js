import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    host:"0.0.0.0",
    allowedHosts:["b617ec29e200.ngrok-free.app"]
  },
  
})
