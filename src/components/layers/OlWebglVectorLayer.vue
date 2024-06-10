<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
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

const { layer } = useLayer(WebGLVectorLayer, props);

provide("webglVectorLayer", layer);

defineExpose({
  webglVectorLayer: layer,
});
</script>
