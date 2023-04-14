<template>
  <div v-if="false"></div>
</template>

<script>
import BingMaps from "ol/source/BingMaps";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default {
  name: "ol-source-bingmaps",
  setup(props) {
    const layer = inject("tileLayer");

    const { properties } = usePropsAsObjectProperties(props);

    const source = computed(
      () =>
        new BingMaps({
          ...properties,
          key: properties.apiKey,
        })
    );

    watch(source, () => {
      layer.value.setSource(source.value);
    });

    watch(layer, () => {
      layer.value.setSource(source.value);
    });

    onMounted(() => {
      layer.value.setSource(source.value);
    });

    onUnmounted(() => {
      layer.value.setSource(null);
    });

    return {
      layer,
      source,
    };
  },
  props: {
    cacheSize: {
      type: Number,
    },
    hidpi: {
      type: Boolean,
      default: false,
    },
    culture: {
      type: String,
      default: "en-us",
    },
    apiKey: {
      type: String,
    },
    imagerySet: {
      type: String,
    },
    maxZoom: {
      type: Number,
      default: 21,
    },

    reprojectionErrorThreshold: {
      type: Number,
      default: 0.5,
    },
    tileLoadFunction: {
      type: Function,
      default: (imageTile, src) => (imageTile.getImage().src = src),
    },
    wrapX: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: Number,
    },
  },
};
</script>

<style lang=""></style>
