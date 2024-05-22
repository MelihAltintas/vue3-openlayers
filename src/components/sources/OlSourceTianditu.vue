<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import { inject } from "vue";
import type TileLayer from "ol/layer/Tile";
import { type Options, Tianditu } from "@/components/sources/TiandituClass";
import type { ImageTile } from "ol";
import { TILE_SOURCE_EVENTS } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

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
  maxZoom: 21,
  tileLoadFunction: (imageTile, src) => {
    ((imageTile as ImageTile).getImage() as HTMLImageElement).src = src;
  },
  wrapX: true,
});

const layer = inject<Ref<TileLayer<Tianditu>> | null>("tileLayer");

const { source } = useSource(Tianditu, layer, props, TILE_SOURCE_EVENTS);

defineExpose({
  layer,
  source,
});
</script>
