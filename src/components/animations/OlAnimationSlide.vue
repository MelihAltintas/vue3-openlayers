<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Slide from "ol-ext/featureanimation/Slide";
import useAnimation from "@/composables/useAnimation";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "./AnimationCommonProps";

const props = withDefaults(
  defineProps<AnimationCommonProps & { speed?: number }>(),
  {
    ...animationCommonDefaultProps,
    speed: 0,
  }
);

const { map, vectorLayer, properties } = useAnimation(Slide, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>
