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
  computed,
  type Ref,
} from "vue";
import TileLayer from "ol/layer/Tile";
import type Map from "ol/Map";
import type { OverviewMap } from "ol/control";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";

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
  if (overViewMap?.value) {
    overViewMap.value?.getOverviewMap().removeLayer(tileLayer.value);
    overViewMap.value?.changed();
  } else {
    map?.removeLayer(tileLayer.value);
  }
};

if (overViewMap?.value) {
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
