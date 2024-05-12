<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, computed, shallowRef } from "vue";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useLayer from "@/composables/useLayer";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import { WebGLVectorLayer } from "./WebGLVectorLayerClass";
import type { WebGLStyle } from "ol/style/webgl";

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      disableHitDetection?: boolean;
      styles: WebGLStyle;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    disableHitDetection: false,
    styles: () => ({
      "shape-points": 1,
      "shape-radius": 10,
      "shape-opacity": 0.5,
      "shape-fill-color": "blue",
    }),
  },
);

const properties = usePropsAsObjectProperties(props);

const webglVectorLayer = shallowRef(
  new WebGLVectorLayer({
    ...properties,
    styles: properties.style,
  }),
);
useLayer(webglVectorLayer, properties);

provide("webglVectorLayer", webglVectorLayer);

defineExpose({
  webglVectorLayer,
});
</script>
