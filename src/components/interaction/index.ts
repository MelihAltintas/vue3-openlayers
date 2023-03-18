import type { App } from 'vue'
import OlInteractionSelect from './OlInteractionSelect.vue'
import OlInteractionClusterSelect from './OlInteractionClusterSelect.vue'
import OlInteractionDraw from './OlInteractionDraw.vue'
import OlInteractionSnap from './OlInteractionSnap.vue'
import OlInteractionModify from './OlInteractionModify.vue'
import OlInteractionTransform from './OlInteractionTransform.vue'
import OlInteractionDragRotateZoom from './OlInteractionDragRotateZoom.vue'

let installed = false

function install(app: App) {
  if (installed) return
  installed = true

  app.component('OlInteractionSelect', OlInteractionSelect)
  app.component('OlInteractionClusterSelect', OlInteractionClusterSelect)
  app.component('OlInteractionDraw', OlInteractionDraw)
  app.component('OlInteractionSnap', OlInteractionSnap)
  app.component('OlInteractionModify', OlInteractionModify)
  app.component('OlInteractionTransform', OlInteractionTransform)
  app.component('OlInteractionDragRotateZoom', OlInteractionDragRotateZoom)
}

export default install

export {
  install,
  OlInteractionSelect,
  OlInteractionClusterSelect,
  OlInteractionDraw,
  OlInteractionSnap,
  OlInteractionModify,
  OlInteractionTransform,
  OlInteractionDragRotateZoom,
}
