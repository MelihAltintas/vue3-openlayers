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
import type VectorSource from "ol/source/Vector";
import type Point from "ol/geom/Point";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import eventGateway from "@/helpers/eventGateway";

const props = withDefaults(defineProps<Options>(), {
  distance: 20,
  geometryFunction: (feature: Feature<Geometry>): Point =>
    feature.getGeometry() as Point,
  wrapX: true,
});
const emit = defineEmits([]);

const layer = inject<Ref<VectorSource<Geometry>> | null>("vectorLayer");

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => {
  const c = new Cluster(properties);

  eventGateway(emit, c, [
    "addFeature",
    "change",
    "changefeature",
    "clear",
    "error",
    "featuresloadend",
    "featuresloaderror",
    "featuresloadstart",
    "propertychange",
    "removefeature",
  ]);

  return c;
});

const applySource = () => {
  // @ts-ignore
  layer?.value?.setSource(null);
  // @ts-ignore
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
  // @ts-ignore
  layer?.value?.setSource(source.value);
  // @ts-ignore
  layer?.value?.changed();
});

onUnmounted(() => {
  // @ts-ignore
  layer?.value?.setSource(null);
});

provide("vectorLayer", source);

defineExpose({
  layer,
  source,
});
</script>
