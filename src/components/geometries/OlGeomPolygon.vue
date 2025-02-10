<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Polygon from "ol/geom/Polygon";
import useGeometry from "@/composables/useGeometry";
import type { TypedClassArgs } from "@/types";

type Args = TypedClassArgs<typeof Polygon, ["coordinates", "layout", "ends"]>;
type Props = {
  coordinates: Args["coordinates"];
  layout?: Args["layout"];
  ends?: Args["ends"];
};

const props = withDefaults(defineProps<Props>(), {
  layout: "XY",
});

const geometry = useGeometry(Polygon, props);

defineExpose({
  geometry,
});
</script>
