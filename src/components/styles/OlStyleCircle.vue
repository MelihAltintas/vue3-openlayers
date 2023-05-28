<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";

import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps({
  radius: {
    type: Number,
  },
  scale: {
    type: Number,
  },
});

const style = inject("style", null);
const styledObj = inject("styledObj", null);

const { properties } = usePropsAsObjectProperties(props);

const createCircleStyle = (properties) => {
  return new CircleStyle({
    ...properties,
    fill: new Fill(),
    stroke: new Stroke(),
  });
};

const circle = computed(() => createCircleStyle(properties));

const applyStyle = () => {
  style.value.setImage(null);
  style.value.setImage(circle.value);
  styledObj.value.changed();
};
watch(properties, () => {
  applyStyle();
});

watch(style, () => {
  applyStyle();
});

onMounted(() => {
  style.value.setImage(circle.value);
});

onUnmounted(() => {
  style.value.setImage(null);
});

provide("circle", circle);
provide("styledObj", styledObj);
</script>

<style lang=""></style>