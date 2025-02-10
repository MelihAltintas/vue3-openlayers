<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Stroke, { type Options } from "ol/style/Stroke";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted } from "vue";
import type Style from "ol/style/Style";
import type CircleStyle from "ol/style/Circle";
import type Draw from "ol/interaction/Draw";
import type Modify from "ol/interaction/Modify";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { Interaction } from "ol/interaction";

const props = withDefaults(defineProps<Options>(), {
  width: 1,
});

const style = inject<Ref<Style | null> | null>("style", null);
const styledObj = inject<Ref<Draw | Modify | Style | null> | null>(
  "styledObj",
  null,
);
const circle = inject<Ref<CircleStyle | null> | null>("circle", null);

const properties = usePropsAsObjectProperties(props);

if (style != null && circle == null) {
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
} else if (circle != null) {
  // in circle
  const applyStroketoCircle = (innerProperties: Options) => {
    circle?.value?.getStroke()?.setColor(innerProperties.color || "");
    circle?.value?.getStroke()?.setLineCap(innerProperties.lineCap);
    circle?.value?.getStroke()?.setLineDash(innerProperties.lineDash || []);
    circle?.value
      ?.getStroke()
      ?.setLineDashOffset(innerProperties.lineDashOffset);
    circle?.value?.getStroke()?.setLineJoin(innerProperties.lineJoin);
    circle?.value?.getStroke()?.setMiterLimit(innerProperties.miterLimit);
    circle?.value?.getStroke()?.setWidth(innerProperties.width);

    circle?.value?.setRadius(circle?.value?.getRadius());
    if (styledObj?.value instanceof Interaction) {
      styledObj.value.changed();
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
