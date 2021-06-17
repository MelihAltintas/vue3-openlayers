import SourceXYZ from './SourceXYZ.vue'
import SourceOSM from './SourceOSM.vue'

function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(SourceXYZ.name, SourceXYZ)
    app.component(SourceOSM.name, SourceOSM)

  }
  
  export default install
  
  export {
    install,
    SourceXYZ,
    SourceOSM
  }