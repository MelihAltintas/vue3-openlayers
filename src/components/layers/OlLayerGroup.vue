<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {
  inject,
  provide,
  onUnmounted,
  onMounted,
  watch,
  shallowRef,
} from "vue";
import LayerGroup, { type Options } from "ol/layer/Group";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { layersCommonDefaultProps } from "@/components/layers/LayersCommonProps";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<Options & { className?: string }>(),
  layersCommonDefaultProps,
);

const map = inject<Map>("map");
const properties = usePropsAsObjectProperties(props);

const layerGroup = shallowRef(new LayerGroup(properties));
useOpenLayersEvents(layerGroup, [
  "change:extend",
  "change:layers",
  "change:maxResolution",
  "change:maxZoom",
  "change:minResolution",
  "change:minZoom",
  "change:opacity",
  "change:visible",
  "change:zIndex",
]);

const parentLayerGroup = inject<LayerGroup | null>("layerGroup", null);

watch(
  () => properties,
  (newValue) => {
    for (const key in newValue) {
      const keyInObj = key as keyof typeof newValue;
      if (newValue[keyInObj]) {
        layerGroup.value.set(key, newValue[keyInObj]);
      }
    }
  },
  { deep: true },
);

onMounted(() => {
  map?.addLayer(layerGroup.value);
  if (parentLayerGroup) {
    const layerCollection = parentLayerGroup.getLayers();
    layerCollection.push(layerGroup.value);
    parentLayerGroup.setLayers(layerCollection);
  }
});

onUnmounted(() => {
  map?.removeLayer(layerGroup.value);
});

provide("layerGroup", layerGroup.value);

defineExpose({
  layerGroup: layerGroup.value,
});
</script>
