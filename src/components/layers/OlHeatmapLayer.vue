<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";
import HeatmapLayer from "ol/layer/Heatmap";
import type { Extent } from "ol/extent";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type LayerGroup from "ol/layer/Group";

type WeightFunction = () => number;

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      weight?: string | WeightFunction;
      extent?: Extent;
      blur?: number;
      radius?: number;
      gradient?: string[];
    }
  >(),
  {
    ...layersCommonDefaultProps,
    weight: "weight",
    radius: 8,
    blur: 15,
    gradient: () => ["#00f", "#0ff", "#0f0", "#ff0", "#f00"],
  }
);

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const { properties } = usePropsAsObjectProperties(props);
const heatmapLayer = computed(() => new HeatmapLayer(properties));

watch(properties, () => {
  heatmapLayer.value.setProperties(properties);
  map?.changed();
});

onMounted(() => {
  map?.addLayer(heatmapLayer.value);

  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(heatmapLayer.value);
    layerGroup.setLayers(layerCollection);
  }
});

onUnmounted(() => {
  map?.removeLayer(heatmapLayer.value);
});

provide("heatmapLayer", heatmapLayer);
provide("stylable", heatmapLayer);

defineExpose({
  heatmapLayer,
});
</script>
