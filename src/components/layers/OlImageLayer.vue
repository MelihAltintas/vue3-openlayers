<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch } from "vue";
import ImageLayer from "ol/layer/Image";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type LayerGroup from "ol/layer/Group";

const props = withDefaults(
  defineProps<LayersCommonProps>(),
  layersCommonDefaultProps,
);

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const { properties } = usePropsAsObjectProperties(props);

const imageLayer = new ImageLayer(properties);

watch(properties, () => {
  imageLayer.setProperties(properties);
});

onMounted(() => {
  map?.addLayer(imageLayer);

  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(imageLayer);
    layerGroup.setLayers(layerCollection);
  }
});

onUnmounted(() => {
  map?.removeLayer(imageLayer);
});

provide("imageLayer", imageLayer);

defineExpose({
  imageLayer,
});
</script>
