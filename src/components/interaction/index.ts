import type { App } from "vue";
import OlInteractionClusterSelect from "./OlInteractionClusterSelect.vue";
import OlInteractionDragBox from "./OlInteractionDragBox.vue";
import OlInteractionDragRotate from "./OlInteractionDragRotate.vue";
import OlInteractionDragRotateAndZoom from "./OlInteractionDragRotateAndZoom.vue";
import OlInteractionLink from "./OlInteractionLink.vue";
import OlInteractionSelect from "./OlInteractionSelect.vue";
import OlInteractionDraw from "./OlInteractionDraw.vue";
import OlInteractionModify from "./OlInteractionModify.vue";
import OlInteractionPointer from "./OlInteractionPointer.vue";
import OlInteractionSnap from "./OlInteractionSnap.vue";
import OlInteractionTransform from "./OlInteractionTransform.vue";
import OlInteractionMouseWheelZoom from "./OlInteractionMouseWheelZoom.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlInteractionClusterSelect", OlInteractionClusterSelect);
  app.component("OlInteractionDragBox", OlInteractionDragBox);
  app.component("OlInteractionDragAndRotate", OlInteractionDragRotate);
  app.component(
    "OlInteractionDragRotateAndZoom",
    OlInteractionDragRotateAndZoom,
  );
  app.component("OlInteractionLink", OlInteractionLink);
  app.component("OlInteractionSelect", OlInteractionSelect);
  app.component("OlInteractionDraw", OlInteractionDraw);
  app.component("OlInteractionModify", OlInteractionModify);
  app.component("OlInteractionPointer", OlInteractionPointer);
  app.component("OlInteractionSnap", OlInteractionSnap);
  app.component("OlInteractionTransform", OlInteractionTransform);
  app.component("OlInteractionMouseWheelZoom", OlInteractionMouseWheelZoom);

  if (options) {
    app.provide("ol-options", options);
  }
}

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
}

export default install;

export {
  install,
  OlInteractionClusterSelect,
  OlInteractionDragBox,
  OlInteractionDragRotate,
  OlInteractionDragRotateAndZoom,
  OlInteractionLink,
  OlInteractionSelect,
  OlInteractionDraw,
  OlInteractionModify,
  OlInteractionPointer,
  OlInteractionSnap,
  OlInteractionTransform,
  OlInteractionMouseWheelZoom,
};
