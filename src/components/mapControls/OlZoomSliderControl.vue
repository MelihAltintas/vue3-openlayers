<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import useControl from "@/composables/useControl";
import ZoomSlider from "ol/control/ZoomSlider";
import { useAttrs } from "vue";

const props = defineProps({
  duration: {
    type: Number,
    default: 200,
  },
  className: {
    type: String,
    default: "ol-zoomslider",
  },
  render: {
    type: Function,
  },
});

const attrs = useAttrs();
const { control } = useControl(ZoomSlider, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
