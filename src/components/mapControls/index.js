import OlAttributionControl from "./OlAttributionControl.vue";
import OlButtonControl from "./OlButtonControl.vue";
import OlContextMenuControl from "./OlContextMenuControl.vue";
import OlControlBar from "./OlControlBar.vue";
import OlFullScreenControl from "./OlFullScreenControl.vue";
import OlLayerSwitcherControl from "./OlLayerSwitcherControl.vue";
import OlLayerSwitcherImageControl from "./OlLayerSwitcherImageControl.vue";
import OlMousePositionControl from "./OlMousePositionControl.vue";
import OlOverviewMapControl from "./OlOverviewMapControl.vue";
import OlPrintDialogControl from "./OlPrintDialogControl.vue";
import OlRotateControl from "./OlRotateControl.vue";
import OlScaleLineControl from "./OlScaleLineControl.vue";
import OlSwipeControl from "./OlSwipeControl.vue";
import OlToggleControl from "./OlToggleControl.vue";
import OlVideoRecorderControl from "./OlVideoRecorderControl.vue";
import OlZoneControl from "./OlZoneControl.vue";
import OlZoomControl from "./OlZoomControl.vue";
import OlZoomSliderControl from "./OlZoomSliderControl.vue";
import ZoomToExtentControl from "./ZoomToExtentControl.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-attribution-control", OlAttributionControl);
  app.component("ol-fullscreen-control", OlFullScreenControl);
  app.component("ol-mouseposition-control", OlMousePositionControl);
  app.component("ol-overviewmap-control", OlOverviewMapControl);
  app.component("ol-scaleline-control", OlScaleLineControl);
  app.component("ol-zoom-control", OlZoomControl);
  app.component("ol-zoomslider-control", OlZoomSliderControl);
  app.component(ZoomToExtentControl.name, ZoomToExtentControl);
  app.component("ol-rotate-control", OlRotateControl);
  app.component("ol-context-menu-control", OlContextMenuControl);
  app.component("ol-swipe-control", OlSwipeControl);
  app.component("ol-control-bar", OlControlBar);
  app.component("ol-toggle-control", OlToggleControl);
  app.component("ol-button-control", OlButtonControl);
  app.component("ol-printdialog-control", OlPrintDialogControl);
  app.component("ol-videorecorder-control", OlVideoRecorderControl);
  app.component("ol-layerswitcher-control", OlLayerSwitcherControl);
  app.component("ol-layerswitcherimage-control", OlLayerSwitcherImageControl);
  app.component("ol-zone-control", OlZoneControl);
}

export default install;

export {
  install,
  OlAttributionControl,
  OlButtonControl,
  OlContextMenuControl,
  OlControlBar,
  OlFullScreenControl,
  OlLayerSwitcherControl,
  OlLayerSwitcherImageControl,
  OlMousePositionControl,
  OlOverviewMapControl,
  OlPrintDialogControl,
  OlRotateControl,
  OlScaleLineControl,
  OlSwipeControl,
  OlToggleControl,
  OlVideoRecorderControl,
  OlZoneControl,
  OlZoomControl,
  OlZoomSliderControl,
  ZoomToExtentControl,
};
