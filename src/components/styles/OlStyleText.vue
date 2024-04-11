<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Options, TextPlacement } from "ol/style/Text";
import Text from "ol/style/Text";
import Fill from "ol/style/Fill";
import Stroke, { type Options as StrokeOptions } from "ol/style/Stroke";

import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import type Style from "ol/style/Style";
import type Draw from "ol/interaction/Draw";
import type Modify from "ol/interaction/Modify";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { Color } from "ol/color";
import type { ColorLike } from "ol/colorlike";

const props = withDefaults(
  defineProps<{
    font?: string;
    maxAngle?: number;
    offsetX?: number;
    offsetY?: number;
    overflow?: boolean;
    placement?: TextPlacement;
    scale?: number;
    rotateWithView?: boolean;
    rotation?: number;
    text?: string;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
    padding?: [number, number, number, number];
    fill?: Color | ColorLike;
    stroke?: StrokeOptions;
    backgroundFill?: Color | ColorLike;
    backgroundStroke?: StrokeOptions;
  }>(),
  {
    maxAngle: Math.PI / 4,
    offsetX: 0,
    offsetY: 0,
    overflow: false,
    placement: "point",
    rotateWithView: false,
    rotation: 0,
    textBaseline: "middle",
    padding: () => [0, 0, 0, 0],
  },
);

const style = inject<Ref<Style | null> | null>("style", null);
const styledObj = inject<Ref<Draw | Modify | Style | null> | null>(
  "styledObj",
  null,
);

const properties = usePropsAsObjectProperties(props);

const createText = (properties: typeof props) => {
  const innerProperties = properties as Omit<
    Options,
    "fill" | "stroke" | "backgroundFill" | "backgroundStroke"
  >;
  const options: Options = {
    ...innerProperties,
  };
  if (properties.fill) {
    options.fill = new Fill({ color: properties.fill });
  }
  if (properties.stroke) {
    options.stroke = new Stroke(properties.stroke);
  }
  if (properties.backgroundFill) {
    options.backgroundFill = new Fill({ color: properties.backgroundFill });
  }
  if (properties.backgroundStroke) {
    options.backgroundStroke = new Stroke(properties.backgroundStroke);
  }
  return new Text(options);
};

const textContent = computed(() => createText(properties));

const applyStyle = () => {
  style?.value?.setText(new Text());
  style?.value?.setText(textContent.value);
  // @ts-ignore
  styledObj?.value?.changed();
};
watch(properties, () => {
  applyStyle();
});

watch(
  () => style?.value,
  () => {
    applyStyle();
  },
);

onMounted(() => {
  style?.value?.setText(textContent.value);
});

onUnmounted(() => {
  style?.value?.setText(new Text());
});

provide("style", textContent);
provide("styledObj", styledObj);
</script>
