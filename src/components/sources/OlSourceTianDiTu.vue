<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileSource from "ol/source/Tile";
import type TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "../../composables/usePropsAsObjectProperties";
import { Tianditu } from "@/components/sources/TiandituClass";

const props = withDefaults(
  defineProps<{
    layerType?: string;
    tk?: string;
    isLabel?: boolean;
    cacheSize?: number;
    crossOrigin?: string;
    projection?: string;
    hidpi?: boolean;
    requestEncoding?: string;
    format?: string;
    version?: string;
    culture?: string;
    matrixSet?: string;
    dimensions?: Record<string, unknown>;
    imageSmoothing?: boolean;
    maxZoom?: number;
    reprojectionErrorThreshold?: number;
    tileLoadFunction?: (imageTile: any, src: string) => void;
    wrapX?: boolean;
    transition?: number;
  }>(),
  {
    layerType: "img",
    isLabel: false,
    projection: "EPSG:3857",
    hidpi: false,
    requestEncoding: "KVP",
    version: "1.0.0",
    culture: "en-us",
    dimensions: () => ({}),
    imageSmoothing: true,
    maxZoom: 21,
    tileLoadFunction: (imageTile: any, src: string) => {
      imageTile.getImage().src = src;
    },
    wrapX: true,
  }
);

const layer = inject<Ref<TileLayer<TileSource>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);
const source = computed(() => {
  return new Tianditu(properties);
});
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
