<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject, watch, onMounted, onUnmounted, computed } from "vue";
import Transform from "ol-ext/interaction/Transform";
import type { Condition } from "ol/events/condition";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    enableRotatedTransform?: boolean;
    condition?: Condition;
    addCondition?: Condition;
    filter?: () => boolean;
    hitTolerance?: number;
    translateFeature?: boolean;
    scale?: boolean;
    rotate?: boolean;
    keepAspectRatio?: Condition;
    translate?: boolean;
    stretch?: boolean;
  }>(),
  {
    enableRotatedTransform: false,
    hitTolerance: 2,
    translateFeature: true,
    scale: true,
    rotate: true,
    keepAspectRatio: () => false,
    translate: true,
    stretch: true,
  }
);

const map = inject<Map>("map");

const { properties } = usePropsAsObjectProperties(props);

const transform = computed(() => {
  const olTransform = new Transform({
    ...properties,
  });

  return olTransform;
});

watch(transform, (newVal, oldVal) => {
  map?.removeInteraction(oldVal);
  map?.addInteraction(newVal);

  map?.changed();
});

onMounted(() => {
  map?.addInteraction(transform.value);
});

onUnmounted(() => {
  map?.removeInteraction(transform.value);
});

provide("stylable", transform);

defineExpose({
  transform,
});
</script>
