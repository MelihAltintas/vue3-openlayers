<template lang="">
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";

import TileLayer from "ol/layer/WebGLTile";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useBaseLayerProps from "@/composables/useBaseLayerProps";

const props = defineProps({
  ...useBaseLayerProps(),
  preload: {
    type: Number,
    default: 1,
  },
});

const map = inject("map");
const overViewMap = inject("overviewMap", null);

const { properties } = usePropsAsObjectProperties(props);

const tileLayer = computed(() => new TileLayer(properties));

const applyTileLayer = () => {
  if (overViewMap != null) {
    overViewMap.value.getOverviewMap().addLayer(tileLayer.value);
    overViewMap.value.changed();
  } else {
    map.addLayer(tileLayer.value);
  }
};

const removeTileLayer = () => {
  if (overViewMap != null) {
    overViewMap.value.getOverviewMap().removeLayer(tileLayer.value);
    overViewMap.value.changed();
  } else {
    map.removeLayer(tileLayer.value);
  }
};

if (overViewMap != null) {
  watch(overViewMap, () => {
    removeTileLayer();
    applyTileLayer();
  });
}

onMounted(() => {
  applyTileLayer();
});

onUnmounted(() => {
  removeTileLayer();
});

provide("tileLayer", tileLayer);

defineExpose({
  tileLayer,
});
</script>

<style lang=""></style>
