<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import VectorSource, { type Options } from "ol/source/Vector";
import type VectorLayer from "ol/layer/Vector";
import type HeatmapLayer from "ol/layer/Heatmap";
import type { WebGLVectorLayer } from "../layers/WebGLVectorLayerClass";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, ref } from "vue";
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
  null,
);
const heatmapLayer = inject<Ref<HeatmapLayer> | null>("heatmapLayer", null);
const webglVectorLayer = inject<Ref<WebGLVectorLayer> | null>(
  "webglVectorLayer",
  null,
);
const layer = heatmapLayer || vectorLayer || webglVectorLayer;

const { properties } = usePropsAsObjectProperties(props);

const createSource = () => new VectorSource(properties);

let source = createSource();

useOpenLayersEvents(source, FEATURE_EVENTS);

const applySource = () => {
  layer?.value?.setSource(null);
  source = createSource();
  layer?.value?.setSource(source);
};
watch(properties, () => applySource());

watch(
  () => layer?.value,
  () => applySource(),
);

onMounted(() => {
  layer?.value.setSource(source);
});

onUnmounted(() => {
  layer?.value.setSource(null);
});

provide("vectorSource", ref(source));

defineExpose({
  layer,
  source: ref(source),
});
</script>
