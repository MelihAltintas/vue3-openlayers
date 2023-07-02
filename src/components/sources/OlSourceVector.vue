<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import VectorSource, { type Options } from "ol/source/Vector";
import type VectorLayer from "ol/layer/Vector";
import type HeatmapLayer from "ol/layer/Heatmap";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import type Geometry from "ol/geom/Geometry";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  useOpenLayersEvents,
  FEATURE_EVENTS,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options<Geometry>>(), {
  overlaps: true,
  projection: "EPSG:3857",
  useSpatialIndex: true,
  wrapX: true,
});

const vectorLayer = inject<Ref<VectorLayer<VectorSource<Geometry>>> | null>(
  "vectorLayer",
  null
);
const heatmapLayer = inject<Ref<HeatmapLayer> | null>("heatmapLayer", null);
const layer = heatmapLayer || vectorLayer;

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => new VectorSource(properties));

useOpenLayersEvents(source, FEATURE_EVENTS);

const applySource = () => {
  layer?.value?.setSource(null);
  layer?.value?.setSource(source.value);
  layer?.value?.changed();
};
watch(properties, () => {
  applySource();
});

watch(
  () => layer?.value,
  () => {
    applySource();
  }
);

onMounted(() => {
  layer?.value?.setSource(source.value);
});

onUnmounted(() => {
  layer?.value?.setSource(null);
});

provide("vectorSource", source);

defineExpose({
  layer,
  source,
});
</script>
