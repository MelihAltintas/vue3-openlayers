import "ol/ol.css";
import "ol-ext/dist/ol-ext.css";
import "ol-contextmenu/ol-contextmenu.css";
import "./assets/style.css";
import {
  Map,
  Layers,
  Sources,
  MapControls,
  Geometries,
  Styles,
  Interactions,
  Animations,
} from "./components";
import Providers from "./providers";
import type { App, Plugin } from "vue";
import type { Vue3OpenlayersGlobalOptions } from "./types";

const install: Plugin = (app: App, options?: Vue3OpenlayersGlobalOptions) => {
  app.use(Map.install, options);
  app.use(Layers.install, options);
  app.use(Sources.install, options);
  app.use(MapControls.install, options);
  app.use(Geometries.install, options);
  app.use(Styles.install, options);
  app.use(Interactions.install, options);
  app.use(Animations.install, options);
  app.use(Providers.install, options);
};

const plugin = { install };

export default plugin;
export {
  install,
  Map,
  Layers,
  Sources,
  MapControls,
  Geometries,
  Styles,
  Interactions,
  Animations,
  Providers,
  type Vue3OpenlayersGlobalOptions,
};
