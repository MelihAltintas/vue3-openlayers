<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileDebug, { type Options } from "ol/source/TileDebug";
import { inject, type Ref } from "vue";
import type TileLayer from "ol/layer/Tile";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {});

const layer = inject<Ref<TileLayer<TileDebug>> | null>("tileLayer");

const { source } = useSource(TileDebug, layer, props, [
  "tileloadend",
  "tileloadstart",
  "tileloaderror",
]);

defineExpose({
  layer,
  source,
});
</script>
