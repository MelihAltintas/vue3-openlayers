<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, onUnmounted, onMounted, watch, computed } from "vue";
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
  }
);

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);

const { properties } = usePropsAsObjectProperties(props);

const vectorLayer = computed(() => {
  const ac = new AnimatedCluster({
    ...properties,
    source: new Cluster({
      distance: properties.distance,
      geometryFunction: (feature) => feature.getGeometry() as Point,
    }),
  });

  return ac;
});

const source = computed(() => vectorLayer.value.getSource());

watch(properties, () => {
  vectorLayer.value.setProperties(properties);
  vectorLayer.value.changed();

  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(vectorLayer.value);
    layerGroup.setLayers(layerCollection);
  }
});

onMounted(() => {
  map?.addLayer(vectorLayer.value);
  vectorLayer.value.changed();
  map?.changed();
});

onUnmounted(() => {
  map?.removeLayer(vectorLayer.value);
});

provide("vectorLayer", source);
provide("stylable", vectorLayer);

defineExpose({
  vectorLayer,
  map,
});
</script>
