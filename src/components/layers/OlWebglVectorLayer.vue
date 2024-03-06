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
import { WebGLVectorLayer, type WebGLStyleDef } from "./WebGLVectorLayerClass";

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      disableHitDetection?: boolean;
      styles: WebGLStyleDef;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    disableHitDetection: false,
    styles: () => ({
      symbol: {
        symbolType: "circle",
        size: 8,
        color: "#33AAFF",
        opacity: 0.9,
      },
    }),
  },
);

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const { properties } = usePropsAsObjectProperties(props);

const webglVectorLayer = computed(() => {
  return new WebGLVectorLayer({
    ...properties,
    style: properties.styles,
  });
});

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
