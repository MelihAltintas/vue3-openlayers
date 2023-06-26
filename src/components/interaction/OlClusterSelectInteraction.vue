<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject, watch, onMounted, onUnmounted, computed } from "vue";
import Select from "ol-ext/interaction/SelectCluster";
import Style, { type StyleLike } from "ol/style/Style";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const emit = defineEmits(["select"]);

const props = withDefaults(
  defineProps<{
    multi?: boolean;
    condition?: () => boolean;
    filter?: () => boolean;
    pointRadius?: number;
    animate?: boolean;
    animationDuration?: number;
    spiral?: boolean;
    selectCluster?: boolean;
    autoClose?: boolean;
    circleMaxObjects?: number;
    maxObjects?: number;
    featureStyle?: StyleLike;
    styles?: () => Record<string, unknown>;
  }>(),
  {
    multi: false,
    pointRadius: 7,
    animate: true,
    animationDuration: 500,
    spiral: true,
    selectCluster: true,
    autoClose: true,
  }
);

const map = inject<Map>("map");

const { properties } = usePropsAsObjectProperties(props);

const select = computed(() => {
  const s = new Select({
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
</script>
