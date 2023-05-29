<template lang="">
  <slot></slot>
</template>

<script setup>
import Drop from "ol-ext/featureanimation/Drop";
import useAnimation from "@/composables/useAnimation";
import useAnimationProps from "@/composables/useAnimationProps";

const props = defineProps({
  ...useAnimationProps(),
  side: {
    type: Number,
    default: 0,
  },
  speed: {
    type: Number,
    default: 0,
  },
});

const { map, vectorLayer, properties } = useAnimation(Drop, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>

<style lang=""></style>
