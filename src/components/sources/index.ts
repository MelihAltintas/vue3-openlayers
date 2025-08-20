import type { App } from "vue";
import OlSourceBingMaps from "./OlSourceBingMaps.vue";
import OlSourceCluster from "./OlSourceCluster.vue";
import OlSourceImageStatic from "./OlSourceImageStatic.vue";
import OlSourceImageWMS from "./OlSourceImageWMS.vue";
import OlSourceOSM from "./OlSourceOSM.vue";
import OlSourceStadiaMaps from "./OlSourceStadiaMaps.vue";
import OlSourceTianditu from "./OlSourceTianditu.vue";
import OlSourceTileArcGISRest from "@/components/sources/OlSourceTileArcGISRest.vue";
import OlSourceTileDebug from "./OlSourceTileDebug.vue";
import OlSourceGeoTIFF from "./OlSourceGeoTIFF.vue";
import OlSourceTileJSON from "./OlSourceTileJSON.vue";
import OlSourceTileWMS from "./OlSourceTileWMS.vue";
import OlSourceVector from "./OlSourceVector.vue";
import OlSourceVectorTile from "./OlSourceVectorTile.vue";
import OlSourceXYZ from "./OlSourceXYZ.vue";
import OlSourceWMTS from "./OlSourceWMTS.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlSourceBingMaps", OlSourceBingMaps);
  app.component("OlSourceCluster", OlSourceCluster);
  app.component("OlSourceImageStatic", OlSourceImageStatic);
  app.component("OlSourceImageWMS", OlSourceImageWMS);
  app.component("OlSourceOSM", OlSourceOSM);
  app.component("OlSourceStadiaMaps", OlSourceStadiaMaps);
  app.component("OlSourceTianditu", OlSourceTianditu);
  app.component("OlSourceTileArcGISRest", OlSourceTileArcGISRest);
  app.component("OlSourceTileDebug", OlSourceTileDebug);
  app.component("OlSourceGeoTIFF", OlSourceGeoTIFF);
  app.component("OlSourceTileJSON", OlSourceTileJSON);
  app.component("OlSourceTileWMS", OlSourceTileWMS);
  app.component("OlSourceVector", OlSourceVector);
  app.component("OlSourceVectorTile", OlSourceVectorTile);
  app.component("OlSourceXYZ", OlSourceXYZ);
  app.component("OlSourceWMTS", OlSourceWMTS);

  if (options) {
    app.provide("ol-options", options);
  }
}

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
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
  OlSourceTianditu,
  OlSourceTileArcGISRest,
  OlSourceTileDebug,
  OlSourceGeoTIFF,
  OlSourceTileJSON,
  OlSourceTileWMS,
  OlSourceVector,
  OlSourceVectorTile,
  OlSourceXYZ,
  OlSourceWMTS,
};
