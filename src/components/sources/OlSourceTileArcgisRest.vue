<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileArcGISRest, { type Options } from "ol/source/TileArcGISRest";
import { computed, inject, type Ref } from "vue";
import { createXYZ } from "ol/tilegrid";
import type TileLayer from "ol/layer/Tile";
import type ImageTile from "ol/ImageTile";
import { TILE_SOURCE_EVENTS } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  interpolate: true,
  hidpi: false,
  projection: "EPSG:3857",
  reprojectionErrorThreshold: 0.5,
  tileLoadFunction: (imageTile, src) => {
    ((imageTile as ImageTile).getImage() as HTMLImageElement).src = src;
  },
  wrapX: false,
  tileSize: () => [256, 256],
  zDirection: 0,
});

const tileLayer = inject<Ref<TileLayer<TileArcGISRest>> | null>("tileLayer");

const getTileGrid = computed(() => {
  return (
    props.tileGrid ||
    createXYZ({
      tileSize: props.tileSize,
    })
  );
});

const { source } = useSource(
  TileArcGISRest,
  tileLayer,
  {
    ...props,
    tileGrid: getTileGrid.value,
  },
  TILE_SOURCE_EVENTS,
);

defineExpose({
  tileLayer,
  source,
});
</script>
