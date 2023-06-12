import type { App } from "vue";
import OlAnimatedClusterLayer from "./OlAnimatedClusterLayer.vue";
import OlHeatmapLayer from "./OlHeatmapLayer.vue";
import OlImageLayer from "./OlImageLayer.vue";
import OlTileLayer from "./OlTileLayer.vue";
import OlVectorLayer from "./OlVectorLayer.vue";
import OlVectorImageLayer from "./OlVectorImageLayer.vue";
import OlWebglPointsLayer from "./OlWebglPointsLayer.vue";
import OlWebglTileLayer from "./OlWebglTileLayer.vue";

let installed = false;

function install(app: App) {
  if (installed) return;
  installed = true;

  app.component("ol-animated-clusterlayer", OlAnimatedClusterLayer);
  app.component("ol-heatmap-layer", OlHeatmapLayer);
  app.component("ol-image-layer", OlImageLayer);
  app.component("ol-tile-layer", OlTileLayer);
  app.component("ol-vector-image-layer", OlVectorImageLayer);
  app.component("ol-vector-layer", OlVectorLayer);
  app.component("ol-webgl-points-layer", OlWebglPointsLayer);
  app.component("ol-webgl-tile-layer", OlWebglTileLayer);
}

export default install;

export {
  install,
  OlAnimatedClusterLayer,
  OlHeatmapLayer,
  OlImageLayer,
  OlTileLayer,
  OlVectorImageLayer,
  OlVectorLayer,
  OlWebglPointsLayer,
  OlWebglTileLayer,
};
