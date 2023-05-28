import WebGLTileLayer from "./WebGLTileLayer.vue";
import OlVectorImageLayer from "./OlVectorImageLayer.vue";
import VectorLayer from "./VectorLayer.vue";
import OlAnimatedClusterLayer from "./OlAnimatedClusterLayer.vue";
import OlHeatmapLayer from "./OlHeatmapLayer.vue";
import OlImageLayer from "./OlImageLayer.vue";
import OlTileLayer from "./OlTileLayer.vue";
import WebglPointsLayer from "./WebglPointsLayer.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-animated-clusterlayer", OlAnimatedClusterLayer);
  app.component("ol-heatmap-layer", OlHeatmapLayer);
  app.component("ol-image-layer", OlImageLayer);
  app.component("ol-tile-layer", OlTileLayer);
  app.component("ol-vector-image-layer", OlVectorImageLayer);
  app.component(WebGLTileLayer.name, WebGLTileLayer);
  app.component(VectorLayer.name, VectorLayer);
  app.component(WebglPointsLayer.name, WebglPointsLayer);
}

export default install;

export {
  install,
  OlAnimatedClusterLayer,
  OlHeatmapLayer,
  OlImageLayer,
  OlTileLayer,
  OlVectorImageLayer,
  WebGLTileLayer,
  VectorLayer,
  WebglPointsLayer,
};
