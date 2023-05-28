import OlClusterSelectInteraction from "./OlClusterSelectInteraction.vue";
import OlDragRotateInteraction from "./OlDragRotateInteraction.vue";
import OlDragRotateZoomInteraction from "./OlDragRotateZoomInteraction.vue";
import SelectInteraction from "./SelectInteraction.vue";
import DrawInteraction from "./DrawInteraction.vue";
import SnapInteraction from "./SnapInteraction.vue";
import ModifyInteraction from "./ModifyInteraction.vue";
import TransformInteraction from "./TransformInteraction.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-interaction-clusterselect", OlClusterSelectInteraction);
  app.component("ol-interaction-dragrotate", OlDragRotateInteraction);
  app.component("ol-interaction-dragrotatezoom", OlDragRotateZoomInteraction);
  app.component(SelectInteraction.name, SelectInteraction);
  app.component(DrawInteraction.name, DrawInteraction);
  app.component(SnapInteraction.name, SnapInteraction);
  app.component(ModifyInteraction.name, ModifyInteraction);
  app.component(TransformInteraction.name, TransformInteraction);
}

export default install;

export {
  install,
  OlClusterSelectInteraction,
  OlDragRotateInteraction,
  OlDragRotateZoomInteraction,
  SelectInteraction,
  DrawInteraction,
  SnapInteraction,
  ModifyInteraction,
  TransformInteraction,
};
