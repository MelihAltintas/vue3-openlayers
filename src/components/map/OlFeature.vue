<template>
  <slot></slot>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import {
  provide,
  inject,
  watch,
  onMounted,
  onUnmounted,
  ref,
  nextTick,
} from "vue";
import Feature from "ol/Feature";
import type Geometry from "ol/geom/Geometry";
import type VectorSource from "ol/source/Vector";
import type VectorLayer from "ol/layer/Vector";
import type HeatmapLayer from "ol/layer/Heatmap";
import type { FeatureAnimation } from "@/components/animations/AnimationTypes";

const props = withDefaults(
  defineProps<{
    properties?: Geometry | Record<string, unknown> | unknown[];
  }>(),
  {
    properties: () => [] as unknown[],
  },
);

const vectorSource = inject<Ref<VectorSource> | null>("vectorSource");
const vectorLayer = inject<Ref<VectorLayer<VectorSource<Geometry>>> | null>(
  "vectorLayer",
  null,
);
const heatmapLayer = inject<Ref<HeatmapLayer> | null>("heatmapLayer", null);
const layer = heatmapLayer || vectorLayer;
const animation = inject<Ref<FeatureAnimation | null> | null>(
  "animation",
  null,
);

const feature = ref<Feature<Geometry>>(new Feature({ ...props.properties }));

watch(
  () => props.properties, // Needed as props.properties is optional
  () => {
    // Ensure the feature's properties are updated on change
    feature.value.setProperties(props.properties);
  },
);

watch(
  () => vectorSource,
  (newVal, oldVal) => {
    oldVal?.value?.removeFeature(feature.value);
    newVal?.value?.addFeature(feature.value);
    newVal?.value?.changed();
  },
);

onMounted(() => {
  if (animation?.value) {
    // @ts-ignore
    layer?.value?.animateFeature(feature.value, animation.value);
  }
  nextTick(() => {
    vectorSource?.value?.addFeature(feature.value);
  });
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
