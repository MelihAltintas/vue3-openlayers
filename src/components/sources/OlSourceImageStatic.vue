<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Static, { type Options } from "ol/source/ImageStatic";
import { inject, onMounted, onUnmounted, watch } from "vue";
import type ImageLayer from "ol/layer/Image";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import projectionFromProperties from "@/helpers/projection";
import {
  IMAGE_SOURCE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  interpolate: true,
});

const layer = inject<ImageLayer<Static> | null>("imageLayer");
const { properties } = usePropsAsObjectProperties(props);

const createSource = () =>
  new Static({
    ...properties,
    projection: projectionFromProperties(properties.projection),
  });

let source = createSource();
useOpenLayersEvents(source, IMAGE_SOURCE_EVENTS);

watch(properties, () => {
  layer?.setSource(null);
  source = createSource();
  layer?.setSource(source);
});
onMounted(() => {
  layer?.setSource(source);
});

onUnmounted(() => {
  layer?.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>
