<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject, watch, onMounted, onUnmounted, computed } from "vue";
import SelectCluster, { type Options } from "ol-ext/interaction/SelectCluster";
import Style from "ol/style/Style";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const emit = defineEmits(["select"]);

const props = withDefaults(defineProps<Options>(), {
  multi: false,
  pointRadius: 7,
  animate: true,
  animationDuration: 500,
  spiral: true,
  selectCluster: true,
  autoClose: true,
});

const map = inject<Map>("map");

const { properties } = usePropsAsObjectProperties(props);

const select = computed(() => {
  const s = new SelectCluster({
    style: new Style(),
    ...properties,
  });

  s.on("select", (event) => {
    emit("select", event);
  });

  return s;
});

watch(select, (newVal, oldVal) => {
  map?.removeInteraction(oldVal);
  map?.addInteraction(newVal);

  map?.changed();
});

onMounted(() => {
  map?.addInteraction(select.value);
});

onUnmounted(() => {
  map?.removeInteraction(select.value);
});

provide("stylable", select);

defineExpose({
  select,
});
</script>
