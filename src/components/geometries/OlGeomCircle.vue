<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import Circle from "ol/geom/Circle";
import useGeometry from "@/composables/useGeometry";
import type { TypedClassArgs } from "@/types";

type Args = TypedClassArgs<typeof Circle, ["center", "radius", "layout"]>;
type Props = {
  center: Args["center"];
  radius?: Args["radius"];
  layout?: Args["layout"];
};
const props = withDefaults(defineProps<Props>(), {
  layout: "XY",
});

const geometry = useGeometry(Circle, props);

defineExpose({
  geometry,
});
</script>
