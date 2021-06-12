import FullScreenControl from './FullScreenControl.vue'


function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(FullScreenControl.name, FullScreenControl)

  }
  
  export default install
  
  export {
    install,
    FullScreenControl,
  }