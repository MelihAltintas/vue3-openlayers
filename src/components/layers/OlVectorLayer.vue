<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, shallowRef } from "vue";
import VectorLayer from "ol/layer/Vector";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useLayer from "@/composables/useLayer";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type { StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type { BackgroundColor } from "ol/layer/Base";

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      background?: BackgroundColor;
      renderBuffer?: number;
      updateWhileAnimating?: boolean;
      styles?: StyleLike | FlatStyleLike | null;
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

const vectorLayer = shallowRef(new VectorLayer(properties));
useLayer(vectorLayer, props);

provide("vectorLayer", vectorLayer);
provide("stylable", vectorLayer);

defineExpose({
  vectorLayer,
});
</script>
