<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import OSM, { type Options } from "ol/source/OSM";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type TileLayer from "ol/layer/Tile";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import eventGateway from "@/helpers/eventGateway";

const props = withDefaults(defineProps<Options>(), {
  crossOrigin: "anonymous",
  interpolate: true,
  imageSmoothing: true,
  maxZoom: 19,
  opaque: true,
  reprojectionErrorThreshold: 0.5,
  transition: 250,
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  wrapX: true,
  zDirection: 0,
});
const emit = defineEmits([]);

const layer = inject<Ref<TileLayer<OSM>> | null>("tileLayer");

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => {
  const o = new OSM(properties);

  eventGateway(emit, o, [
    "change",
    "error",
    "tileloadend",
    "tileloaderror",
    "tileloadstart",
    "propertychange",
  ]);

  return o;
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
