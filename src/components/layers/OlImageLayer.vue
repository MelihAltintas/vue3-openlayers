<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, provide, onUnmounted, onMounted, watch } from "vue";

import ImageLayer from "ol/layer/Image";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useBaseLayerProps from "@/composables/useBaseLayerProps";

const props = defineProps(useBaseLayerProps());

const map = inject("map");
const { properties } = usePropsAsObjectProperties(props);

const imageLayer = new ImageLayer(properties);

watch(properties, () => {
  imageLayer.setProperties(properties);
});

onMounted(() => {
  map.addLayer(imageLayer);
});

onUnmounted(() => {
  map.removeLayer(imageLayer);
});

provide("imageLayer", imageLayer);

defineExpose({
  imageLayer,
});
</script>

<style lang=""></style>
