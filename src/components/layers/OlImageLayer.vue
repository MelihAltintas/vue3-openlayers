<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import ImageLayer from "ol/layer/Image";
import useLayer from "@/composables/useLayer";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";

const props = withDefaults(
  defineProps<LayersCommonProps>(),
  layersCommonDefaultProps,
);

const { layer } = useLayer(ImageLayer, props);

provide("imageLayer", layer);

defineExpose({
  imageLayer: layer,
});
</script>
