<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";
import VectorTileLayer from "ol/layer/VectorTile";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type { StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type LayerGroup from "ol/layer/Group";

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      renderBuffer?: number;
      updateWhileAnimating?: boolean;
      styles?: StyleLike | FlatStyleLike | null;
      updateWhileInteracting?: boolean;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    renderBuffer: 100,
    updateWhileAnimating: false,
    updateWhileInteracting: false,
  },
);

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const { properties } = usePropsAsObjectProperties(props);

const vectorTileLayer = computed(() => new VectorTileLayer(properties));

watch(properties, () => {
  vectorTileLayer.value.setProperties(properties);
});

onMounted(() => {
  map?.addLayer(vectorTileLayer.value);
  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(vectorTileLayer.value);
    layerGroup.setLayers(layerCollection);
  }
});

onUnmounted(() => {
  map?.removeLayer(vectorTileLayer.value);
});

provide("vectorTileLayer", vectorTileLayer);
provide("stylable", vectorTileLayer);

defineExpose({
  vectorTileLayer,
});
</script>
