<template>
  <slot></slot>
</template>

<script setup lang="ts">
import {
  provide,
  inject,
  watch,
  onMounted,
  onUnmounted,
  shallowRef,
} from "vue";
import Link, { type Options } from "ol/interaction/Link";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  animate: true,
  params: () => ["x", "y", "z", "r", "l"],
  replace: false,
  prefix: "",
});

const map = inject<Map>("map");
const properties = usePropsAsObjectProperties(props);

const link = shallowRef(new Link(properties));

useOpenLayersEvents(link, ["change:active"]);

watch(link, (newVal, oldVal) => {
  map?.removeInteraction(oldVal);
  map?.addInteraction(newVal);
  map?.changed();
});

onMounted(() => {
  map?.addInteraction(link.value);
});

onUnmounted(() => {
  map?.removeInteraction(link.value);
});

provide("stylable", link);

defineExpose({
  link,
});
</script>
