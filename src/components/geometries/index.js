import Point from "./Point.vue";
import LineString from "./LineString.vue";
import Polygon from "./Polygon.vue";
import MultiPoint from "./MultiPoint.vue";
import MultiLineString from "./MultiLineString.vue";
import MultiPolygon from "./MultiPolygon.vue";
import Circle from "./Circle.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component(Point.name, Point);
  app.component(LineString.name, LineString);
  app.component(Polygon.name, Polygon);
  app.component(MultiPoint.name, MultiPoint);
  app.component(MultiLineString.name, MultiLineString);
  app.component(MultiPolygon.name, MultiPolygon);
  app.component(Circle.name, Circle);
}

export default install;

export {
  install,
  Point,
  LineString,
  Polygon,
  MultiPoint,
  MultiLineString,
  MultiPolygon,
  Circle,
};
