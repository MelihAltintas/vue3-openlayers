import FullScreenControl from "./FullScreenControl.vue";
import MousePositionControl from "./MousePositionControl.vue";
import AttributionControl from "./AttributionControl.vue";
import OverviewMapControl from "./OverviewMapControl.vue";
import ScaleLineControl from "./ScaleLineControl.vue";
import ZoomControl from "./ZoomControl.vue";
import ZoomSliderControl from "./ZoomSliderControl.vue";
import ZoomToExtentControl from "./ZoomToExtentControl.vue";
import RotateControl from "./RotateControl.vue";
import ContextMenuControl from "./ContextMenuControl.vue";
import SwipeControl from "./SwipeControl.vue";
import ControlBar from "./ControlBar.vue";
import ToggleControl from "./ToggleControl.vue";
import ButtonControl from "./ButtonControl.vue";
import PrintDialog from "./PrintDialog.vue";
import VideoRecorderControl from "./VideoRecorderControl.vue";
import LayerSwitcherControl from "./LayerSwitcherControl.vue";
import LayerSwitcherImageControl from "./LayerSwitcherImageControl.vue";
import ZoneControl from "./ZoneControl.vue";
function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component(FullScreenControl.name, FullScreenControl);
  app.component(MousePositionControl.name, MousePositionControl);
  app.component(AttributionControl.name, AttributionControl);
  app.component(OverviewMapControl.name, OverviewMapControl);
  app.component(ScaleLineControl.name, ScaleLineControl);
  app.component(ZoomControl.name, ZoomControl);
  app.component(ZoomSliderControl.name, ZoomSliderControl);
  app.component(ZoomToExtentControl.name, ZoomToExtentControl);
  app.component(RotateControl.name, RotateControl);
  app.component(ContextMenuControl.name, ContextMenuControl);
  app.component(SwipeControl.name, SwipeControl);
  app.component(ControlBar.name, ControlBar);
  app.component(ToggleControl.name, ToggleControl);
  app.component(ButtonControl.name, ButtonControl);
  app.component(PrintDialog.name, PrintDialog);
  app.component(VideoRecorderControl.name, VideoRecorderControl);
  app.component(LayerSwitcherControl.name, LayerSwitcherControl);
  app.component(LayerSwitcherImageControl.name, LayerSwitcherImageControl);
  app.component(ZoneControl.name, ZoneControl);
}

export default install;

export {
  install,
  FullScreenControl,
  MousePositionControl,
  AttributionControl,
  OverviewMapControl,
  ScaleLineControl,
  ZoomControl,
  ZoomSliderControl,
  ZoomToExtentControl,
  RotateControl,
  ContextMenuControl,
  SwipeControl,
  ControlBar,
  ToggleControl,
  ButtonControl,
  PrintDialog,
  VideoRecorderControl,
  LayerSwitcherControl,
  LayerSwitcherImageControl,
  ZoneControl,
};
