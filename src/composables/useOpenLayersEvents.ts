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

export const COMMON_EVENTS = ["change", "error", "propertychange"];

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

export const TILE_SOURCE_EVENTS = [
  "tileloadend",
  "tileloaderror",
  "tileloadstart",
];
export const IMAGE_SOURCE_EVENTS = [
  "imageloadend",
  "imageloaderror",
  "imageloadstart",
];
export const FEATURE_EVENTS = [
  "addfeature",
  "changefeature",
  "clear",
  "featuresloadend",
  "featuresloaderror",
  "featuresloadstart",
  "removefeature",
];

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
