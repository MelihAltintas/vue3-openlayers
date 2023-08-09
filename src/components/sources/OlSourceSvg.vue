<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import Svg, { type Options } from "@/components/sources/SvgClass";
import type Layer from "ol/layer/Layer";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, provide, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<Omit<Options, "container">>();

const layer = inject<Ref<Layer<Svg>> | null>("svgLayer", null);
const svgContainer = inject<Ref<HTMLDivElement>>("svgContainer");

const { properties } = usePropsAsObjectProperties(props);

const source = computed(() => {
  return svgContainer
    ? new Svg({
        ...properties,
        container: svgContainer.value,
      })
    : null;
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
});

onUnmounted(() => {
  layer?.value?.setSource(null);
});

provide("svgSource", source);

defineExpose({
  layer,
  source,
});
</script>
