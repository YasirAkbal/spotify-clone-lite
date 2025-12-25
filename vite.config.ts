import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import mkcert from 'vite-plugin-mkcert';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), mkcert({ hosts: ['127.0.0.1', 'localhost'] })],
  build: {
    sourcemap: true,
  },
  server: {
    sourcemap: true,
    host: '127.0.0.1',
    port: 5173, // veya istediğiniz port
  },
});
