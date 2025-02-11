<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Point from "ol/geom/Point";
import useGeometry from "@/composables/useGeometry";
import type { TypedClassArgs } from "@/types";

type Args = TypedClassArgs<typeof Point, ["coordinates", "layout"]>;
type Props = {
  coordinates: Args["coordinates"];
  layout?: Args["layout"];
};

const props = withDefaults(defineProps<Props>(), {
  layout: "XY",
});

const geometry = useGeometry(Point, props);

defineExpose({
  geometry,
});
</script>
