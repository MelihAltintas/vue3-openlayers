<template><div v-if="false"></div></template>
<script setup lang="ts">
import Fill from "ol/style/Fill";
import type CircleStyle from "ol/style/Circle";

import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted } from "vue";
import type Style from "ol/style/Style";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {}
);

const style = inject<Ref<Style | null> | null>("style", null);
const circle = inject<Ref<CircleStyle | null> | null>("circle", null);
const styledObj = inject<Ref<Style | null> | null>("styledObj", null);

const { properties } = usePropsAsObjectProperties(props);

if (style != null && circle == null) {
  // in style object
  let fill = new Fill(properties);
  style?.value?.setFill(fill);

  const applyFill = () => {
    // @ts-ignore
    style?.value?.setFill(null);
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
    // @ts-ignore
    style?.value?.setFill(null);
  });
} else if (circle != null) {
  // in circle
  const applyFilltoCircle = (color: any) => {
    circle?.value?.getFill().setColor(color);

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
