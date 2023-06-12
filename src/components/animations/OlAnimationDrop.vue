<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Drop from "ol-ext/featureanimation/Drop";
import useAnimation from "@/composables/useAnimation";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "./AnimationCommonProps";

const props = withDefaults(
  defineProps<AnimationCommonProps & { speed: number; side: number }>(),
  {
    ...animationCommonDefaultProps,
    side: 0,
    speed: 0,
  }
);

const { map, vectorLayer, properties } = useAnimation(Drop, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>
