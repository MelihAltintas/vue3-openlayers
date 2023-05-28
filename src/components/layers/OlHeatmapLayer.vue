<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

import HeatmapLayer from "ol/layer/Heatmap";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useBaseLayerProps from "@/composables/useBaseLayerProps";

const props = defineProps({
  ...useBaseLayerProps(),
  weight: {
    type: [String, Function],
    default: "weight",
  },
  extent: {
    type: Array,
  },
  blur: {
    type: Number,
  },
  radius: {
    type: Number,
  },
  gradient: {
    type: Array,
  },
});

const map = inject("map");

const { properties } = usePropsAsObjectProperties(props);

const heatmapLayer = computed(() => new HeatmapLayer(properties));

watch(properties, () => {
  heatmapLayer.value.setProperties(properties);
});

onMounted(() => {
  map.addLayer(heatmapLayer.value);
});

onUnmounted(() => {
  map.removeLayer(heatmapLayer.value);
});

provide("heatmapLayer", heatmapLayer);
provide("stylable", heatmapLayer);

defineExpose({
  heatmapLayer,
});
</script>

<style lang=""></style>
