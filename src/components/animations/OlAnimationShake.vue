<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Shake from "ol-ext/featureanimation/Shake";
import useAnimation from "@/composables/useAnimation";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "@/components/animations/AnimationCommonProps";

const props = withDefaults(
  defineProps<
    AnimationCommonProps & {
      bounce?: number;
      amplitude?: number;
      horizontal?: boolean;
    }
  >(),
  {
    ...animationCommonDefaultProps,
    bounce: 6,
    amplitude: 40,
    horizontal: false,
  },
);

const exposed = useAnimation(Shake, props);

defineExpose(exposed);
</script>
