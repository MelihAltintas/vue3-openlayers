<template>
  <div v-if="false"></div>
</template>

<script>
import TileWMS from "ol/source/TileWMS";
import Projection from "ol/proj/Projection";

import { inject, onMounted, onUnmounted, watch } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default {
  name: "ol-source-tile-wms",
  setup(props) {
    const layer = inject("tileLayer");
    const { properties } = usePropsAsObjectProperties(props);

    const createSource = () => {
      return new TileWMS({
        ...properties,
        params: {
          ...props.params,
          LAYERS: props.layers,
          STYLES: props.styles,
          TILED: true,
        },
        projection:
          typeof properties.projection == "string"
            ? properties.projection
            : new Projection({
                ...properties.projection,
              }),
      });
    };

    let source = createSource();

    watch(properties, () => {
      layer.value.setSource(null);
      source = createSource();
      layer.value.setSource(source);
    });
    onMounted(() => {
      layer.value.setSource(source);
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
    attributions: {
      type: String,
    },
    cacheSize: {
      type: Number,
    },
    crossOrigin: {
      type: String,
    },
    interpolate: {
      type: Boolean,
      default: true,
    },
    layers: {
      type: [String, Array],
      required: true,
    },
    styles: {
      type: [String, Array],
      default: "",
    },
    hidpi: {
      type: Boolean,
      default: false,
    },
    projection: {
      type: [String, Object],
      default: "EPSG:3857",
    },
    reprojectionErrorThreshold: {
      type: Number,
      default: 0.5,
    },
    tileGrid: {
      type: Object,
    },
    serverType: {
      type: String,
      default: "mapserver",
    },
    tileLoadFunction: {
      type: Function,
      default: (imageTile, src) => (imageTile.getImage().src = src),
    },
    url: {
      type: String,
    },
    urls: {
      type: Array,
    },
    params: {
      type: Object,
      default: () => ({}),
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
