<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Options } from "ol/style/Circle";
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";

import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import type Draw from "ol/interaction/Draw";
import type Modify from "ol/interaction/Modify";
import type Style from "ol/style/Style";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    radius: number;
    scale?: number;
  }>(),
  {},
);

const style = inject<Ref<Style | null> | null>("style", null);
const styledObj = inject<Ref<Draw | Modify | Style | null> | null>(
  "styledObj",
  null,
);

const properties = usePropsAsObjectProperties(props);

const createCircleStyle = (
  innerProperties: Omit<Options, "fill" | "stroke">,
) => {
  return new CircleStyle({
    ...innerProperties,
    fill: new Fill(),
    stroke: new Stroke(),
  });
};

const circle = computed(() => createCircleStyle(properties));

const applyStyle = () => {
  // @ts-ignore
  style?.value?.setImage(null);
  style?.value?.setImage(circle.value);
  // @ts-ignore
  styledObj?.value?.changed();
};
watch(properties, () => {
  applyStyle();
});

watch(
  () => style,
  () => {
    applyStyle();
  },
);

onMounted(() => {
  style?.value?.setImage(circle.value);
});

onUnmounted(() => {
  // @ts-ignore
  style?.value?.setImage(null);
});

provide("circle", circle);
provide("styledObj", styledObj);
</script>
