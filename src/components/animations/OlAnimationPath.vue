<template lang="">
  <slot></slot>
</template>

<script setup>
import Path from "ol-ext/featureanimation/Path";
import useAnimation from "@/composables/useAnimation";
import useAnimationProps from "@/composables/useAnimationProps";

const props = defineProps({
  ...useAnimationProps(),
  rotate: {
    type: Boolean,
    default: false,
  },
  speed: {
    type: Number,
    default: 0,
  },
  path: {
    type: Object,
  },
});

const { map, vectorLayer, properties } = useAnimation(Path, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>

<style lang=""></style>
