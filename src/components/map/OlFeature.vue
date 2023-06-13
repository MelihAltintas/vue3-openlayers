<template>
  <slot></slot>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { provide, inject, watch, onMounted, onUnmounted, computed } from "vue";
import Feature from "ol/Feature";
import type Geometry from "ol/geom/Geometry";
import type VectorSource from "ol/source/Vector";
import type VectorLayer from "ol/layer/Vector";
import type HeatmapLayer from "ol/layer/Heatmap";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { FeatureAnimation } from "@/components/animations/AnimationTypes";

const props = withDefaults(
  defineProps<{
    properties?: Geometry | Record<string, unknown> | unknown[];
  }>(),
  {
    properties: () => [] as unknown[],
  }
);

const vectorSource = inject<Ref<VectorSource> | null>("vectorSource");
const vectorLayer = inject<Ref<VectorLayer<VectorSource>> | null>(
  "vectorLayer",
  null
);
const heatmapLayer = inject<Ref<HeatmapLayer> | null>("heatmapLayer", null);
const layer = heatmapLayer || vectorLayer;
const animation = inject<Ref<FeatureAnimation | null> | null>(
  "animation",
  null
);

const { properties } = usePropsAsObjectProperties(props);

const feature = computed(() => {
  // @ts-ignore
  const olFeature = new Feature({ ...properties.properties });
  return olFeature;
});

watch(feature, (newVal, oldVal) => {
  vectorSource?.value?.removeFeature(oldVal);
  vectorSource?.value?.addFeature(newVal);
  vectorSource?.value?.changed();
});

watch(
  () => vectorSource,
  (newVal, oldVal) => {
    oldVal?.value?.removeFeature(feature.value);
    newVal?.value?.addFeature(feature.value);
    newVal?.value?.changed();
  }
);

onMounted(() => {
  vectorSource?.value?.addFeature(feature.value);
  if (animation?.value) {
    // @ts-ignore
    layer?.value?.animateFeature(feature.value, animation.value);
  }
});

onUnmounted(() => {
  vectorSource?.value?.removeFeature(feature.value);
});

provide("feature", feature);

provide("stylable", feature);

defineExpose({
  feature,
});
</script>
