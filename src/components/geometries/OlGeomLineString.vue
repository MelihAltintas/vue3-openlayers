<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import LineString from "ol/geom/LineString";
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

const { geometry } = useGeometry(LineString, props);

defineExpose({
  geometry,
});
</script>

<style lang=""></style>
