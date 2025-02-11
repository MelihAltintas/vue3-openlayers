<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileJSON, { type Options } from "ol/source/TileJSON";
import { inject, type Ref } from "vue";
import type TileLayer from "ol/layer/Tile";
import useSource from "@/composables/useSource";
import type { TileSourceEvents } from "@/composables";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  interpolate: true,
  wrapX: true,
});
defineEmits<TileSourceEvents>();

const layer = inject<Ref<TileLayer<TileJSON>> | null>("tileLayer");

const { source } = useSource(TileJSON, layer, props);

defineExpose({
  layer,
  source,
});
</script>
