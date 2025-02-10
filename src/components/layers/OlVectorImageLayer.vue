<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";

import VectorImageLayer, { type Options } from "ol/layer/VectorImage";
import useLayer from "@/composables/useLayer";
import { useDefaults } from "@/components/layers/LayersCommonProps";
import type { LayerEvents } from "@/composables";

const props = withDefaults(defineProps<Options>(), useDefaults<Options>());
defineEmits<LayerEvents>();

const { layer } = useLayer(VectorImageLayer, props);

provide("vectorLayer", layer);
provide("stylable", layer);

defineExpose({
  vectorImageLayer: layer,
});
</script>
