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
import { registerWithAliases } from "../registerWithAliases";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  registerWithAliases(app, "OlSourceBingMaps", OlSourceBingMaps);
  registerWithAliases(app, "OlSourceCluster", OlSourceCluster);
  registerWithAliases(app, "OlSourceImageStatic", OlSourceImageStatic);
  registerWithAliases(app, "OlSourceImageWMS", OlSourceImageWMS);
  registerWithAliases(app, "OlSourceOSM", OlSourceOSM);
  registerWithAliases(app, "OlSourceStadiaMaps", OlSourceStadiaMaps);
  registerWithAliases(app, "OlSourceTianditu", OlSourceTianditu);
  registerWithAliases(app, "OlSourceTileArcGISRest", OlSourceTileArcGISRest);
  registerWithAliases(app, "OlSourceTileDebug", OlSourceTileDebug);
  registerWithAliases(app, "OlSourceGeoTIFF", OlSourceGeoTIFF);
  registerWithAliases(app, "OlSourceTileJSON", OlSourceTileJSON);
  registerWithAliases(app, "OlSourceTileWMS", OlSourceTileWMS);
  registerWithAliases(app, "OlSourceVector", OlSourceVector);
  registerWithAliases(app, "OlSourceVectorTile", OlSourceVectorTile);
  registerWithAliases(app, "OlSourceXYZ", OlSourceXYZ);
  registerWithAliases(app, "OlSourceWMTS", OlSourceWMTS);

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
