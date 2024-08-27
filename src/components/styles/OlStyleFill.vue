<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Fill from "ol/style/Fill";
import type CircleStyle from "ol/style/Circle";

import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted } from "vue";
import type Style from "ol/style/Style";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

type GradientColorStop = [number, string];
const props = withDefaults(
  defineProps<{
    color?: string;
    colorList?: GradientColorStop[];
  }>(),
  {},
);

const style = inject<Ref<Style | null> | null>("style", null);
const circle = inject<Ref<CircleStyle | null> | null>("circle", null);
const styledObj = inject<Ref<Style | null> | null>("styledObj", null);

const properties = usePropsAsObjectProperties(props);
const createGradientFill = (
  color: string,
  colorList: GradientColorStop[] = [],
  width: number = 256,
  height: number = 256,
): Fill => {
  const gradientCanvas = document.createElement("canvas");
  const ctx = gradientCanvas.getContext("2d");

  if (!ctx) throw new Error("Unable to get canvas context");

  gradientCanvas.width = width;
  gradientCanvas.height = height;

  if (colorList.length > 0) {
    // Create a gradient using the colorList
    const gradient = ctx.createLinearGradient(0, 0, 0, height);

    colorList.forEach(([offset, gradientColor]) => {
      gradient.addColorStop(offset, gradientColor);
    });

    ctx.fillStyle = gradient;
  } else {
    // Fallback to a single color
    ctx.fillStyle = color;
  }
  ctx.fillRect(0, 0, width, height);

  const dataURL = gradientCanvas.toDataURL();
  // Use the src property to set the fill color
  return new Fill({ color: { src: dataURL } });
};

if (style != null && circle == null) {
  // In style object
  let fill = properties.colorList
    ? createGradientFill(
        properties.color || "transparent",
        properties.colorList,
      )
    : new Fill({ color: properties.color });

  style?.value?.setFill(fill);

  const applyFill = () => {
    style?.value?.setFill(new Fill());
    fill = properties.colorList
      ? createGradientFill(
          properties.color || "transparent",
          properties.colorList,
        )
      : new Fill({ color: properties.color || "transparent" });
    style?.value?.setFill(fill);
  };

  watch(properties, () => {
    applyFill();
  });

  watch(style, () => {
    applyFill();
  });

  onMounted(() => {
    style?.value?.setFill(fill);
  });

  onUnmounted(() => {
    style?.value?.setFill(new Fill());
  });
} else if (circle != null) {
  const applyFilltoCircle = (color?: string) => {
    // @ts-ignore
    circle?.value?.getFill().setColor(color || null);
    circle?.value?.setRadius(circle?.value.getRadius()); // force render
    try {
      // @ts-ignore
      styledObj?.value?.changed();
    } catch (error) {
      // @ts-ignore
      styledObj?.value.changed();
    }
  };

  applyFilltoCircle(properties.color);

  watch(properties, () => {
    applyFilltoCircle(properties.color);
  });
  watch(circle, () => {
    applyFilltoCircle(properties.color);
  });
}
</script>
