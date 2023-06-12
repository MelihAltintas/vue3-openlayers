import type { App } from "vue";
import OlGeomCircle from "./OlGeomCircle.vue";
import OlGeomLineString from "./OlGeomLineString.vue";
import OlGeomMultiLineString from "./OlGeomMultiLineString.vue";
import OlGeomMultiPoint from "./OlGeomMultiPoint.vue";
import OlGeomMultiPolygon from "./OlGeomMultiPolygon.vue";
import OlGeomPoint from "./OlGeomPoint.vue";
import OlGeomPolygon from "./OlGeomPolygon.vue";

let installed = false;

function install(app: App) {
  if (installed) return;
  installed = true;

  app.component("ol-geom-circle", OlGeomCircle);
  app.component("ol-geom-line-string", OlGeomLineString);
  app.component("ol-geom-multi-line-string", OlGeomMultiLineString);
  app.component("ol-geom-multi-point", OlGeomMultiPoint);
  app.component("ol-geom-multi-polygon", OlGeomMultiPolygon);
  app.component("ol-geom-point", OlGeomPoint);
  app.component("ol-geom-polygon", OlGeomPolygon);
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
