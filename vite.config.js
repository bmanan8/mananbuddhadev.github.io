import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/manan-buddhadev.github.io/',
  build: {
    outDir: 'docs'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});