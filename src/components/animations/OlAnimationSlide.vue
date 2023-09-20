<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Slide from "ol-ext/featureanimation/Slide";
import useAnimation from "@/composables/useAnimation";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "@/components/animations/AnimationCommonProps";

const props = withDefaults(
  defineProps<AnimationCommonProps & { speed?: number }>(),
  {
    ...animationCommonDefaultProps,
    speed: 0,
  },
);

const exposed = useAnimation(Slide, props);

defineExpose(exposed);
</script>
