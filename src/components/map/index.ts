import type { App } from "vue";
import OlFeature from "./OlFeature.vue";
import OlGeoLocation from "./OlGeoLocation.vue";
import OlMap from "./OlMap.vue";
import OlOverlay from "./OlOverlay.vue";
import OlProjectionRegister from "./OlProjectionRegister.vue";
import OlView from "./OlView.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";
import { registerWithAliases } from "../registerWithAliases";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  registerWithAliases(app, "OlFeature", OlFeature);
  registerWithAliases(app, "OlGeoLocation", OlGeoLocation);
  registerWithAliases(app, "OlMap", OlMap);
  registerWithAliases(app, "OlOverlay", OlOverlay);
  registerWithAliases(app, "OlProjectionRegister", OlProjectionRegister);
  registerWithAliases(app, "OlView", OlView);

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
  OlFeature,
  OlGeoLocation,
  OlMap,
  OlOverlay,
  OlProjectionRegister,
  OlView,
};
