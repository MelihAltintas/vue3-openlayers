<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import { inject } from "vue";
import type TileLayer from "ol/layer/Tile";
import Tianditu, { type Options } from "@/components/sources/TiandituClass";
import type { ImageTile } from "ol";
import type { TileSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  layerType: "img",
  isLabel: false,
  projection: "EPSG:3857",
  requestEncoding: "KVP",
  version: "1.0.0",
  dimensions: () => ({}),
  maxZoom: 21,
  tileLoadFunction: (imageTile, src) => {
    ((imageTile as ImageTile).getImage() as HTMLImageElement).src = src;
  },
  wrapX: true,
});
defineEmits<TileSourceEvents>();

const layer = inject<Ref<TileLayer<Tianditu>> | null>("tileLayer");

const { source } = useSource(Tianditu, layer, props);

defineExpose({
  layer,
  source,
});
</script>
