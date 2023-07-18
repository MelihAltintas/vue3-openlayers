<template>
  <slot
    :position="position"
    :speed="speed"
    :heading="heading"
    :accuracy="accuracy"
    :altitude="altitude"
    :altitudeAccuracy="altitudeAccuracy"
    :accuracyGeometry="accuracyGeometry"
  ></slot>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Geolocation, { type Options } from "ol/Geolocation";
import type { Coordinate } from "ol/coordinate";
import type Polygon from "ol/geom/Polygon";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  projection: "EPSG:3857",
  tracking: true,
  trackingOptions: () => ({
    enableHighAccuracy: true,
  }),
});

const { properties } = usePropsAsObjectProperties(props);

const geoLoc = computed(() => new Geolocation(properties));

useOpenLayersEvents(geoLoc, [
  "change:accuracy",
  "change:accuracyGeometry",
  "change:altitude",
  "change:altitudeAccuracy",
  "change:heading",
  "change:position",
  "change:projection",
  "change:speed",
  "change:tracking",
  "change:trackingOptions",
]);

const position = ref<Coordinate | undefined>([]);
const accuracy = ref<number | undefined>(0);
const altitude = ref<number | undefined>(0);
const altitudeAccuracy = ref<number | undefined>(0);
const speed = ref<number | undefined>(0);
const heading = ref<number | undefined>(0);
const accuracyGeometry = ref<Polygon | null>(null);

defineExpose({
  geoLoc,
  position,
  accuracy,
  altitude,
  altitudeAccuracy,
  speed,
  heading,
  accuracyGeometry,
});
</script>
