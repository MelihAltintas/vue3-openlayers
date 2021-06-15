import SourceXYZ from './SourceXYZ.vue'


function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(SourceXYZ.name, SourceXYZ)

  }
  
  export default install
  
  export {
    install,
    SourceXYZ
  }