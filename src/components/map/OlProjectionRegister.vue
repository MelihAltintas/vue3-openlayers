<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import type { ProjectionDefinition } from "proj4";
import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import Projection from "ol/proj/Projection";
import type { Extent } from "ol/extent";

const props = withDefaults(
  defineProps<{
    projectionName: string;
    projectionDef: string | ProjectionDefinition;
    projectionExtent?: Extent;
  }>(),
  {
    projectionExtent: undefined,
  }
);

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
