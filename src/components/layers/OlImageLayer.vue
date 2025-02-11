<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import ImageLayer from "ol/layer/Image";
import useLayer from "@/composables/useLayer";
import { useDefaults } from "@/components/layers/LayersCommonProps";
import type { Options } from "ol/layer/BaseImage";
import type ImageSource from "ol/source/Image";
import type { LayerEvents } from "@/composables";

type Props = Options<ImageSource>;
const props = withDefaults(
  defineProps<Props>(),
  useDefaults<Props, ImageSource>(),
);
defineEmits<LayerEvents>();

const { layer } = useLayer(ImageLayer, props);

provide("imageLayer", layer);

defineExpose({
  imageLayer: layer,
});
</script>
