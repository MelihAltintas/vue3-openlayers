<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Drop from "ol-ext/featureanimation/Drop";
import useAnimation from "@/composables/useAnimation";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "@/components/animations/AnimationCommonProps";

const props = withDefaults(
  defineProps<AnimationCommonProps & { speed?: number; side?: number }>(),
  {
    ...animationCommonDefaultProps,
    side: 0,
    speed: 0,
  }
);

const exposed = useAnimation(Drop, props);

defineExpose(exposed);
</script>
