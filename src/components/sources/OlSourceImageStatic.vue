<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Static, { type Options } from "ol/source/ImageStatic";
import Projection from "ol/proj/Projection";
import { inject, onMounted, onUnmounted, watch } from "vue";
import type { Extent } from "ol/extent";
import type ImageLayer from "ol/layer/Image";
import type ImageSource from "ol/source/Image";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { ProjectionLike } from "ol/proj";

const props = withDefaults(
  defineProps<{
    attributions?: string;
    crossOrigin?: string;
    imageExtent?: Extent;
    projection?: ProjectionLike;
    imageSmoothing?: boolean;
    imageSize?: number[];
    url: string;
  }>(),
  {
    imageSmoothing: true,
  }
);

const layer = inject<ImageLayer<ImageSource> | null>("imageLayer");
const { properties } = usePropsAsObjectProperties(props);

const createSource = () => {
  return new Static({
    ...properties,
    projection:
      typeof properties.projection === "string"
        ? properties.projection
        : // @ts-ignore
          new Projection({
            ...properties.projection,
          }),
  } as Options);
};

let source = createSource();

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
