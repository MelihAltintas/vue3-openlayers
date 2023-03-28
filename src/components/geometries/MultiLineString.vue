<template lang="">
  <div v-if="false"></div>
</template>

<script>
import MultiLineString from "ol/geom/MultiLineString";
import useGeometry from "@/composables/useGeometry";

export default {
  name: "ol-geom-multi-line-string",
  setup(props) {
    const { geometry } = useGeometry(MultiLineString, props);

    return {
      geometry,
    };
  },
  props: {
    coordinates: {
      type: Array,
    },
    opt_layout: {
      type: String,
      default: "XY",
    },
  },
};
</script>

<style lang=""></style>
