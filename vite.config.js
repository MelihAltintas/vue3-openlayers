import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    preserveSymlinks: false,
    dedupe: ["vue"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.js", import.meta.url)),
      name: "vue3-openlayers",

      fileName: (format) => `vue3-openlayers.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        inlineDynamicImports: true,
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "vue3-openlayers.css";
          return assetInfo.name;
        },
      },
    },
  },
});
