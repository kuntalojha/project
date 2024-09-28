import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // add this for development parpuses
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
  },
});
