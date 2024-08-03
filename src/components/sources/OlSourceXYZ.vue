<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import XYZ, { type Options } from "ol/source/XYZ";
import type { Ref } from "vue";
import { inject } from "vue";
import type TileLayer from "ol/layer/Tile";
import type { ImageTile } from "ol";
import { TILE_SOURCE_EVENTS } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  attributionsCollapsible: true,
  interpolate: true,
  maxZoom: 42,
  minZoom: 0,
  projection: "EPSG:3857",
  reprojectionErrorThreshold: 0.5,
  tileSize: () => [256, 256],
  tilePixelRatio: 1,
  gutter: 0,
  tileLoadFunction: (imageTile, src) => {
    ((imageTile as ImageTile).getImage() as HTMLImageElement).src = src;
  },
  wrapX: true,
  transition: 250,
  zDirection: 0,
});

const layer = inject<Ref<TileLayer<XYZ>> | null>("tileLayer");

const { source } = useSource(XYZ, layer, props, TILE_SOURCE_EVENTS);

defineExpose({
  layer,
  source,
});
</script>
