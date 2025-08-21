import type { App } from "vue";
import OlGeomCircle from "./OlGeomCircle.vue";
import OlGeomLineString from "./OlGeomLineString.vue";
import OlGeomMultiLineString from "./OlGeomMultiLineString.vue";
import OlGeomMultiPoint from "./OlGeomMultiPoint.vue";
import OlGeomMultiPolygon from "./OlGeomMultiPolygon.vue";
import OlGeomPoint from "./OlGeomPoint.vue";
import OlGeomPolygon from "./OlGeomPolygon.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";
import { registerWithAliases } from "../registerWithAliases";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  registerWithAliases(app, "OlGeomCircle", OlGeomCircle);
  registerWithAliases(app, "OlGeomLineString", OlGeomLineString);
  registerWithAliases(app, "OlGeomMultiLineString", OlGeomMultiLineString);
  registerWithAliases(app, "OlGeomMultiPoint", OlGeomMultiPoint);
  registerWithAliases(app, "OlGeomMultiPolygon", OlGeomMultiPolygon);
  registerWithAliases(app, "OlGeomPoint", OlGeomPoint);
  registerWithAliases(app, "OlGeomPolygon", OlGeomPolygon);

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
  OlGeomCircle,
  OlGeomLineString,
  OlGeomMultiLineString,
  OlGeomMultiPoint,
  OlGeomMultiPolygon,
  OlGeomPoint,
  OlGeomPolygon,
};
