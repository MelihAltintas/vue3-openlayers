<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

import VectorImageLayer from "ol/layer/VectorImage";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "./LayersCommonProps";
import type { Map } from "ol";

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
  }
);

const map = inject<Map>("map");

const { properties } = usePropsAsObjectProperties(props);

const vectorImageLayer = computed(() => new VectorImageLayer(properties));

watch(properties, () => {
  vectorImageLayer.value.setProperties(properties);
});

onMounted(() => {
  map?.addLayer(vectorImageLayer.value);
});

onUnmounted(() => {
  map?.removeLayer(vectorImageLayer.value);
});

provide("vectorLayer", vectorImageLayer);
provide("stylable", vectorImageLayer);

defineExpose({
  vectorImageLayer,
});
</script>

<style lang=""></style>
