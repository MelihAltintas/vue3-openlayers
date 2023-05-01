<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

import VectorImageLayer from "ol/layer/VectorImage";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

import BaseLayer from "./BaseLayer.vue";
export default {
  extends: BaseLayer,
  name: "ol-vector-image-layer",
  setup(props) {
    const map = inject("map");

    const { properties } = usePropsAsObjectProperties(props);

    const vectorImageLayer = computed(() => new VectorImageLayer(properties));

    watch(properties, () => {
      vectorImageLayer.value.setProperties(properties);
    });

    onMounted(() => {
      map.addLayer(vectorImageLayer.value);
    });

    onUnmounted(() => {
      map.removeLayer(vectorImageLayer.value);
    });

    provide("vectorLayer", vectorImageLayer);
    provide("stylable", vectorImageLayer);

    return {
      vectorImageLayer,
    };
  },
  props: {
    renderBuffer: {
      type: Number,
      default: 100,
    },
    updateWhileAnimating: {
      type: Boolean,
      default: false,
    },
    styles: {
      type: [String, Array, Function],
    },
    updateWhileInteracting: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang=""></style>
