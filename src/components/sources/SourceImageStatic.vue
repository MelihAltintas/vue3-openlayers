<template>
  <div v-if="false"></div>
</template>

<script>
import Static from "ol/source/ImageStatic";
import Projection from "ol/proj/Projection";

import { inject, onMounted, onUnmounted, watch } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default {
  name: "ol-source-image-static",
  setup(props) {
    const layer = inject("imageLayer");
    const { properties } = usePropsAsObjectProperties(props);

    const createSource = () => {
      return new Static({
        ...properties,
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
      layer.setSource(null);
      source = createSource();
      layer.setSource(source);
    });
    onMounted(() => {
      layer.setSource(source);
    });

    onUnmounted(() => {
      layer.setSource(null);
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
    crossOrigin: {
      type: String,
    },
    imageExtent: {
      type: Array,
    },
    projection: {
      type: [String, Object],
    },
    imageSize: {
      type: Array,
    },
    url: {
      type: String,
    },
  },
};
</script>

<style lang=""></style>
