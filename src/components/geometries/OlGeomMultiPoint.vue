<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import MultiPoint from "ol/geom/MultiPoint";
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

const { geometry } = useGeometry(MultiPoint, props);

defineExpose({
  geometry,
});
</script>

<style lang=""></style>
