import OlGeomCircle from "./OlGeomCircle.vue";
import OlGeomLineString from "./OlGeomLineString.vue";
import OlGeomMultiLineString from "./OlGeomMultiLineString.vue";
import Point from "./Point.vue";
import Polygon from "./Polygon.vue";
import MultiPoint from "./MultiPoint.vue";
import MultiPolygon from "./MultiPolygon.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-geom-circle", OlGeomCircle);
  app.component("ol-geom-line-string", OlGeomLineString);
  app.component("ol-geom-multi-line-string", OlGeomMultiLineString);
  app.component(Point.name, Point);
  app.component(Polygon.name, Polygon);
  app.component(MultiPoint.name, MultiPoint);
  app.component(MultiPolygon.name, MultiPolygon);
}

export default install;

export {
  install,
  OlGeomCircle,
  OlGeomLineString,
  OlGeomMultiLineString,
  Point,
  Polygon,
  MultiPoint,
  MultiPolygon,
};
