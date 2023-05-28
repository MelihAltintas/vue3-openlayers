<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import Point from "ol/geom/Point";
import useGeometry from "@/composables/useGeometry";

const props = defineProps({
  coordinates: {
    type: Array,
  },
  opt_layout: {
    type: String,
    default: "XY",
  },
});

const { geometry } = useGeometry(Point, props);

defineExpose({
  geometry,
});
</script>

<style lang=""></style>
