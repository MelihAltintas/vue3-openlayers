<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import XYZ, { type Options } from "ol/source/XYZ";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { ImageTile } from "ol";
import eventGateway, { TILE_SOURCE_EVENTS } from "@/helpers/eventGateway";
import projectionFromProperties from "@/helpers/projection";

const props = withDefaults(defineProps<Options>(), {
  attributionsCollapsible: true,
  interpolate: true,
  opaque: true,
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
const emit = defineEmits([]);

const layer = inject<Ref<TileLayer<XYZ>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => {
  const xyz = new XYZ({
    ...properties,
    projection: projectionFromProperties(properties.projection),
  });

  eventGateway(emit, xyz, TILE_SOURCE_EVENTS);

  return xyz;
});

watch(source, () => {
  layer?.value?.setSource(source.value);
});

watch(
  () => layer?.value,
  () => {
    layer?.value?.setSource(source.value);
  }
);
onMounted(() => {
  layer?.value?.setSource(source.value);
});

onUnmounted(() => {
  layer?.value?.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>
