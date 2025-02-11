<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileDebug, { type Options } from "ol/source/TileDebug";
import { inject, type Ref } from "vue";
import type TileLayer from "ol/layer/Tile";
import useSource from "@/composables/useSource";
import type { TileSourceEvents } from "@/composables";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), { wrapX: true });
defineEmits<TileSourceEvents>();

const layer = inject<Ref<TileLayer<TileDebug>> | null>("tileLayer");

const { source } = useSource(TileDebug, layer, props);

defineExpose({
  layer,
  source,
});
</script>
