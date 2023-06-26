<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import BingMaps, { type Options } from "ol/source/BingMaps";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import eventGateway, { IMAGE_SOURCE_EVENTS } from "@/helpers/eventGateway";

const props = withDefaults(
  defineProps<Omit<Options, "key"> & { apiKey: string }>(),
  {
    hidpi: false,
    culture: "en-us",
    imageSmoothing: true,
    maxZoom: 21,
    reprojectionErrorThreshold: 0.5,
    tileLoadFunction: (imageTile: any, src: any) => {
      imageTile.getImage().src = src;
    },
    wrapX: true,
  }
);
const emit = defineEmits([]);

const layer = inject<Ref<TileLayer<BingMaps>> | null>("tileLayer");

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => {
  const bingMaps = new BingMaps({
    ...properties,
    key: properties.apiKey,
  });

  eventGateway(emit, bingMaps, IMAGE_SOURCE_EVENTS);

  return bingMaps;
});

watch(source, () => {
  layer?.value?.setSource(source.value);
});

watch(
  () => layer?.value,
  () => {
    layer?.value?.setSource(source.value);
  }
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
