import type { defineEmits } from "vue";

export default function eventGateway(
  emit: ReturnType<typeof defineEmits>,
  instance: { on: (event: any, ...args: any[]) => unknown },
  events: string[]
) {
  [...COMMON_EVENTS, ...events].forEach((event: string) => {
    instance.on(event, (...args: unknown[]) => {
      console.log(event, args);
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
export const IMAGE_SOURCE_EVENTS = [];
