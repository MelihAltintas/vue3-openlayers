<template lang="">
  <slot></slot>
</template>

<script>
import { inject, watch, onMounted, onUnmounted } from "vue";

import Snap from "ol/interaction/Snap";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default {
  name: "ol-interaction-snap",
  setup(props) {
    const map = inject("map");
    const source = inject("vectorSource");

    const { properties } = usePropsAsObjectProperties(props);

    let createSnap = () => {
      let s = new Snap({
        ...properties,
        source: source.value,
      });

      return s;
    };
    let snap = createSnap();

    watch(properties, () => {
      map.removeInteraction(snap);
      snap = createSnap();
      map.addInteraction(snap);
      map.changed();
    });

    onMounted(() => {
      map.addInteraction(snap);
    });

    onUnmounted(() => {
      map.removeInteraction(snap);
    });
  },
  props: {
    vertex: {
      type: Boolean,
      default: true,
    },
    edge: {
      type: Boolean,
      default: true,
    },
    pixelTolerance: {
      type: Number,
      default: 10,
    },
  },
};
</script>

<style lang=""></style>
