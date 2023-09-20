<template>
  <div ref="mapRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted, watch } from "vue";
import type { AtPixelOptions } from "ol/Map";
import Map, { type MapOptions } from "ol/Map";
import type { FeatureLike } from "ol/Feature";
import type { SimpleGeometry } from "ol/geom";
import type LayerRenderer from "ol/renderer/Layer";
import type { Layer } from "ol/layer";
import type { Pixel } from "ol/pixel";
import type { Source } from "ol/source";
import type { Coordinate } from "ol/coordinate";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps<MapOptions>();

const emit = defineEmits([
  "change:layerGroup",
  "change:size",
  "change:target",
  "change:view",
  "click",
  "dblclick",
  "singleclick",
  "pointerdrag",
  "pointermove",
  "movestart",
  "moveend",
  "postrender",
  "precompose",
  "postcompose",
  "rendercomplete",
]);

const { properties } = usePropsAsObjectProperties(props);

const mapRef = ref<string | HTMLElement | undefined>(undefined);
let map: Map | undefined = new Map(properties);

watch(properties, () => {
  map?.setProperties(properties);
});

onMounted(() => {
  map?.setTarget(mapRef.value);
});

onUnmounted(() => {
  map?.setTarget(undefined);
  map = undefined;
});

provide("map", map);

const forEachFeatureAtPixel = (
  pixel: Pixel,
  callback: (
    arg0: FeatureLike,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arg1: Layer<Source, LayerRenderer<any>>,
    arg2: SimpleGeometry,
  ) => unknown,
  options?: AtPixelOptions | undefined,
) => map?.forEachFeatureAtPixel(pixel, callback, options);
const getCoordinateFromPixel = (pixel: Coordinate) =>
  map?.getCoordinateFromPixel(pixel);
const render = () => map?.render();
const updateSize = () => map?.updateSize();

map.on("click", (event) => emit("click", event));
map.on("change:size", (event) => emit("change:size", event));
map.on("change:target", (event) => emit("change:target", event));
map.on("change:view", (event) => emit("change:view", event));
map.on("dblclick", (event) => emit("dblclick", event));
map.on("singleclick", (event) => emit("singleclick", event));
map.on("pointerdrag", (event) => emit("pointerdrag", event));
map.on("pointermove", (event) => emit("pointermove", event));
map.on("movestart", (event) => emit("movestart", event));
map.on("moveend", (event) => emit("moveend", event));
map.on("postrender", (event) => emit("postrender", event));
map.on("precompose", (event) => emit("precompose", event));
map.on("postcompose", (event) => emit("postcompose", event));
map.on("rendercomplete", (event) => emit("rendercomplete", event));

defineExpose({
  map,
  mapRef,
  forEachFeatureAtPixel,
  getCoordinateFromPixel,
  render,
  updateSize,
});
</script>
