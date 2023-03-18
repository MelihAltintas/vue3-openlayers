import type { App } from 'vue'
import OlSourceXYZ from './OlSourceXYZ.vue'
import OlSourceOSM from './OlSourceOSM.vue'
import OlSourceImageStatic from './OlSourceImageStatic.vue'
import OlSourceWMTS from './OlSourceWMTS.vue'
import OlSourceVector from './OlSourceVector.vue'
import OlSourceCluster from './OlSourceCluster.vue'
import OlSourceBingMaps from './OlSourceBingMaps.vue'
import OlSourceTianDiTu from './OlSourceTianDiTu.vue'
import OlSourceImageWMS from './OlSourceImageWMS.vue'
import OlSourceWebglPoints from './OlSourceWebglPoints.vue'

let installed = false

function install(app: App) {
  if (installed) return
  installed = true
  app.component('OlSourceXYZ', OlSourceXYZ)
  app.component('OlSourceOSM', OlSourceOSM)
  app.component('OlSourceImageStatic', OlSourceImageStatic)
  app.component('OlSourceWMTS', OlSourceWMTS)
  app.component('OlSourceVector', OlSourceVector)
  app.component('OlSourceCluster', OlSourceCluster)
  app.component('OlSourceBingMaps', OlSourceBingMaps)
  app.component('OlSourceTianDiTu', OlSourceTianDiTu)
  app.component('OlSourceImageWMS', OlSourceImageWMS)
  app.component('OlSourceWebglPoints', OlSourceWebglPoints)
}

export default install

export {
  install,
  OlSourceXYZ,
  OlSourceOSM,
  OlSourceImageStatic,
  OlSourceWMTS,
  OlSourceVector,
  OlSourceCluster,
  OlSourceTianDiTu,
  OlSourceImageWMS,
  OlSourceWebglPoints,
  OlSourceBingMaps,
}
