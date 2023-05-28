import OlGeomCircle from "./OlGeomCircle.vue";
import OlGeomLineString from "./OlGeomLineString.vue";
import OlGeomMultiLineString from "./OlGeomMultiLineString.vue";
import OlGeomMultiPoint from "./OlGeomMultiPoint.vue";
import OlGeomMultiPolygon from "./OlGeomMultiPolygon.vue";
import OlGeomPoint from "./OlGeomPoint.vue";
import Polygon from "./Polygon.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-geom-circle", OlGeomCircle);
  app.component("ol-geom-line-string", OlGeomLineString);
  app.component("ol-geom-multi-line-string", OlGeomMultiLineString);
  app.component("ol-geom-multi-point", OlGeomMultiPoint);
  app.component("ol-geom-multi-polygon", OlGeomMultiPolygon);
  app.component("ol-geom-point", OlGeomPoint);
  app.component(Polygon.name, Polygon);
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
  Polygon,
};
