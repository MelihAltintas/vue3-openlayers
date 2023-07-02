<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import WMTS, { type Options } from "ol/source/WMTS";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { get as getProjection } from "ol/proj";
import type { Extent } from "ol/extent";
import { getTopLeft, getWidth } from "ol/extent";
import type { Ref } from "vue";
import { inject, onMounted, onUnmounted, watch, computed } from "vue";
import type TileSource from "ol/source/Tile";
import type TileLayer from "ol/layer/Tile";
import type { Coordinate } from "ol/coordinate";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import projectionFromProperties from "@/helpers/projection";
import {
  TILE_SOURCE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<
    Options & {
      styles?: string | unknown[];
      tileZoomLevel?: number;
      tileMatrixPrefix?: string;
    }
  >(),
  {
    attributionsCollapsible: true,
    tileZoomLevel: 30,
    imageSmoothing: true,
    projection: "EPSG:3857",
    reprojectionErrorThreshold: 0.5,
    tilePixelRatio: 1,
    format: "image/jpeg",
    version: "1.0.0",
    requestEncoding: "KVP",
    wrapX: false,
    tileMatrixPrefix: "",
  }
);

const tileLayer = inject<Ref<TileLayer<TileSource>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);

const extent = computed((): Extent | undefined => {
  return getProjection(properties.projection)?.getExtent();
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

  const resolutions = [properties.tileZoomLevel];
  const matrixIds = [`${properties.tileZoomLevel}`];

  for (let z = 0; z < properties.tileZoomLevel; ++z) {
    resolutions[z] = size.value / Math.pow(2, z);
    matrixIds[z] = props.tileMatrixPrefix + z;
  }

  return new WMTSTileGrid({
    origin: origin.value,
    resolutions,
    matrixIds,
  });
});

const source = computed(
  () =>
    new WMTS({
      ...properties,
      projection: projectionFromProperties(properties.projection),
      tileGrid: getTileGrid.value,
    })
);

useOpenLayersEvents(source, TILE_SOURCE_EVENTS);

watch(source, () => {
  tileLayer?.value?.setSource(source.value);
});

watch(
  () => tileLayer,
  () => {
    tileLayer?.value?.setSource(source.value);
  }
);

onMounted(() => {
  tileLayer?.value?.setSource(source.value);
});

onUnmounted(() => {
  tileLayer?.value?.setSource(null);
});

defineExpose({
  tileLayer,
  source,
});
</script>
