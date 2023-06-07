<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import { Attribution } from "ol/control";
import useControl from "@/composables/useControl";
import { useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "ol-attribution",
  },
  target: {
    type: HTMLElement,
  },
  collapsible: {
    type: Boolean,
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
  tipLabel: {
    type: String,
    default: "Attributions",
  },

  label: {
    type: String,
    default: "i",
  },
  expandClassName: {
    type: String,
    default: "ol-attribution-expand",
  },
  collapseLabel: {
    type: String,
    default: "»",
  },
  collapseClassName: {
    type: String,
    default: "ol-attribution-collapse",
  },
  render: {
    type: Function,
  },
});

const attrs = useAttrs();
const { control } = useControl(Attribution, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
