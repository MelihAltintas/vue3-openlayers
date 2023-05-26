import OlSourceBingMaps from "./OlSourceBingMaps.vue";
import OlSourceCluster from "./OlSourceCluster.vue";
import OlSourceImageStatic from "./OlSourceImageStatic.vue";
import OlSourceImageWMS from "./OlSourceImageWMS.vue";
import OlSourceOSM from "./OlSourceOSM.vue";
import OlSourceTianDiTu from "./OlSourceTianDiTu.vue";
import OlSourceTileArcGISRest from "@/components/sources/OlSourceTileArcGISRest.vue";
import OlSourceTileWMS from "./OlSourceTileWMS.vue";
import OlSourceXYZ from "./OlSourceXYZ.vue";
import OlSourceWMTS from "./OlSourceWMTS.vue";
import SourceVector from "./SourceVector.vue";
import SourceWebglPoints from "./SourceWebglPoints.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-source-bingmaps", OlSourceBingMaps);
  app.component("ol-source-cluster", OlSourceCluster);
  app.component("ol-source-image-static", OlSourceImageStatic);
  app.component("ol-source-image-wms", OlSourceImageWMS);
  app.component("ol-source-osm", OlSourceOSM);
  app.component("ol-source-tianditu", OlSourceTianDiTu);
  app.component("ol-source-tile-arcgis-rest", OlSourceTileArcGISRest);
  app.component("ol-source-tile-wms", OlSourceTileWMS);
  app.component("ol-source-xyz", OlSourceXYZ);
  app.component("ol-source-wmts", OlSourceWMTS);
  app.component(SourceVector.name, SourceVector);
  app.component(SourceWebglPoints.name, SourceWebglPoints);
}

export default install;

export {
  install,
  OlSourceBingMaps,
  OlSourceCluster,
  OlSourceImageStatic,
  OlSourceImageWMS,
  OlSourceOSM,
  OlSourceTianDiTu,
  OlSourceTileArcGISRest,
  OlSourceTileWMS,
  OlSourceXYZ,
  OlSourceWMTS,
  SourceVector,
  SourceWebglPoints,
};
