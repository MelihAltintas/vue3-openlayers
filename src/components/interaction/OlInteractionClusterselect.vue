<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject, watch, onMounted, onUnmounted, computed } from "vue";
import SelectCluster, { type Options } from "ol-ext/interaction/SelectCluster";
import Style from "ol/style/Style";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  type CommonEvents,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";
import type { SelectEvent } from "ol/interaction/Select";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  multi: false,
  pointRadius: 7,
  animate: true,
  animationDuration: 500,
  spiral: true,
  selectCluster: true,
  autoClose: true,
});
defineEmits<
  CommonEvents & {
    (e: "select", event: SelectEvent): void;
  }
>();

const map = inject<Map>("map");

const properties = usePropsAsObjectProperties(props);

const select = computed(
  () =>
    new SelectCluster({
      style: new Style(),
      ...properties,
    }),
);

useOpenLayersEvents(select, ["select"]);

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
