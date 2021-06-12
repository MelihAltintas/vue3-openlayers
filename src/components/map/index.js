import Map from './Map.vue'
import View from './View.vue'

function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(Map.name, Map)
    app.component(View.name, View)
  }
  
  export default install
  
  export {
    install,
    Map,
    View,
  }