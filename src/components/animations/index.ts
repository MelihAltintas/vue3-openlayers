import type { App } from "vue";
import OLAnimationDrop from "./OlAnimationDrop.vue";
import OlAnimationFade from "./OlAnimationFade.vue";
import OlAnimationPath from "./OlAnimationPath.vue";
import OlAnimationShake from "./OlAnimationShake.vue";
import OlAnimationSlide from "./OlAnimationSlide.vue";
import OlAnimationTeleport from "./OlAnimationTeleport.vue";
import OlAnimationZoom from "./OlAnimationZoom.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlAnimationDrop", OLAnimationDrop);
  app.component("OlAnimationFade", OlAnimationFade);
  app.component("OlAnimationPath", OlAnimationPath);
  app.component("OlAnimationShake", OlAnimationShake);
  app.component("OlAnimationSlide", OlAnimationSlide);
  app.component("OlAnimationTeleport", OlAnimationTeleport);
  app.component("OlAnimationZoom", OlAnimationZoom);

  app.provide("ol-options", options);
}

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
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
