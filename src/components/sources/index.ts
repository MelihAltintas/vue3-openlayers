import type { App } from "vue";
import OlSourceBingMaps from "./OlSourceBingMaps.vue";
import OlSourceCluster from "./OlSourceCluster.vue";
import OlSourceImageStatic from "./OlSourceImageStatic.vue";
import OlSourceImageWMS from "./OlSourceImageWMS.vue";
import OlSourceOSM from "./OlSourceOSM.vue";
import OlSourceStadiaMaps from "./OlSourceStadiaMaps.vue";
import OlSourceTianDiTu from "./OlSourceTianDiTu.vue";
import OlSourceTileArcGISRest from "@/components/sources/OlSourceTileArcGISRest.vue";
import OlSourceTileJSON from "./OlSourceTileJSON.vue";
import OlSourceTileWMS from "./OlSourceTileWMS.vue";
import OlSourceVector from "./OlSourceVector.vue";
import OlSourceVectorTile from "./OlSourceVectorTile.vue";
import OlSourceWebglPoints from "./OlSourceWebglPoints.vue";
import OlSourceXYZ from "./OlSourceXYZ.vue";
import OlSourceWMTS from "./OlSourceWMTS.vue";

function install(app: App) {
  app.component("ol-source-bingmaps", OlSourceBingMaps);
  app.component("ol-source-cluster", OlSourceCluster);
  app.component("ol-source-image-static", OlSourceImageStatic);
  app.component("ol-source-image-wms", OlSourceImageWMS);
  app.component("ol-source-osm", OlSourceOSM);
  app.component("ol-source-stadia-maps", OlSourceStadiaMaps);
  app.component("ol-source-tianditu", OlSourceTianDiTu);
  app.component("ol-source-tile-arcgis-rest", OlSourceTileArcGISRest);
  app.component("ol-source-tile-json", OlSourceTileJSON);
  app.component("ol-source-tile-wms", OlSourceTileWMS);
  app.component("ol-source-vector", OlSourceVector);
  app.component("ol-source-vector-tile", OlSourceVectorTile);
  app.component("ol-source-webglpoints", OlSourceWebglPoints);
  app.component("ol-source-xyz", OlSourceXYZ);
  app.component("ol-source-wmts", OlSourceWMTS);
}

export default install;

export {
  install,
  OlSourceBingMaps,
  OlSourceCluster,
  OlSourceImageStatic,
  OlSourceImageWMS,
  OlSourceOSM,
  OlSourceStadiaMaps,
  OlSourceTianDiTu,
  OlSourceTileArcGISRest,
  OlSourceTileJSON,
  OlSourceTileWMS,
  OlSourceVector,
  OlSourceVectorTile,
  OlSourceWebglPoints,
  OlSourceXYZ,
  OlSourceWMTS,
};
