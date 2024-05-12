<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, shallowRef } from "vue";
import TileLayer, { type Options } from "ol/layer/WebGLTile";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useLayer from "@/composables/useLayer";
import { layersCommonDefaultProps } from "./LayersCommonProps";

const props = withDefaults(defineProps<Options>(), layersCommonDefaultProps);

const properties = usePropsAsObjectProperties(props);

const tileLayer = shallowRef(new TileLayer(properties));
useLayer(tileLayer, properties);

provide("tileLayer", tileLayer);

defineExpose({
  tileLayer,
});
</script>
