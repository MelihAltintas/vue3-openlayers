import Map from './Map.vue'
import View from './View.vue'
import Feature from './Feature.vue'
import Overlay from './Overlay.vue'

function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(Map.name, Map)
    app.component(View.name, View)
    app.component(Feature.name, Feature)
    app.component(Overlay.name, Overlay)
  }
  
  export default install
  
  export {
    install,
    Map,
    View,
  }