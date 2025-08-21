import type { App } from "vue";
import OlStyle from "./OlStyle.vue";
import OlStyleCircle from "./OlStyleCircle.vue";
import OlStyleStroke from "./OlStyleStroke.vue";
import OlStyleFill from "./OlStyleFill.vue";
import OlStyleIcon from "./OlStyleIcon.vue";
import OlStyleText from "./OlStyleText.vue";
import OlStyleFlowLine from "./OlStyleFlowLine.vue";
import type { FeatureLike } from "ol/Feature";
import type { Style } from "ol/style";
import type { Vue3OpenlayersGlobalOptions } from "@/types";
import type {
  Gradient,
  ConicGradient,
  RadialGradient,
  LinearGradient,
} from "./OlStyleFill.vue";
import { registerWithAliases } from "../registerWithAliases";

type OverrideStyleFunction = (
  feature: FeatureLike,
  currentStyle: Style,
  resolution: number,
) => Style | Style[] | void;

function install(app: App, options?: Vue3OpenlayersGlobalOptions) {
  registerWithAliases(app, "OlStyle", OlStyle);
  registerWithAliases(app, "OlStyleCircle", OlStyleCircle);
  registerWithAliases(app, "OlStyleStroke", OlStyleStroke);
  registerWithAliases(app, "OlStyleFill", OlStyleFill);
  registerWithAliases(app, "OlStyleIcon", OlStyleIcon);
  registerWithAliases(app, "OlStyleText", OlStyleText);
  registerWithAliases(app, "OlStyleFlowLine", OlStyleFlowLine);

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
  OlStyle,
  OlStyleStroke,
  OlStyleFill,
  OlStyleIcon,
  OlStyleText,
  OlStyleFlowLine,
  OlStyleCircle,
  type OverrideStyleFunction,
  type Gradient,
  type ConicGradient,
  type RadialGradient,
  type LinearGradient,
};
