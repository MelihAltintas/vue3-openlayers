import type { App } from 'vue'
import OlMap from './OlMap.vue'
import OlView from './OlView.vue'
import OlFeature from './OlFeature.vue'
import OlOverlay from './OlOverlay.vue'
import OlGeoLocation from './OlGeoLocation.vue'
import OlProjectionRegister from './OlProjectionRegister.vue'

let installed = false

function install(app: App) {
  if (installed) return
  installed = true

  app.component('OlMap', OlMap)
  app.component('OlView', OlView)
  app.component('OlFeature', OlFeature)
  app.component('OlOverlay', OlOverlay)
  app.component('OlGeoLocation', OlGeoLocation)
  app.component('OlProjectionRegister', OlProjectionRegister)
}

export default install

export {
  install,
  OlMap,
  OlView,
  OlFeature,
  OlOverlay,
  OlGeoLocation,
  OlProjectionRegister,
}
