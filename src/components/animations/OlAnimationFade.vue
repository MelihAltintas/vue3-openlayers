<template lang="">
  <slot></slot>
</template>

<script setup>
import Fade from "ol-ext/featureanimation/Fade";
import useAnimation from "@/composables/useAnimation";
import useAnimationProps from "@/composables/useAnimationProps";

const props = defineProps(useAnimationProps());
const { map, vectorLayer, properties } = useAnimation(Fade, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>

<style lang=""></style>
