import OlClusterSelectInteraction from "./OlClusterSelectInteraction.vue";
import OlDragRotateInteraction from "./OlDragRotateInteraction.vue";
import OlDragRotateZoomInteraction from "./OlDragRotateZoomInteraction.vue";
import OlSelectInteraction from "./OlSelectInteraction.vue";
import OlDrawInteraction from "./OlDrawInteraction.vue";
import OlModifyInteraction from "./OlModifyInteraction.vue";
import SnapInteraction from "./SnapInteraction.vue";
import TransformInteraction from "./TransformInteraction.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-interaction-clusterselect", OlClusterSelectInteraction);
  app.component("ol-interaction-dragrotate", OlDragRotateInteraction);
  app.component("ol-interaction-dragrotatezoom", OlDragRotateZoomInteraction);
  app.component("ol-interaction-select", OlSelectInteraction);
  app.component("ol-interaction-draw", OlDrawInteraction);
  app.component("ol-interaction-modify", OlModifyInteraction);
  app.component(SnapInteraction.name, SnapInteraction);
  app.component(TransformInteraction.name, TransformInteraction);
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
  SnapInteraction,
  TransformInteraction,
};
