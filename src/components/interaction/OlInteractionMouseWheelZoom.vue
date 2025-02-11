<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import MouseWheelZoom, { type Options } from "ol/interaction/MouseWheelZoom";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(defineProps<Options>(), { useAnchor: true });

const map = inject<Map>("map");
const properties = usePropsAsObjectProperties(props);
const mouseWheelZoom = computed(() => new MouseWheelZoom(properties));

watch(mouseWheelZoom, (newVal, oldVal) => {
  map?.removeInteraction(oldVal);
  map?.addInteraction(newVal);
  map?.changed();
});

onMounted(() => {
  // remove the default MouseWheelZoom interaction if available
  map?.getInteractions().forEach((interaction) => {
    if (interaction instanceof MouseWheelZoom) {
      map?.removeInteraction(interaction);
    }
  });
  map?.addInteraction(mouseWheelZoom.value);
});

onUnmounted(() => {
  map?.removeInteraction(mouseWheelZoom.value);
});

defineExpose({
  mouseWheelZoom,
});
</script>
