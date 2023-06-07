import type { App } from "vue";
import OlFeature from "./OlFeature.vue";
import OlGeoLocation from "./OlGeoLocation.vue";
import OlMap from "./OlMap.vue";
import OlOverlay from "./OlOverlay.vue";
import OlProjectionRegister from "./OlProjectionRegister.vue";
import OlView from "./OlView.vue";

let installed = false;

function install(app: App) {
  if (installed) return;
  installed = true;

  app.component("ol-feature", OlFeature);
  app.component("ol-geolocation", OlGeoLocation);
  app.component("ol-map", OlMap);
  app.component("ol-overlay", OlOverlay);
  app.component("ol-projection-register", OlProjectionRegister);
  app.component("ol-view", OlView);
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
