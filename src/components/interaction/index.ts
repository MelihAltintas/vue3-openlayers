import type { App } from "vue";
import OlClusterSelectInteraction from "./OlClusterSelectInteraction.vue";
import OlDragBoxInteraction from "./OlDragBoxInteraction.vue";
import OlDragRotateInteraction from "./OlDragRotateInteraction.vue";
import OlDragRotateZoomInteraction from "./OlDragRotateZoomInteraction.vue";
import OlLinktInteraction from "./OlLinktInteraction.vue";
import OlSelectInteraction from "./OlSelectInteraction.vue";
import OlDrawInteraction from "./OlDrawInteraction.vue";
import OlModifyInteraction from "./OlModifyInteraction.vue";
import OlSnapInteraction from "./OlSnapInteraction.vue";
import OlTransformInteraction from "./OlTransformInteraction.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlInteractionClusterselect", OlClusterSelectInteraction);
  app.component("OlInteractionDragbox", OlDragBoxInteraction);
  app.component("OlInteractionDragrotate", OlDragRotateInteraction);
  app.component("OlInteractionDragrotatezoom", OlDragRotateZoomInteraction);
  app.component("OlInteractionLink", OlLinktInteraction);
  app.component("OlInteractionSelect", OlSelectInteraction);
  app.component("OlInteractionDraw", OlDrawInteraction);
  app.component("OlInteractionModify", OlModifyInteraction);
  app.component("OlInteractionSnap", OlSnapInteraction);
  app.component("OlInteractionTransform", OlTransformInteraction);

  app.provide("ol-options", options);
}

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
}

export default install;

export {
  install,
  OlClusterSelectInteraction,
  OlDragBoxInteraction,
  OlDragRotateInteraction,
  OlDragRotateZoomInteraction,
  OlLinktInteraction,
  OlSelectInteraction,
  OlDrawInteraction,
  OlModifyInteraction,
  OlSnapInteraction,
  OlTransformInteraction,
};
