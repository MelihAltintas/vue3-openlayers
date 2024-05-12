<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, shallowRef } from "vue";
import ImageLayer from "ol/layer/Image";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useLayer from "@/composables/useLayer";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";

const props = withDefaults(
  defineProps<LayersCommonProps>(),
  layersCommonDefaultProps,
);

const properties = usePropsAsObjectProperties(props);

const imageLayer = shallowRef(new ImageLayer(properties));
useLayer(imageLayer, properties);

provide("imageLayer", imageLayer.value);

defineExpose({
  imageLayer: imageLayer.value,
});
</script>
