<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "../../composables/usePropsAsObjectProperties";
import { Tianditu, type Options } from "@/components/sources/TiandituClass";
import type { ImageTile } from "ol";
import {
  TILE_SOURCE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
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
  tileLoadFunction: (imageTile, src) => {
    ((imageTile as ImageTile).getImage() as HTMLImageElement).src = src;
  },
  wrapX: true,
});

const layer = inject<Ref<TileLayer<Tianditu>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);
const source = computed(() => new Tianditu(properties));

useOpenLayersEvents(source, TILE_SOURCE_EVENTS);

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
