import {
  layersCommonDefaultProps,
  useDefaults as useLayerDefaults,
} from "./LayersCommonProps";

import type { App } from "vue";
import OlAnimatedClusterLayer from "./OlAnimatedClusterLayer.vue";
import OlHeatmapLayer from "./OlHeatmapLayer.vue";
import OlImageLayer from "./OlImageLayer.vue";
import OlLayerGroup from "./OlLayerGroup.vue";
import OlTileLayer from "./OlTileLayer.vue";
import OlVectorLayer from "./OlVectorLayer.vue";
import OlVectorTileLayer from "./OlVectorTileLayer.vue";
import OlVectorImageLayer from "./OlVectorImageLayer.vue";
import OlWebglTileLayer from "./OlWebglTileLayer.vue";
import OlWebglVectorLayer from "./OlWebglVectorLayer.vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";
import type { LayersCommonProps } from "./LayersCommonProps";
import { registerWithAliases } from "../registerWithAliases";

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  registerWithAliases(app, "OlAnimatedClusterLayer", OlAnimatedClusterLayer);
  registerWithAliases(app, "OlHeatmapLayer", OlHeatmapLayer);
  registerWithAliases(app, "OlImageLayer", OlImageLayer);
  registerWithAliases(app, "OlLayerGroup", OlLayerGroup);
  registerWithAliases(app, "OlTileLayer", OlTileLayer);
  registerWithAliases(app, "OlVectorImageLayer", OlVectorImageLayer);
  registerWithAliases(app, "OlVectorLayer", OlVectorLayer);
  registerWithAliases(app, "OlVectorTileLayer", OlVectorTileLayer);
  registerWithAliases(app, "OlWebglTileLayer", OlWebglTileLayer);
  registerWithAliases(app, "OlWebglVectorLayer", OlWebglVectorLayer);

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
  OlAnimatedClusterLayer,
  OlHeatmapLayer,
  OlImageLayer,
  OlLayerGroup,
  OlTileLayer,
  OlVectorImageLayer,
  OlVectorLayer,
  OlVectorTileLayer,
  OlWebglTileLayer,
  OlWebglVectorLayer,
  type LayersCommonProps,
  layersCommonDefaultProps,
  useLayerDefaults,
};
