import type { App } from "vue";
import OlInteractionClusterselect from "./OlInteractionClusterselect.vue";
import OlInteractionDragbox from "./OlInteractionDragbox.vue";
import OlInteractionDragrotate from "./OlInteractionDragrotate.vue";
import OlInteractionDragrotatezoom from "./OlInteractionDragrotatezoom.vue";
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
  app.component("OlInteractionClusterselect", OlInteractionClusterselect);
  app.component("OlInteractionDragbox", OlInteractionDragbox);
  app.component("OlInteractionDragrotate", OlInteractionDragrotate);
  app.component("OlInteractionDragrotatezoom", OlInteractionDragrotatezoom);
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
  OlInteractionClusterselect,
  OlInteractionDragbox,
  OlInteractionDragrotate,
  OlInteractionDragrotatezoom,
  OlInteractionLink,
  OlInteractionSelect,
  OlInteractionDraw,
  OlInteractionModify,
  OlInteractionPointer,
  OlInteractionSnap,
  OlInteractionTransform,
  OlInteractionMouseWheelZoom,
};
