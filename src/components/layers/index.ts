import type { App } from "vue";
import OlAnimatedClusterLayer from "./OlAnimatedClusterLayer.vue";
import OlHeatmapLayer from "./OlHeatmapLayer.vue";
import OlImageLayer from "./OlImageLayer.vue";
import OlLayerGroup from "./OlLayerGroup.vue";
import OlTileLayer from "./OlTileLayer.vue";
import OlVectorLayer from "./OlVectorLayer.vue";
import OlVectorTileLayer from "./OlVectorTileLayer.vue";
import OlVectorImageLayer from "./OlVectorImageLayer.vue";
import OlWebglVectorLayer from "./OlWebglVectorLayer.vue";
import OlWebglTileLayer from "./OlWebglTileLayer.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("ol-animated-clusterlayer", OlAnimatedClusterLayer);
  app.component("ol-heatmap-layer", OlHeatmapLayer);
  app.component("ol-image-layer", OlImageLayer);
  app.component("ol-layer-group", OlLayerGroup);
  app.component("ol-tile-layer", OlTileLayer);
  app.component("ol-vector-image-layer", OlVectorImageLayer);
  app.component("ol-vector-layer", OlVectorLayer);
  app.component("ol-vector-tile-layer", OlVectorTileLayer);
  app.component("ol-webgl-vector-layer", OlWebglVectorLayer);
  app.component("ol-webgl-tile-layer", OlWebglTileLayer);

  app.provide("ol-options", options);
}

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
}

export default install;

export {
  install,
  OlAnimatedClusterLayer,
  OlHeatmapLayer,
  OlImageLayer,
  OlLayerGroup,
  OlTileLayer,
  OlVectorImageLayer,
  OlVectorLayer,
  OlVectorTileLayer,
  OlWebglVectorLayer,
  OlWebglTileLayer,
};
