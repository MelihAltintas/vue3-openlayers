<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import GeoTIFF, { type Options } from "ol/source/GeoTIFF";
import { inject, onMounted, onUnmounted, watch, type Ref } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type TileLayer from "ol/layer/Tile";
import projectionFromProperties from "@/helpers/projection";
import {
  TILE_SOURCE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<Options>();

const layer = inject<Ref<TileLayer<GeoTIFF>> | null>("tileLayer");
const properties = usePropsAsObjectProperties(props);

const createSource = () =>
  new GeoTIFF({
    ...properties,
    projection: projectionFromProperties(properties.projection),
  });

let source = createSource();

useOpenLayersEvents(source, TILE_SOURCE_EVENTS);

watch(properties, () => {
  layer?.value.setSource(null);
  source = createSource();
  layer?.value.setSource(source);
});
onMounted(() => {
  layer?.value.setSource(source);
});

onUnmounted(() => {
  layer?.value.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>
