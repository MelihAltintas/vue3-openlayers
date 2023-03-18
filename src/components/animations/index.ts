import type { App } from 'vue'
import OlFeatureAnimation from './OlFeatureAnimation.vue'
import OlAnimationDrop from './OlAnimationDrop.vue'
import OlAnimationShake from './OlAnimationShake.vue'
import OlAnimationZoom from './OlAnimationZoom.vue'
import OlAnimationTeleport from './OlAnimationTeleport.vue'
import OlAnimationFade from './OlAnimationFade.vue'
import OlAnimationSlide from './OlAnimationSlide.vue'
import OlAnimationPath from './OlAnimationPath.vue'

let installed = false

function install(app: App) {
  if (installed) return
  installed = true

  app.component('OlFeatureAnimation', OlFeatureAnimation)
  app.component('OlAnimationDrop', OlAnimationDrop)
  app.component('OlAnimationShake', OlAnimationShake)
  app.component('OlAnimationZoom', OlAnimationZoom)
  app.component('OlAnimationTeleport', OlAnimationTeleport)
  app.component('OlAnimationFade', OlAnimationFade)
  app.component('OlAnimationSlide', OlAnimationSlide)
  app.component('OlAnimationPath', OlAnimationPath)
}

export default install

export {
  install,
  OlFeatureAnimation,
  OlAnimationDrop,
  OlAnimationShake,
  OlAnimationZoom,
  OlAnimationTeleport,
  OlAnimationFade,
  OlAnimationSlide,
  OlAnimationPath,
}
