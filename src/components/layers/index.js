import TileLayer from "./TileLayer.vue";
import WebGLTileLayer from "./WebGLTileLayer.vue";
import ImageLayer from "./ImageLayer.vue";
import VectorImageLayer from "./VectorImageLayer.vue";
import VectorLayer from "./VectorLayer.vue";
import OlAnimatedClusterLayer from "./OlAnimatedClusterLayer.vue";
import OlHeatmapLayer from "./OlHeatmapLayer.vue";
import WebglPointsLayer from "./WebglPointsLayer.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-animated-clusterlayer", OlAnimatedClusterLayer);
  app.component("ol-heatmap-layer", OlHeatmapLayer);
  app.component(TileLayer.name, TileLayer);
  app.component(WebGLTileLayer.name, WebGLTileLayer);
  app.component(ImageLayer.name, ImageLayer);
  app.component(VectorImageLayer.name, VectorImageLayer);
  app.component(VectorLayer.name, VectorLayer);
  app.component(WebglPointsLayer.name, WebglPointsLayer);
}

export default install;

export {
  install,
  OlAnimatedClusterLayer,
  OlHeatmapLayer,
  TileLayer,
  WebGLTileLayer,
  ImageLayer,
  VectorImageLayer,
  VectorLayer,
  WebglPointsLayer,
};
