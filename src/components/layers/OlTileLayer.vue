<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, shallowRef } from "vue";
import TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
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

const properties = usePropsAsObjectProperties(props);

const tileLayer = shallowRef(new TileLayer(properties));
useLayer(tileLayer, properties);

provide("tileLayer", tileLayer);

defineExpose({
  tileLayer,
});
</script>
