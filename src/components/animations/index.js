import FeatureAnimation from "./FeatureAnimation.vue";

import OLAnimationDrop from "./OLAnimationDrop.vue";
import OlAnimationFade from "./OlAnimationFade.vue";
import ShakeAnimation from "./ShakeAnimation.vue";
import ZoomAnimation from "./ZoomAnimation.vue";
import TeleportAnimation from "./TeleportAnimation.vue";
import SlideAnimation from "./SlideAnimation.vue";
import PathAnimation from "./PathAnimation.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-animation-drop", OLAnimationDrop);
  app.component("ol-animation-fade", OlAnimationFade);
  app.component(FeatureAnimation.name, FeatureAnimation);
  app.component(ShakeAnimation.name, ShakeAnimation);
  app.component(ZoomAnimation.name, ZoomAnimation);
  app.component(TeleportAnimation.name, TeleportAnimation);
  app.component(SlideAnimation.name, SlideAnimation);
  app.component(PathAnimation.name, PathAnimation);
}

export default install;

export {
  install,
  OLAnimationDrop,
  OlAnimationFade,
  FeatureAnimation,
  ShakeAnimation,
  ZoomAnimation,
  TeleportAnimation,
  PathAnimation,
  SlideAnimation,
};
