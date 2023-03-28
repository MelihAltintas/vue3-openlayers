declare module "vue3-openlayers" {
  import { App } from "vue";
  import feature from "ol/Feature";
  import * as geom from "ol/geom/";
  import * as format from "ol/format";
  import * as loadingstrategy from "ol/loadingstrategy";
  import * as selectconditions from "ol/events/condition";
  import * as extent from "ol/extent";
  import * as animations from "ol/easing";

  module "@vue/runtime-core" {
    export declare function inject(key: "ol-feature"): typeof feature;
    export declare function inject(key: "ol-geom"): typeof geom;
    export declare function inject(key: "ol-animations"): typeof animations;
    export declare function inject(key: "ol-format"): typeof format;
    export declare function inject(
      key: "ol-loadingstrategy"
    ): typeof loadingstrategy;
    export declare function inject(
      key: "ol-selectconditions"
    ): typeof selectconditions;
    export declare function inject(key: "ol-extent"): typeof extent;
  }

  export default function install(app: App): void;
}
