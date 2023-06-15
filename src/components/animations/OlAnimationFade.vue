<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Fade from "ol-ext/featureanimation/Fade";
import useAnimation from "@/composables/useAnimation";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "@/components/animations/AnimationCommonProps";

const props = withDefaults(
  defineProps<AnimationCommonProps>(),
  animationCommonDefaultProps
);

const exposed = useAnimation(Fade, props);

defineExpose(exposed);
</script>
