<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import OSM from "ol/source/OSM";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileSource from "ol/source/Tile";
import type TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    attributions?: string;
    cacheSize?: number;
    crossOrigin?: string;
    imageSmoothing?: boolean;
    minZoom?: number;
    maxZoom?: number;
    opaque?: boolean;
    reprojectionErrorThreshold?: number;
    transition?: number;
    url?: string;
    wrapX?: boolean;
  }>(),
  {
    cacheSize: 2048,
    crossOrigin: "anonymous",
    imageSmoothing: true,
    minZoom: 0,
    maxZoom: 19,
    opaque: true,
    reprojectionErrorThreshold: 0.5,
    transition: 250,
    url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    wrapX: true,
  }
);

const layer = inject<Ref<TileLayer<TileSource>> | null>("tileLayer");

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => new OSM(properties));

watch(source, () => {
  layer?.value?.setSource(source.value);
});

watch(
  () => layer?.value,
  () => {
    layer?.value?.setSource(source.value);
  }
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
