<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import TileLayer from "ol/layer/Tile";
import useLayer from "@/composables/useLayer";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      preload?: number;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    preload: 1,
  },
);

const { layer } = useLayer(TileLayer, props);

provide("tileLayer", layer);

defineExpose({
  tileLayer: layer,
});
</script>
