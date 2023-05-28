<template lang="">
  <slot></slot>
</template>

<script setup>
import { inject, watch, onMounted, onUnmounted, computed } from "vue";

import DragRotate from "ol/interaction/DragRotate";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps({
  condition: {
    type: Function,
  },
  duration: {
    type: Number,
    default: 250,
  },
});

const map = inject("map");

const { properties } = usePropsAsObjectProperties(props);

const dragrotate = computed(() => {
  const s = new DragRotate({
    ...properties,
  });

  return s;
});

watch(dragrotate, (newVal, oldVal) => {
  map.removeInteraction(oldVal);
  map.addInteraction(newVal);

  map.changed();
});

onMounted(() => {
  map.addInteraction(dragrotate.value);
});

onUnmounted(() => {
  map.removeInteraction(dragrotate.value);
});
</script>

<style lang=""></style>
