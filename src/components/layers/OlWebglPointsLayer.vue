<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

import WebGLPointsLayer from "ol/layer/WebGLPoints";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useBaseLayerProps from "@/composables/useBaseLayerProps";

const props = defineProps({
  ...useBaseLayerProps(),
  disableHitDetection: {
    type: Boolean,
    default: false,
  },
  styles: {
    type: [String, Array, Function],
    default: () => ({
      symbol: {
        symbolType: "circle",
        size: 8,
        color: "#33AAFF",
        opacity: 0.9,
      },
    }),
  },
});

const map = inject("map");
const { properties } = usePropsAsObjectProperties(props);
const webglPointsLayer = computed(() => new WebGLPointsLayer(properties));
watch(properties, () => {
  webglPointsLayer.value.setProperties(properties);
});
onMounted(() => {
  map.addLayer(webglPointsLayer.value);
});
onUnmounted(() => {
  map.removeLayer(webglPointsLayer.value);
});
provide("webglPointsLayer", webglPointsLayer);

defineExpose({
  webglPointsLayer,
});
</script>

<style lang=""></style>
