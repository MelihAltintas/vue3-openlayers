import OlSourceXYZ from "./OlSourceXYZ.vue";
import OlSourceWMTS from "./OlSourceWMTS.vue";
import SourceOSM from "./SourceOSM.vue";
import SourceImageStatic from "./SourceImageStatic.vue";
import SourceVector from "./SourceVector.vue";
import SourceCluster from "./SourceCluster.vue";
import SourceBingMaps from "./SourceBingMaps.vue";
import SourceTianDiTu from "./SourceTianDiTu.vue";
import SourceImageWMS from "./SourceImageWMS.vue";
import SourceTileWMS from "./SourceTileWMS.vue";
import SourceWebglPoints from "./SourceWebglPoints.vue";
import SourceTileArcGISRest from "@/components/sources/SourceTileArcGisRest.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-source-bingmaps", OlSourceBingMaps);
  app.component("ol-source-xyz", OlSourceXYZ);
  app.component("ol-source-wmts", OlSourceWMTS);
  app.component(SourceOSM.name, SourceOSM);
  app.component(SourceImageStatic.name, SourceImageStatic);
  app.component(SourceVector.name, SourceVector);
  app.component(SourceCluster.name, SourceCluster);
  app.component(SourceTianDiTu.name, SourceTianDiTu);
  app.component(SourceImageWMS.name, SourceImageWMS);
  app.component(SourceTileWMS.name, SourceTileWMS);
  app.component(SourceWebglPoints.name, SourceWebglPoints);
  app.component(SourceTileArcGISRest.name, SourceTileArcGISRest);
}

export default install;

export {
  install,
  OlSourceBingMaps,
  OlSourceXYZ,
  OlSourceWMTS,
  SourceOSM,
  SourceImageStatic,
  SourceVector,
  SourceCluster,
  SourceTianDiTu,
  SourceImageWMS,
  SourceTileWMS,
  SourceWebglPoints,
  SourceTileArcGISRest,
};
