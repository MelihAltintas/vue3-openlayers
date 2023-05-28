<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import MultiPolygon from "ol/geom/MultiPolygon";
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

const { geometry } = useGeometry(MultiPolygon, props);

defineExpose({
  geometry,
});
</script>

<style lang=""></style>
