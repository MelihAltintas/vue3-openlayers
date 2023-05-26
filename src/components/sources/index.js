import OlSourceBingMaps from "./OlSourceBingMaps.vue";
import OlSourceCluster from "./OlSourceCluster.vue";
import OlSourceImageStatic from "./OlSourceImageStatic.vue";
import OlSourceImageWMS from "./OlSourceImageWMS.vue";
import OlSourceOSM from "./OlSourceOSM.vue";
import OlSourceTianDiTu from "./OlSourceTianDiTu.vue";
import OlSourceXYZ from "./OlSourceXYZ.vue";
import OlSourceWMTS from "./OlSourceWMTS.vue";
import SourceVector from "./SourceVector.vue";
import SourceTileWMS from "./SourceTileWMS.vue";
import SourceWebglPoints from "./SourceWebglPoints.vue";
import SourceTileArcGISRest from "@/components/sources/SourceTileArcGisRest.vue";

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
  app.component("ol-source-xyz", OlSourceXYZ);
  app.component("ol-source-wmts", OlSourceWMTS);
  app.component(SourceVector.name, SourceVector);
  app.component(SourceTileWMS.name, SourceTileWMS);
  app.component(SourceWebglPoints.name, SourceWebglPoints);
  app.component(SourceTileArcGISRest.name, SourceTileArcGISRest);
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
  OlSourceXYZ,
  OlSourceWMTS,
  SourceVector,
  SourceTileWMS,
  SourceWebglPoints,
  SourceTileArcGISRest,
};
