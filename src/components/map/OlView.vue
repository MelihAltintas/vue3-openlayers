<template><div v-if="false"></div></template>
<script setup lang="ts">
import type { Extent } from "ol/extent";
import type { Options } from "ol/proj/Projection";
import useView from "@/composables/useView";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    center?: unknown[];
    constrainRotation?: boolean;
    enableRotation?: boolean;
    extent?: Extent;
    constrainOnlyCenter?: boolean;
    smoothExtentConstraint?: boolean;
    maxResolution?: number;
    minResolution?: number;
    maxZoom?: number;
    minZoom?: number;
    multiWorld?: boolean;
    constrainResolution?: boolean;
    smoothResolutionConstraint?: boolean;
    showFullExtent?: boolean;
    projection?: string | Options;
    resolution?: number;
    resolutions?: unknown[];
    rotation?: number;
    zoom?: number;
    zoomFactor?: number;
    padding?: number[];
  }>(),
  {
    center: () => [0, 0],
    constrainRotation: true,
    enableRotation: true,
    constrainOnlyCenter: false,
    smoothExtentConstraint: true,
    maxZoom: 28,
    minZoom: 0,
    multiWorld: false,
    constrainResolution: false,
    smoothResolutionConstraint: true,
    showFullExtent: false,
    projection: "EPSG:3857",
    zoom: 0,
    zoomFactor: 2,
    padding: () => [0, 0, 0, 0],
  }
);

const emit = defineEmits([
  "centerChanged",
  "zoomChanged",
  "resolutionChanged",
  "rotationChanged",
]);
const view = useView(props, emit);

defineExpose({
  ...view,
});
</script>

<style lang=""></style>
