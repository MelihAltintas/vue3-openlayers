<template lang="">
  <slot></slot>
</template>

<script setup>
import {
  provide,
  inject,
  watch,
  onMounted,
  onUnmounted,
  toRefs,
  computed,
} from "vue";

import Collection from "ol/Collection";
import Modify from "ol/interaction/Modify";

const emit = defineEmits(["modifystart", "modifyend"]);
const props = defineProps({
  condition: {
    type: Function,
  },
  deleteCondition: {
    type: Function,
  },
  insertVertexCondition: {
    type: Function,
  },
  pixelTolerance: {
    type: Number,
    default: 10,
  },
  wrapX: {
    type: Boolean,
    default: false,
  },
  hitDetection: {
    type: Boolean,
  },
  features: {
    type: [Collection, Object],
  },
});

const map = inject("map");
const source = inject("vectorSource");

const {
  features,
  condition,
  deleteCondition,
  insertVertexCondition,
  pixelTolerance,
  wrapX,
  hitDetection,
} = toRefs(props);

const modify = computed(() => {
  const m = new Modify({
    source: source.value,
    features: features.value,
    condition: condition.value,
    deleteCondition: deleteCondition.value,
    insertVertexCondition: insertVertexCondition.value,
    pixelTolerance: pixelTolerance.value,
    wrapX: wrapX.value,
    hitDetection: hitDetection.value,
  });

  m.on("modifystart", (event) => {
    emit("modifystart", event);
  });

  m.on("modifyend", (event) => {
    emit("modifyend", event);
  });

  return m;
});

watch(
  [
    condition,
    deleteCondition,
    insertVertexCondition,
    pixelTolerance,
    wrapX,
    hitDetection,
  ],
  () => {
    map.removeInteraction(modify.value);
    map.addInteraction(modify.value);
    modify.value.changed();

    map.changed();
  }
);

onMounted(() => {
  map.addInteraction(modify.value);
});

onUnmounted(() => {
  map.removeInteraction(modify.value);
});

provide("stylable", modify);
</script>

<style lang=""></style>
