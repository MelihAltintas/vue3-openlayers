<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import ImageWMS, { type Options } from "ol/source/ImageWMS";
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

const props = withDefaults(
  defineProps<
    Options & {
      layers: string | unknown[];
      styles?: string | unknown[];
      time?: string;
    }
  >(),
  {
    projection: "EPSG:3857",
    reprojectionErrorThreshold: 0.5,
    format: "image/png",
    version: "1.3.0",
    serverType: "mapserver",
    styles: "",
    ratio: 1,
  },
);

const layer = inject<ImageLayer<ImageWMS> | null>("imageLayer");
const { properties } = usePropsAsObjectProperties(props);

const createSource = () =>
  new ImageWMS({
    ...properties,
    params: {
      ...props.params,
      LAYERS: props.layers,
      STYLES: props.styles,
      TIME: props.time,
    },
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
