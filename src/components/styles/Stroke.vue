<template>
  <div v-if="false"></div>
</template>

<script>
import Stroke from "ol/style/Stroke";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

import { inject, watch, onMounted, onUnmounted } from "vue";

export default {
  name: "ol-style-stroke",
  setup(props) {
    const style = inject("style", null);
    const circle = inject("circle", null);
    const styledObj = inject("styledObj", null);

    const { properties } = usePropsAsObjectProperties(props);

    if (style != null && circle == null) {
      // in style object

      let stroke = new Stroke(properties);
      style.value.setStroke(stroke);
      const applyStroke = () => {
        style.value.setStroke(null);
        stroke = new Stroke(properties);
        style.value.setStroke(stroke);
      };
      watch(properties, () => {
        applyStroke();
      });
      watch(style, () => {
        applyStroke();
      });

      onMounted(() => {
        style.value.setStroke(stroke);
      });

      onUnmounted(() => {
        style.value.setStroke(null);
      });
    } else if (circle != null) {
      // in circle

      const applyStroketoCircle = (properties) => {
        circle.value.getStroke().setColor(properties.color);
        circle.value.getStroke().setLineCap(properties.lineCap);
        circle.value.getStroke().setLineDash(properties.lineDash);
        circle.value.getStroke().setLineDashOffset(properties.lineDashOffset);
        circle.value.getStroke().setLineJoin(properties.lineJoin);
        circle.value.getStroke().setMiterLimit(properties.miterLimit);
        circle.value.getStroke().setWidth(properties.width);

        circle.value.setRadius(circle.value.getRadius());
        try {
          styledObj.value.changed();
        } catch (error) {
          styledObj.changed();
        }
      };

      applyStroketoCircle(properties);

      watch(properties, (newVal) => {
        applyStroketoCircle(newVal);
      });

      watch(circle, () => {
        applyStroketoCircle(properties);
      });
    }
  },
  props: {
    color: {
      type: String,
    },
    lineCap: {
      type: String,
      default: "round",
    },
    lineJoin: {
      type: String,
      default: "round",
    },
    lineDash: {
      type: Array,
    },
    lineDashOffset: {
      type: Number,
      default: 0,
    },
    miterLimit: {
      type: Number,
      default: 10,
    },
    width: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang=""></style>
