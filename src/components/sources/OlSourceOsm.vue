<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import OSM, { type Options } from "ol/source/OSM";
import type { Ref } from "vue";
import { inject } from "vue";
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

const layer = inject<Ref<TileLayer<OSM>> | null>("tileLayer");

const { source } = useSource(OSM, layer, props);

defineExpose({
  layer,
  source,
});
</script>
