<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import useControl from "@/composables/useControl";

import { ScaleLine } from "ol/control";
import { useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "ol-scale-line",
  },
  minWidth: {
    type: Number,
    default: 64,
  },
  render: {
    type: Function,
  },
  target: {
    type: HTMLElement,
  },
  units: {
    type: String,
    default: "metric",
  },
  bar: {
    type: Boolean,
    default: false,
  },

  steps: {
    type: Number,
    default: 4,
  },
  text: {
    type: Boolean,
    default: false,
  },
  dpi: {
    type: Number,
    default: undefined,
  },
});

const attrs = useAttrs();
const { control } = useControl(ScaleLine, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
