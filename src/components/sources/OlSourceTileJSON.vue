<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileJSON, { type Options } from "ol/source/TileJSON";
import { inject, onMounted, onUnmounted, watch, type Ref, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type TileLayer from "ol/layer/Tile";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  interpolate: true,
  jsonp: false,
  styles: "",
  reprojectionErrorThreshold: 0.5,
  zDirection: 0,
  wrapX: true,
});

const layer = inject<Ref<TileLayer<TileJSON>> | null>("tileLayer");
const properties = usePropsAsObjectProperties(props);

const source = computed(() => new TileJSON(properties));

useOpenLayersEvents(source, [
  "removefeature",
  "tileloadend",
  "tileloadstart",
  "tileloaderror",
]);

const applySource = () => {
  layer?.value?.setSource(null);
  layer?.value?.setSource(source.value);
  layer?.value?.changed();
};
watch(properties, () => {
  applySource();
});

watch(
  () => layer?.value,
  () => {
    applySource();
  },
);

onMounted(() => {
  layer?.value?.setSource(source.value);
  layer?.value?.changed();
});

onUnmounted(() => {
  layer?.value?.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>
