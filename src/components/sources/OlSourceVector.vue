<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import VectorSource, { type Options } from "ol/source/Vector";
import type VectorLayer from "ol/layer/Vector";
import type HeatmapLayer from "ol/layer/Heatmap";
import type { WebGLVectorLayer } from "../layers/WebGLVectorLayerClass";
import type { Ref } from "vue";
import { inject, provide, watch } from "vue";
import { FEATURE_EVENTS } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";
import type Feature from "ol/Feature";
import { Collection } from "ol";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options<Feature>>(), {
  overlaps: true,
  projection: "EPSG:3857",
  useSpatialIndex: true,
  wrapX: true,
});

const vectorLayer = inject<Ref<VectorLayer<VectorSource<Feature>>> | null>(
  "vectorLayer",
  null,
);
const heatmapLayer = inject<Ref<HeatmapLayer> | null>("heatmapLayer", null);
const webglVectorLayer = inject<Ref<WebGLVectorLayer> | null>(
  "webglVectorLayer",
  null,
);
const layer = heatmapLayer || vectorLayer || webglVectorLayer;

const { source, updateSource } = useSource(
  VectorSource,
  layer,
  props,
  FEATURE_EVENTS,
);

watch(
  () => props.features,
  (updatedFeatures, oldFeatures) => {
    if (updatedFeatures !== oldFeatures) {
      source.value.clear();
      if (updatedFeatures) {
        const featureArray =
          updatedFeatures instanceof Collection
            ? updatedFeatures.getArray()
            : updatedFeatures;
        source.value.addFeatures(featureArray);
      }
    }
    updateSource();
  },
  { deep: true },
);

watch(
  () => props.url,
  (updatedUrl, newUrl) => {
    if (updatedUrl !== newUrl) {
      source.value.clear();
      if (updatedUrl) {
        source.value.setUrl(updatedUrl);
        source.value.refresh();
      }
    }

    updateSource();
  },
);

provide("vectorSource", source);

defineExpose({
  layer,
  source,
});
</script>
