<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import GeoTIFF, { type Options } from "ol/source/GeoTIFF";
import { inject, type Ref } from "vue";
import type TileLayer from "ol/layer/Tile";
import type { TileSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  normalize: true,
  interpolate: true,
});
defineEmits<TileSourceEvents>();

const layer = inject<Ref<TileLayer<GeoTIFF>> | null>("tileLayer");

const { source } = useSource(GeoTIFF, layer, props);

defineExpose({
  layer,
  source,
});
</script>
