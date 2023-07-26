<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import VectorTileSource, { type Options } from "ol/source/VectorTile";
import type VectorTileLayer from "ol/layer/VectorTile";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  useOpenLayersEvents,
  FEATURE_EVENTS,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  overlaps: true,
  projection: "EPSG:3857",
  wrapX: true,
});

const vectorTileLayer = inject<Ref<VectorTileLayer> | null>(
  "vectorTileLayer",
  null
);

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => new VectorTileSource(properties));

useOpenLayersEvents(source, FEATURE_EVENTS);

const applySource = () => {
  vectorTileLayer?.value?.setSource(null);
  vectorTileLayer?.value?.setSource(source.value);
  vectorTileLayer?.value?.changed();
};
watch(properties, () => {
  applySource();
});

watch(
  () => vectorTileLayer?.value,
  () => {
    applySource();
  }
);

onMounted(() => {
  vectorTileLayer?.value?.setSource(source.value);
});

onUnmounted(() => {
  vectorTileLayer?.value?.setSource(null);
});

provide("vectorSource", source);

defineExpose({
  vectorTileLayer,
  source,
});
</script>
