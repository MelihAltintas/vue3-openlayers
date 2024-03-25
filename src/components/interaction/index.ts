import type { App } from "vue";
import OlClusterSelectInteraction from "./OlClusterSelectInteraction.vue";
import OlDragBoxInteraction from "./OlDragBoxInteraction.vue";
import OlDragRotateInteraction from "./OlDragRotateInteraction.vue";
import OlDragRotateZoomInteraction from "./OlDragRotateZoomInteraction.vue";
import OlSelectInteraction from "./OlSelectInteraction.vue";
import OlDrawInteraction from "./OlDrawInteraction.vue";
import OlModifyInteraction from "./OlModifyInteraction.vue";
import OlSnapInteraction from "./OlSnapInteraction.vue";
import OlTransformInteraction from "./OlTransformInteraction.vue";

function install(app: App) {
  app.component("ol-interaction-clusterselect", OlClusterSelectInteraction);
  app.component("ol-interaction-dragbox", OlDragBoxInteraction);
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
  OlDragBoxInteraction,
  OlDragRotateInteraction,
  OlDragRotateZoomInteraction,
  OlSelectInteraction,
  OlDrawInteraction,
  OlModifyInteraction,
  OlSnapInteraction,
  OlTransformInteraction,
};
