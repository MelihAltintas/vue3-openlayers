<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import DragRotateAndZoom from "ol/interaction/DragRotateAndZoom";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    condition?: () => boolean;
    duration?: number;
  }>(),
  {
    duration: 400,
  }
);

const map = inject<Map>("map");
const { properties } = usePropsAsObjectProperties(props);
const dragRotateZoom = computed(() => {
  const OlDragRotateAndZoom = new DragRotateAndZoom({
    ...properties,
  });

  return OlDragRotateAndZoom;
});

watch(dragRotateZoom, (newVal, oldVal) => {
  map?.removeInteraction(oldVal);
  map?.addInteraction(newVal);

  map?.changed();
});

onMounted(() => {
  map?.addInteraction(dragRotateZoom.value);
});

onUnmounted(() => {
  map?.removeInteraction(dragRotateZoom.value);
});

defineExpose({
  dragRotateZoom,
});
</script>
