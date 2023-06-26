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
import eventGateway, { TILE_SOURCE_EVENTS } from "@/helpers/eventGateway";

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
const emit = defineEmits([]);

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

const source = computed(() => {
  const t = new TileArcGISRest({
    ...properties,
    projection: projectionFromProperties(properties.projection),
    tileGrid: getTileGrid.value,
  });

  eventGateway(emit, t, TILE_SOURCE_EVENTS);

  return t;
});

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
