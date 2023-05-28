<template lang="">
  <slot> </slot>
</template>

<script setup>
import { inject, watch, onMounted, onUnmounted, computed } from "vue";

import DragRotateAndZoom from "ol/interaction/DragRotateAndZoom";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps({
  condition: {
    type: Function,
  },
  duration: {
    type: Number,
    default: 400,
  },
});

const map = inject("map");

const { properties } = usePropsAsObjectProperties(props);

const dragrotatezoom = computed(() => {
  const s = new DragRotateAndZoom({
    ...properties,
  });

  return s;
});

watch(dragrotatezoom, (newVal, oldVal) => {
  map.removeInteraction(oldVal);
  map.addInteraction(newVal);

  map.changed();
});

onMounted(() => {
  map.addInteraction(dragrotatezoom.value);
});

onUnmounted(() => {
  map.removeInteraction(dragrotatezoom.value);
});
</script>

<style lang=""></style>
