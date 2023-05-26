<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import { toRefs } from "vue";
import Projection from "ol/proj/Projection";

const props = defineProps({
  projectionName: {
    type: String,
  },
  projectionDef: {
    type: String,
  },
  projectionExtent: {
    type: Array,
  },
});
const { projectionName, projectionDef, projectionExtent } = toRefs(props);

proj4.defs(projectionName.value, projectionDef.value);
register(proj4);

const projection = new Projection({
  code: projectionName.value,
  extent: projectionExtent.value,
});

defineExpose({
  projection,
});
</script>

<style lang=""></style>
