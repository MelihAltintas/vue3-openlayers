<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileWMS, { type Options } from "ol/source/TileWMS";
import { inject, type Ref } from "vue";
import type TileLayer from "ol/layer/Tile";
import type { ImageTile } from "ol";
import { TILE_SOURCE_EVENTS } from "@/composables/useOpenLayersEvents";
import type { TileGrid } from "ol/tilegrid";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<
    Options & {
      layers: string | unknown[];
      styles?: string | unknown[];
    }
  >(),
  {
    attributionsCollapsible: true,
    interpolate: true,
    styles: "",
    gutter: 0,
    hidpi: true,
    projection: "EPSG:3857",
    reprojectionErrorThreshold: 0.5,
    tileLoadFunction: (imageTile, src) => {
      ((imageTile as ImageTile).getImage() as HTMLImageElement).src = src;
    },
    wrapX: true,
  },
);

const layer = inject<Ref<TileLayer<TileWMS>> | null>("tileLayer");

const { source } = useSource(
  TileWMS,
  layer,
  {
    ...props,
    params: {
      ...props.params,
      LAYERS: props.layers,
      STYLES: props.styles,
    },
    tileGrid: props.tileGrid as TileGrid | undefined,
  },
  TILE_SOURCE_EVENTS,
);

defineExpose({
  layer,
  source,
});
</script>
