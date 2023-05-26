<template>
  <div v-if="false"></div>
</template>

<script setup>
import OSM from "ol/source/OSM";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps({
  attributions: {
    type: String,
  },
  cacheSize: {
    type: Number,
    default: 2048,
  },
  crossOrigin: {
    type: String,
    default: "anonymous",
  },
  minZoom: {
    type: Number,
    default: 0,
  },
  maxZoom: {
    type: Number,
    default: 19,
  },
  opaque: {
    type: Boolean,
    default: true,
  },
  reprojectionErrorThreshold: {
    type: Number,
    default: 0.5,
  },
  transition: {
    type: Number,
    default: 250,
  },
  url: {
    type: String,
    default: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  wrapX: {
    type: Boolean,
    default: true,
  },
});

const layer = inject("tileLayer");

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => new OSM(properties));

watch(source, () => {
  layer.value.setSource(source.value);
});

watch(layer, () => {
  layer.value.setSource(source.value);
});

onMounted(() => {
  layer.value.setSource(source.value);
});

onUnmounted(() => {
  layer.value.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>

<style lang=""></style>
