<template>
  <div ref="mapRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted, watch } from "vue";
import type { AtPixelOptions } from "ol/Map";
import Map from "ol/Map";
import { defaults } from "ol/interaction/defaults";
import type Collection from "ol/Collection";
import type Control from "ol/control/Control";
import type { FeatureLike } from "ol/Feature";
import type { SimpleGeometry } from "ol/geom";
import type LayerRenderer from "ol/renderer/Layer";
import type { Layer } from "ol/layer";
import type { Pixel } from "ol/pixel";
import type { Source } from "ol/source";
import type { Coordinate } from "ol/coordinate";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    controls?: Collection<Control> | Control[] | undefined;
    pixelRatio?: number | undefined;

    loadTilesWhileAnimating?: boolean;
    loadTilesWhileInteracting?: boolean;
    moveTolerance?: number;
    altShiftDragRotate?: boolean;
    onFocusOnly?: boolean;
    doubleClickZoom?: boolean;
    keyboard?: boolean;
    mouseWheelZoom?: boolean;
    shiftDragZoom?: boolean;
    dragPan?: boolean;
    pinchRotate?: boolean;
    pinchZoom?: boolean;
  }>(),
  {
    loadTilesWhileAnimating: false,
    loadTilesWhileInteracting: false,
    moveTolerance: 1,
    pixelRatio: 1,
    controls: undefined,
    altShiftDragRotate: true,
    onFocusOnly: true,
    doubleClickZoom: true,
    keyboard: true,
    mouseWheelZoom: true,
    shiftDragZoom: true,
    dragPan: true,
    pinchRotate: true,
    pinchZoom: true,
  }
);

const emit = defineEmits([
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
]);

const { properties } = usePropsAsObjectProperties(props);

const mapRef = ref<string | HTMLElement | undefined>(undefined);
let map: Map | undefined = new Map({
  ...properties,
  interactions: defaults({
    ...properties,
  }),
});

watch(properties, () => {
  map?.setProperties({
    ...properties,
    interactions: defaults({
      ...properties,
    }),
  });
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
    arg1: Layer<Source, LayerRenderer<any>>,
    arg2: SimpleGeometry
  ) => unknown,
  options?: AtPixelOptions | undefined
) => map?.forEachFeatureAtPixel(pixel, callback, options);
const getCoordinateFromPixel = (pixel: Coordinate) =>
  map?.getCoordinateFromPixel(pixel);
const render = () => map?.render();
const updateSize = () => map?.updateSize();

map.on("click", (event) => emit("click", event));
map.on("dblclick", (event) => emit("dblclick", event));
map.on("singleclick", (event) => emit("singleclick", event));
map.on("pointerdrag", (event) => emit("pointerdrag", event));
map.on("pointermove", (event) => emit("pointermove", event));

map.on("movestart", (event) => emit("movestart", event));
map.on("moveend", (event) => emit("moveend", event));
map.on("postrender", (event) => emit("postrender", event));
map.on("precompose", (event) => emit("precompose", event));
map.on("postcompose", (event) => emit("postcompose", event));

defineExpose({
  map,
  mapRef,
  forEachFeatureAtPixel,
  getCoordinateFromPixel,
  render,
  updateSize,
});
</script>
