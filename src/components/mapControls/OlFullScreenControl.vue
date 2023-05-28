<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import { FullScreen } from "ol/control";
import useControl from "@/composables/useControl";
import { useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "ol-full-screen",
  },
  label: {
    type: String,
    default: "\u2922",
  },
  labelActive: {
    type: String,
    default: "\u00d7",
  },
  activeClassName: {
    type: String,
    default: "ol-full-screen-true",
  },
  inactiveClassName: {
    type: String,
    default: "ol-full-screen-false",
  },
  tipLabel: {
    type: String,
    default: "Toggle full-screen",
  },
  keys: {
    type: Boolean,
    default: false,
  },
  target: {
    type: Object,
    default: undefined,
  },
  source: {
    type: Object,
    default: undefined,
  },
});

const attrs = useAttrs();
const { control } = useControl(FullScreen, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
