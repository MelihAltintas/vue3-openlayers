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
import { watch, computed, ref } from "vue";
import Geolocation from "ol/Geolocation";
import type { Coordinate } from "ol/coordinate";
import type Polygon from "ol/geom/Polygon";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { ProjectionLike } from "ol/proj";

const emit = defineEmits([
  "positionChanged",
  "speedChanged",
  "headingChanged",
  "altitudeChanged",
  "altitudeAccuracyChanged",
  "accuracyGeometryChanged",
]);

const props = withDefaults(
  defineProps<{
    projection: ProjectionLike;
    tracking?: boolean;
    trackingOptions?: {
      enableHighAccuracy: boolean;
    };
  }>(),
  {
    projection: "EPSG:3857",
    tracking: true,
    trackingOptions: () => ({
      enableHighAccuracy: true,
    }),
  }
);

const { properties } = usePropsAsObjectProperties(props);

const geoLoc = computed(() => {
  const g = new Geolocation(properties);
  g.on("change", changeEvt);
  return g;
});

const position = ref<Coordinate | undefined>([]);
const accuracy = ref<number | undefined>(0);
const altitude = ref<number | undefined>(0);
const altitudeAccuracy = ref<number | undefined>(0);
const speed = ref<number | undefined>(0);
const heading = ref<number | undefined>(0);
const accuracyGeometry = ref<Polygon | null>(null);

watch(position, () => {
  emit("positionChanged", position.value);
});

watch(speed, () => {
  emit("speedChanged", speed.value);
});

watch(heading, () => {
  emit("headingChanged", heading.value);
});

watch(altitude, () => {
  emit("altitudeChanged", altitude.value);
});

watch(altitudeAccuracy, () => {
  emit("altitudeAccuracyChanged", altitudeAccuracy.value);
});

watch(accuracyGeometry, () => {
  emit("accuracyGeometryChanged", accuracyGeometry.value);
});

const changeEvt = () => {
  position.value = geoLoc.value.getPosition();
  speed.value = geoLoc.value.getSpeed();
  heading.value = geoLoc.value.getHeading();
  accuracy.value = geoLoc.value.getAccuracy();
  altitude.value = geoLoc.value.getAltitude();
  altitudeAccuracy.value = geoLoc.value.getAltitudeAccuracy();
  accuracyGeometry.value = geoLoc.value.getAccuracyGeometry();
};

watch(geoLoc, (newVal, oldVal) => {
  oldVal.un("change", changeEvt);
  newVal.on("change", changeEvt);
});

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
