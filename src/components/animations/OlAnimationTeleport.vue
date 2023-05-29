<template lang="">
  <slot></slot>
</template>

<script setup>
import Teleport from "ol-ext/featureanimation/Teleport";
import useAnimation from "@/composables/useAnimation";
import useAnimationProps from "@/composables/useAnimationProps";

const props = defineProps(useAnimationProps());
const { map, vectorLayer, properties } = useAnimation(Teleport, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>

<style lang=""></style>
