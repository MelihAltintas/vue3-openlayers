<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

// old: import WebGLPointsLayer from "ol/layer/WebGLPoints";
import WebGLVectorLayerRenderer from "ol/renderer/webgl/VectorLayer.js";
import Layer from "ol/layer/Layer.js";
// DUPLICATE of the one in ../sources/:
class WebGLVectorLayer extends Layer {
  createRenderer() {
    return new WebGLVectorLayerRenderer(this, {
      className: this.getClassName(),
      style: properties.style,
      // style: { // completely WRONG
      //    'stroke-width': 10,
      //    'stroke-color': 'red',
      // },
    });
  }
}



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
  },
);

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const { properties } = usePropsAsObjectProperties(props);

const webglVectorLayer = computed(
  () =>
    new WebGLVectorLayer({
      ...properties,
      style: properties.styles,
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