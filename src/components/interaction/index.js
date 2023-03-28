import SelectInteraction from "./SelectInteraction.vue";
import ClusterSelectInteraction from "./ClusterSelectInteraction.vue";
import DrawInteraction from "./DrawInteraction.vue";
import SnapInteraction from "./SnapInteraction.vue";
import ModifyInteraction from "./ModifyInteraction.vue";
import TransformInteraction from "./TransformInteraction.vue";
import DragRotateAndZoomInteraction from "./DragRotateAndZoomInteraction.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component(SelectInteraction.name, SelectInteraction);
  app.component(ClusterSelectInteraction.name, ClusterSelectInteraction);
  app.component(DrawInteraction.name, DrawInteraction);
  app.component(SnapInteraction.name, SnapInteraction);
  app.component(ModifyInteraction.name, ModifyInteraction);
  app.component(TransformInteraction.name, TransformInteraction);
  app.component(
    DragRotateAndZoomInteraction.name,
    DragRotateAndZoomInteraction
  );
}

export default install;

export {
  install,
  SelectInteraction,
  ClusterSelectInteraction,
  DrawInteraction,
  SnapInteraction,
  ModifyInteraction,
  TransformInteraction,
  DragRotateAndZoomInteraction,
};
