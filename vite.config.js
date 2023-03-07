import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    preserveSymlinks: false,
    dedupe: ['vue'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'vue3-openlayers',

      fileName: (format) => `vue3-openlayers.${format}.js`,

    },
    rollupOptions: {
      external: ['vue'],
      output: {
        inlineDynamicImports : true,
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return 'vue3-openlayers.css';
          return assetInfo.name;
        },
      }
    }
  }
})
