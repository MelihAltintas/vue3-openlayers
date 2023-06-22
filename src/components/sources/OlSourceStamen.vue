<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import Stamen, { type Options } from "ol/source/Stamen";
import { inject, onMounted, onUnmounted, watch, type Ref, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type TileLayer from "ol/layer/Tile";
import eventGateway from "@/helpers/eventGateway";

const props = withDefaults(defineProps<Options>(), {
  interpolate: true,
  styles: "",
  hidpi: false,
  reprojectionErrorThreshold: 0.5,
  transition: 250,
  zDirection: 0,
  wrapX: true,
});
const emit = defineEmits([]);

const layer = inject<Ref<TileLayer<Stamen>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => {
  const s = new Stamen(properties);

  eventGateway(emit, s, [
    "change",
    "error",
    "propertychange",
    "removefeature",
    "tileloadend",
    "tileloadstart",
    "tileloaderror",
  ]);

  return s;
});
const applySource = () => {
  layer?.value?.setSource(null);
  layer?.value?.setSource(source.value);
  layer?.value?.changed();
};
watch(properties, () => {
  applySource();
});

watch(
  () => layer?.value,
  () => {
    applySource();
  }
);

onMounted(() => {
  layer?.value?.setSource(source.value);
  layer?.value?.changed();
});

onUnmounted(() => {
  layer?.value?.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>
