import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import fs from "fs";
import path from "path";

// Dynamically discover components using the actual directory structure
function discoverComponents() {
  const componentsDir = fileURLToPath(
    new URL("./src/components", import.meta.url),
  );

  if (!fs.existsSync(componentsDir)) {
    console.warn("Components directory not found:", componentsDir);
    return {};
  }

  const categories: Record<string, string[]> = {};

  // Read each subdirectory in components/
  const subdirs = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  subdirs.forEach((subdir) => {
    // Map directory names to category names
    const categoryName =
      subdir === "mapControls"
        ? "controls"
        : subdir === "interaction"
          ? "interactions"
          : subdir;

    const subdirPath = path.join(componentsDir, subdir);

    // Find all .vue component files in this directory
    const componentFiles = fs
      .readdirSync(subdirPath)
      .filter((file) => file.endsWith(".vue"))
      .map((file) => file.replace(".vue", ""));

    if (componentFiles.length > 0) {
      categories[categoryName] = componentFiles;
    }
  });

  return categories;
}

// Generate entry points dynamically
function generateEntryPoints() {
  const entries: Record<string, string> = {};
  const componentCategories = discoverComponents();

  Object.entries(componentCategories).forEach(([category, components]) => {
    // Map category back to directory name for file paths
    const dirName =
      category === "controls"
        ? "mapControls"
        : category === "interactions"
          ? "interaction"
          : category;

    (components as string[]).forEach((component) => {
      const componentPath = fileURLToPath(
        new URL(
          `./src/components/${dirName}/${component}.vue`,
          import.meta.url,
        ),
      );

      if (fs.existsSync(componentPath)) {
        entries[`${category}/${component}`] = componentPath;
      }
    });
  });

  console.log(
    `📦 Discovered ${Object.keys(entries).length} components across ${Object.keys(componentCategories).length} categories`,
  );
  Object.entries(componentCategories).forEach(([category, components]) => {
    console.log(
      `   ${category}: ${(components as string[]).length} components`,
    );
  });

  return entries;
}

export default defineConfig({
  plugins: [
    vue(),
    ...(process.env.VITE_ANALYZE
      ? [
          visualizer({
            filename: "dist/stats-individual.html",
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
      entry: generateEntryPoints(),
      name: "vue3-openlayers",
      formats: ["es", "cjs"],
    },
    minify: false,
    rollupOptions: {
      external: ["vue", /^ol.*/, /^@turf.*/],
      output: [
        {
          format: "es",
          exports: "named",
          entryFileNames: "esm/[name].js",
          chunkFileNames: "esm/[name]-[hash].js",
        },
        {
          format: "cjs",
          exports: "named",
          entryFileNames: "cjs/[name].js",
          chunkFileNames: "cjs/[name]-[hash].js",
        },
      ],
    },
  },
});
