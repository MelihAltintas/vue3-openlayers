import TileLayer from './TileLayer.vue'
import ImageLayer from './ImageLayer.vue'
import VectorLayer from './VectorLayer.vue'
function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(TileLayer.name, TileLayer)
    app.component(ImageLayer.name, ImageLayer)
    app.component(VectorLayer.name, VectorLayer)
  }
  
  export default install
  
  export {
    install,
    TileLayer
  }