<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import Circle from "ol/geom/Circle";
import useGeometry from "@/composables/useGeometry";

const props = defineProps({
  center: {
    type: Array,
  },
  radius: {
    type: Number,
  },
  opt_layout: {
    type: String,
    default: "XY",
  },
});

const { geometry } = useGeometry(Circle, props);

defineExpose({
  geometry,
});
</script>

<style lang=""></style>
