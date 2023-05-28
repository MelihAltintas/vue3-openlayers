import OlStyle from "./OlStyle.vue";
import OlStyleCircle from "./OlStyleCircle.vue";
import OlStyleStroke from "./OlStyleStroke.vue";
import OlStyleFill from "./OlStyleFill.vue";
import Icon from "./Icon.vue";
import Text from "./Text.vue";
import FlowLine from "./FlowLine.vue";

function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-style", OlStyle);
  app.component("ol-style-circle", OlStyleCircle);
  app.component("ol-style-stroke", OlStyleStroke);
  app.component("ol-style-fill", OlStyleFill);
  app.component(Icon.name, Icon);
  app.component(Text.name, Text);
  app.component(FlowLine.name, FlowLine);
}

export default install;

export {
  install,
  OlStyle,
  OlStyleStroke,
  OlStyleFill,
  Icon,
  Text,
  FlowLine,
  OlStyleCircle,
};
