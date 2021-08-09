import FeatureAnimation from './FeatureAnimation.vue'

import DropAnimation from './DropAnimation.vue'
import ShakeAnimation from './ShakeAnimation.vue'
import ZoomAnimation from './ZoomAnimation.vue'
import TeleportAnimation from './TeleportAnimation.vue'
import FadeAnimation from './FadeAnimation.vue'
import SlideAnimation from './SlideAnimation.vue'
function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(FeatureAnimation.name, FeatureAnimation)
    app.component(DropAnimation.name, DropAnimation)
    app.component(ShakeAnimation.name, ShakeAnimation)
    app.component(ZoomAnimation.name, ZoomAnimation)
    app.component(TeleportAnimation.name, TeleportAnimation)
    app.component(FadeAnimation.name, FadeAnimation)
    app.component(SlideAnimation.name, SlideAnimation)
  }
  
  export default install
  
  export {
    install,
    FeatureAnimation,
    DropAnimation,
    ShakeAnimation,
    ZoomAnimation,
    TeleportAnimation,
    FadeAnimation
  }