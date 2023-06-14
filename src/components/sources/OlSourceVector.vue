<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { LoadingStrategy, Options } from "ol/source/Vector";
import VectorSource from "ol/source/Vector";
import type VectorLayer from "ol/layer/Vector";
import type HeatmapLayer from "ol/layer/Heatmap";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import type { AttributionLike } from "ol/source/Source";
import type Collection from "ol/Collection";
import type Feature from "ol/Feature";
import type Geometry from "ol/geom/Geometry";
import type FeatureFormat from "ol/format/Feature";
import type { FeatureLoader, FeatureUrlFunction } from "ol/featureloader";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    attributions?: AttributionLike;
    features?: Collection<Feature<Geometry>>;
    format?: FeatureFormat | undefined;
    loader?: FeatureLoader;
    overlaps?: boolean;
    projection?: string;
    strategy?: LoadingStrategy;
    url?: string | FeatureUrlFunction;
    useSpatialIndex?: boolean;
    wrapX?: boolean;
  }>(),
  {
    overlaps: true,
    projection: "EPSG:3857",
    useSpatialIndex: true,
    wrapX: true,
  }
);

const emit = defineEmits([
  "addfeature",
  "change",
  "changefeature",
  "clear",
  "error",
  "featuresloadend",
  "featuresloaderror",
  "featuresloadstart",
  "propertychange",
  "removefeature",
]);

const vectorLayer = inject<Ref<VectorLayer<VectorSource>> | null>(
  "vectorLayer",
  null
);
const heatmapLayer = inject<Ref<HeatmapLayer> | null>("heatmapLayer", null);
const layer = heatmapLayer || vectorLayer;

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => {
  const vs = new VectorSource(properties as Options<Geometry>);

  vs.on("addfeature", (...args) => emit("addfeature", ...args));
  vs.on("change", (...args) => emit("change", ...args));
  vs.on("changefeature", (...args) => emit("changefeature", ...args));
  vs.on("clear", (...args) => emit("clear", ...args));
  vs.on("error", (...args) => emit("error", ...args));
  vs.on("featuresloadend", (...args) => emit("featuresloadend", ...args));
  vs.on("featuresloaderror", (...args) => emit("featuresloaderror", ...args));
  vs.on("featuresloadstart", (...args) => emit("featuresloadstart", ...args));
  vs.on("propertychange", (...args) => emit("propertychange", ...args));
  vs.on("removefeature", (...args) => emit("removefeature", ...args));

  return vs;
});

const applySource = () => {
  // @ts-ignore
  layer?.value?.setSource(null);
  // @ts-ignore
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
  }
);

onMounted(() => {
  // @ts-ignore
  layer?.value?.setSource(source.value);
});

onUnmounted(() => {
  // @ts-ignore
  layer?.value?.setSource(null);
});

provide("vectorSource", source);

defineExpose({
  layer,
  source,
});
</script>
