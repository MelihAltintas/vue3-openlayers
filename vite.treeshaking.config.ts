import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    vue(),
    ...(process.env.VITE_ANALYZE
      ? [
          visualizer({
            filename: "dist/stats-treeshaking.html",
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
      entry: {
        map: fileURLToPath(new URL("./src/map.ts", import.meta.url)),
        layers: fileURLToPath(new URL("./src/layers.ts", import.meta.url)),
        sources: fileURLToPath(new URL("./src/sources.ts", import.meta.url)),
        controls: fileURLToPath(new URL("./src/controls.ts", import.meta.url)),
        animations: fileURLToPath(
          new URL("./src/animations.ts", import.meta.url),
        ),
        geometries: fileURLToPath(
          new URL("./src/geometries.ts", import.meta.url),
        ),
        interactions: fileURLToPath(
          new URL("./src/interactions.ts", import.meta.url),
        ),
        styles: fileURLToPath(new URL("./src/styles.ts", import.meta.url)),
        helpers: fileURLToPath(
          new URL("./src/helpers-entry.ts", import.meta.url),
        ),
      },
      name: "vue3-openlayers",
      formats: ["es", "cjs"],
    },
    minify: false,
    rollupOptions: {
      external: ["vue", /^ol.*/, /^@turf.*/],
      output: {
        exports: "named",
      },
    },
  },
});
