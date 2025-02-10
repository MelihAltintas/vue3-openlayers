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
import Feature, { type ObjectWithGeometry } from "ol/Feature";
import Geometry from "ol/geom/Geometry";
import type VectorSource from "ol/source/Vector";
import type VectorLayer from "ol/layer/Vector";
import type HeatmapLayer from "ol/layer/Heatmap";
import type { FeatureAnimation } from "@/components/animations/AnimationTypes";

type Props = {
  properties?: Geometry | ObjectWithGeometry<Geometry>;
};
const props = defineProps<Props>();

const vectorSource = inject<Ref<VectorSource> | null>("vectorSource");
const vectorLayer = inject<Ref<VectorLayer<VectorSource<Feature>>> | null>(
  "vectorLayer",
  null,
);
const heatmapLayer = inject<Ref<HeatmapLayer> | null>("heatmapLayer", null);
const layer = heatmapLayer || vectorLayer;
const animation = inject<Ref<FeatureAnimation | null> | null>(
  "animation",
  null,
);

const feature = ref<Feature<Geometry>>(
  new Feature({ ...props.properties }),
) as Ref<Feature<Geometry>>;

watch(
  () => props.properties, // Needed as props.properties is optional
  (properties) => {
    // Ensure the feature's properties are updated on change
    if (properties instanceof Geometry) {
      feature.value.setGeometry(properties);
      feature.value.setProperties({});
    } else if (typeof properties !== "undefined") {
      feature.value.setGeometry(undefined);
      feature.value.setProperties(properties);
    } else {
      feature.value.setGeometry(undefined);
      feature.value.setProperties({});
    }
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
    // @ts-expect-error because of extra prototype function
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
