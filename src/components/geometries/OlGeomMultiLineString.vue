<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import MultiLineString from "ol/geom/MultiLineString";
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

const { geometry } = useGeometry(MultiLineString, props);

defineExpose({
  geometry,
});
</script>

<style lang=""></style>
