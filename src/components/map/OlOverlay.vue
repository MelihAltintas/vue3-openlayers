<template lang="">
  <div ref="htmlContent">
    <slot :position="position"> </slot>
  </div>
</template>

<script setup>
import useOverlay from "@/composables/useOverlay";

const props = defineProps({
  position: {
    type: Array,
  },
  offset: {
    type: Array,
  },
  positioning: {
    type: String,
  },
  stopEvent: {
    type: Boolean,
    default: true,
  },
  insertFirst: {
    type: Boolean,
    default: true,
  },
  autoPan: {
    type: Boolean,
    default: false,
  },
  autoPanMargin: {
    type: Number,
    default: 20,
  },
  autoPanAnimation: {
    type: Object,
    default: undefined,
  },
});

const emit = defineEmits([
  "elementChanged",
  "positionChanged",
  "positioningChanged",
]);
const overlay = new useOverlay(props, emit);

defineExpose({
  ...overlay,
});
</script>

<style lang=""></style>
