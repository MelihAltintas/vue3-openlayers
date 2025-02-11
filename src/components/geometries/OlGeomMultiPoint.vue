<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import MultiPoint from "ol/geom/MultiPoint";
import useGeometry from "@/composables/useGeometry";
import type { TypedClassArgs } from "@/types";

type Args = TypedClassArgs<typeof MultiPoint, ["coordinates", "layout"]>;
type Props = {
  coordinates: Args["coordinates"];
  layout?: Args["layout"];
};

const props = withDefaults(defineProps<Props>(), {
  layout: "XY",
});

const geometry = useGeometry(MultiPoint, props);

defineExpose({
  geometry,
});
</script>
