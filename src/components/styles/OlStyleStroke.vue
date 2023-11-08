<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import type { Options } from "ol/style/Stroke";
import Stroke from "ol/style/Stroke";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted } from "vue";
import type Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle";
import type RegularShapeStyle from "ol/style/RegularShape";
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
  },
);

const style = inject<Ref<Style | null> | null>("style", null);
const styledObj = inject<Ref<Draw | Modify | Style | null> | null>(
  "styledObj",
  null,
);
const circle = inject<Ref<CircleStyle | null> | null>("circle", null);
const regularShape = inject<Ref<RegularShapeStyle | null> | null>(
  "regularShape",
  null,
);

const { properties } = usePropsAsObjectProperties(props);

function applyStyleToShape(shape: Ref<CircleStyle | RegularShapeStyle>) {
  // in circle or regularShape
  const applyStrokeToShape = (innerProperties: Options) => {
    shape?.value?.getStroke()?.setColor(innerProperties.color || "");
    shape?.value?.getStroke()?.setLineCap(innerProperties.lineCap);
    shape?.value?.getStroke()?.setLineDash(innerProperties.lineDash || []);
    shape?.value
      ?.getStroke()
      ?.setLineDashOffset(innerProperties.lineDashOffset);
    shape?.value?.getStroke()?.setLineJoin(innerProperties.lineJoin);
    shape?.value?.getStroke()?.setMiterLimit(innerProperties.miterLimit);
    shape?.value?.getStroke()?.setWidth(innerProperties.width);
    if (shape.value instanceof CircleStyle) {
      shape?.value?.setRadius(shape?.value.getRadius()); // force render
    }
    try {
      // @ts-ignore
      styledObj?.value?.changed();
    } catch (error) {
      // @ts-ignore
      styledObj?.value?.changed();
    }
  };

  applyStrokeToShape(properties);

  watch(properties, (newVal: Options) => {
    applyStrokeToShape(newVal);
  });

  watch(shape, () => {
    applyStrokeToShape(properties);
  });
}

if (style != null && !(circle?.value || regularShape?.value)) {
  // in style object
  let stroke = new Stroke(properties);

  style.value?.setStroke(stroke);

  const applyStroke = () => {
    style?.value?.setStroke(new Stroke());
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
    style?.value?.setStroke(stroke);
  });

  onUnmounted(() => {
    style?.value?.setStroke(new Stroke());
  });
} else if (circle?.value) {
  applyStyleToShape(circle as Ref<CircleStyle>);
} else if (regularShape?.value) {
  applyStyleToShape(regularShape as Ref<RegularShapeStyle>);
}
</script>
