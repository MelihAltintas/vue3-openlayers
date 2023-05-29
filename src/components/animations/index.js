import OLAnimationDrop from "./OLAnimationDrop.vue";
import OlAnimationFade from "./OlAnimationFade.vue";
import OlAnimationFeature from "./OlAnimationFeature.vue";
import OlAnimationPath from "./OlAnimationPath.vue";
import OlAnimationShake from "./OlAnimationShake.vue";
import ZoomAnimation from "./ZoomAnimation.vue";
import TeleportAnimation from "./TeleportAnimation.vue";
import SlideAnimation from "./SlideAnimation.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-animation-drop", OLAnimationDrop);
  app.component("ol-animation-fade", OlAnimationFade);
  app.component("ol-animation-feature", OlAnimationFeature);
  app.component("ol-animation-path", OlAnimationPath);
  app.component("ol-animation-shake", OlAnimationShake);
  app.component(ZoomAnimation.name, ZoomAnimation);
  app.component(TeleportAnimation.name, TeleportAnimation);
  app.component(SlideAnimation.name, SlideAnimation);
}

export default install;

export {
  install,
  OLAnimationDrop,
  OlAnimationFade,
  OlAnimationFeature,
  OlAnimationPath,
  OlAnimationShake,
  ZoomAnimation,
  TeleportAnimation,
  SlideAnimation,
};
