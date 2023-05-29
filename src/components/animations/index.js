import OLAnimationDrop from "./OLAnimationDrop.vue";
import OlAnimationFade from "./OlAnimationFade.vue";
import OlAnimationFeature from "./OlAnimationFeature.vue";
import OlAnimationPath from "./OlAnimationPath.vue";
import OlAnimationShake from "./OlAnimationShake.vue";
import OlAnimationSlide from "./OlAnimationSlide.vue";
import OlAnimationTeleport from "./OlAnimationTeleport.vue";
import ZoomAnimation from "./ZoomAnimation.vue";

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
  app.component("ol-animation-slide", OlAnimationSlide);
  app.component("ol-animation-teleport", OlAnimationTeleport);
  app.component(ZoomAnimation.name, ZoomAnimation);
}

export default install;

export {
  install,
  OLAnimationDrop,
  OlAnimationFade,
  OlAnimationFeature,
  OlAnimationPath,
  OlAnimationShake,
  OlAnimationSlide,
  OlAnimationTeleport,
  ZoomAnimation,
};
