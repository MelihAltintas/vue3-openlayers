<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import RegularShapeStyle, { type Options } from "ol/style/RegularShape";

import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import type Draw from "ol/interaction/Draw";
import type Modify from "ol/interaction/Modify";
import type Style from "ol/style/Style";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

type RegularShapeOptions = Omit<Options, "fill" | "stroke">;

const props = withDefaults(defineProps<RegularShapeOptions>(), {});

const style = inject<Ref<Style | null> | null>("style", null);
const styledObj = inject<Ref<Draw | Modify | Style | null> | null>(
  "styledObj",
  null,
);

const { properties } = usePropsAsObjectProperties(props);

const createRegularShapeStyle = (innerProperties: RegularShapeOptions) => {
  return new RegularShapeStyle({
    ...innerProperties,
    fill: new Fill(),
    stroke: new Stroke(),
  });
};

const regularShape = computed(() => createRegularShapeStyle(properties));

const applyStyle = () => {
  // @ts-ignore
  style?.value?.setImage(null);
  style?.value?.setImage(regularShape.value);
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
  style?.value?.setImage(regularShape.value);
});

onUnmounted(() => {
  // @ts-ignore
  style?.value?.setImage(null);
});

provide("regularShape", regularShape);
provide("styledObj", styledObj);
</script>
