import Point from './Point.vue'
import LineString from './LineString.vue'
import Polygon from './Polygon.vue'
import MultiPoint from './MultiPoint.vue'
import MultiLineString from './MultiLineString.vue'
function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(Point.name, Point)
    app.component(LineString.name, LineString)
    app.component(Polygon.name, Polygon)
    app.component(MultiPoint.name, MultiPoint)
    app.component(MultiLineString.name, MultiLineString)
  }
  
  export default install
  
  export {
    install,
    Point,
    LineString,
    Polygon
  }