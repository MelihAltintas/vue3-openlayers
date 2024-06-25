<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Polygon from "ol/geom/Polygon";
import useGeometry from "@/composables/useGeometry";

const props = withDefaults(
  defineProps<{
    coordinates: number[][][];
    opt_layout?: string;
  }>(),
  {
    opt_layout: "XY",
  },
);

const geometry = useGeometry(Polygon, props);

defineExpose({
  geometry,
});
</script>
