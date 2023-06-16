<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Static, { type Options } from "ol/source/ImageStatic";
import { computed, inject, onMounted, onUnmounted, watch, type Ref } from "vue";
import type ImageLayer from "ol/layer/Image";
import type ImageSource from "ol/source/Image";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import eventGateway from "@/helpers/eventGateway";
import projectionFromProperties from "@/helpers/projection";

const props = withDefaults(defineProps<Options>(), {
  interpolate: true,
});
const emit = defineEmits([]);

const layer = inject<ImageLayer<ImageSource> | null>("imageLayer");
const { properties } = usePropsAsObjectProperties(props);

const createSource = () => {
  const s = new Static({
    ...properties,
    projection: projectionFromProperties(properties.projection),
  });

  eventGateway(emit, s, [
    "change",
    "error",
    "imageloadend",
    "imageloaderror",
    "imageloadstart",
    "propertychange",
  ]);

  return s;
};

let source = createSource();

watch(properties, () => {
  layer?.setSource(null);
  source = createSource();
  layer?.setSource(source);
});
onMounted(() => {
  layer?.setSource(source);
});

onUnmounted(() => {
  layer?.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>
