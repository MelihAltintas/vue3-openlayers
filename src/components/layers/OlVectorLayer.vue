<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, provide, onUnmounted, onMounted, watch } from "vue";

import VectorLayer from "ol/layer/Vector";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useBaseLayerProps from "@/composables/useBaseLayerProps";

const props = defineProps({
  ...useBaseLayerProps(),
  renderBuffer: {
    type: Number,
    default: 100,
  },
  updateWhileAnimating: {
    type: Boolean,
    default: false,
  },
  styles: {
    type: [String, Array, Function],
  },
  updateWhileInteracting: {
    type: Boolean,
    default: false,
  },
});

const map = inject("map");

const { properties } = usePropsAsObjectProperties(props);

const vectorLayer = new VectorLayer(properties);

watch(properties, () => {
  vectorLayer.setProperties(properties);
});

onMounted(() => {
  map.addLayer(vectorLayer);
});

onUnmounted(() => {
  map.removeLayer(vectorLayer);
});

provide("vectorLayer", vectorLayer);
provide("stylable", vectorLayer);

defineExpose({
  vectorLayer,
});
</script>

<style lang=""></style>
