<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import type { RequestEncoding, Options } from "ol/source/WMTS";
import WMTS from "ol/source/WMTS";
import type { Options as ProjectionOptions } from "ol/proj/Projection";
import Projection from "ol/proj/Projection";
import TileGrid from "ol/tilegrid/TileGrid";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import type { ProjectionLike } from "ol/proj";
import { get as getProjection } from "ol/proj";
import type { Extent } from "ol/extent";
import { getTopLeft, getWidth } from "ol/extent";
import type { Ref } from "vue";
import { inject, onMounted, onUnmounted, watch, computed } from "vue";
import type TileSource from "ol/source/Tile";
import type TileLayer from "ol/layer/Tile";
import type { Coordinate } from "ol/coordinate";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    tileZoomLevel?: number;
    attributions?: string;
    cacheSize?: number;
    crossOrigin?: string;
    imageSmoothing?: boolean;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    tilePixelRatio?: number;
    format: string;
    version?: string;
    matrixSet: string;
    tileGrid?: TileGrid;
    dimensions?: Record<string, unknown>;
    requestEncoding?: RequestEncoding;
    url: string;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
    layer: string;
    tileMatrixPrefix?: string;
    styles: string;
  }>(),
  {
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

const getTileGrid = computed(() => {
  const extent: Extent | null =
    // @ts-ignore
    getProjection(properties.projection as ProjectionLike)?.getExtent() || null;

  const origin: Coordinate | undefined = extent
    ? getTopLeft(extent)
    : undefined;
  const size: number = extent ? getWidth(extent) / 256 : 0;

  const resolutions = [properties.tileZoomLevel];
  const matrixIds = [`${properties.tileZoomLevel}`];

  // @ts-ignore eslint-disable-next-line no-plusplus
  for (let z = 0; z < properties.tileZoomLevel; ++z) {
    // @ts-ignore
    resolutions[z] = size / Math.pow(2, z);
    matrixIds[z] = props.tileMatrixPrefix + z;
  }

  // @ts-ignore
  return new WMTSTileGrid({
    origin,
    resolutions,
    matrixIds,
  } as Options);
});

const source = computed(
  () =>
    new WMTS({
      ...properties,
      projection:
        typeof properties.projection === "string"
          ? properties.projection
          : // @ts-ignore
            new Projection({
              // @ts-ignore
              ...(properties.projection as ProjectionOptions),
            }),
      tileGrid: properties.tileGrid || getTileGrid.value,
    } as unknown as Options)
);

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
