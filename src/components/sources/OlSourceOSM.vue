<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import OSM, { type Options } from "ol/source/OSM";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  TILE_SOURCE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  crossOrigin: "anonymous",
  interpolate: true,
  maxZoom: 19,
  opaque: true,
  reprojectionErrorThreshold: 0.5,
  transition: 250,
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  wrapX: true,
  zDirection: 0,
});

const layer = inject<Ref<TileLayer<OSM>> | null>("tileLayer");

const properties = usePropsAsObjectProperties(props);

const source = computed(() => new OSM(properties));

useOpenLayersEvents(source, TILE_SOURCE_EVENTS);

watch(source, () => {
  layer?.value?.setSource(source.value);
});

watch(
  () => layer?.value,
  () => {
    layer?.value?.setSource(source.value);
  },
);

onMounted(() => {
  layer?.value?.setSource(source.value);
});

onUnmounted(() => {
  layer?.value?.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>
