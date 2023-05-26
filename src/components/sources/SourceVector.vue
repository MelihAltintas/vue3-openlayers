<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import VectorSource from "ol/source/Vector";

import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default {
  name: "ol-source-vector",
  setup(props) {
    const layer =
      inject("vectorLayer", undefined) || inject("heatmapLayer", undefined);

    const { properties } = usePropsAsObjectProperties(props);

    const source = computed(() => new VectorSource(properties));

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
    });

    onUnmounted(() => {
      layer.value.setSource(null);
    });

    provide("vectorSource", source);

    return {
      layer,
      source,
    };
  },
  props: {
    attributions: {
      type: [String, Array],
    },
    features: {
      type: Array,
      default: () => [],
    },
    format: {
      type: Object,
    },
    loader: {
      type: Function,
    },
    overlaps: {
      type: Boolean,
      default: true,
    },
    projection: {
      type: String,
      default: "EPSG:3857",
    },
    strategy: {
      type: Function,
    },
    url: {
      type: [String, Function],
    },
    useSpatialIndex: {
      type: Boolean,
      default: true,
    },
    wrapX: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang=""></style>
