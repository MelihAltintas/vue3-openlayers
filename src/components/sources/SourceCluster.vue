<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Cluster } from "ol/source";

import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default {
  name: "ol-source-cluster",
  setup(props) {
    const layer = inject("vectorLayer");

    const { properties } = usePropsAsObjectProperties(props);

    let source = computed(() => {
      let c = new Cluster(properties);
      return c;
    });

    const applySource = () => {
      layer.value.setSource(null);
      layer.value.setSource(source.value);
      layer.value.changed();
    };
    watch(properties, () => {
      applySource();
    });

    watch(layer, () => {
      applySource();
    });

    onMounted(() => {
      layer.value.setSource(source.value);
      layer.value.changed();
    });

    onUnmounted(() => {
      layer.value.setSource(null);
    });

    provide("vectorLayer", source);

    return {
      layer,
      source,
    };
  },
  props: {
    attributions: {
      type: [String, Array],
    },
    distance: {
      type: Number,
      default: 20,
    },
    geometryFunction: {
      type: Function,
      default: (feature) => feature.getGeometry(),
    },
    wrapX: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang=""></style>
