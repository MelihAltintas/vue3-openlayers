<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import CircleStyle, { type Options } from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { type Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import type Draw from "ol/interaction/Draw";
import type Modify from "ol/interaction/Modify";
import type Style from "ol/style/Style";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { Interaction } from "ol/interaction";

const props = defineProps<{
  radius: number;
  scale?: number;
}>();

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
  style?.value?.setImage(circle.value);
  if (styledObj?.value instanceof Interaction) {
    styledObj.value.changed();
  }
};
watch(properties, () => applyStyle());

watch(
  () => style,
  () => applyStyle(),
);

onMounted(() => applyStyle());
onUnmounted(() => {
  // @ts-expect-error as officially it's not allowed, but no other way to unset
  style?.value?.setImage(null);
});

provide("circle", circle);
provide("styledObj", styledObj);
</script>
