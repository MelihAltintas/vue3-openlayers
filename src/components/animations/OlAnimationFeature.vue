<template lang="">
  <slot></slot>
</template>

<script setup>
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useAnimationProps from "@/composables/useAnimationProps";
import { inject } from "vue";

const props = defineProps(useAnimationProps());

const map = inject("map");
const vectorLayer = inject("vectorLayer");

const { properties } = usePropsAsObjectProperties(props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>

<style lang=""></style>
