import SelectInteraction from './SelectInteraction.vue'
import ClusterSelectInteraction from './ClusterSelectInteraction.vue'
function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(SelectInteraction.name, SelectInteraction)
    app.component(ClusterSelectInteraction.name, ClusterSelectInteraction)

  }
  
  export default install
  
  export {
    install,
    SelectInteraction,
    ClusterSelectInteraction
  }