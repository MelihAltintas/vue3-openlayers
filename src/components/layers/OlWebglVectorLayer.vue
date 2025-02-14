<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import useLayer from "@/composables/useLayer";
import { type LayersCommonProps } from "@/components/layers/LayersCommonProps";
import { WebGLVectorLayer } from "./WebGLVectorLayerClass";
import type { WebGLStyle } from "ol/style/webgl";
import type { LayerEvents } from "@/composables";
import type { LayerSwitcherOptions } from "@/types";

type Props = LayersCommonProps & {
  disableHitDetection?: boolean;
  styles: WebGLStyle;
} & LayerSwitcherOptions;
const props = withDefaults(defineProps<Props>(), {
  disableHitDetection: false,
  styles: () => ({
    "shape-points": 1,
    "shape-radius": 10,
    "shape-opacity": 0.5,
    "shape-fill-color": "blue",
  }),
});
defineEmits<LayerEvents>();

const { layer } = useLayer(WebGLVectorLayer, props);

provide("webglVectorLayer", layer);

defineExpose({
  webglVectorLayer: layer,
});
</script>
