<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import { TileArcGISRest } from "ol/source";
import Projection from "ol/proj/Projection";
import { inject, onMounted, onUnmounted, watch, computed, type Ref } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { createXYZ } from "ol/tilegrid";
import type { ProjectionLike } from "ol/proj";
import type { Options } from "ol/source/TileArcGISRest";
import type { Options as ProjectionOptions } from "ol/proj/Projection";
import type TileLayer from "ol/layer/Tile";
import type TileSource from "ol/source/Tile";

const props = withDefaults(
  defineProps<{
    attributions?: string;
    cacheSize?: number;
    crossOrigin?: string;
    interpolate?: boolean;
    params: Options;
    hidpi?: boolean;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    tileLoadFunction?: (imageTile: any, src: string) => void;
    url: string;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
    tileSize?: [number, number];
  }>(),
  {
    interpolate: true,
    hidpi: false,
    projection: "EPSG:3857",
    reprojectionErrorThreshold: 0.5,
    tileLoadFunction: (imageTile: any, src: string) => {
      imageTile.getImage().src = src;
    },
    wrapX: false,
    tileSize: () => [256, 256],
  }
);

const tileLayer = inject<Ref<TileLayer<TileSource>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);

const getTileGrid = computed(() => {
  return createXYZ({
    tileSize: props.tileSize,
  });
});

const source = computed(
  () =>
    new TileArcGISRest({
      ...properties,
      projection:
        typeof properties.projection == "string"
          ? properties.projection
          : // @ts-ignore
            new Projection({
              // @ts-ignore
              ...(properties.projection as unknown as ProjectionOptions),
            }),
      tileGrid: getTileGrid.value,
    })
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

<style lang=""></style>
