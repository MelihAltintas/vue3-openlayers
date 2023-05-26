import OlFeature from "./OlFeature.vue";
import OlGeoLocation from "./OlGeoLocation.vue";
import OlMap from "./OlMap.vue";
import View from "./View.vue";
import Overlay from "./Overlay.vue";
import Projection from "./Projection.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-feature", OlFeature);
  app.component("ol-geolocation", OlGeoLocation);
  app.component("ol-map", OlMap);
  app.component(View.name, View);
  app.component(Overlay.name, Overlay);
  app.component(Projection.name, Projection);
}

export default install;

export { install, OlFeature, OlGeoLocation, OlMap, View, Overlay, Projection };
