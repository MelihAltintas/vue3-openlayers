<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import VectorTileSource, { type Options } from "ol/source/VectorTile";
import type VectorTileLayer from "ol/layer/VectorTile";
import type { Ref } from "vue";
import { inject, provide } from "vue";
import type { TileSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  attributionsCollapsible: true,
  overlaps: true,
  wrapX: true,
});
defineEmits<TileSourceEvents>();

const vectorTileLayer = inject<Ref<VectorTileLayer> | null>(
  "vectorTileLayer",
  null,
);

const { source } = useSource(VectorTileSource, vectorTileLayer, props);

provide("vectorSource", source);

defineExpose({
  vectorTileLayer,
  source,
});
</script>
