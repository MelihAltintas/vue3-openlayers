<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { OverviewMap } from "ol/control";
import useControl from "@/composables/useControl";
import { provide, inject, onMounted, onUnmounted, useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "ol-overviewmap",
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
  collapseLabel: {
    type: String,
    default: "«",
  },
  collapsible: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: "»",
  },
  render: {
    type: Function,
  },
  rotateWithView: {
    type: Boolean,
    default: false,
  },
  target: {
    type: HTMLElement,
  },

  tipLabel: {
    type: String,
    default: "Overview map",
  },
});

const map = inject("map");

const attrs = useAttrs();
const { control } = useControl(OverviewMap, props, { attrs });

onMounted(() => {
  control.value.setMap(map);
});

onUnmounted(() => {
  control.value.setMap(null);
});

provide("overviewMap", control);

defineExpose({
  control,
});
</script>

<style lang=""></style>
