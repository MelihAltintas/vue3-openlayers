<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileJSON, { type Options } from "ol/source/TileJSON";
import { inject, type Ref } from "vue";
import type TileLayer from "ol/layer/Tile";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  interpolate: true,
  jsonp: false,
  styles: "",
  reprojectionErrorThreshold: 0.5,
  zDirection: 0,
  wrapX: true,
});

const layer = inject<Ref<TileLayer<TileJSON>> | null>("tileLayer");

const { source } = useSource(TileJSON, layer, props, [
  "removefeature",
  "tileloadend",
  "tileloadstart",
  "tileloaderror",
]);

defineExpose({
  layer,
  source,
});
</script>
