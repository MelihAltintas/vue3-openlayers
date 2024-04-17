import type { App } from "vue";
import OlGeomCircle from "./OlGeomCircle.vue";
import OlGeomLineString from "./OlGeomLineString.vue";
import OlGeomMultiLineString from "./OlGeomMultiLineString.vue";
import OlGeomMultiPoint from "./OlGeomMultiPoint.vue";
import OlGeomMultiPolygon from "./OlGeomMultiPolygon.vue";
import OlGeomPoint from "./OlGeomPoint.vue";
import OlGeomPolygon from "./OlGeomPolygon.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlGeomCircle", OlGeomCircle);
  app.component("OlGeomLineString", OlGeomLineString);
  app.component("OlGeomMultiLineString", OlGeomMultiLineString);
  app.component("OlGeomMultiPoint", OlGeomMultiPoint);
  app.component("OlGeomMultiPolygon", OlGeomMultiPolygon);
  app.component("OlGeomPoint", OlGeomPoint);
  app.component("OlGeomPolygon", OlGeomPolygon);

  app.provide("ol-options", options);
}

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
}

export default install;

export {
  install,
  OlGeomCircle,
  OlGeomLineString,
  OlGeomMultiLineString,
  OlGeomMultiPoint,
  OlGeomMultiPolygon,
  OlGeomPoint,
  OlGeomPolygon,
};
