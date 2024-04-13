// vite.config.ts
import vue from "file:///Users/dannykoppenhagen/dev/vue3-openlayers/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "file:///Users/dannykoppenhagen/dev/vue3-openlayers/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/dannykoppenhagen/dev/vue3-openlayers/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/dannykoppenhagen/dev/vue3-openlayers/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      // logLevel: 'warn',
      // copyDtsFiles: false,
      outDir: ["dist"],
      // include: ['src/index.ts'],
      exclude: ["src/main.ts"],
      aliasesExclude: [/^@demos/],
      staticImport: true,
      // rollupTypes: true,
      insertTypesEntry: true
    }),
    vue()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@components": fileURLToPath(
        new URL("./src/components", __vite_injected_original_import_meta_url)
      ),
      "@demos": fileURLToPath(new URL("./src/demos", __vite_injected_original_import_meta_url))
    },
    preserveSymlinks: false,
    dedupe: ["vue"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", __vite_injected_original_import_meta_url)),
      name: "vue3-openlayers",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `vue3-openlayers.${format}.js`
    },
    minify: false,
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: fileURLToPath(new URL("./src/index.ts", __vite_injected_original_import_meta_url))
      },
      external: ["vue", /^ol.*/, /^@turf.*/],
      // Avoid bundling ol imports into the final build
      output: {
        inlineDynamicImports: true,
        exports: "named",
        globals: {
          vue: "Vue",
          "ol/Feature": "Feature",
          "ol/geom": "geom",
          "ol/format": "format",
          "ol/loadingstrategy": "loadingstrategy",
          "ol/events/condition": "selectconditions",
          "ol/extent": "extent",
          "ol/easing": "animations",
          "ol/Geolocation": "Geolocation",
          "ol/Map": "Map$1",
          "ol/interaction/defaults": "defaults",
          "ol/Overlay": "Overlay",
          "ol/proj/proj4": "proj4$1",
          "ol/proj/Projection": "Projection$1",
          "ol/View": "View",
          "ol/source": "source",
          "ol-ext/layer/AnimatedCluster": "AnimatedCluster",
          "ol/layer": "Layer",
          "ol/layer/Heatmap": "HeatmapLayer",
          "ol/layer/Image": "ImageLayer",
          "ol/layer/Group": "LayerGroup",
          "ol/layer/Tile": "TileLayer",
          "ol/layer/Vector": "VectorLayer",
          "ol/layer/VectorTile": "VectorLayerTile",
          "ol/layer/VectorImage": "VectorImageLayer",
          "ol/layer/WebGLPoints": "WebGLPointsLayer",
          "ol/layer/WebGLVector": "WebGLVectorLayer",
          "ol/layer/WebGLTile": "TileLayer$1",
          "ol/source/BingMaps": "BingMaps",
          "ol/source/Cluster": "Cluster",
          "ol/source/ImageStatic": "Static",
          "ol/proj": "proj",
          "ol/source/ImageWMS": "ImageWMS",
          "ol/source/GeoTIFF": "GeoTIFF",
          "ol/source/OSM": "OSM",
          "ol/source/StadiaMaps": "StadiaMaps",
          "ol/source/TileDebug": "TileDebug",
          "ol/source/WMTS": "WMTSSource",
          "ol/tilegrid/WMTS": "TileGridWMTS",
          "ol/source/TileArcGISRest": "TileArcGISRest",
          "ol/tilegrid": "tilegrid",
          "ol/source/TileJSON": "TileJSON",
          "ol/source/TileWMS": "TileWMS",
          "ol/source/Vector": "VectorSource",
          "ol/source/VectorTile": "VectorSourceTile",
          "ol/source/XYZ": "XYZ",
          "ol/control": "control",
          "ol/control/OverviewMap": "OverviewMap",
          "ol-ext/control/Button": "Button",
          "ol-contextmenu": "ContextMenu",
          "ol-ext/control/Bar": "Bar",
          "ol-ext/control/LayerSwitcher": "LayerSwitcher",
          "ol-ext/control/LayerSwitcherImage": "LayerSwitcherImage",
          "ol-ext/control/PrintDialog": "PrintDialog",
          "ol/control/Rotate": "Rotate$1",
          "ol-ext/control/Swipe": "Swipe",
          "ol-ext/control/Search": "Search",
          "ol-ext/control/Toggle": "Toggle",
          "ol-ext/control/VideoRecorder": "VideoRecorder",
          "ol-ext/control/MapZone": "MapZone",
          "ol-ext/control/Profile": "Profile",
          "ol/control/Zoom": "Zoom",
          "ol/control/ZoomSlider": "ZoomSlider",
          "ol/control/ZoomToExtent": "ZoomToExtent",
          "ol/geom/Circle": "Circle",
          "ol/geom/LineString": "LineString",
          "ol/geom/MultiLineString": "MultiLineString",
          "ol/geom/MultiPoint": "MultiPoint",
          "ol/geom/MultiPolygon": "MultiPolygon",
          "ol/geom/Point": "Point$2",
          "ol/geom/Polygon": "Polygon",
          "ol/style/Style": "Style",
          "ol/interaction/Link": "Link",
          "ol/interaction/Draw": "Draw",
          "ol/interaction/DragBox": "DragBox",
          "ol/interaction/Modify": "Modify",
          "ol/style/Circle": "CircleStyle",
          "ol/style/Fill": "Fill",
          "ol/style/Stroke": "Stroke",
          "ol/style/Icon": "Icon",
          "ol/style/Text": "Text",
          "ol-ext/style/FlowLine": "FlowLine",
          "ol-ext/interaction/SelectCluster": "SelectCluster",
          "ol/interaction/DragRotate": "DragRotate",
          "ol/interaction/DragRotateAndZoom": "DragRotateAndZoom",
          "ol/interaction/Select": "Select",
          "ol/interaction/Snap": "Snap",
          "ol-ext/interaction/Transform": "Transform$1",
          "ol-ext/featureanimation/Drop": "Drop",
          "ol-ext/featureanimation/Fade": "Fade",
          "ol-ext/featureanimation/Path": "Path",
          "ol-ext/featureanimation/Shake": "Shake",
          "ol-ext/featureanimation/Slide": "Slide",
          "ol-ext/featureanimation/Teleport": "Teleport",
          "ol-ext/featureanimation/Zoom": "Zoom$1",
          "ol/renderer/webgl/VectorLayer": "WebGLVectorLayerRenderer"
        },
        assetFileNames: (assetInfo) => {
          return assetInfo.name === "main.css" ? "styles.css" : assetInfo.name || "";
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGFubnlrb3BwZW5oYWdlbi9kZXYvdnVlMy1vcGVubGF5ZXJzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZGFubnlrb3BwZW5oYWdlbi9kZXYvdnVlMy1vcGVubGF5ZXJzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kYW5ueWtvcHBlbmhhZ2VuL2Rldi92dWUzLW9wZW5sYXllcnMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGR0cyh7XG4gICAgICAvLyBsb2dMZXZlbDogJ3dhcm4nLFxuICAgICAgLy8gY29weUR0c0ZpbGVzOiBmYWxzZSxcbiAgICAgIG91dERpcjogW1wiZGlzdFwiXSxcbiAgICAgIC8vIGluY2x1ZGU6IFsnc3JjL2luZGV4LnRzJ10sXG4gICAgICBleGNsdWRlOiBbXCJzcmMvbWFpbi50c1wiXSxcbiAgICAgIGFsaWFzZXNFeGNsdWRlOiBbL15AZGVtb3MvXSxcbiAgICAgIHN0YXRpY0ltcG9ydDogdHJ1ZSxcbiAgICAgIC8vIHJvbGx1cFR5cGVzOiB0cnVlLFxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICB9KSxcbiAgICB2dWUoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICBcIkBjb21wb25lbnRzXCI6IGZpbGVVUkxUb1BhdGgoXG4gICAgICAgIG5ldyBVUkwoXCIuL3NyYy9jb21wb25lbnRzXCIsIGltcG9ydC5tZXRhLnVybCksXG4gICAgICApLFxuICAgICAgXCJAZGVtb3NcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmMvZGVtb3NcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgICBwcmVzZXJ2ZVN5bWxpbmtzOiBmYWxzZSxcbiAgICBkZWR1cGU6IFtcInZ1ZVwiXSxcbiAgICBleHRlbnNpb25zOiBbXCIubWpzXCIsIFwiLmpzXCIsIFwiLnRzXCIsIFwiLmpzeFwiLCBcIi50c3hcIiwgXCIuanNvblwiLCBcIi52dWVcIl0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjL2luZGV4LnRzXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgbmFtZTogXCJ2dWUzLW9wZW5sYXllcnNcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwiY2pzXCIsIFwidW1kXCJdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGB2dWUzLW9wZW5sYXllcnMuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gbWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGQgbm90IGJlIGJ1bmRsZWRcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5XG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyYy9pbmRleC50c1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgIH0sXG4gICAgICBleHRlcm5hbDogW1widnVlXCIsIC9eb2wuKi8sIC9eQHR1cmYuKi9dLCAvLyBBdm9pZCBidW5kbGluZyBvbCBpbXBvcnRzIGludG8gdGhlIGZpbmFsIGJ1aWxkXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgaW5saW5lRHluYW1pY0ltcG9ydHM6IHRydWUsXG4gICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogXCJWdWVcIixcbiAgICAgICAgICBcIm9sL0ZlYXR1cmVcIjogXCJGZWF0dXJlXCIsXG4gICAgICAgICAgXCJvbC9nZW9tXCI6IFwiZ2VvbVwiLFxuICAgICAgICAgIFwib2wvZm9ybWF0XCI6IFwiZm9ybWF0XCIsXG4gICAgICAgICAgXCJvbC9sb2FkaW5nc3RyYXRlZ3lcIjogXCJsb2FkaW5nc3RyYXRlZ3lcIixcbiAgICAgICAgICBcIm9sL2V2ZW50cy9jb25kaXRpb25cIjogXCJzZWxlY3Rjb25kaXRpb25zXCIsXG4gICAgICAgICAgXCJvbC9leHRlbnRcIjogXCJleHRlbnRcIixcbiAgICAgICAgICBcIm9sL2Vhc2luZ1wiOiBcImFuaW1hdGlvbnNcIixcbiAgICAgICAgICBcIm9sL0dlb2xvY2F0aW9uXCI6IFwiR2VvbG9jYXRpb25cIixcbiAgICAgICAgICBcIm9sL01hcFwiOiBcIk1hcCQxXCIsXG4gICAgICAgICAgXCJvbC9pbnRlcmFjdGlvbi9kZWZhdWx0c1wiOiBcImRlZmF1bHRzXCIsXG4gICAgICAgICAgXCJvbC9PdmVybGF5XCI6IFwiT3ZlcmxheVwiLFxuICAgICAgICAgIFwib2wvcHJvai9wcm9qNFwiOiBcInByb2o0JDFcIixcbiAgICAgICAgICBcIm9sL3Byb2ovUHJvamVjdGlvblwiOiBcIlByb2plY3Rpb24kMVwiLFxuICAgICAgICAgIFwib2wvVmlld1wiOiBcIlZpZXdcIixcbiAgICAgICAgICBcIm9sL3NvdXJjZVwiOiBcInNvdXJjZVwiLFxuICAgICAgICAgIFwib2wtZXh0L2xheWVyL0FuaW1hdGVkQ2x1c3RlclwiOiBcIkFuaW1hdGVkQ2x1c3RlclwiLFxuICAgICAgICAgIFwib2wvbGF5ZXJcIjogXCJMYXllclwiLFxuICAgICAgICAgIFwib2wvbGF5ZXIvSGVhdG1hcFwiOiBcIkhlYXRtYXBMYXllclwiLFxuICAgICAgICAgIFwib2wvbGF5ZXIvSW1hZ2VcIjogXCJJbWFnZUxheWVyXCIsXG4gICAgICAgICAgXCJvbC9sYXllci9Hcm91cFwiOiBcIkxheWVyR3JvdXBcIixcbiAgICAgICAgICBcIm9sL2xheWVyL1RpbGVcIjogXCJUaWxlTGF5ZXJcIixcbiAgICAgICAgICBcIm9sL2xheWVyL1ZlY3RvclwiOiBcIlZlY3RvckxheWVyXCIsXG4gICAgICAgICAgXCJvbC9sYXllci9WZWN0b3JUaWxlXCI6IFwiVmVjdG9yTGF5ZXJUaWxlXCIsXG4gICAgICAgICAgXCJvbC9sYXllci9WZWN0b3JJbWFnZVwiOiBcIlZlY3RvckltYWdlTGF5ZXJcIixcbiAgICAgICAgICBcIm9sL2xheWVyL1dlYkdMUG9pbnRzXCI6IFwiV2ViR0xQb2ludHNMYXllclwiLFxuICAgICAgICAgIFwib2wvbGF5ZXIvV2ViR0xWZWN0b3JcIjogXCJXZWJHTFZlY3RvckxheWVyXCIsXG4gICAgICAgICAgXCJvbC9sYXllci9XZWJHTFRpbGVcIjogXCJUaWxlTGF5ZXIkMVwiLFxuICAgICAgICAgIFwib2wvc291cmNlL0JpbmdNYXBzXCI6IFwiQmluZ01hcHNcIixcbiAgICAgICAgICBcIm9sL3NvdXJjZS9DbHVzdGVyXCI6IFwiQ2x1c3RlclwiLFxuICAgICAgICAgIFwib2wvc291cmNlL0ltYWdlU3RhdGljXCI6IFwiU3RhdGljXCIsXG4gICAgICAgICAgXCJvbC9wcm9qXCI6IFwicHJvalwiLFxuICAgICAgICAgIFwib2wvc291cmNlL0ltYWdlV01TXCI6IFwiSW1hZ2VXTVNcIixcbiAgICAgICAgICBcIm9sL3NvdXJjZS9HZW9USUZGXCI6IFwiR2VvVElGRlwiLFxuICAgICAgICAgIFwib2wvc291cmNlL09TTVwiOiBcIk9TTVwiLFxuICAgICAgICAgIFwib2wvc291cmNlL1N0YWRpYU1hcHNcIjogXCJTdGFkaWFNYXBzXCIsXG4gICAgICAgICAgXCJvbC9zb3VyY2UvVGlsZURlYnVnXCI6IFwiVGlsZURlYnVnXCIsXG4gICAgICAgICAgXCJvbC9zb3VyY2UvV01UU1wiOiBcIldNVFNTb3VyY2VcIixcbiAgICAgICAgICBcIm9sL3RpbGVncmlkL1dNVFNcIjogXCJUaWxlR3JpZFdNVFNcIixcbiAgICAgICAgICBcIm9sL3NvdXJjZS9UaWxlQXJjR0lTUmVzdFwiOiBcIlRpbGVBcmNHSVNSZXN0XCIsXG4gICAgICAgICAgXCJvbC90aWxlZ3JpZFwiOiBcInRpbGVncmlkXCIsXG4gICAgICAgICAgXCJvbC9zb3VyY2UvVGlsZUpTT05cIjogXCJUaWxlSlNPTlwiLFxuICAgICAgICAgIFwib2wvc291cmNlL1RpbGVXTVNcIjogXCJUaWxlV01TXCIsXG4gICAgICAgICAgXCJvbC9zb3VyY2UvVmVjdG9yXCI6IFwiVmVjdG9yU291cmNlXCIsXG4gICAgICAgICAgXCJvbC9zb3VyY2UvVmVjdG9yVGlsZVwiOiBcIlZlY3RvclNvdXJjZVRpbGVcIixcbiAgICAgICAgICBcIm9sL3NvdXJjZS9YWVpcIjogXCJYWVpcIixcbiAgICAgICAgICBcIm9sL2NvbnRyb2xcIjogXCJjb250cm9sXCIsXG4gICAgICAgICAgXCJvbC9jb250cm9sL092ZXJ2aWV3TWFwXCI6IFwiT3ZlcnZpZXdNYXBcIixcbiAgICAgICAgICBcIm9sLWV4dC9jb250cm9sL0J1dHRvblwiOiBcIkJ1dHRvblwiLFxuICAgICAgICAgIFwib2wtY29udGV4dG1lbnVcIjogXCJDb250ZXh0TWVudVwiLFxuICAgICAgICAgIFwib2wtZXh0L2NvbnRyb2wvQmFyXCI6IFwiQmFyXCIsXG4gICAgICAgICAgXCJvbC1leHQvY29udHJvbC9MYXllclN3aXRjaGVyXCI6IFwiTGF5ZXJTd2l0Y2hlclwiLFxuICAgICAgICAgIFwib2wtZXh0L2NvbnRyb2wvTGF5ZXJTd2l0Y2hlckltYWdlXCI6IFwiTGF5ZXJTd2l0Y2hlckltYWdlXCIsXG4gICAgICAgICAgXCJvbC1leHQvY29udHJvbC9QcmludERpYWxvZ1wiOiBcIlByaW50RGlhbG9nXCIsXG4gICAgICAgICAgXCJvbC9jb250cm9sL1JvdGF0ZVwiOiBcIlJvdGF0ZSQxXCIsXG4gICAgICAgICAgXCJvbC1leHQvY29udHJvbC9Td2lwZVwiOiBcIlN3aXBlXCIsXG4gICAgICAgICAgXCJvbC1leHQvY29udHJvbC9TZWFyY2hcIjogXCJTZWFyY2hcIixcbiAgICAgICAgICBcIm9sLWV4dC9jb250cm9sL1RvZ2dsZVwiOiBcIlRvZ2dsZVwiLFxuICAgICAgICAgIFwib2wtZXh0L2NvbnRyb2wvVmlkZW9SZWNvcmRlclwiOiBcIlZpZGVvUmVjb3JkZXJcIixcbiAgICAgICAgICBcIm9sLWV4dC9jb250cm9sL01hcFpvbmVcIjogXCJNYXBab25lXCIsXG4gICAgICAgICAgXCJvbC1leHQvY29udHJvbC9Qcm9maWxlXCI6IFwiUHJvZmlsZVwiLFxuICAgICAgICAgIFwib2wvY29udHJvbC9ab29tXCI6IFwiWm9vbVwiLFxuICAgICAgICAgIFwib2wvY29udHJvbC9ab29tU2xpZGVyXCI6IFwiWm9vbVNsaWRlclwiLFxuICAgICAgICAgIFwib2wvY29udHJvbC9ab29tVG9FeHRlbnRcIjogXCJab29tVG9FeHRlbnRcIixcbiAgICAgICAgICBcIm9sL2dlb20vQ2lyY2xlXCI6IFwiQ2lyY2xlXCIsXG4gICAgICAgICAgXCJvbC9nZW9tL0xpbmVTdHJpbmdcIjogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgICAgXCJvbC9nZW9tL011bHRpTGluZVN0cmluZ1wiOiBcIk11bHRpTGluZVN0cmluZ1wiLFxuICAgICAgICAgIFwib2wvZ2VvbS9NdWx0aVBvaW50XCI6IFwiTXVsdGlQb2ludFwiLFxuICAgICAgICAgIFwib2wvZ2VvbS9NdWx0aVBvbHlnb25cIjogXCJNdWx0aVBvbHlnb25cIixcbiAgICAgICAgICBcIm9sL2dlb20vUG9pbnRcIjogXCJQb2ludCQyXCIsXG4gICAgICAgICAgXCJvbC9nZW9tL1BvbHlnb25cIjogXCJQb2x5Z29uXCIsXG4gICAgICAgICAgXCJvbC9zdHlsZS9TdHlsZVwiOiBcIlN0eWxlXCIsXG4gICAgICAgICAgXCJvbC9pbnRlcmFjdGlvbi9MaW5rXCI6IFwiTGlua1wiLFxuICAgICAgICAgIFwib2wvaW50ZXJhY3Rpb24vRHJhd1wiOiBcIkRyYXdcIixcbiAgICAgICAgICBcIm9sL2ludGVyYWN0aW9uL0RyYWdCb3hcIjogXCJEcmFnQm94XCIsXG4gICAgICAgICAgXCJvbC9pbnRlcmFjdGlvbi9Nb2RpZnlcIjogXCJNb2RpZnlcIixcbiAgICAgICAgICBcIm9sL3N0eWxlL0NpcmNsZVwiOiBcIkNpcmNsZVN0eWxlXCIsXG4gICAgICAgICAgXCJvbC9zdHlsZS9GaWxsXCI6IFwiRmlsbFwiLFxuICAgICAgICAgIFwib2wvc3R5bGUvU3Ryb2tlXCI6IFwiU3Ryb2tlXCIsXG4gICAgICAgICAgXCJvbC9zdHlsZS9JY29uXCI6IFwiSWNvblwiLFxuICAgICAgICAgIFwib2wvc3R5bGUvVGV4dFwiOiBcIlRleHRcIixcbiAgICAgICAgICBcIm9sLWV4dC9zdHlsZS9GbG93TGluZVwiOiBcIkZsb3dMaW5lXCIsXG4gICAgICAgICAgXCJvbC1leHQvaW50ZXJhY3Rpb24vU2VsZWN0Q2x1c3RlclwiOiBcIlNlbGVjdENsdXN0ZXJcIixcbiAgICAgICAgICBcIm9sL2ludGVyYWN0aW9uL0RyYWdSb3RhdGVcIjogXCJEcmFnUm90YXRlXCIsXG4gICAgICAgICAgXCJvbC9pbnRlcmFjdGlvbi9EcmFnUm90YXRlQW5kWm9vbVwiOiBcIkRyYWdSb3RhdGVBbmRab29tXCIsXG4gICAgICAgICAgXCJvbC9pbnRlcmFjdGlvbi9TZWxlY3RcIjogXCJTZWxlY3RcIixcbiAgICAgICAgICBcIm9sL2ludGVyYWN0aW9uL1NuYXBcIjogXCJTbmFwXCIsXG4gICAgICAgICAgXCJvbC1leHQvaW50ZXJhY3Rpb24vVHJhbnNmb3JtXCI6IFwiVHJhbnNmb3JtJDFcIixcbiAgICAgICAgICBcIm9sLWV4dC9mZWF0dXJlYW5pbWF0aW9uL0Ryb3BcIjogXCJEcm9wXCIsXG4gICAgICAgICAgXCJvbC1leHQvZmVhdHVyZWFuaW1hdGlvbi9GYWRlXCI6IFwiRmFkZVwiLFxuICAgICAgICAgIFwib2wtZXh0L2ZlYXR1cmVhbmltYXRpb24vUGF0aFwiOiBcIlBhdGhcIixcbiAgICAgICAgICBcIm9sLWV4dC9mZWF0dXJlYW5pbWF0aW9uL1NoYWtlXCI6IFwiU2hha2VcIixcbiAgICAgICAgICBcIm9sLWV4dC9mZWF0dXJlYW5pbWF0aW9uL1NsaWRlXCI6IFwiU2xpZGVcIixcbiAgICAgICAgICBcIm9sLWV4dC9mZWF0dXJlYW5pbWF0aW9uL1RlbGVwb3J0XCI6IFwiVGVsZXBvcnRcIixcbiAgICAgICAgICBcIm9sLWV4dC9mZWF0dXJlYW5pbWF0aW9uL1pvb21cIjogXCJab29tJDFcIixcbiAgICAgICAgICBcIm9sL3JlbmRlcmVyL3dlYmdsL1ZlY3RvckxheWVyXCI6IFwiV2ViR0xWZWN0b3JMYXllclJlbmRlcmVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lID09PSBcIm1haW4uY3NzXCJcbiAgICAgICAgICAgID8gXCJzdHlsZXMuY3NzXCJcbiAgICAgICAgICAgIDogYXNzZXRJbmZvLm5hbWUgfHwgXCJcIjtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxPQUFPLFNBQVM7QUFDblUsU0FBUyxlQUFlLFdBQVc7QUFDbkMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSDhLLElBQU0sMkNBQTJDO0FBSy9PLElBQU8sc0JB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
