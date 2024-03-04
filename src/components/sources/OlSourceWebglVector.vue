<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import VectorSource, { type Options } from "ol/source/Vector";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";

import Layer from "ol/layer/Layer.js";
import WebGLVectorLayerRenderer from "ol/renderer/webgl/VectorLayer.js";
class WebGLVectorLayer extends Layer {
  createRenderer() {
    return new WebGLVectorLayerRenderer(this, {
      className: this.getClassName(),
      style: properties.style,
    });
  }
}

import type SimpleGeometry from "ol/geom/SimpleGeometry";
//old: import type Line from "ol/geom/Line";
//old: import type Polygon from "ol/geom/Polygon";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  FEATURE_EVENTS,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options<SimpleGeometry>>(), {
  overlaps: true,
  projection: "EPSG:3857",
  useSpatialIndex: true,
  wrapX: true,
});

const layer = inject<Ref<WebGLVectorLayer<VectorSource<SimpleGeometry>>> | null>(
  "webglVectorLayer",
);

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => new VectorSource(properties));

useOpenLayersEvents(source, FEATURE_EVENTS);

const applySource = () => {
  layer?.value?.setSource(null);
  layer?.value?.setSource(source.value || null);
  layer?.value?.changed();
};
watch(properties, () => {
  applySource();
});

watch(
  () => layer,
  () => {
    applySource();
  },
);

onMounted(() => {
  layer?.value?.setSource(source.value);
});

onUnmounted(() => {
  layer?.value?.setSource(null);
});

provide("vectorSource", source);

defineExpose({
  layer,
  source,
});
</script>
