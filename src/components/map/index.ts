import type { App } from "vue";
import OlFeature from "./OlFeature.vue";
import OlGeolocation from "./OlGeolocation.vue";
import OlMap from "./OlMap.vue";
import OlOverlay from "./OlOverlay.vue";
import OlProjectionRegister from "./OlProjectionRegister.vue";
import OlView from "./OlView.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlFeature", OlFeature);
  app.component("OlGeolocation", OlGeolocation);
  app.component("OlMap", OlMap);
  app.component("OlOverlay", OlOverlay);
  app.component("OlProjectionRegister", OlProjectionRegister);
  app.component("OlView", OlView);

  app.provide("ol-options", options);
}

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
}

export default install;

export {
  install,
  OlFeature,
  OlGeolocation,
  OlMap,
  OlOverlay,
  OlProjectionRegister,
  OlView,
};
