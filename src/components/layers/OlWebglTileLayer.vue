<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";
import TileLayer from "ol/layer/WebGLTile";
import type Map from "ol/Map";
import type { OverviewMap } from "ol/control";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "./LayersCommonProps";

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      preload?: number;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    preload: 1,
  }
);

const map = inject<Map>("map");
const overViewMap = inject<Ref<OverviewMap | null> | null>("overviewMap", null);

const { properties } = usePropsAsObjectProperties(props);

const tileLayer = computed(() => new TileLayer(properties));

const applyTileLayer = () => {
  if (overViewMap?.value) {
    overViewMap.value?.getOverviewMap().addLayer(tileLayer.value);
    overViewMap.value?.changed();
  } else {
    map?.addLayer(tileLayer.value);
  }
};

const removeTileLayer = () => {
  if (overViewMap != null) {
    overViewMap.value?.getOverviewMap().removeLayer(tileLayer.value);
    overViewMap.value?.changed();
  } else {
    map?.removeLayer(tileLayer.value);
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
