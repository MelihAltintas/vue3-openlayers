<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";
import VectorLayer from "ol/layer/Vector";
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

const vectorLayer = computed(() => new VectorLayer(properties));

watch(properties, () => {
  vectorLayer.value.setProperties(properties);
});

onMounted(() => {
  map?.addLayer(vectorLayer.value);
  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(vectorLayer.value);
    layerGroup.setLayers(layerCollection);
  }
});

onUnmounted(() => {
  map?.removeLayer(vectorLayer.value);
});

provide("vectorLayer", vectorLayer);
provide("stylable", vectorLayer);

defineExpose({
  vectorLayer,
});
</script>
