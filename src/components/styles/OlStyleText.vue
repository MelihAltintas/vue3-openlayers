<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import Text from "ol/style/Text";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";

import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps({
  font: {
    type: String,
  },
  maxAngle: {
    type: Number,
    default: Math.PI / 4,
  },
  offsetX: {
    type: Number,
    default: 0,
  },
  offsetY: {
    type: Number,
    default: 0,
  },
  overflow: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String,
    default: "point",
  },
  scale: {
    type: Number,
  },
  rotateWithView: {
    type: Boolean,
    default: false,
  },
  rotation: {
    type: Number,
    default: 0,
  },
  text: {
    type: String,
  },
  textAlign: {
    type: String,
  },
  textBaseline: {
    type: String,
    default: "middle",
  },
  padding: {
    type: Array,
    default: () => [0, 0, 0, 0],
  },
});

const style = inject("style", null);
const styledObj = inject("styledObj", null);

const { properties } = usePropsAsObjectProperties(props);

const createText = (properties) => {
  return new Text({
    ...properties,
    fill: new Fill(),
    stroke: new Stroke(),
  });
};

const text = computed(() => createText(properties));

const applyStyle = () => {
  style.value.setText(null);
  style.value.setText(text.value);
  styledObj.value.changed();
};
watch(properties, () => {
  applyStyle();
});

watch(style, () => {
  applyStyle();
});

onMounted(() => {
  style.value.setText(text.value);
});

onUnmounted(() => {
  style.value.setText(null);
});

provide("style", text);
provide("styledObj", styledObj);
</script>

<style lang=""></style>
