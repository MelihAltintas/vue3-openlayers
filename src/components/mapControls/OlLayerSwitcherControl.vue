<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import LayerSwitcher from "ol-ext/control/LayerSwitcher";
import useControl from "@/composables/useControl";
import { useAttrs } from "vue";

const props = defineProps({
  selection: {
    type: Boolean,
  },
  displayInLayerSwitcher: {
    type: Function,
  },
  show_progress: {
    type: Boolean,
    default: false,
  },
  mouseover: {
    type: Boolean,
    default: false,
  },
  reordering: {
    type: Boolean,
    default: true,
  },
  trash: {
    type: Boolean,
    default: false,
  },
  oninfo: {
    type: Function,
  },
  extent: {
    type: Boolean,
  },
  onextent: {
    type: Function,
  },
  drawDelay: {
    type: Number,
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
  layerGroup: {
    type: Object,
  },
  noScroll: {
    type: Boolean,
    default: false,
  },
});

const attrs = useAttrs();
const { control } = useControl(LayerSwitcher, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
