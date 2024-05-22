<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import ImageWMS, { type Options } from "ol/source/ImageWMS";
import { inject, type Ref } from "vue";
import type ImageLayer from "ol/layer/Image";
import { IMAGE_SOURCE_EVENTS } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

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

const layer = inject<Ref<ImageLayer<ImageWMS>> | null>("imageLayer");

const { source } = useSource(
  ImageWMS,
  layer,
  {
    ...props,
    params: {
      ...props.params,
      LAYERS: props.layers,
      STYLES: props.styles,
      TIME: props.time,
    },
  },
  IMAGE_SOURCE_EVENTS,
);

defineExpose({
  layer,
  source,
});
</script>
