<template lang="">
  <slot></slot>
</template>

<script setup lang="ts">
import { inject, watch, onMounted, onUnmounted, computed } from "vue";

import DragBox, { type Options } from "ol/interaction/DragBox";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { Map } from "ol";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {});

const map = inject<Map>("map");

const { properties } = usePropsAsObjectProperties(props);

const dragbox = computed(() => {
  const s = new DragBox({
    ...properties,
  });

  return s;
});

useOpenLayersEvents(dragbox, ["boxcancel", "boxdrag", "boxend", "boxstart"]);

watch(dragbox, (newVal, oldVal) => {
  map?.removeInteraction(oldVal);
  map?.addInteraction(newVal);

  map?.changed();
});

onMounted(() => {
  map?.addInteraction(dragbox.value);
});

onUnmounted(() => {
  map?.removeInteraction(dragbox.value);
});

defineExpose({
  dragbox,
});
</script>
