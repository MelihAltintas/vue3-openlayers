<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import Cluster, { type Options } from "ol/source/Cluster";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import type Geometry from "ol/geom/Geometry";
import type Feature from "ol/Feature";
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

const props = withDefaults(defineProps<Options>(), {
  distance: 20,
  geometryFunction: (feature: Feature<Geometry>): Point =>
    feature.getGeometry() as Point,
  wrapX: true,
});

const layer = inject<Ref<Cluster> | null>("vectorLayer");

const properties = usePropsAsObjectProperties(props);

const source = computed(() => new Cluster(properties));

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
  },
);

onMounted(() => {
  layer?.value?.setSource(source.value);
  layer?.value?.changed();
});

onUnmounted(() => {
  layer?.value?.setSource(null);
});

provide("vectorLayer", source);

defineExpose({
  layer,
  source,
});
</script>
