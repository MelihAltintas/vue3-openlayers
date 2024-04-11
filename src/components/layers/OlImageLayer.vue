<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, ref } from "vue";
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

const properties = usePropsAsObjectProperties(props);

const imageLayer = ref(new ImageLayer(properties));

watch(properties, () => {
  imageLayer.value.setProperties(properties);
});

watch(
  () => props.opacity,
  (newOpacity: number) => {
    imageLayer.value.setOpacity(newOpacity);
  },
  { immediate: true },
);

watch(
  () => props.visible,
  (newVisible: boolean) => {
    imageLayer.value.setVisible(newVisible);
  },
  { immediate: true },
);
onMounted(() => {
  map?.addLayer(imageLayer.value);

  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(imageLayer.value);
    layerGroup.setLayers(layerCollection);
  }
});

onUnmounted(() => {
  map?.removeLayer(imageLayer.value);
});

provide("imageLayer", imageLayer.value);

defineExpose({
  imageLayer: imageLayer.value,
});
</script>
