<template lang="">
  <div v-if="false"></div>
</template>

<script>
import Circle from "ol/geom/Circle";
import useGeometry from "@/composables/useGeometry";

export default {
  name: "ol-geom-circle",
  setup(props) {
    const { geometry } = useGeometry(Circle, props);

    return {
      geometry,
    };
  },
  props: {
    center: {
      type: Array,
    },
    radius: {
      type: Number,
    },
    opt_layout: {
      type: String,
      default: "XY",
    },
  },
};
</script>

<style lang=""></style>
