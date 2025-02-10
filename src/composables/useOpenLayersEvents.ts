import {
  type ComputedRef,
  getCurrentInstance,
  inject,
  isRef,
  onMounted,
  type Ref,
  type ShallowRef,
} from "vue";
import type BaseObject from "ol/Object";
import type { EventTypes } from "ol/Observable";
import type { Vue3OpenlayersGlobalOptions } from "@/types";
import type BaseEvent from "ol/events/Event";
import type { ObjectEvent } from "ol/Object";
import type RenderEvent from "ol/render/Event";
import type { TileSourceEvent } from "ol/source/Tile";
import type { ImageSourceEvent } from "ol/source/Image";
import type { VectorSourceEvent } from "ol/source/Vector";

export const COMMON_EVENTS = ["change", "error", "propertychange"];
export interface CommonEvents {
  (e: "change", event: BaseEvent): void;
  (e: "error", event: BaseEvent): void;
  (e: "propertychange", event: ObjectEvent): void;
}

export const LAYER_EVENTS = [
  "change:extent",
  "change:maxResolution",
  "change:maxZoom",
  "change:minResolution",
  "change:minZoom",
  "change:opacity",
  "change:source",
  "change:visible",
  "change:zIndex",
  "postrender",
  "prerender",
  "sourceready",
];
export interface LayerChangeEvents {
  (e: "change:extent", event: ObjectEvent): void;
  (e: "change:maxResolution", event: ObjectEvent): void;
  (e: "change:maxZoom", event: ObjectEvent): void;
  (e: "change:minResolution", event: ObjectEvent): void;
  (e: "change:minZoom", event: ObjectEvent): void;
  (e: "change:opacity", event: ObjectEvent): void;
  (e: "change:source", event: ObjectEvent): void;
  (e: "change:visible", event: ObjectEvent): void;
  (e: "change:zIndex", event: ObjectEvent): void;
}
export interface LayerRenderEvents {
  (e: "postrender", event: RenderEvent): void;
  (e: "prerender", event: RenderEvent): void;
}
export interface LayerEvents
  extends CommonEvents,
    LayerChangeEvents,
    LayerRenderEvents {
  (e: "sourceready", event: BaseEvent): void;
}

export const TILE_SOURCE_EVENTS = [
  "tileloadend",
  "tileloaderror",
  "tileloadstart",
];
export interface TileSourceEvents extends CommonEvents {
  (e: "tileloadend", event: TileSourceEvent): void;
  (e: "tileloaderror", event: TileSourceEvent): void;
  (e: "tileloadstart", event: TileSourceEvent): void;
}

export const IMAGE_SOURCE_EVENTS = [
  "imageloadend",
  "imageloaderror",
  "imageloadstart",
];
export interface ImageSourceEvents extends CommonEvents {
  (e: "imageloadend", event: ImageSourceEvent): void;
  (e: "imageloaderror", event: ImageSourceEvent): void;
  (e: "imageloadstart", event: ImageSourceEvent): void;
}

export const VECTOR_SOURCE_EVENTS = [
  "addfeature",
  "changefeature",
  "clear",
  "featuresloadend",
  "featuresloaderror",
  "featuresloadstart",
  "removefeature",
];
export interface VectorSourceEvents extends CommonEvents {
  (e: "addfeature", event: VectorSourceEvent): void;
  (e: "changefeature", event: VectorSourceEvent): void;
  (e: "clear", event: VectorSourceEvent): void;
  (e: "featuresloadend", event: VectorSourceEvent): void;
  (e: "featuresloaderror", event: VectorSourceEvent): void;
  (e: "featuresloadstart", event: VectorSourceEvent): void;
  (e: "removefeature", event: VectorSourceEvent): void;
}

export function useOpenLayersEvents(
  feature:
    | BaseObject
    | Ref<BaseObject>
    | ShallowRef<BaseObject>
    | ComputedRef<BaseObject>,
  eventNames: string[],
) {
  const instance = getCurrentInstance();
  let globalOptions: Vue3OpenlayersGlobalOptions = {
    debug: false,
  };
  if (instance) {
    globalOptions = inject("ol-options");
  }

  function updateOpenLayersEventHandlers() {
    ([...COMMON_EVENTS, ...eventNames] as EventTypes[]).forEach((eventName) => {
      let unwrappedFeature: Pick<BaseObject, "on">;

      if (isRef(feature)) {
        unwrappedFeature = feature.value;
      } else {
        unwrappedFeature = feature;
      }

      unwrappedFeature.on(eventName, (...args: unknown[]) => {
        if (globalOptions?.debug) {
          console.debug("[Vue3-OpenLayers Debug] EVENT", eventName, {
            eventName,
            args,
            source: feature,
          });
        }
        instance?.emit(eventName, ...args);
      });
    });
  }

  if (instance) {
    onMounted(() => {
      updateOpenLayersEventHandlers();
    });
  }

  return {
    updateOpenLayersEventHandlers,
  };
}
