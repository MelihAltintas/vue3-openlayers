import feature from "ol/Feature";
import * as geom from "ol/geom";
import * as format from "ol/format";
import * as loadingstrategy from "ol/loadingstrategy";
import * as selectconditions from "ol/events/condition";
import * as extent from "ol/extent";
import * as animations from "ol/easing";
import type { App, Plugin } from "vue";
import type { Vue3OpenlayersGlobalOptions } from "./types";

const install: Plugin = (app: App, options?: Vue3OpenlayersGlobalOptions) => {
  app.provide("ol-feature", feature);
  app.provide("ol-geom", geom);
  app.provide("ol-animations", animations);
  app.provide("ol-format", format);
  app.provide("ol-loadingstrategy", loadingstrategy);
  app.provide("ol-selectconditions", selectconditions);
  app.provide("ol-extent", extent);

  if (options) {
    app.provide("ol-options", options);
  }
};

declare module "@vue/runtime-core" {
  export function inject(key: "ol-options"): Vue3OpenlayersGlobalOptions;
  export function inject(key: "ol-feature"): feature;
  export function inject(key: "ol-geom"): typeof geom;
  export function inject(key: "ol-animations"): typeof animations;
  export function inject(key: "ol-format"): typeof format;
  export function inject(key: "ol-loadingstrategy"): typeof loadingstrategy;
  export function inject(key: "ol-selectconditions"): typeof selectconditions;
  export function inject(key: "ol-extent"): typeof extent;
}

const plugin = { install };

export default plugin;
export { install };
