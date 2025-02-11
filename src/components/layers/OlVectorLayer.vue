<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import VectorLayer, { type Options } from "ol/layer/Vector";
import useLayer from "@/composables/useLayer";
import { useDefaults } from "@/components/layers/LayersCommonProps";
import type { LayerEvents } from "@/composables";

const props = withDefaults(defineProps<Options>(), useDefaults<Options>());
defineEmits<LayerEvents>();

const { layer } = useLayer(VectorLayer, props);

provide("vectorLayer", layer);
provide("stylable", layer);

defineExpose({
  vectorLayer: layer,
});
</script>
