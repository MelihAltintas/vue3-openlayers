<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import MultiPolygon from "ol/geom/MultiPolygon";
import useGeometry from "@/composables/useGeometry";
import type { TypedClassArgs } from "@/types";

type Args = TypedClassArgs<
  typeof MultiPolygon,
  ["coordinates", "layout", "endss"]
>;
type Props = {
  coordinates: Args["coordinates"];
  layout?: Args["layout"];
  endss?: Args["endss"];
};

const props = withDefaults(defineProps<Props>(), {
  layout: "XY",
});

const geometry = useGeometry(MultiPolygon, props);

defineExpose({
  geometry,
});
</script>
