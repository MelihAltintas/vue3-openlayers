<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileArcGISRest, { type Options } from "ol/source/TileArcGISRest";
import { inject, onMounted, onUnmounted, watch, computed, type Ref } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { createXYZ } from "ol/tilegrid";
import type TileLayer from "ol/layer/Tile";
import type ImageTile from "ol/ImageTile";
import projectionFromProperties from "@/helpers/projection";
import {
  TILE_SOURCE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

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
const { properties } = usePropsAsObjectProperties(props);

const getTileGrid = computed(() => {
  return (
    props.tileGrid ||
    createXYZ({
      tileSize: props.tileSize,
    })
  );
});

const source = computed(
  () =>
    new TileArcGISRest({
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

<style lang=""></style>
