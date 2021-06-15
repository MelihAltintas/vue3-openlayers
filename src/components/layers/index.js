import TileLayer from './TileLayer.vue'


function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(TileLayer.name, TileLayer)

  }
  
  export default install
  
  export {
    install,
    TileLayer
  }