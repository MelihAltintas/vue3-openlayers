import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import dts from 'vite-plugin-dts'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
    }),
    dts({
      outputDir: 'dist/types',
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
    preserveSymlinks: false,
    dedupe: ['vue'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: './src/index.ts',
      name: 'vue3-openlayers',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `vue3-openlayers.${format}.js`,
    },
    minify: false,
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      },
      external: ['vue'],
      output: {
        inlineDynamicImports: true,
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'index.css') return 'vue3-openlayers.css'

          return assetInfo.name
        },
      },
    },
  },
})
