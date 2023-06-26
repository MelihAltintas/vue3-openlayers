<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

import WebGLPointsLayer from "ol/layer/WebGLPoints";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type LayerGroup from "ol/layer/Group";

type StyleType = {
  symbol: {
    symbolType: string;
    size: number;
    color: string;
    opacity: number;
  };
};

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      disableHitDetection?: boolean;
      styles: StyleType;
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
  }
);

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const { properties } = usePropsAsObjectProperties(props);

const webglPointsLayer = computed(
  () =>
    new WebGLPointsLayer({
      ...properties,
      style: properties.styles,
    })
);

watch(properties, () => {
  webglPointsLayer.value.setProperties(properties);
});
onMounted(() => {
  map?.addLayer(webglPointsLayer.value);
  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(webglPointsLayer.value);
    layerGroup.setLayers(layerCollection);
  }
});
onUnmounted(() => {
  map?.removeLayer(webglPointsLayer.value);
});
provide("webglPointsLayer", webglPointsLayer);

defineExpose({
  webglPointsLayer,
});
</script>
