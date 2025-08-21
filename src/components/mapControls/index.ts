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
import { registerWithAliases } from "../registerWithAliases";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  registerWithAliases(app, "OlAttributionControl", OlAttributionControl);
  registerWithAliases(app, "OlFullScreenControl", OlFullScreenControl);
  registerWithAliases(app, "OlMousePositionControl", OlMousePositionControl);
  registerWithAliases(app, "OlOverviewMapControl", OlOverviewMapControl);
  registerWithAliases(app, "OlScaleLineControl", OlScaleLineControl);
  registerWithAliases(app, "OlZoomControl", OlZoomControl);
  registerWithAliases(app, "OlZoomSliderControl", OlZoomSliderControl);
  registerWithAliases(app, "OlZoomToExtentControl", OlZoomToExtentControl);
  registerWithAliases(app, "OlRotateControl", OlRotateControl);
  registerWithAliases(app, "OlContextMenuControl", OlContextMenuControl);
  registerWithAliases(app, "OlSearchControl", OlSearchControl);
  registerWithAliases(app, "OlSwipeControl", OlSwipeControl);
  registerWithAliases(app, "OlControlBar", OlControlBar);
  registerWithAliases(app, "OlToggleControl", OlToggleControl);
  registerWithAliases(app, "OlButtonControl", OlButtonControl);
  registerWithAliases(app, "OlPrintDialogControl", OlPrintDialogControl);
  registerWithAliases(app, "OlProfileControl", OlProfileControl);
  registerWithAliases(app, "OlVideoRecorderControl", OlVideoRecorderControl);
  registerWithAliases(app, "OlLayerSwitcherControl", OlLayerSwitcherControl);
  registerWithAliases(
    app,
    "OlLayerSwitcherImageControl",
    OlLayerSwitcherImageControl,
  );
  registerWithAliases(app, "OlZoneControl", OlZoneControl);

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
