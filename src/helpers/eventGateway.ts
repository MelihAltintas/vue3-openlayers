import type { EventsKey } from "ol/events";
import type { defineEmits } from "vue";

export default function eventGateway(
  emit: ReturnType<typeof defineEmits>,
  instance: {
    on: (event: string, ...args: unknown[]) => EventsKey;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } & any,
  events: string[]
) {
  [...COMMON_EVENTS, ...events].forEach((event) => {
    instance.on(event, (...args: unknown[]) => {
      emit(event, ...args);
    });
  });
}

const COMMON_EVENTS = ["change", "error", "propertychange"];

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
