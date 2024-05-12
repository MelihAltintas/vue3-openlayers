<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, shallowRef } from "vue";

import VectorImageLayer from "ol/layer/VectorImage";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
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

const properties = usePropsAsObjectProperties(props);

const vectorImageLayer = shallowRef(new VectorImageLayer(properties));
useLayer(vectorImageLayer, properties);

provide("vectorLayer", vectorImageLayer);
provide("stylable", vectorImageLayer);

defineExpose({
  vectorImageLayer,
});
</script>
