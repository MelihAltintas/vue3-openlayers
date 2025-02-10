<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileArcGISRest, { type Options } from "ol/source/TileArcGISRest";
import { computed, inject, type Ref } from "vue";
import { createXYZ } from "ol/tilegrid";
import type TileLayer from "ol/layer/Tile";
import type { TileSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

type Props = Options & { tileSize: number[] };
const props = withDefaults(defineProps<Props>(), {
  interpolate: true,
  hidpi: true,
  wrapX: true,
  tileSize: () => [256, 256],
});
defineEmits<TileSourceEvents>();

const tileLayer = inject<Ref<TileLayer<TileArcGISRest>> | null>("tileLayer");

const tileGrid = computed(() => {
  return (
    props.tileGrid ||
    createXYZ({
      tileSize: props.tileSize,
    })
  );
});

const { source } = useSource(TileArcGISRest, tileLayer, {
  ...props,
  tileGrid: tileGrid.value,
});

defineExpose({
  tileLayer,
  source,
});
</script>
