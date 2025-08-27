import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    dts({
      outDir: "dist/types",
      exclude: ["src/main.ts", "**/__tests__/**"],
      aliasesExclude: [/^@demos/],
      staticImport: true,
      insertTypesEntry: true,
      cleanVueFileName: true,
      beforeWriteFile: (path) => {
        // Folders are renamed in vite.split.config.ts, we could probably just rename the folders in src, but eh
        return {
          filePath: path
            .replace("mapControls", "controls")
            .replace("interaction", "interactions"),
        };
      },
    }),
    vue(),
    ...(process.env.VITE_ANALYZE
      ? [
          visualizer({
            filename: "dist/stats.html",
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "@demos": fileURLToPath(new URL("./src/demos", import.meta.url)),
    },
    preserveSymlinks: false,
    dedupe: ["vue"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  build: {
    cssCodeSplit: true,
    emptyOutDir: false, // Don't clean dist, allow multiple builds
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      name: "vue3-openlayers",
      formats: ["es", "cjs"],
      fileName: (format) => `vue3-openlayers.${format}.js`,
    },
    minify: false,
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      external: ["vue", /^ol.*/, /^@turf.*/], // Avoid bundling ol imports into the final build
      output: {
        exports: "named",
      },
    },
  },
});
