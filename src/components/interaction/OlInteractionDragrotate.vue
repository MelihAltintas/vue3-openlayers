<template lang="">
  <slot></slot>
</template>

<script setup lang="ts">
import { inject, watch, onMounted, onUnmounted, computed } from "vue";

import DragRotate, { type Options } from "ol/interaction/DragRotate";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { Map } from "ol";

const props = defineProps<Options>();

const map = inject<Map>("map");

const properties = usePropsAsObjectProperties(props);

const dragrotate = computed(() => {
  const s = new DragRotate(properties);

  return s;
});

watch(dragrotate, (newVal, oldVal) => {
  map?.removeInteraction(oldVal);
  map?.addInteraction(newVal);

  map?.changed();
});

onMounted(() => {
  map?.addInteraction(dragrotate.value);
});

onUnmounted(() => {
  map?.removeInteraction(dragrotate.value);
});

defineExpose({
  dragrotate,
});
</script>
