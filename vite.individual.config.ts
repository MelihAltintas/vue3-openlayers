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
      entry: {
        // All components
        OlFeature: fileURLToPath(
          new URL(
            "./src/components-individual/OlFeature.ts",
            import.meta.url,
          ),
        ),
        OlGeolocation: fileURLToPath(
          new URL(
            "./src/components-individual/OlGeolocation.ts",
            import.meta.url,
          ),
        ),
        OlMap: fileURLToPath(
          new URL(
            "./src/components-individual/OlMap.ts",
            import.meta.url,
          ),
        ),
        OlOverlay: fileURLToPath(
          new URL(
            "./src/components-individual/OlOverlay.ts",
            import.meta.url,
          ),
        ),
        OlProjectionRegister: fileURLToPath(
          new URL(
            "./src/components-individual/OlProjectionRegister.ts",
            import.meta.url,
          ),
        ),
        OlView: fileURLToPath(
          new URL(
            "./src/components-individual/OlView.ts",
            import.meta.url,
          ),
        ),
        OlAnimatedClusterlayer: fileURLToPath(
          new URL(
            "./src/components-individual/OlAnimatedClusterlayer.ts",
            import.meta.url,
          ),
        ),
        OlHeatmapLayer: fileURLToPath(
          new URL(
            "./src/components-individual/OlHeatmapLayer.ts",
            import.meta.url,
          ),
        ),
        OlImageLayer: fileURLToPath(
          new URL(
            "./src/components-individual/OlImageLayer.ts",
            import.meta.url,
          ),
        ),
        OlLayerGroup: fileURLToPath(
          new URL(
            "./src/components-individual/OlLayerGroup.ts",
            import.meta.url,
          ),
        ),
        OlTileLayer: fileURLToPath(
          new URL(
            "./src/components-individual/OlTileLayer.ts",
            import.meta.url,
          ),
        ),
        OlVectorImageLayer: fileURLToPath(
          new URL(
            "./src/components-individual/OlVectorImageLayer.ts",
            import.meta.url,
          ),
        ),
        OlVectorLayer: fileURLToPath(
          new URL(
            "./src/components-individual/OlVectorLayer.ts",
            import.meta.url,
          ),
        ),
        OlVectorTileLayer: fileURLToPath(
          new URL(
            "./src/components-individual/OlVectorTileLayer.ts",
            import.meta.url,
          ),
        ),
        OlWebglTileLayer: fileURLToPath(
          new URL(
            "./src/components-individual/OlWebglTileLayer.ts",
            import.meta.url,
          ),
        ),
        OlWebglVectorLayer: fileURLToPath(
          new URL(
            "./src/components-individual/OlWebglVectorLayer.ts",
            import.meta.url,
          ),
        ),
        OlSourceBingmaps: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceBingmaps.ts",
            import.meta.url,
          ),
        ),
        OlSourceCluster: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceCluster.ts",
            import.meta.url,
          ),
        ),
        OlSourceImageStatic: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceImageStatic.ts",
            import.meta.url,
          ),
        ),
        OlSourceImageWms: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceImageWms.ts",
            import.meta.url,
          ),
        ),
        OlSourceOsm: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceOsm.ts",
            import.meta.url,
          ),
        ),
        OlSourceStadiaMaps: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceStadiaMaps.ts",
            import.meta.url,
          ),
        ),
        OlSourceTianditu: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceTianditu.ts",
            import.meta.url,
          ),
        ),
        OlSourceTileArcgisRest: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceTileArcgisRest.ts",
            import.meta.url,
          ),
        ),
        OlSourceTileDebug: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceTileDebug.ts",
            import.meta.url,
          ),
        ),
        OlSourceGeoTiff: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceGeoTiff.ts",
            import.meta.url,
          ),
        ),
        OlSourceTileJson: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceTileJson.ts",
            import.meta.url,
          ),
        ),
        OlSourceTileWms: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceTileWms.ts",
            import.meta.url,
          ),
        ),
        OlSourceVector: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceVector.ts",
            import.meta.url,
          ),
        ),
        OlSourceVectorTile: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceVectorTile.ts",
            import.meta.url,
          ),
        ),
        OlSourceXyz: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceXyz.ts",
            import.meta.url,
          ),
        ),
        OlSourceWmts: fileURLToPath(
          new URL(
            "./src/components-individual/OlSourceWmts.ts",
            import.meta.url,
          ),
        ),
        OlAttributionControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlAttributionControl.ts",
            import.meta.url,
          ),
        ),
        OlButtonControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlButtonControl.ts",
            import.meta.url,
          ),
        ),
        OlContextMenuControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlContextMenuControl.ts",
            import.meta.url,
          ),
        ),
        OlControlBar: fileURLToPath(
          new URL(
            "./src/components-individual/OlControlBar.ts",
            import.meta.url,
          ),
        ),
        OlFullscreenControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlFullscreenControl.ts",
            import.meta.url,
          ),
        ),
        OlLayerswitcherControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlLayerswitcherControl.ts",
            import.meta.url,
          ),
        ),
        OlLayerswitcherimageControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlLayerswitcherimageControl.ts",
            import.meta.url,
          ),
        ),
        OlMousepositionControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlMousepositionControl.ts",
            import.meta.url,
          ),
        ),
        OlOverviewmapControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlOverviewmapControl.ts",
            import.meta.url,
          ),
        ),
        OlPrintdialogControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlPrintdialogControl.ts",
            import.meta.url,
          ),
        ),
        OlProfileControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlProfileControl.ts",
            import.meta.url,
          ),
        ),
        OlRotateControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlRotateControl.ts",
            import.meta.url,
          ),
        ),
        OlScalelineControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlScalelineControl.ts",
            import.meta.url,
          ),
        ),
        OlSearchControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlSearchControl.ts",
            import.meta.url,
          ),
        ),
        OlSwipeControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlSwipeControl.ts",
            import.meta.url,
          ),
        ),
        OlToggleControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlToggleControl.ts",
            import.meta.url,
          ),
        ),
        OlVideorecorderControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlVideorecorderControl.ts",
            import.meta.url,
          ),
        ),
        OlZoneControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlZoneControl.ts",
            import.meta.url,
          ),
        ),
        OlZoomControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlZoomControl.ts",
            import.meta.url,
          ),
        ),
        OlZoomsliderControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlZoomsliderControl.ts",
            import.meta.url,
          ),
        ),
        OlZoomtoextentControl: fileURLToPath(
          new URL(
            "./src/components-individual/OlZoomtoextentControl.ts",
            import.meta.url,
          ),
        ),
        OlGeomCircle: fileURLToPath(
          new URL(
            "./src/components-individual/OlGeomCircle.ts",
            import.meta.url,
          ),
        ),
        OlGeomLineString: fileURLToPath(
          new URL(
            "./src/components-individual/OlGeomLineString.ts",
            import.meta.url,
          ),
        ),
        OlGeomMultiLineString: fileURLToPath(
          new URL(
            "./src/components-individual/OlGeomMultiLineString.ts",
            import.meta.url,
          ),
        ),
        OlGeomMultiPoint: fileURLToPath(
          new URL(
            "./src/components-individual/OlGeomMultiPoint.ts",
            import.meta.url,
          ),
        ),
        OlGeomMultiPolygon: fileURLToPath(
          new URL(
            "./src/components-individual/OlGeomMultiPolygon.ts",
            import.meta.url,
          ),
        ),
        OlGeomPoint: fileURLToPath(
          new URL(
            "./src/components-individual/OlGeomPoint.ts",
            import.meta.url,
          ),
        ),
        OlGeomPolygon: fileURLToPath(
          new URL(
            "./src/components-individual/OlGeomPolygon.ts",
            import.meta.url,
          ),
        ),
        OlStyle: fileURLToPath(
          new URL(
            "./src/components-individual/OlStyle.ts",
            import.meta.url,
          ),
        ),
        OlStyleStroke: fileURLToPath(
          new URL(
            "./src/components-individual/OlStyleStroke.ts",
            import.meta.url,
          ),
        ),
        OlStyleFill: fileURLToPath(
          new URL(
            "./src/components-individual/OlStyleFill.ts",
            import.meta.url,
          ),
        ),
        OlStyleIcon: fileURLToPath(
          new URL(
            "./src/components-individual/OlStyleIcon.ts",
            import.meta.url,
          ),
        ),
        OlStyleText: fileURLToPath(
          new URL(
            "./src/components-individual/OlStyleText.ts",
            import.meta.url,
          ),
        ),
        OlStyleFlowline: fileURLToPath(
          new URL(
            "./src/components-individual/OlStyleFlowline.ts",
            import.meta.url,
          ),
        ),
        OlStyleCircle: fileURLToPath(
          new URL(
            "./src/components-individual/OlStyleCircle.ts",
            import.meta.url,
          ),
        ),
        OlInteractionClusterselect: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionClusterselect.ts",
            import.meta.url,
          ),
        ),
        OlInteractionDragbox: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionDragbox.ts",
            import.meta.url,
          ),
        ),
        OlInteractionDragrotate: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionDragrotate.ts",
            import.meta.url,
          ),
        ),
        OlInteractionDragrotatezoom: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionDragrotatezoom.ts",
            import.meta.url,
          ),
        ),
        OlInteractionLink: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionLink.ts",
            import.meta.url,
          ),
        ),
        OlInteractionSelect: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionSelect.ts",
            import.meta.url,
          ),
        ),
        OlInteractionDraw: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionDraw.ts",
            import.meta.url,
          ),
        ),
        OlInteractionModify: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionModify.ts",
            import.meta.url,
          ),
        ),
        OlInteractionPointer: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionPointer.ts",
            import.meta.url,
          ),
        ),
        OlInteractionSnap: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionSnap.ts",
            import.meta.url,
          ),
        ),
        OlInteractionTransform: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionTransform.ts",
            import.meta.url,
          ),
        ),
        OlInteractionMouseWheelZoom: fileURLToPath(
          new URL(
            "./src/components-individual/OlInteractionMouseWheelZoom.ts",
            import.meta.url,
          ),
        ),
        OlAnimationDrop: fileURLToPath(
          new URL(
            "./src/components-individual/OlAnimationDrop.ts",
            import.meta.url,
          ),
        ),
        OlAnimationFade: fileURLToPath(
          new URL(
            "./src/components-individual/OlAnimationFade.ts",
            import.meta.url,
          ),
        ),
        OlAnimationPath: fileURLToPath(
          new URL(
            "./src/components-individual/OlAnimationPath.ts",
            import.meta.url,
          ),
        ),
        OlAnimationShake: fileURLToPath(
          new URL(
            "./src/components-individual/OlAnimationShake.ts",
            import.meta.url,
          ),
        ),
        OlAnimationSlide: fileURLToPath(
          new URL(
            "./src/components-individual/OlAnimationSlide.ts",
            import.meta.url,
          ),
        ),
        OlAnimationTeleport: fileURLToPath(
          new URL(
            "./src/components-individual/OlAnimationTeleport.ts",
            import.meta.url,
          ),
        ),
        OlAnimationZoom: fileURLToPath(
          new URL(
            "./src/components-individual/OlAnimationZoom.ts",
            import.meta.url,
          ),
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
