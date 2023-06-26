<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileSource from "ol/source/Tile";
import type TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "../../composables/usePropsAsObjectProperties";
import { Tianditu, type Options } from "@/components/sources/TiandituClass";
import eventGateway, { TILE_SOURCE_EVENTS } from "@/helpers/eventGateway";
import type { ImageTile } from "ol";

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
const emit = defineEmits([]);

const layer = inject<Ref<TileLayer<Tianditu>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);
const source = computed(() => {
  const t = new Tianditu(properties);

  eventGateway(emit, t, TILE_SOURCE_EVENTS);

  return t;
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
