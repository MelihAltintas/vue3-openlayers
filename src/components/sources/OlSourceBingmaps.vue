<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import BingMaps, { type Options } from "ol/source/BingMaps";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  IMAGE_SOURCE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<Omit<Options, "key"> & { apiKey: string }>();

const layer = inject<Ref<TileLayer<BingMaps>> | null>("tileLayer");

const properties = usePropsAsObjectProperties(props);

const source = computed(
  () =>
    new BingMaps({
      ...properties,
      key: properties.apiKey,
    }),
);

useOpenLayersEvents(source, IMAGE_SOURCE_EVENTS);

watch(source, () => {
  layer?.value?.setSource(source.value);
});

watch(
  () => layer?.value,
  () => {
    layer?.value?.setSource(source.value);
  },
);

onMounted(() => {
  layer?.value?.setSource(source.value);
});

onUnmounted(() => {
  layer?.value?.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>
