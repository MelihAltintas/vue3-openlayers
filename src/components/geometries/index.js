import Point from "./Point.vue";
import LineString from "./LineString.vue";
import Circle from "./Circle.vue";
import Polygon from "./Polygon.vue";
import MultiPoint from "./MultiPoint.vue";
import MultiLineString from "./MultiLineString.vue";
import MultiPolygon from "./MultiPolygon.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component(Point.name, Point);
  app.component(LineString.name, LineString);
  app.component(Circle.name, Circle);
  app.component(Polygon.name, Polygon);
  app.component(MultiPoint.name, MultiPoint);
  app.component(MultiLineString.name, MultiLineString);
  app.component(MultiPolygon.name, MultiPolygon);
}

export default install;

export {
  install,
  Point,
  LineString,
  Circle,
  Polygon,
  MultiPoint,
  MultiLineString,
  MultiPolygon,
};
