<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import Polygon from "ol/geom/Polygon";
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

const { geometry } = useGeometry(Polygon, props);

defineExpose({
  geometry,
});
</script>

<style lang=""></style>
