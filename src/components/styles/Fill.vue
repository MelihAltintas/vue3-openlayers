<template>
  <div v-if="false"></div>
</template>

<script>
import Fill from "ol/style/Fill";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

import { inject, watch, onMounted, onUnmounted } from "vue";
export default {
  name: "ol-style-fill",
  setup(props) {
    const style = inject("style", null);
    const circle = inject("circle", null);

    const styledObj = inject("styledObj", null);

    const { properties } = usePropsAsObjectProperties(props);

    if (style != null && circle == null) {
      // in style object

      let fill = new Fill(properties);
      style.value.setFill(fill);

      const applyFill = () => {
        style.value.setFill(null);
        fill = new Fill(properties);
        style.value.setFill(fill);
      };
      watch(properties, () => {
        applyFill();
      });

      watch(style, () => {
        applyFill();
      });

      onMounted(() => {
        style.value.setFill(fill);
      });

      onUnmounted(() => {
        style.value.setFill(null);
      });
    } else if (circle != null) {
      // in circle

      const applyFilltoCircle = (color) => {
        circle.value.getFill().setColor(color);

        circle.value.setRadius(circle.value.getRadius()); // force render
        try {
          styledObj.value.changed();
        } catch (error) {
          styledObj.changed();
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
  },
  props: {
    color: {
      type: String,
    },
  },
};
</script>

<style lang=""></style>
