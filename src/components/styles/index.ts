import type { App } from "vue";
import OlStyle from "./OlStyle.vue";
import OlStyleCircle from "./OlStyleCircle.vue";
import OlStyleRegularShape from "./OlStyleRegularShape.vue";
import OlStyleStroke from "./OlStyleStroke.vue";
import OlStyleFill from "./OlStyleFill.vue";
import OlStyleIcon from "./OlStyleIcon.vue";
import OlStyleText from "./OlStyleText.vue";
import OlStyleFlowline from "./OlStyleFlowline.vue";
import type { FeatureLike } from "ol/Feature";
import type { Style } from "ol/style";

type OverrideStyleFunction = (
  feature: FeatureLike,
  currentStyle: Style,
  resolution: number,
) => Style | Style[] | void;

function install(app: App) {
  app.component("ol-style", OlStyle);
  app.component("ol-style-circle", OlStyleCircle);
  app.component("ol-style-regular-shape", OlStyleRegularShape);
  app.component("ol-style-stroke", OlStyleStroke);
  app.component("ol-style-fill", OlStyleFill);
  app.component("ol-style-icon", OlStyleIcon);
  app.component("ol-style-text", OlStyleText);
  app.component("ol-style-flowline", OlStyleFlowline);
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
  OlStyleRegularShape,
  type OverrideStyleFunction,
};
