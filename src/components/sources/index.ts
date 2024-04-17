import type { App } from "vue";
import OlSourceBingmaps from "./OlSourceBingmaps.vue";
import OlSourceCluster from "./OlSourceCluster.vue";
import OlSourceImageStatic from "./OlSourceImageStatic.vue";
import OlSourceImageWms from "./OlSourceImageWms.vue";
import OlSourceOsm from "./OlSourceOsm.vue";
import OlSourceStadiaMaps from "./OlSourceStadiaMaps.vue";
import OlSourceTianditu from "./OlSourceTianditu.vue";
import OlSourceTileArcgisRest from "@/components/sources/OlSourceTileArcgisRest.vue";
import OlSourceTileDebug from "./OlSourceTileDebug.vue";
import OlSourceGeoTiff from "./OlSourceGeoTiff.vue";
import OlSourceTileJson from "./OlSourceTileJson.vue";
import OlSourceTileWms from "./OlSourceTileWms.vue";
import OlSourceVector from "./OlSourceVector.vue";
import OlSourceVectorTile from "./OlSourceVectorTile.vue";
import OlSourceXyz from "./OlSourceXyz.vue";
import OlSourceWmts from "./OlSourceWmts.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlSourceBingmaps", OlSourceBingmaps);
  app.component("OlSourceCluster", OlSourceCluster);
  app.component("OlSourceImageStatic", OlSourceImageStatic);
  app.component("OlSourceImageWms", OlSourceImageWms);
  app.component("OlSourceOsm", OlSourceOsm);
  app.component("OlSourceStadiaMaps", OlSourceStadiaMaps);
  app.component("OlSourceTianditu", OlSourceTianditu);
  app.component("OlSourceTileArcgisRest", OlSourceTileArcgisRest);
  app.component("OlSourceTileDebug", OlSourceTileDebug);
  app.component("OlSourceGeoTiff", OlSourceGeoTiff);
  app.component("OlSourceTileJson", OlSourceTileJson);
  app.component("OlSourceTileWms", OlSourceTileWms);
  app.component("OlSourceVector", OlSourceVector);
  app.component("OlSourceVectorTile", OlSourceVectorTile);
  app.component("OlSourceXyz", OlSourceXyz);
  app.component("OlSourceWmts", OlSourceWmts);

  app.provide("ol-options", options);
}

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
}

export default install;

export {
  install,
  OlSourceBingmaps,
  OlSourceCluster,
  OlSourceImageStatic,
  OlSourceImageWms,
  OlSourceOsm,
  OlSourceStadiaMaps,
  OlSourceTianditu,
  OlSourceTileArcgisRest,
  OlSourceTileDebug,
  OlSourceGeoTiff,
  OlSourceTileJson,
  OlSourceTileWms,
  OlSourceVector,
  OlSourceVectorTile,
  OlSourceXyz,
  OlSourceWmts,
};
