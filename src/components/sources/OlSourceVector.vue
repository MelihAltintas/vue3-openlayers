<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import VectorSource from "ol/source/Vector";

import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps({
  attributions: {
    type: [String, Array],
  },
  features: {
    type: Array,
    default: () => [],
  },
  format: {
    type: Object,
  },
  loader: {
    type: Function,
  },
  overlaps: {
    type: Boolean,
    default: true,
  },
  projection: {
    type: String,
    default: "EPSG:3857",
  },
  strategy: {
    type: Function,
  },
  url: {
    type: [String, Function],
  },
  useSpatialIndex: {
    type: Boolean,
    default: true,
  },
  wrapX: {
    type: Boolean,
    default: true,
  },
});

const layer =
  inject("vectorLayer", undefined) || inject("heatmapLayer", undefined);

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => new VectorSource(properties));

const applySource = () => {
  layer.setSource(null);
  layer.setSource(source.value);
  layer.changed();
};
watch(properties, () => {
  applySource();
});

watch(layer, () => {
  applySource();
});

onMounted(() => {
  layer.setSource(source.value);
});

onUnmounted(() => {
  layer.setSource(null);
});

provide("vectorSource", source);

defineExpose({
  layer,
  source,
});
</script>

<style lang=""></style>
