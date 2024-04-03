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
import {
  inject,
  watch,
  onMounted,
  onUnmounted,
  provide,
  shallowRef,
} from "vue";
import type Geometry from "ol/geom/Geometry";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  useOpenLayersEvents,
  FEATURE_EVENTS,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options<Geometry>>(), {
  overlaps: true,
  projection: "EPSG:3857",
  useSpatialIndex: true,
  wrapX: true,
});

const vectorLayer = inject<Ref<VectorLayer<VectorSource<Geometry>>> | null>(
  "vectorLayer",
  null,
);
const heatmapLayer = inject<Ref<HeatmapLayer> | null>("heatmapLayer", null);
const webglVectorLayer = inject<Ref<WebGLVectorLayer> | null>(
  "webglVectorLayer",
  null,
);
const layer = heatmapLayer || vectorLayer || webglVectorLayer;

const { properties } = usePropsAsObjectProperties(props);

const source = shallowRef(new VectorSource(properties));

useOpenLayersEvents(source, FEATURE_EVENTS);

const applySource = () => {
  const existingSource = layer?.value.getSource();
  if (existingSource) {
    for (const key in properties) {
      const keyInObj = key as keyof typeof properties;
      if (properties[keyInObj]) {
        existingSource.set(key, properties[keyInObj]);
      }
    }
  } else {
    layer?.value.setSource(source.value);
  }
};

watch(
  () => properties.features,
  (updatedFeatures, oldFeatures) => {
    if (updatedFeatures !== oldFeatures) {
      source.value.clear();
      if (updatedFeatures) {
        source.value.addFeatures(updatedFeatures);
      }
    }
    applySource();
  },
  { deep: true },
);

watch(
  () => properties.url,
  (updatedUrl, newUrl) => {
    if (updatedUrl !== newUrl) {
      source.value.clear();
      if (updatedUrl) {
        source.value.setUrl(updatedUrl);
      }
    }
    applySource();
  },
);

watch(
  () => properties,
  () => applySource(),
);

watch(
  () => layer?.value,
  () => applySource(),
);

onMounted(() => {
  applySource();
});

onUnmounted(() => {
  layer?.value.setSource(null);
});

provide("vectorSource", source);

defineExpose({
  layer,
  source,
});
</script>
