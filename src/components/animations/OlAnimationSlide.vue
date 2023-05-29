<template lang="">
  <slot></slot>
</template>

<script setup>
import Slide from "ol-ext/featureanimation/Slide";
import useAnimation from "@/composables/useAnimation";
import useAnimationProps from "@/composables/useAnimationProps";

const props = defineProps({
  ...useAnimationProps(),
  speed: {
    type: Number,
    default: 0,
  },
});

const { map, vectorLayer, properties } = useAnimation(Slide, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>

<style lang=""></style>
