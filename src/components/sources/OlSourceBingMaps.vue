<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import BingMaps, { type Options } from "ol/source/BingMaps";
import type { Ref } from "vue";
import { inject } from "vue";
import type TileLayer from "ol/layer/Tile";
import { IMAGE_SOURCE_EVENTS } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<Omit<Options, "key"> & { apiKey: string }>();

const layer = inject<Ref<TileLayer<BingMaps>> | null>("tileLayer");

const { source } = useSource(
  BingMaps,
  layer,
  {
    ...props,
    key: props.apiKey,
  },
  IMAGE_SOURCE_EVENTS,
);

defineExpose({
  layer,
  source,
});
</script>
