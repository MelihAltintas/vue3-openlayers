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

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      weight?: () => number;
      extent?: Extent;
      blur?: number;
      radius?: number;
      gradient?: number[];
    }
  >(),
  layersCommonDefaultProps
);

const map = inject<Map>("map");

const { properties } = usePropsAsObjectProperties(props);
// @ts-ignore
const heatmapLayer = computed(() => new HeatmapLayer(properties));

watch(properties, () => {
  heatmapLayer.value.setProperties(properties);
});

onMounted(() => {
  map?.addLayer(heatmapLayer.value);
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
