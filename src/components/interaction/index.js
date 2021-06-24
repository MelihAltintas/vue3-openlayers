import SelectInteraction from './SelectInteraction.vue'

function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(SelectInteraction.name, SelectInteraction)

  }
  
  export default install
  
  export {
    install,
    SelectInteraction
  }