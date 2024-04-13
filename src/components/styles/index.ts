import type { App } from "vue";
import OlStyle from "./OlStyle.vue";
import OlStyleCircle from "./OlStyleCircle.vue";
import OlStyleStroke from "./OlStyleStroke.vue";
import OlStyleFill from "./OlStyleFill.vue";
import OlStyleIcon from "./OlStyleIcon.vue";
import OlStyleText from "./OlStyleText.vue";
import OlStyleFlowline from "./OlStyleFlowline.vue";
import type { FeatureLike } from "ol/Feature";
import type { Style } from "ol/style";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

type OverrideStyleFunction = (
  feature: FeatureLike,
  currentStyle: Style,
  resolution: number,
) => Style | Style[] | void;

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  app.component("ol-style", OlStyle);
  app.component("ol-style-circle", OlStyleCircle);
  app.component("ol-style-stroke", OlStyleStroke);
  app.component("ol-style-fill", OlStyleFill);
  app.component("ol-style-icon", OlStyleIcon);
  app.component("ol-style-text", OlStyleText);
  app.component("ol-style-flowline", OlStyleFlowline);

  app.provide("ol-options", options);
}

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
}

export default install;

export {
  install,
  OlStyle,
  OlStyleStroke,
  OlStyleFill,
  OlStyleIcon,
  OlStyleText,
  OlStyleFlowline,
  OlStyleCircle,
  type OverrideStyleFunction,
};
