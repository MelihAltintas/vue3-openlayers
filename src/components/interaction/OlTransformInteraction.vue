<template lang="">
  <slot></slot>
</template>

<script setup>
import { provide, inject, watch, onMounted, onUnmounted, computed } from "vue";

import Transform from "ol-ext/interaction/Transform";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps({
  enableRotatedTransform: {
    type: Boolean,
    default: false,
  },
  condition: {
    type: Function,
  },
  addCondition: {
    type: Function,
  },
  filter: {
    type: Function,
  },
  layers: {
    type: Array,
  },
  hitTolerance: {
    type: Number,
    default: 2,
  },
  translateFeature: {
    type: Boolean,
    default: true,
  },
  scale: {
    type: Boolean,
    default: true,
  },
  rotate: {
    type: Boolean,
    default: true,
  },
  keepAspectRatio: {
    type: Boolean,
    default: false,
  },
  translate: {
    type: Boolean,
    default: true,
  },
  stretch: {
    type: Boolean,
    default: true,
  },
});

const map = inject("map");

const { properties } = usePropsAsObjectProperties(props);

const transform = computed(() => {
  const interaction = new Transform({
    ...properties,
  });

  return interaction;
});

watch(transform, (newVal, oldVal) => {
  map.removeInteraction(oldVal);
  map.addInteraction(newVal);

  map.changed();
});

onMounted(() => {
  map.addInteraction(transform.value);
});

onUnmounted(() => {
  map.removeInteraction(transform.value);
});

provide("stylable", transform);
</script>

<style lang=""></style>
