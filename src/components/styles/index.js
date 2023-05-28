import OlStyle from "./OlStyle.vue";
import OlStyleCircle from "./OlStyleCircle.vue";
import Stroke from "./Stroke.vue";
import Fill from "./Fill.vue";
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
  app.component(Stroke.name, Stroke);
  app.component(Fill.name, Fill);
  app.component(Icon.name, Icon);
  app.component(Text.name, Text);
  app.component(FlowLine.name, FlowLine);
}

export default install;

export {
  install,
  OlStyle,
  Stroke,
  Fill,
  Icon,
  Text,
  FlowLine,
  OlStyleCircle,
};
