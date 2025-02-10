<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import BingMaps, { type Options } from "ol/source/BingMaps";
import type { Ref } from "vue";
import { inject } from "vue";
import type TileLayer from "ol/layer/Tile";
import type { TileSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

type Props = Omit<Options, "key"> & { apiKey: string };
const props = withDefaults(defineProps<Props>(), {
  interpolate: true,
  wrapX: true,
});
defineEmits<TileSourceEvents>();

const layer = inject<Ref<TileLayer<BingMaps>> | null>("tileLayer");

const { source } = useSource(BingMaps, layer, {
  ...props,
  key: props.apiKey,
});

defineExpose({
  layer,
  source,
});
</script>
