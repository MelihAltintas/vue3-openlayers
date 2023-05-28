<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import Zone from "ol-ext/control/MapZone";
import useControl from "@/composables/useControl";
import { useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
  },
  zones: {
    type: Array,
  },
  layer: {
    type: [Object, Function],
  },
  projection: {
    type: String,
    default: "EPSG:3857",
  },
  centerOnClick: {
    type: Boolean,
    default: true,
  },
});

const attrs = useAttrs();
const { control } = useControl(Zone, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
