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
  app.component("OlFullscreenControl", OlFullScreenControl);
  app.component("OlMousepositionControl", OlMousePositionControl);
  app.component("OlOverviewmapControl", OlOverviewMapControl);
  app.component("OlScalelineControl", OlScaleLineControl);
  app.component("OlZoomControl", OlZoomControl);
  app.component("OlZoomsliderControl", OlZoomSliderControl);
  app.component("OlZoomtoextentControl", OlZoomToExtentControl);
  app.component("OlRotateControl", OlRotateControl);
  app.component("OlContextMenuControl", OlContextMenuControl);
  app.component("OlSearchControl", OlSearchControl);
  app.component("OlSwipeControl", OlSwipeControl);
  app.component("OlControlBar", OlControlBar);
  app.component("OlToggleControl", OlToggleControl);
  app.component("OlButtonControl", OlButtonControl);
  app.component("OlPrintdialogControl", OlPrintDialogControl);
  app.component("OlProfileControl", OlProfileControl);
  app.component("OlVideorecorderControl", OlVideoRecorderControl);
  app.component("OlLayerswitcherControl", OlLayerSwitcherControl);
  app.component("OlLayerswitcherimageControl", OlLayerSwitcherImageControl);
  app.component("OlZoneControl", OlZoneControl);

  app.provide("ol-options", options);
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
