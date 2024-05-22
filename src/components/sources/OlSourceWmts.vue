<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import WMTS, { type Options } from "ol/source/WMTS";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { get as getProjection, type ProjectionLike } from "ol/proj";
import type { Extent } from "ol/extent";
import { getTopLeft, getWidth } from "ol/extent";
import type { Ref } from "vue";
import { computed, inject } from "vue";
import type TileSource from "ol/source/Tile";
import type TileLayer from "ol/layer/Tile";
import type { Coordinate } from "ol/coordinate";
import { TILE_SOURCE_EVENTS } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<
    Omit<Options, "style"> & {
      styles?: string | unknown[];
      tileZoomLevel?: number;
      tileMatrixPrefix?: string;
      tileGrid?: WMTSTileGrid;
    }
  >(),
  {
    attributionsCollapsible: true,
    tileZoomLevel: 30,
    projection: "EPSG:3857",
    reprojectionErrorThreshold: 0.5,
    tilePixelRatio: 1,
    format: "image/jpeg",
    version: "1.0.0",
    requestEncoding: "KVP",
    wrapX: false,
    tileMatrixPrefix: "",
  },
);

const tileLayer = inject<Ref<TileLayer<TileSource>> | null>("tileLayer");

const extent = computed((): Extent | undefined => {
  return getProjection(props.projection as ProjectionLike)?.getExtent();
});
const origin = computed((): Coordinate | undefined => {
  return extent.value ? getTopLeft(extent.value) : undefined;
});
const size = computed(() => {
  return extent.value ? getWidth(extent.value) / 256 : 0;
});

const getTileGrid = computed(() => {
  if (props.tileGrid) {
    return props.tileGrid;
  }

  const resolutions = [props.tileZoomLevel];
  const matrixIds = [`${props.tileZoomLevel}`];

  for (let z = 0; z < props.tileZoomLevel; ++z) {
    resolutions[z] = size.value / Math.pow(2, z);
    matrixIds[z] = props.tileMatrixPrefix + z;
  }

  return new WMTSTileGrid({
    origin: origin.value,
    resolutions,
    matrixIds,
  });
});

const { source } = useSource(
  WMTS,
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
