<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import Cluster, { type Options } from "ol/source/Cluster";
import type { Ref } from "vue";
import { inject, provide } from "vue";
import type Geometry from "ol/geom/Geometry";
import type Feature from "ol/Feature";
import type Point from "ol/geom/Point";
import { FEATURE_EVENTS } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options<Feature>>(), {
  distance: 20,
  geometryFunction: (feature: Feature<Geometry>): Point =>
    feature.getGeometry() as Point,
  wrapX: true,
});

const layer = inject<Ref<Cluster<Feature>> | null>("vectorLayer");

const { source } = useSource(Cluster, layer, props, FEATURE_EVENTS);

provide("vectorLayer", source);

defineExpose({
  layer,
  source,
});
</script>
