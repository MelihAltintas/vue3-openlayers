import TileLayer from './TileLayer.vue'
import WebGLTileLayer from './WebGLTileLayer.vue'
import ImageLayer from './ImageLayer.vue'
import VectorLayer from './VectorLayer.vue'
import AnimatedClusterLayer from './AnimatedClusterLayer'
import WebglPointsLayer from './WebglPointsLayer'
import HeatmapLayer from './HeatmapLayer.vue'

function install(app) {

  if (install.installed) {
    return
  }

  install.installed = true

  app.component(TileLayer.name, TileLayer)
  app.component(WebGLTileLayer.name, WebGLTileLayer)
  app.component(ImageLayer.name, ImageLayer)
  app.component(VectorLayer.name, VectorLayer)
  app.component(AnimatedClusterLayer.name, AnimatedClusterLayer)
  app.component(WebglPointsLayer.name, WebglPointsLayer)
  app.component(HeatmapLayer.name, HeatmapLayer)
}

export default install

export {
  install,
  TileLayer,
  WebGLTileLayer,
  ImageLayer,
  VectorLayer,
  AnimatedClusterLayer,
  WebglPointsLayer,
  HeatmapLayer,
}
