<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";
import VectorLayer from "ol/layer/Vector";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type { StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type LayerGroup from "ol/layer/Group";
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

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const properties = usePropsAsObjectProperties(props);

const vectorLayer = computed(() => new VectorLayer(properties));

watch(
  () => properties,
  (newValue) => {
    vectorLayer.value.setProperties(newValue);
    for (const key in newValue) {
      const keyInObj = key as keyof typeof newValue;
      if (newValue[keyInObj]) {
        vectorLayer.value.set(key, newValue[keyInObj]);
      }
    }
  },
  { deep: true },
);

watch(
  () => props.visible,
  (newVisible: boolean) => {
    vectorLayer.value.setVisible(newVisible);
  },
  { immediate: true },
);

watch(
  () => props.opacity,
  (newOpacity: number) => {
    vectorLayer.value.setOpacity(newOpacity);
  },
  { immediate: true },
);

onMounted(() => {
  map?.addLayer(vectorLayer.value);
  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(vectorLayer.value);
    layerGroup.setLayers(layerCollection);
  }
});

onUnmounted(() => {
  map?.removeLayer(vectorLayer.value);
});

provide("vectorLayer", vectorLayer);
provide("stylable", vectorLayer);

defineExpose({
  vectorLayer,
});
</script>
