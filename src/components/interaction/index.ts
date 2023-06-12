import type { App } from "vue";
import OlClusterSelectInteraction from "./OlClusterSelectInteraction.vue";
import OlDragRotateInteraction from "./OlDragRotateInteraction.vue";
import OlDragRotateZoomInteraction from "./OlDragRotateZoomInteraction.vue";
import OlSelectInteraction from "./OlSelectInteraction.vue";
import OlDrawInteraction from "./OlDrawInteraction.vue";
import OlModifyInteraction from "./OlModifyInteraction.vue";
import OlSnapInteraction from "./OlSnapInteraction.vue";
import OlTransformInteraction from "./OlTransformInteraction.vue";

let installed = false;

function install(app: App) {
  if (installed) return;
  installed = true;

  app.component("ol-interaction-clusterselect", OlClusterSelectInteraction);
  app.component("ol-interaction-dragrotate", OlDragRotateInteraction);
  app.component("ol-interaction-dragrotatezoom", OlDragRotateZoomInteraction);
  app.component("ol-interaction-select", OlSelectInteraction);
  app.component("ol-interaction-draw", OlDrawInteraction);
  app.component("ol-interaction-modify", OlModifyInteraction);
  app.component("ol-interaction-snap", OlSnapInteraction);
  app.component("ol-interaction-transform", OlTransformInteraction);
}

export default install;

export {
  install,
  OlClusterSelectInteraction,
  OlDragRotateInteraction,
  OlDragRotateZoomInteraction,
  OlSelectInteraction,
  OlDrawInteraction,
  OlModifyInteraction,
  OlSnapInteraction,
  OlTransformInteraction,
};
