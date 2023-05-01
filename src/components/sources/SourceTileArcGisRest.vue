<template>
  <div v-if="false"></div>
</template>

<script>
import { TileArcGISRest } from "ol/source";
import Projection from "ol/proj/Projection";
import { inject, onMounted, onUnmounted, watch, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { createXYZ } from "ol/tilegrid";

export default {
  name: "ol-source-tile-arcgis-rest",
  setup(props) {
    const tileLayer = inject("tileLayer");
    const { properties } = usePropsAsObjectProperties(props);

    const getTileGrid = computed(() => {
      return createXYZ({
        tileSize: props.tileSize,
      });
    });

    const source = computed(
      () =>
        new TileArcGISRest({
          ...properties,
          projection:
            typeof properties.projection == "string"
              ? properties.projection
              : new Projection({
                ...properties.projection,
              }),
          tileGrid: getTileGrid.value,
        })
    );

    watch(source, () => {
      tileLayer.value.setSource(source.value);
    });

    watch(tileLayer, () => {
      tileLayer.value.setSource(source.value);
    });

    onMounted(() => {
      tileLayer.value.setSource(source.value);
    });

    onUnmounted(() => {
      tileLayer.value.setSource(null);
    });

    return {
      tileLayer,
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
    params: {
      type: Object,
      default: () => ({}),
    },
    hidpi: {
      type: Boolean,
      default: true,
    },
    projection: {
      type: [String, Object],
      default: "EPSG:3857",
    },
    reprojectionErrorThreshold: {
      type: Number,
      default: 0.5,
    },
    tileLoadFunction: {
      type: Function,
      default: (imageTile, src) => (imageTile.getImage().src = src),
    },
    url: {
      type: String,
    },
    wrapX: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: Number,
    },
    urls: {
      type: Array,
    },
    tileSize: {
      type: Array[Number],
      default: [256, 256],
    },
  },
};
</script>

<style lang=""></style>
