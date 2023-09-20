<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import VectorSource, { type Options } from "ol/source/Vector";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";

import type WebGLPointsLayer from "ol/layer/WebGLPoints";
import type Point from "ol/geom/Point";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  FEATURE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options<Point>>(), {
  overlaps: true,
  projection: "EPSG:3857",
  useSpatialIndex: true,
  wrapX: true,
});

const layer = inject<Ref<WebGLPointsLayer<VectorSource<Point>>> | null>(
  "webglPointsLayer",
);

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => new VectorSource(properties));

useOpenLayersEvents(source, FEATURE_EVENTS);

const applySource = () => {
  layer?.value?.setSource(null);
  layer?.value?.setSource(source.value || null);
  layer?.value?.changed();
};
watch(properties, () => {
  applySource();
});

watch(
  () => layer,
  () => {
    applySource();
  },
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
