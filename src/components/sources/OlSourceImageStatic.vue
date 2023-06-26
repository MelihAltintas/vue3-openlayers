<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Static, { type Options } from "ol/source/ImageStatic";
import { inject, onMounted, onUnmounted, watch } from "vue";
import type ImageLayer from "ol/layer/Image";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import eventGateway, { IMAGE_SOURCE_EVENTS } from "@/helpers/eventGateway";
import projectionFromProperties from "@/helpers/projection";

const props = withDefaults(defineProps<Options>(), {
  interpolate: true,
});
const emit = defineEmits([]);

const layer = inject<ImageLayer<Static> | null>("imageLayer");
const { properties } = usePropsAsObjectProperties(props);

const createSource = () => {
  const s = new Static({
    ...properties,
    projection: projectionFromProperties(properties.projection),
  });

  eventGateway(emit, s, IMAGE_SOURCE_EVENTS);

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
