import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url)),
      '@demos': fileURLToPath(new URL('../src/demos', import.meta.url)),
    },
    preserveSymlinks: false,
    dedupe: ['vue'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
});
