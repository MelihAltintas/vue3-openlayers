<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import LineString from "ol/geom/LineString";
import useGeometry from "@/composables/useGeometry";
import type { TypedClassArgs } from "@/types";

type Args = TypedClassArgs<typeof LineString, ["coordinates", "layout"]>;
type Props = {
  coordinates: Args["coordinates"];
  layout?: Args["layout"];
};

const props = withDefaults(defineProps<Props>(), {
  layout: "XY",
});

const geometry = useGeometry(LineString, props);

defineExpose({
  geometry,
});
</script>
