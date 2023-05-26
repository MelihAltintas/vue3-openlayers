import OlFeature from "./OlFeature.vue";
import OlGeoLocation from "./OlGeoLocation.vue";
import OlMap from "./OlMap.vue";
import OlOverlay from "./OlOverlay.vue";
import View from "./View.vue";
import Projection from "./Projection.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-feature", OlFeature);
  app.component("ol-geolocation", OlGeoLocation);
  app.component("ol-map", OlMap);
  app.component("ol-overlay", OlOverlay);
  app.component(View.name, View);
  app.component(Projection.name, Projection);
}

export default install;

export {
  install,
  OlFeature,
  OlGeoLocation,
  OlMap,
  OlOverlay,
  View,
  Projection,
};
