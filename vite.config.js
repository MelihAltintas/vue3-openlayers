import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ['src/components/**/*.vue', 'src/composables/*'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'types',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts'],
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
          if (assetInfo.name === 'style.css') return 'vue3-openlayers.css'

          return assetInfo.name
        },
      },
    },
  },
})
