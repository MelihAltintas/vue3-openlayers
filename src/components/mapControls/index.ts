import type { App } from "vue";
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
import OlProfileControl from "./OlProfileControl.vue";
import OlRotateControl from "./OlRotateControl.vue";
import OlScaleLineControl from "./OlScaleLineControl.vue";
import OlSearchControl from "./OlSearchControl.vue";
import OlSwipeControl from "./OlSwipeControl.vue";
import OlToggleControl from "./OlToggleControl.vue";
import OlVideoRecorderControl from "./OlVideoRecorderControl.vue";
import OlZoneControl from "./OlZoneControl.vue";
import OlZoomControl from "./OlZoomControl.vue";
import OlZoomSliderControl from "./OlZoomSliderControl.vue";
import OlZoomToExtentControl from "./OlZoomToExtentControl.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlAttributionControl", OlAttributionControl);
  app.component("OlFullScreenControl", OlFullScreenControl);
  app.component("OlMousePositionControl", OlMousePositionControl);
  app.component("OlOverviewMapControl", OlOverviewMapControl);
  app.component("OlScaleLineControl", OlScaleLineControl);
  app.component("OlZoomControl", OlZoomControl);
  app.component("OlZoomSliderControl", OlZoomSliderControl);
  app.component("OlZoomToExtentControl", OlZoomToExtentControl);
  app.component("OlRotateControl", OlRotateControl);
  app.component("OlContextMenuControl", OlContextMenuControl);
  app.component("OlSearchControl", OlSearchControl);
  app.component("OlSwipeControl", OlSwipeControl);
  app.component("OlControlBar", OlControlBar);
  app.component("OlToggleControl", OlToggleControl);
  app.component("OlButtonControl", OlButtonControl);
  app.component("OlPrintDialogControl", OlPrintDialogControl);
  app.component("OlProfileControl", OlProfileControl);
  app.component("OlVideoRecorderControl", OlVideoRecorderControl);
  app.component("OlLayerSwitcherControl", OlLayerSwitcherControl);
  app.component("OlLayerSwitcherImageControl", OlLayerSwitcherImageControl);
  app.component("OlZoneControl", OlZoneControl);

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
  OlProfileControl,
  OlRotateControl,
  OlScaleLineControl,
  OlSearchControl,
  OlSwipeControl,
  OlToggleControl,
  OlVideoRecorderControl,
  OlZoneControl,
  OlZoomControl,
  OlZoomSliderControl,
  OlZoomToExtentControl,
};
