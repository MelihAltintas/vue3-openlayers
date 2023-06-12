<template><div v-if="false"></div></template>

<script setup lang="ts">
import Circle from "ol/geom/Circle";
import useGeometry from "@/composables/useGeometry";

const props = withDefaults(
  defineProps<{
    center: number[];
    radius: number;
    opt_layout?: string;
  }>(),
  {
    opt_layout: "XY",
  }
);

const { geometry } = useGeometry(Circle, props);

defineExpose({
  geometry,
});
</script>
