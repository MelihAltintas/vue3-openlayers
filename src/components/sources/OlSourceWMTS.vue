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
import type { TileSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

type Props = Omit<Options, "style" | "tileGrid"> & {
  tileGrid?: WMTSTileGrid;
  styles?: string | unknown[];
  tileZoomLevel?: number;
  tileMatrixPrefix?: string;
};
const props = withDefaults(defineProps<Props>(), {
  attributionsCollapsible: true,
  interpolate: true,
  tileZoomLevel: 30,
  tileMatrixPrefix: "",
});
defineEmits<TileSourceEvents>();

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

const tileGrid = computed(() => {
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

const { source } = useSource(WMTS, tileLayer, {
  ...props,
  style: props.styles,
  tileGrid: tileGrid.value,
});

defineExpose({
  tileLayer,
  source,
});
</script>
