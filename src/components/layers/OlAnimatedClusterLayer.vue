<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, shallowRef, watch } from "vue";
import { Cluster } from "ol/source";
import { easeOut } from "ol/easing";
import AnimatedCluster from "ol-ext/layer/AnimatedCluster";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useLayer from "@/composables/useLayer";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type { Point } from "ol/geom";
import { FEATURE_EVENTS } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      animationDuration?: number;
      distance?: number;
      animationMethod?: (t: number) => number;
      updateWhileAnimating?: boolean;
      updateWhileInteracting?: boolean;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    opacity: 1,
    visible: true,
    animationDuration: 700,
    distance: 20,
    animationMethod: easeOut,
    updateWhileAnimating: false,
    updateWhileInteracting: false,
  },
);

const properties = usePropsAsObjectProperties(props);

const clusterSource = shallowRef(
  new Cluster({
    distance: properties.distance,
    geometryFunction: (feature) => feature.getGeometry() as Point,
  }),
);

const { layer, map } = useLayer(
  AnimatedCluster,
  {
    ...props,
    source: clusterSource.value,
  },
  FEATURE_EVENTS,
);

watch(
  () => props.distance,
  (newValue) => {
    clusterSource.value.setDistance(newValue);
  },
);

provide("vectorLayer", clusterSource);
provide("stylable", layer);

defineExpose({
  vectorLayer: layer,
  map,
});
</script>
