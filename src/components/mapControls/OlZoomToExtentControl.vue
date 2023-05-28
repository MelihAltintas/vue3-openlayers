<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import useControl from "@/composables/useControl";

import ZoomToExtent from "ol/control/ZoomToExtent";
import { useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "ol-zoom-extent",
  },
  target: {
    type: HTMLElement,
  },
  label: {
    type: String,
    default: "E",
  },
  tipLabel: {
    type: String,
    default: "Fit to extent",
  },
  extent: {
    type: Array,
  },
});

const attrs = useAttrs();
const { control } = useControl(ZoomToExtent, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
