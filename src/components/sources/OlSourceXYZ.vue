<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import type { Options } from "ol/source/XYZ";
import XYZ from "ol/source/XYZ";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileSource from "ol/source/Tile";
import type TileLayer from "ol/layer/Tile";
import type { AttributionLike } from "ol/source/Source";
import type TileGrid from "ol/tilegrid/TileGrid";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    attributions?: AttributionLike;
    url?: string;
    cacheSize?: number;
    crossOrigin?: string;
    maxZoom?: number;
    minZoom?: number;
    opaque?: boolean;
    projection?: string;
    reprojectionErrorThreshold?: number;
    tileSize?: [number, number];
    tilePixelRatio?: number;
    tileKey?: string;
    transition?: number;
    tileGrid?: TileGrid;
  }>(),
  {
    cacheSize: 2048,
    maxZoom: 28,
    minZoom: 0,
    projection: "EPSG:3857",
    reprojectionErrorThreshold: 0.5,
    tileSize: () => [256, 256],
    tilePixelRatio: 1,
  }
);

const layer = inject<Ref<TileLayer<TileSource>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);

// @ts-ignore
const source = computed(() => new XYZ(properties as Options));

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
