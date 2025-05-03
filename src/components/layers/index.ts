import {
  layersCommonDefaultProps,
  useDefaults as useLayerDefaults,
} from "./LayersCommonProps";

import type { App } from "vue";
import OlAnimatedClusterlayer from "./OlAnimatedClusterlayer.vue";
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

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("OlAnimatedClusterlayer", OlAnimatedClusterlayer);
  app.component("OlHeatmapLayer", OlHeatmapLayer);
  app.component("OlImageLayer", OlImageLayer);
  app.component("OlLayerGroup", OlLayerGroup);
  app.component("OlTileLayer", OlTileLayer);
  app.component("OlVectorImageLayer", OlVectorImageLayer);
  app.component("OlVectorLayer", OlVectorLayer);
  app.component("OlVectorTileLayer", OlVectorTileLayer);
  app.component("OlWebglTileLayer", OlWebglTileLayer);
  app.component("OlWebglVectorLayer", OlWebglVectorLayer);

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
  OlAnimatedClusterlayer,
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
