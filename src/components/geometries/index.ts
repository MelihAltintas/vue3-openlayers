import type { App } from 'vue'
import OlGeomPoint from './OlGeomPoint.vue'
import OlGeomLineString from './OlGeomLineString.vue'
import OlGeomPolygon from './OlGeomPolygon.vue'
import OlGeomMultiPoint from './OlGeomMultiPoint.vue'
import OlGeomMultiLineString from './OlGeomMultiLineString.vue'
import OlGeomMultiPolygon from './OlGeomMultiPolygon.vue'

let installed = false

function install(app: App) {
  if (installed) return
  installed = true

  app.component('OlGeomPoint', OlGeomPoint)
  app.component('OlGeomLineString', OlGeomLineString)
  app.component('OlGeomPolygon', OlGeomPolygon)
  app.component('OlGeomMultiPoint', OlGeomMultiPoint)
  app.component('OlGeomMultiLineString', OlGeomMultiLineString)
  app.component('OlGeomMultiPolygon', OlGeomMultiPolygon)
}

export default install

export {
  install,
  OlGeomPoint,
  OlGeomLineString,
  OlGeomPolygon,
  OlGeomMultiPoint,
  OlGeomMultiLineString,
  OlGeomMultiPolygon,
}
