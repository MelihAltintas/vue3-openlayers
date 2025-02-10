<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileWMS, { type Options } from "ol/source/TileWMS";
import { inject, type Ref } from "vue";
import type TileLayer from "ol/layer/Tile";
import type { TileSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

type Props = Options & {
  layers: string | unknown[];
  styles?: string | unknown[];
};
const props = withDefaults(defineProps<Props>(), {
  attributionsCollapsible: true,
  interpolate: true,
  hidpi: true,
  wrapX: true,
  styles: "",
  projection: "EPSG:3857",
});
defineEmits<TileSourceEvents>();

const layer = inject<Ref<TileLayer<TileWMS>> | null>("tileLayer");

const { source } = useSource(TileWMS, layer, {
  ...props,
  params: {
    ...props.params,
    LAYERS: props.layers,
    STYLES: props.styles,
  },
  tileGrid: props.tileGrid,
});

defineExpose({
  layer,
  source,
});
</script>
