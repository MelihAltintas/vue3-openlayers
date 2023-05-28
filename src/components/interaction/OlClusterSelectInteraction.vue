<template lang="">
  <slot> </slot>
</template>

<script setup>
import { provide, inject, watch, onMounted, onUnmounted, computed } from "vue";

import Select from "ol-ext/interaction/SelectCluster";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const emit = defineEmits(["select"]);
const props = defineProps({
  multi: {
    type: Boolean,
    default: false,
  },
  condition: {
    type: Function,
  },
  filter: {
    type: Function,
  },
  pointRadius: {
    type: Number,
    default: 7,
  },
  animate: {
    type: Boolean,
    default: true,
  },
  animationDuration: {
    type: Number,
    default: 500,
  },
  spiral: {
    type: Boolean,
    default: true,
  },
  selectCluster: {
    type: Boolean,
    default: true,
  },
  autoClose: {
    type: Boolean,
    default: true,
  },
  circleMaxObjects: {
    type: Number,
  },
  maxObjects: {
    type: Number,
  },
  featureStyle: {
    type: Function,
  },
});

const map = inject("map");

const { properties } = usePropsAsObjectProperties(props);

const select = computed(() => {
  const s = new Select(properties);
  s.on("select", (event) => {
    emit("select", event);
  });

  return s;
});

watch(select, (newVal, oldVal) => {
  map.removeInteraction(oldVal);
  map.addInteraction(newVal);

  map.changed();
});

onMounted(() => {
  map.addInteraction(select.value);
});

onUnmounted(() => {
  map.removeInteraction(select.value);
});

provide("stylable", select);
</script>

<style lang=""></style>
