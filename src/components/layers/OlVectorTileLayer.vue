<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import VectorTileLayer, { type Options } from "ol/layer/VectorTile";
import useLayer from "@/composables/useLayer";
import { useDefaults } from "@/components/layers/LayersCommonProps";
import type { LayerEvents } from "@/composables";
import type { VectorTile } from "ol/source";

type Props = Options;
const props = withDefaults(
  defineProps<Props>(),
  useDefaults<Props, VectorTile>(),
);
defineEmits<LayerEvents>();

const { layer } = useLayer(VectorTileLayer, props);

provide("vectorTileLayer", layer);
provide("stylable", layer);

defineExpose({
  vectorTileLayer: layer,
});
</script>
