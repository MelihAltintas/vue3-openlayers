<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import TileLayer, { type Options } from "ol/layer/WebGLTile";
import useLayer from "@/composables/useLayer";
import { layersCommonDefaultProps } from "./LayersCommonProps";

const props = withDefaults(defineProps<Options>(), layersCommonDefaultProps);

const { layer } = useLayer(TileLayer, props);

provide("tileLayer", layer);

defineExpose({
  tileLayer: layer,
});
</script>
