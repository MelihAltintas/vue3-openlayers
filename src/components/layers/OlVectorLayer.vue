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
import type { LayerSwitcherOptions } from "@/types";

type Props = Options & LayerSwitcherOptions;
const props = withDefaults(defineProps<Props>(), useDefaults<Props>());
defineEmits<LayerEvents>();

const { layer } = useLayer(VectorLayer, props);

provide("vectorLayer", layer);
provide("stylable", layer);

defineExpose({
  vectorLayer: layer,
});
</script>
