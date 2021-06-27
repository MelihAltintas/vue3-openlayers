import SourceXYZ from './SourceXYZ.vue'
import SourceOSM from './SourceOSM.vue'
import SourceImageStatic from './SourceImageStatic.vue'
import SourceWMTS from './SourceWMTS.vue'
import SourceVector from './SourceVector.vue'
import SourceCluster from './SourceCluster.vue'

function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(SourceXYZ.name, SourceXYZ)
    app.component(SourceOSM.name, SourceOSM)
    app.component(SourceImageStatic.name, SourceImageStatic)
    app.component(SourceWMTS.name, SourceWMTS)
    app.component(SourceVector.name, SourceVector)
    app.component(SourceCluster.name, SourceCluster)
  }
  
  export default install
  
  export {
    install,
    SourceXYZ,
    SourceOSM,
    SourceImageStatic,
    SourceWMTS,
    SourceVector,
    SourceCluster
  }