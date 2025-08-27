import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import fs from "fs";
import path from "path";

type FileName = { name: string; ext: string };

// Dynamically discover components using the actual directory structure
function discoverComponents() {
  const categories: Record<string, FileName[]> = {};

  // Helper to read files from a directory
  function readFilesFromDir(dirPath: string, filterExts: string[]): FileName[] {
    if (!fs.existsSync(dirPath)) return [];
    return fs
      .readdirSync(dirPath)
      .filter((file) => filterExts.some((ext) => file.endsWith(ext)))
      .map((file) => {
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        return { name, ext };
      });
  }

  // Components
  const componentsDir = fileURLToPath(
    new URL("./src/components", import.meta.url),
  );
  if (fs.existsSync(componentsDir)) {
    const subdirs = fs
      .readdirSync(componentsDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("__"))
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
      const componentFiles = readFilesFromDir(subdirPath, [".vue", ".ts"]);
      if (componentFiles.length > 0) {
        categories[categoryName] = componentFiles;
      }
    });
  }

  // Composables
  const composablesDir = fileURLToPath(
    new URL("./src/composables", import.meta.url),
  );
  const composableFiles = readFilesFromDir(composablesDir, [".ts"]);
  if (composableFiles.length > 0) {
    categories["composables"] = composableFiles;
  }

  // Helpers
  const helpersDir = fileURLToPath(new URL("./src/helpers", import.meta.url));
  const helperFiles = readFilesFromDir(helpersDir, [".ts"]);
  if (helperFiles.length > 0) {
    categories["helpers"] = helperFiles;
  }

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

    components.forEach((component) => {
      const componentRootPath = ["composables", "helpers"].includes(category)
        ? "./src"
        : "./src/components";
      const componentPath = fileURLToPath(
        new URL(
          `${componentRootPath}/${dirName}/${component.name}${component.ext}`,
          import.meta.url,
        ),
      );

      if (fs.existsSync(componentPath)) {
        entries[`${category}/${component.name}`] = componentPath;
      }
    });
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
