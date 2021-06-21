import TileLayer from './TileLayer.vue'
import ImageLayer from './ImageLayer.vue'

function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(TileLayer.name, TileLayer)
    app.component(ImageLayer.name, ImageLayer)

  }
  
  export default install
  
  export {
    install,
    TileLayer
  }