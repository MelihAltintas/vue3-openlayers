<template>
  <slot></slot>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted } from "vue";
import Snap, { type Options } from "ol/interaction/Snap";
import type Map from "ol/Map";
import type VectorSource from "ol/source/Vector";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(defineProps<Options>(), {
  vertex: true,
  edge: true,
});

const map = inject<Map>("map");
const vectorSource = inject<Ref<VectorSource> | null>("vectorSource");

const properties = usePropsAsObjectProperties(props);

const createSnap = () =>
  new Snap({
    ...(properties as Options),
    source: props.source || vectorSource?.value,
  });
let snap = createSnap();

watch(properties, () => {
  map?.removeInteraction(snap);
  snap = createSnap();
  map?.addInteraction(snap);
  map?.changed();
});

onMounted(() => {
  map?.addInteraction(snap);
});

onUnmounted(() => {
  map?.removeInteraction(snap);
});

defineExpose({
  snap,
});
</script>
