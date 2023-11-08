<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Fill from "ol/style/Fill";
import CircleStyle from "ol/style/Circle";
import type RegularShapeStyle from "ol/style/RegularShape";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted } from "vue";
import type Style from "ol/style/Style";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {},
);

const style = inject<Ref<Style | null> | null>("style", null);
const circle = inject<Ref<CircleStyle | null> | null>("circle", null);
const regularShape = inject<Ref<RegularShapeStyle | null> | null>(
  "regularShape",
  null,
);
const styledObj = inject<Ref<Style | null> | null>("styledObj", null);

const { properties } = usePropsAsObjectProperties(props);

function applyStyleToShape(shape: Ref<CircleStyle | RegularShapeStyle>) {
  // in circle or regularShape
  const applyFillToShape = (color?: string) => {
    shape?.value?.getFill().setColor(color || null);
    if (shape.value instanceof CircleStyle) {
      shape?.value?.setRadius(shape?.value.getRadius()); // force render
    }
    try {
      // @ts-ignore
      styledObj?.value?.changed();
    } catch (error) {
      // @ts-ignore
      styledObj?.value.changed();
    }
  };

  applyFillToShape(properties.color);

  watch(properties, () => {
    applyFillToShape(properties.color);
  });
  watch(shape, () => {
    applyFillToShape(properties.color);
  });
}

if (style != null && !(circle?.value || regularShape?.value)) {
  // in style object
  let fill = new Fill(properties);
  style?.value?.setFill(fill);

  const applyFill = () => {
    style?.value?.setFill(new Fill());
    fill = new Fill(properties);
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
} else if (circle?.value) {
  applyStyleToShape(circle as Ref<CircleStyle>);
} else if (regularShape?.value) {
  applyStyleToShape(regularShape as Ref<RegularShapeStyle>);
}
</script>
