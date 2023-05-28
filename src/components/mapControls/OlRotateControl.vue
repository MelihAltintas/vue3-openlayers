<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import useControl from "@/composables/useControl";
import Rotate from "ol/control/Rotate";
import { useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "ol-rotate",
  },
  label: {
    type: String,
    default: "⇧",
  },
  tipLabel: {
    type: String,
    default: "Reset rotation",
  },
  compassClassName: {
    type: String,
    default: "ol-compass",
  },
  duration: {
    type: Number,
    default: 250,
  },

  autoHide: {
    type: Boolean,
    default: false,
  },
  render: {
    type: Function,
  },
  resetNorth: {
    type: Function,
  },
  target: {
    type: HTMLElement,
  },
});

const attrs = useAttrs();
const { control } = useControl(Rotate, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
