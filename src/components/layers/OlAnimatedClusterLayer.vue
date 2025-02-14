<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, shallowRef, watch } from "vue";
import { Cluster } from "ol/source";
import AnimatedCluster from "ol-ext/layer/AnimatedCluster";
import useLayer from "@/composables/useLayer";
import type { Point } from "ol/geom";
import {
  VECTOR_SOURCE_EVENTS,
  type LayerEvents,
  type VectorSourceEvents,
} from "@/composables/useOpenLayersEvents";
import type { Options } from "ol/layer/Vector";
import { useDefaults } from "./LayersCommonProps";
import type VectorSource from "ol/source/Vector";
import type { LayerSwitcherOptions } from "@/types";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

// Copied from ol-ext; vue compiler chokes if we try to use the one in the library
interface ClusterOptions extends Options<VectorSource> {
  animationDuration?: number;
  easingFunction?: (t: number) => number;
  animationMethod?: (t: number) => number;
}

type Props = {
  distance?: number;
} & ClusterOptions &
  LayerSwitcherOptions;

const props = withDefaults(defineProps<Props>(), useDefaults<Props>());
defineEmits<LayerEvents & VectorSourceEvents>();

const clusterSource = shallowRef(
  new Cluster({
    distance: props.distance,
    geometryFunction: (feature) => feature.getGeometry() as Point,
  }),
);

const { layer, map } = useLayer(
  AnimatedCluster,
  {
    ...props,
    source: clusterSource.value,
  },
  VECTOR_SOURCE_EVENTS,
);

watch(
  () => props.distance,
  (newValue) => {
    clusterSource.value.setDistance(newValue!);
  },
);

provide("vectorLayer", clusterSource);
provide("stylable", layer);

defineExpose({
  vectorLayer: layer,
  map,
});
</script>
