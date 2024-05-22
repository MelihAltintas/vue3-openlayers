<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import GeoTIFF, { type Options } from "ol/source/GeoTIFF";
import { inject, type Ref } from "vue";
import type TileLayer from "ol/layer/Tile";
import { TILE_SOURCE_EVENTS } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<Options>();

const layer = inject<Ref<TileLayer<GeoTIFF>> | null>("tileLayer");

const { source } = useSource(GeoTIFF, layer, props, TILE_SOURCE_EVENTS);

defineExpose({
  layer,
  source,
});
</script>
