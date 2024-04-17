import type { App } from "vue";
import OlAttributionControl from "./OlAttributionControl.vue";
import OlButtonControl from "./OlButtonControl.vue";
import OlContextMenuControl from "./OlContextMenuControl.vue";
import OlControlBar from "./OlControlBar.vue";
import OlFullscreenControl from "./OlFullscreenControl.vue";
import OlLayerswitcherControl from "./OlLayerswitcherControl.vue";
import OlLayerswitcherimageControl from "./OlLayerswitcherimageControl.vue";
import OlMousepositionControl from "./OlMousepositionControl.vue";
import OlOverviewmapControl from "./OlOverviewmapControl.vue";
import OlPrintdialogControl from "./OlPrintdialogControl.vue";
import OlProfileControl from "./OlProfileControl.vue";
import OlRotateControl from "./OlRotateControl.vue";
import OlScalelineControl from "./OlScalelineControl.vue";
import OlSearchControl from "./OlSearchControl.vue";
import OlSwipeControl from "./OlSwipeControl.vue";
import OlToggleControl from "./OlToggleControl.vue";
import OlVideorecorderControl from "./OlVideorecorderControl.vue";
import OlZoneControl from "./OlZoneControl.vue";
import OlZoomControl from "./OlZoomControl.vue";
import OlZoomsliderControl from "./OlZoomsliderControl.vue";
import OlZoomtoextentControl from "./OlZoomtoextentControl.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlAttributionControl", OlAttributionControl);
  app.component("OlFullscreenControl", OlFullscreenControl);
  app.component("OlMousepositionControl", OlMousepositionControl);
  app.component("OlOverviewmapControl", OlOverviewmapControl);
  app.component("OlScalelineControl", OlScalelineControl);
  app.component("OlZoomControl", OlZoomControl);
  app.component("OlZoomsliderControl", OlZoomsliderControl);
  app.component("OlZoomtoextentControl", OlZoomtoextentControl);
  app.component("OlRotateControl", OlRotateControl);
  app.component("OlContextMenuControl", OlContextMenuControl);
  app.component("OlSearchControl", OlSearchControl);
  app.component("OlSwipeControl", OlSwipeControl);
  app.component("OlControlBar", OlControlBar);
  app.component("OlToggleControl", OlToggleControl);
  app.component("OlButtonControl", OlButtonControl);
  app.component("OlPrintdialogControl", OlPrintdialogControl);
  app.component("OlProfileControl", OlProfileControl);
  app.component("OlVideorecorderControl", OlVideorecorderControl);
  app.component("OlLayerswitcherControl", OlLayerswitcherControl);
  app.component("OlLayerswitcherimageControl", OlLayerswitcherimageControl);
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
  OlFullscreenControl,
  OlLayerswitcherControl,
  OlLayerswitcherimageControl,
  OlMousepositionControl,
  OlOverviewmapControl,
  OlPrintdialogControl,
  OlProfileControl,
  OlRotateControl,
  OlScalelineControl,
  OlSearchControl,
  OlSwipeControl,
  OlToggleControl,
  OlVideorecorderControl,
  OlZoneControl,
  OlZoomControl,
  OlZoomsliderControl,
  OlZoomtoextentControl,
};
