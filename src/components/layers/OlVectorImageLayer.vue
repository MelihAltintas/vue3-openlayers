<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";

import VectorImageLayer from "ol/layer/VectorImage";
import useLayer from "@/composables/useLayer";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      renderBuffer?: number;
      updateWhileAnimating?: boolean;
      styles?: () => unknown;
      updateWhileInteracting?: boolean;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    renderBuffer: 100,
    updateWhileAnimating: false,
    updateWhileInteracting: false,
  },
);

const { layer } = useLayer(VectorImageLayer, props);

provide("vectorLayer", layer);
provide("stylable", layer);

defineExpose({
  vectorImageLayer: layer,
});
</script>
