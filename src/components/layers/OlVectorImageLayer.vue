<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

import VectorImageLayer from "ol/layer/VectorImage";
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

const vectorImageLayer = computed(() => new VectorImageLayer(properties));

watch(properties, () => {
  vectorImageLayer.value.setProperties(properties);
});

onMounted(() => {
  map.addLayer(vectorImageLayer.value);
});

onUnmounted(() => {
  map.removeLayer(vectorImageLayer.value);
});

provide("vectorLayer", vectorImageLayer);
provide("stylable", vectorImageLayer);

defineExpose({
  vectorImageLayer,
});
</script>

<style lang=""></style>
