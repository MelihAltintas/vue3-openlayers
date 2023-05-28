<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

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

const vectorLayer = computed(() => new VectorLayer(properties));

watch(properties, () => {
  vectorLayer.value.setProperties(properties);
});

onMounted(() => {
  map.addLayer(vectorLayer.value);
});

onUnmounted(() => {
  map.removeLayer(vectorLayer.value);
});

provide("vectorLayer", vectorLayer);
provide("stylable", vectorLayer);

defineExpose({
  vectorLayer,
});
</script>

<style lang=""></style>
