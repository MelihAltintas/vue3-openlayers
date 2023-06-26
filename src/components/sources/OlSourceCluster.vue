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
import eventGateway, { FEATURE_EVENTS } from "@/helpers/eventGateway";

const props = withDefaults(defineProps<Options>(), {
  distance: 20,
  geometryFunction: (feature: Feature<Geometry>): Point =>
    feature.getGeometry() as Point,
  wrapX: true,
});
const emit = defineEmits([]);

const layer = inject<Ref<Cluster> | null>("vectorLayer");

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => {
  const c = new Cluster(properties);

  eventGateway(emit, c, FEATURE_EVENTS);

  return c;
});

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
