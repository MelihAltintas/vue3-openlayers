<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {
  inject,
  provide,
  onUnmounted,
  onMounted,
  watch,
  shallowRef,
} from "vue";
import { Cluster } from "ol/source";
import { easeOut } from "ol/easing";
import AnimatedCluster from "ol-ext/layer/AnimatedCluster";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type { Point } from "ol/geom";
import type LayerGroup from "ol/layer/Group";
import {
  FEATURE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

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

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const { properties } = usePropsAsObjectProperties(props);

const clusterSource = shallowRef(
  new Cluster({
    distance: properties.distance,
    geometryFunction: (feature) => feature.getGeometry() as Point,
  }),
);

useOpenLayersEvents(clusterSource, FEATURE_EVENTS);

watch(
  () => properties.distance,
  (newValue) => {
    clusterSource.value.setDistance(newValue);
  },
);

const vectorLayer = shallowRef(
  new AnimatedCluster({
    ...properties,
    source: clusterSource.value,
  }),
);

watch(
  () => properties,
  (newValue) => {
    vectorLayer.value.setProperties(properties);

    for (const key in newValue) {
      const keyInObj = key as keyof typeof newValue;
      if (newValue[keyInObj]) {
        vectorLayer.value.set(key, newValue[keyInObj]);
      }
    }

    if (layerGroup) {
      const layerCollection = layerGroup.getLayers();
      layerCollection.push(vectorLayer.value);
      layerGroup.setLayers(layerCollection);
    }
  },
  { deep: true },
);

onMounted(() => {
  map?.addLayer(vectorLayer.value);
  vectorLayer.value.changed();
  map?.changed();
});

onUnmounted(() => {
  map?.removeLayer(vectorLayer.value);
});

provide("vectorLayer", clusterSource);
provide("stylable", vectorLayer);

defineExpose({
  vectorLayer,
  map,
});
</script>
