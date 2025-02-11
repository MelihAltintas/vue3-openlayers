<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import MultiLineString from "ol/geom/MultiLineString";
import useGeometry from "@/composables/useGeometry";
import type { TypedClassArgs } from "@/types";

type Args = TypedClassArgs<
  typeof MultiLineString,
  ["coordinates", "layout", "ends"]
>;
type Props = {
  coordinates: Args["coordinates"];
  layout?: Args["layout"];
  ends?: Args["ends"];
};

const props = withDefaults(defineProps<Props>(), {
  layout: "XY",
});

const geometry = useGeometry(MultiLineString, props);

defineExpose({
  geometry,
});
</script>
