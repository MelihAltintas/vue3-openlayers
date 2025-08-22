import {
  Animations,
  Geometries,
  Interactions,
  Layers,
  Map,
  MapControls,
  Sources,
  Styles,
} from "./components";
import Providers from "./providers";

import "./assets/style.css";
import "ol-contextmenu/ol-contextmenu.css";
import "ol-ext/dist/ol-ext.css";
import "ol/ol.css";

import type { App, Plugin } from "vue";
import type { Vue3OpenlayersGlobalOptions } from "./types";
import type {
  LinearGradient,
  RadialGradient,
  ConicGradient,
  Gradient,
} from "@components/styles";
export * from "./composables";
export * from "./types";

const install: Plugin = (app: App, options?: Vue3OpenlayersGlobalOptions) => {
  app.use(Map.install);
  app.use(Layers.install);
  app.use(Sources.install);
  app.use(MapControls.install);
  app.use(Geometries.install);
  app.use(Styles.install);
  app.use(Interactions.install);
  app.use(Animations.install);
  app.use(Providers.install);

  app.provide("ol-options", options);
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
  type LinearGradient,
  type RadialGradient,
  type ConicGradient,
  type Gradient,
};
