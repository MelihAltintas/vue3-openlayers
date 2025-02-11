<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { inject, watch, onMounted, onUnmounted, shallowRef } from "vue";
import Pointer, { type Options } from "ol/interaction/Pointer";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  type CommonEvents,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";
import type { MapBrowserEvent } from "ol";
import type { ObjectEvent } from "ol/Object";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

type Props = Omit<
  Options,
  "handleDownEvent" | "handleDragEvent" | "handleMoveEvent" | "handleUpEvent"
>;
const props = defineProps<Props>();

type Emits = CommonEvents & {
  (e: "down", data: MapBrowserEvent<UIEvent>): void;
  (e: "move", data: MapBrowserEvent<UIEvent>): void;
  (e: "up", data: MapBrowserEvent<UIEvent>): void;
  (e: "drag", data: MapBrowserEvent<UIEvent>): void;
  (e: "change:active", event: ObjectEvent): void;
};
const emit = defineEmits<Emits>();

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
