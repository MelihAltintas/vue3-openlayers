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
  app.component("ol-source-bingmaps", OlSourceBingMaps);
  app.component("ol-source-cluster", OlSourceCluster);
  app.component("ol-source-image-static", OlSourceImageStatic);
  app.component("ol-source-image-wms", OlSourceImageWMS);
  app.component("ol-source-osm", OlSourceOSM);
  app.component("ol-source-stadia-maps", OlSourceStadiaMaps);
  app.component("ol-source-tianditu", OlSourceTianditu);
  app.component("ol-source-tile-arcgis-rest", OlSourceTileArcGISRest);
  app.component("ol-source-tile-debug", OlSourceTileDebug);
  app.component("ol-source-geo-tiff", OlSourceGeoTIFF);
  app.component("ol-source-tile-json", OlSourceTileJSON);
  app.component("ol-source-tile-wms", OlSourceTileWMS);
  app.component("ol-source-vector", OlSourceVector);
  app.component("ol-source-vector-tile", OlSourceVectorTile);
  app.component("ol-source-xyz", OlSourceXYZ);
  app.component("ol-source-wmts", OlSourceWMTS);

  app.provide("ol-options", options);
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
