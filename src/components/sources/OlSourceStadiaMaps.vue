<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import StadiaMaps, { type Options } from "ol/source/StadiaMaps";
import { inject, type Ref } from "vue";
import type TileLayer from "ol/layer/Tile";
import type { TileSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  interpolate: true,
  wrapX: true,
});
defineEmits<TileSourceEvents>();

// NOTE: Layers from Stadia Maps do not require an API key for localhost development or most production
// web deployments. See https://docs.stadiamaps.com/authentication/ for details.
const layer = inject<Ref<TileLayer<StadiaMaps>> | null>("tileLayer");

const { source } = useSource(StadiaMaps, layer, props);

defineExpose({
  layer,
  source,
});
</script>
