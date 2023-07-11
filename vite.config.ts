/// <reference types="vite/client" />
/// <reference types="vitest" />
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    dts({
      // logLevel: 'warn',
      // copyDtsFiles: false,
      // libFolderPath: "./node_modules/typescript/lib",
      outputDir: ["dist"],
      // include: ['src/index.ts'],
      exclude: ["src/main.ts"],
      aliasesExclude: [/^@demos/],
      staticImport: true,
      skipDiagnostics: false,
      // rollupTypes: true,
      insertTypesEntry: true,
    }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@demos": fileURLToPath(new URL("./src/demos", import.meta.url)),
    },
    preserveSymlinks: false,
    dedupe: ["vue"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      name: "vue3-openlayers",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `vue3-openlayers.${format}.js`,
    },
    minify: false,
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      },
      external: ["vue", /^ol.*/], // Avoid bundling ol imports into the final build
      output: {
        inlineDynamicImports: true,
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          return assetInfo.name === "index.css"
            ? "styles.css"
            : assetInfo.name || "";
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
