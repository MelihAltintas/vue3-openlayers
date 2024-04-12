<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type LayerGroup from "ol/layer/Group";
import { WebGLVectorLayer } from "./WebGLVectorLayerClass";
import type { WebGLStyle } from "ol/style/webgl";

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      disableHitDetection?: boolean;
      styles: WebGLStyle;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    disableHitDetection: false,
    styles: () => ({
      "shape-points": 1,
      "shape-radius": 10,
      "shape-opacity": 0.5,
      "shape-fill-color": "blue",
    }),
  },
);

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const properties = usePropsAsObjectProperties(props);

const webglVectorLayer = computed(
  () =>
    new WebGLVectorLayer({
      ...properties,
      styles: properties.style,
    }),
);

watch(properties, () => {
  webglVectorLayer.value.setProperties(properties);
});
onMounted(() => {
  map?.addLayer(webglVectorLayer.value);
  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(webglVectorLayer.value);
    layerGroup.setLayers(layerCollection);
  }
});
onUnmounted(() => {
  map?.removeLayer(webglVectorLayer.value);
});
provide("webglVectorLayer", webglVectorLayer);

defineExpose({
  webglVectorLayer,
});
</script>
