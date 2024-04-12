import type { App } from "vue";
import OLAnimationDrop from "./OlAnimationDrop.vue";
import OlAnimationFade from "./OlAnimationFade.vue";
import OlAnimationPath from "./OlAnimationPath.vue";
import OlAnimationShake from "./OlAnimationShake.vue";
import OlAnimationSlide from "./OlAnimationSlide.vue";
import OlAnimationTeleport from "./OlAnimationTeleport.vue";
import OlAnimationZoom from "./OlAnimationZoom.vue";

function install(app: App) {
  app.component("ol-animation-drop", OLAnimationDrop);
  app.component("ol-animation-fade", OlAnimationFade);
  app.component("ol-animation-path", OlAnimationPath);
  app.component("ol-animation-shake", OlAnimationShake);
  app.component("ol-animation-slide", OlAnimationSlide);
  app.component("ol-animation-teleport", OlAnimationTeleport);
  app.component("ol-animation-zoom", OlAnimationZoom);
}

export default install;

export {
  install,
  OLAnimationDrop,
  OlAnimationFade,
  OlAnimationPath,
  OlAnimationShake,
  OlAnimationSlide,
  OlAnimationTeleport,
  OlAnimationZoom,
};
