<template><div v-if="false"></div></template>
<script setup lang="ts">
import type { Options } from "ol/style/Stroke";
import Stroke from "ol/style/Stroke";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted } from "vue";
import type Style from "ol/style/Style";
import type CircleStyle from "ol/style/Circle";
import type Draw from "ol/interaction/Draw";
import type Modify from "ol/interaction/Modify";
import type { ColorLike } from "ol/colorlike";
import type { Color } from "ol/color";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    color?: Color | ColorLike;
    lineCap?: CanvasLineCap;
    lineJoin?: CanvasLineJoin;
    lineDash?: number[];
    lineDashOffset?: number;
    miterLimit?: number;
    width?: number;
  }>(),
  {
    lineCap: "round",
    lineJoin: "round",
    lineDashOffset: 0,
    miterLimit: 10,
    width: 1,
  }
);

const style = inject<Ref<Style | null> | null>("style", null);
const styledObj = inject<Ref<Draw | Modify | Style | null> | null>(
  "styledObj",
  null
);
const circle = inject<Ref<CircleStyle | null> | null>("circle", null);

const { properties } = usePropsAsObjectProperties(props);

if (style != null && circle == null) {
  // in style object
  let stroke = new Stroke(properties);

  style.value?.setStroke(stroke);

  const applyStroke = () => {
    // @ts-ignore
    style?.value?.setStroke(null);
    stroke = new Stroke(properties);
    style?.value?.setStroke(stroke);
  };
  watch(properties, () => {
    applyStroke();
  });
  watch(style, () => {
    applyStroke();
  });

  onMounted(() => {
    // @ts-ignore
    style?.value?.setStroke(stroke);
  });

  onUnmounted(() => {
    // @ts-ignore
    style?.value?.setStroke(null);
  });
} else if (circle != null) {
  // in circle
  const applyStroketoCircle = (innerProperties: Options) => {
    // @ts-ignore
    circle?.value?.getStroke()?.setColor(innerProperties.color);
    circle?.value?.getStroke()?.setLineCap(innerProperties.lineCap);
    // @ts-ignore
    circle?.value?.getStroke()?.setLineDash(innerProperties.lineDash);
    circle?.value
      ?.getStroke()
      ?.setLineDashOffset(innerProperties.lineDashOffset);
    circle?.value?.getStroke()?.setLineJoin(innerProperties.lineJoin);
    circle?.value?.getStroke()?.setMiterLimit(innerProperties.miterLimit);
    circle?.value?.getStroke()?.setWidth(innerProperties.width);

    circle?.value?.setRadius(circle?.value?.getRadius());
    try {
      // @ts-ignore
      styledObj?.value?.changed();
    } catch (error) {
      // @ts-ignore
      styledObj?.value?.changed();
    }
  };

  applyStroketoCircle(properties);

  watch(properties, (newVal: Options) => {
    applyStroketoCircle(newVal);
  });

  watch(circle, () => {
    applyStroketoCircle(properties);
  });
}
</script>
