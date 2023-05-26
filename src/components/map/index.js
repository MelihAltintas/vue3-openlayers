import OlFeature from "./OlFeature.vue";
import Map from "./Map.vue";
import View from "./View.vue";
import Overlay from "./Overlay.vue";
import GeoLocation from "./GeoLocation.vue";
import Projection from "./Projection.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-feature", OlFeature);
  app.component(Map.name, Map);
  app.component(View.name, View);
  app.component(Overlay.name, Overlay);
  app.component(GeoLocation.name, GeoLocation);
  app.component(Projection.name, Projection);
}

export default install;

export { install, OlFeature, Map, View, Overlay, GeoLocation, Projection };
