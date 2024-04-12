import {
  type Ref,
  onMounted,
  getCurrentInstance,
  type ComputedRef,
  isRef,
  inject,
  type ShallowRef,
} from "vue";
import type BaseObject from "ol/Object";
import type { EventTypes } from "ol/Observable";

export const COMMON_EVENTS = ["change", "error", "propertychange"];

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
  "addFeature",
  "changefeature",
  "clear",
  "featuresloadend",
  "featuresloaderror",
  "featuresloadstart",
  "removefeature",
];

// Define the composable function
export function useOpenLayersEvents(
  feature:
    | BaseObject
    | Ref<BaseObject>
    | ShallowRef<BaseObject>
    | ComputedRef<BaseObject>,
  eventNames: string[],
) {
  const instance = getCurrentInstance();
  const globalOptions = inject("ol-options");

  onMounted(() => {
    ([...COMMON_EVENTS, ...eventNames] as EventTypes[]).forEach((eventName) => {
      let unwrappedFeature: Pick<BaseObject, "on">;

      if (!isRef(feature)) {
        unwrappedFeature = feature;
      } else {
        unwrappedFeature =
          typeof feature.value === "function" ? feature.value() : feature.value;
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
  });
}
