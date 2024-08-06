<template>
  <div ref="mapRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref, watch } from "vue";
import type { AtPixelOptions } from "ol/Map";
import Map, { type MapOptions } from "ol/Map";
import type { FeatureLike } from "ol/Feature";
import type { SimpleGeometry } from "ol/geom";
import type { Layer } from "ol/layer";
import type { Pixel } from "ol/pixel";
import type { Source } from "ol/source";
import type { Coordinate } from "ol/coordinate";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { mergeProperties } from "@/helpers/properties";

const props = defineProps<MapOptions & { instance?: Map }>();

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

const properties = usePropsAsObjectProperties({
  ...props,
  instance: undefined,
});

const mapRef = ref<string | HTMLElement | undefined>(undefined);
let map: Map =
  props.instance || new Map({ ...properties, instance: undefined });

watch(
  properties,
  () => {
    const p = props.instance
      ? mergeProperties(properties, props.instance.getProperties())
      : properties;
    map?.setProperties(p);
  },
  { immediate: true },
);

onMounted(() => {
  // bind the map to the component template if not re-using an existing one passed via prop.
  if (!props.instance) {
    map?.setTarget(mapRef.value);
  }
});

onUnmounted(() => {
  if (!props.instance) {
    map?.setTarget(undefined);
  }
  map = undefined;
});

provide("map", map);

const forEachFeatureAtPixel = (
  pixel: Pixel,
  callback: (
    arg0: FeatureLike,
    arg1: Layer<Source>,
    arg2: SimpleGeometry,
  ) => unknown,
  options?: AtPixelOptions,
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
map.on("loadstart", () => {
  map?.getTargetElement().classList.add("ol-map");
  map?.getTargetElement().classList.add("ol-map-loading");
  map?.getTargetElement().classList.remove("ol-map-fully-loaded");
});
map.on("loadend", () => {
  map?.getTargetElement().classList.add("ol-map-fully-loaded");
  map?.getTargetElement().classList.remove("ol-map-loading");
});

defineExpose({
  map,
  mapRef,
  forEachFeatureAtPixel,
  getCoordinateFromPixel,
  render,
  updateSize,
});
</script>
