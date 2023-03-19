import type { App } from 'vue'
import OlTileLayer from './OlTileLayer.vue'
import OlWebglTileLayer from './OlWebglTileLayer.vue'
import OlImageLayer from './OlImageLayer.vue'
import OlVectorLayer from './OlVectorLayer.vue'
import OlAnimatedClusterLayer from './OlAnimatedClusterLayer.vue'
import OlWebglPointsLayer from './OlWebglPointsLayer.vue'
import OlHeatmapLayer from './OlHeatmapLayer.vue'

let installed = false

function install(app: App) {
  if (installed) return
  installed = true

  app.component('OlTileLayer', OlTileLayer)
  app.component('OlWebglTileLayer', OlWebglTileLayer)
  app.component('OlImageLayer', OlImageLayer)
  app.component('OlVectorLayer', OlVectorLayer)
  app.component('OlAnimatedClusterLayer', OlAnimatedClusterLayer)
  app.component('OlWebglPointsLayer', OlWebglPointsLayer)
  app.component('OlHeatmapLayer', OlHeatmapLayer)
}

export default install

export {
  install,
  OlTileLayer,
  OlWebglTileLayer,
  OlImageLayer,
  OlVectorLayer,
  OlAnimatedClusterLayer,
  OlWebglPointsLayer,
  OlHeatmapLayer,
}
