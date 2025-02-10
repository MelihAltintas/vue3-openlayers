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
import type { CommonEvents } from "@/composables";
import type { MapBrowserEvent, MapEvent } from "ol";
import type { ObjectEvent } from "ol/Object";
import type RenderEvent from "ol/render/Event";

type Props = MapOptions & { instance?: Map };
const props = defineProps<Props>();

type Emits = CommonEvents & {
  (e: "change:layerGroup", event: ObjectEvent): void;
  (e: "change:size", event: ObjectEvent): void;
  (e: "change:target", event: ObjectEvent): void;
  (e: "change:view", event: ObjectEvent): void;
  (e: "click", event: MapBrowserEvent<UIEvent>): void;
  (e: "dblclick", event: MapBrowserEvent<UIEvent>): void;
  (e: "singleclick", event: MapBrowserEvent<UIEvent>): void;
  (e: "loadstart", event: MapEvent): void;
  (e: "loadend", event: MapEvent): void;
  (e: "pointerdrag", event: MapBrowserEvent<UIEvent>): void;
  (e: "pointermove", event: MapBrowserEvent<UIEvent>): void;
  (e: "movestart", event: MapEvent): void;
  (e: "moveend", event: MapEvent): void;
  (e: "postrender", event: MapEvent): void;
  (e: "precompose", event: RenderEvent): void;
  (e: "postcompose", event: RenderEvent): void;
  (e: "rendercomplete", event: RenderEvent): void;
};
const emit = defineEmits<Emits>();

const properties = usePropsAsObjectProperties({
  ...props,
  instance: undefined,
});

const mapRef = ref<string | HTMLElement | undefined>(undefined);
let map: Map | undefined =
  props.instance || new Map({ ...(properties as MapOptions) });

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

map.on("change", (event) => emit("change", event));
map.on("error", (event) => emit("error", event));
map.on("propertychange", (event) => emit("propertychange", event));
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
map.on("loadstart", (event) => {
  map?.getTargetElement().classList.add("ol-map");
  map?.getTargetElement().classList.add("ol-map-loading");
  map?.getTargetElement().classList.remove("ol-map-fully-loaded");
  emit("loadstart", event);
});
map.on("loadend", (event) => {
  map?.getTargetElement().classList.add("ol-map-fully-loaded");
  map?.getTargetElement().classList.remove("ol-map-loading");
  emit("loadend", event);
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
