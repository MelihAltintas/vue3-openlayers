import type { App } from "vue";
import OlFeature from "./OlFeature.vue";
import OlGeoLocation from "./OlGeoLocation.vue";
import OlMap from "./OlMap.vue";
import OlOverlay from "./OlOverlay.vue";
import OlProjectionRegister from "./OlProjectionRegister.vue";
import OlView from "./OlView.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("ol-feature", OlFeature);
  app.component("ol-geolocation", OlGeoLocation);
  app.component("ol-map", OlMap);
  app.component("ol-overlay", OlOverlay);
  app.component("ol-projection-register", OlProjectionRegister);
  app.component("ol-view", OlView);

  app.provide("ol-options", options);
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
