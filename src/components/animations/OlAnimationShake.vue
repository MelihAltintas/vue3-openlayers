<template lang="">
  <slot></slot>
</template>

<script setup>
import Shake from "ol-ext/featureanimation/Shake";
import useAnimation from "@/composables/useAnimation";
import useAnimationProps from "@/composables/useAnimationProps";

const props = defineProps({
  ...useAnimationProps(),
  bounce: {
    type: Number,
    default: 6,
  },
  amplitude: {
    type: Number,
    default: 40,
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
});

const { map, vectorLayer, properties, animation } = useAnimation(Shake, props);

defineExpose({
  map,
  vectorLayer,
  properties,
  animation,
});
</script>

<style lang=""></style>
