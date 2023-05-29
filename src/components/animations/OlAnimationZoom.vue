<template lang="">
  <slot></slot>
</template>

<script setup>
import Zoom from "ol-ext/featureanimation/Zoom";
import useAnimation from "@/composables/useAnimation";
import useAnimationProps from "@/composables/useAnimationProps";

const props = defineProps({
  ...useAnimationProps(),
  zoomOut: {
    type: Boolean,
    default: false,
  },
});

const { map, vectorLayer, properties } = useAnimation(Zoom, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>

<style lang=""></style>
