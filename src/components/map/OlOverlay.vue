<template lang="">
  <div ref="htmlContent">
    <slot :position="position"> </slot>
  </div>
</template>

<script setup lang="ts">
import type { PanIntoViewOptions, Positioning } from "ol/Overlay";
import Overlay from "ol/Overlay";
import {
  inject,
  ref,
  watchEffect,
  watch,
  onMounted,
  onUnmounted,
  computed,
} from "vue";

import type Map from "ol/Map";
import type { Coordinate } from "ol/coordinate";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps({
  position: {
    type: Array,
  },
  offset: {
    type: Array,
  },
  positioning: {
    type: String,
  },
  stopEvent: {
    type: Boolean,
    default: true,
  },
  insertFirst: {
    type: Boolean,
    default: true,
  },
  autoPan: {
    type: Boolean,
    default: false,
  },
  autoPanMargin: {
    type: Number,
    default: 20,
  },
  autoPanAnimation: {
    type: Object,
    default: undefined,
  },
});

const emit = defineEmits([
  "elementChanged",
  "offsetChanged",
  "positionChanged",
  "positioningChanged",
]);

const map = inject<Map>("map");

const htmlContent = ref<HTMLElement>();

const { properties } = usePropsAsObjectProperties(props);

const overlay = computed(
  () => new Overlay(properties as Record<string, unknown>)
);

const getElement = () => overlay.value.getElement();
const getOffset = () => overlay.value.getOffset();
const getPosition = () => overlay.value.getPosition();
const getPositioning = () => overlay.value.getPositioning();
const panIntoView = (optPanIntoViewOptions: PanIntoViewOptions) =>
  overlay.value.panIntoView(optPanIntoViewOptions);
const setElement = (element: HTMLElement | undefined) =>
  overlay.value.setElement(element);
const setOffset = (offset: number[]) => overlay.value.setOffset(offset);
const setPosition = (position?: Coordinate) =>
  overlay.value.setPosition(position);
const setPositioning = (positioning: Positioning) =>
  overlay.value.setPositioning(positioning);

overlay.value.on("change:element", () => emit("elementChanged", getElement()));
overlay.value.on("change:offset", () => emit("offsetChanged", getOffset()));
overlay.value.on("change:position", () =>
  emit("positionChanged", getPosition())
);
overlay.value.on("change:positioning", () =>
  emit("positioningChanged", getPositioning())
);

onMounted(() => {
  map?.addOverlay(overlay.value);
});

onUnmounted(() => {
  map?.removeOverlay(overlay.value);
});

watch(overlay, (newVal, oldVal) => {
  map?.removeOverlay(oldVal);
  map?.addOverlay(newVal);
});

watchEffect(
  () => {
    setElement(htmlContent.value);
  },
  {
    flush: "post",
  }
);

defineExpose({
  overlay,
  htmlContent,
  getOffset,
  getPosition,
  getPositioning,
  panIntoView,
  setElement,
  setOffset,
  setPosition,
  setPositioning,
});
</script>

<style lang=""></style>
