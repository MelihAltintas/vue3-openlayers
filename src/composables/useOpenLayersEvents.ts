import { ObjectEvent } from "ol/Object";
import {
  ComputedRef,
  getCurrentInstance,
  inject,
  isRef,
  onMounted,
  Ref,
  type,
  type,
} from "vue";

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

// Define a generic type for the event callback
type EventCallback = (event: ObjectEvent) => void;

// Define the generic type parameter for the OpenLayers feature
type OpenLayersFeature = {
  on: (event: string, callback: EventCallback) => void;
  un: (event: string, callback: EventCallback) => void;
} & unknown;

// Define the composable function
export function useOpenLayersEvents(
  feature:
    | OpenLayersFeature
    | Ref<OpenLayersFeature>
    | ComputedRef<OpenLayersFeature>,
  eventNames: string[],
) {
  const instance = getCurrentInstance();
  const globalOptions = inject("ol-options");

  onMounted(() => {
    [...COMMON_EVENTS, ...eventNames].forEach((eventName) => {
      let unwrappedFeature: Pick<OpenLayersFeature, "on">;

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
