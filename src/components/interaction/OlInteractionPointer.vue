<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { inject, watch, onMounted, onUnmounted, shallowRef } from "vue";
import Pointer, { type Options } from "ol/interaction/Pointer";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";
import type { MapBrowserEvent } from "ol";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const emit = defineEmits<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: "down", data: MapBrowserEvent<any>): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: "move", data: MapBrowserEvent<any>): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: "up", data: MapBrowserEvent<any>): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: "drag", data: MapBrowserEvent<any>): void;
}>();

const props =
  defineProps<
    Omit<
      Options,
      | "handleDownEvent"
      | "handleDragEvent"
      | "handleMoveEvent"
      | "handleUpEvent"
    >
  >();

const map = inject<Map>("map");
const properties = usePropsAsObjectProperties(props);

const pointer = shallowRef(
  new Pointer({
    ...properties,
    handleDownEvent: (e) => {
      emit("down", e);
      return true;
    },
    handleDragEvent: (e) => {
      emit("drag", e);
      return true;
    },
    handleMoveEvent: (e) => {
      emit("move", e);
    },
    handleUpEvent: (e) => {
      emit("up", e);
      return true;
    },
  }),
);

useOpenLayersEvents(pointer, ["change:active"]);

watch(pointer, (newVal, oldVal) => {
  map?.removeInteraction(oldVal);
  map?.addInteraction(newVal);
  map?.changed();
});

onMounted(() => {
  map?.addInteraction(pointer.value);
});

onUnmounted(() => {
  map?.removeInteraction(pointer.value);
});

defineExpose({
  pointer,
});
</script>
