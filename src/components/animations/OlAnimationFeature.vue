<template>
  <slot></slot>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { inject } from "vue";
import type VectorSource from "ol/source/Vector";
import type Geometry from "ol/geom/Geometry";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "@/components/animations/AnimationCommonProps";

const props = withDefaults(
  defineProps<AnimationCommonProps>(),
  animationCommonDefaultProps
);

const map = inject("map");
const vectorLayer = inject<Ref<VectorSource<Geometry>> | null>("vectorLayer");

const { properties } = usePropsAsObjectProperties(props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>
