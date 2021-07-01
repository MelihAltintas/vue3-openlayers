import TileLayer from './TileLayer.vue'
import ImageLayer from './ImageLayer.vue'
import VectorLayer from './VectorLayer.vue'
import AnimatedClusterLayer from './AnimatedClusterLayer'
function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(TileLayer.name, TileLayer)
    app.component(ImageLayer.name, ImageLayer)
    app.component(VectorLayer.name, VectorLayer)
    app.component(AnimatedClusterLayer.name, AnimatedClusterLayer)
  }
  
  export default install
  
  export {
    install,
    TileLayer,
    ImageLayer,
    VectorLayer,
    AnimatedClusterLayer
  }