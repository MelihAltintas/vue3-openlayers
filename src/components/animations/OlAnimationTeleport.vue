<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Teleport from "ol-ext/featureanimation/Teleport";
import useAnimation from "@/composables/useAnimation";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "@/components/animations/AnimationCommonProps";

const props = withDefaults(
  defineProps<AnimationCommonProps>(),
  animationCommonDefaultProps,
);

const exposed = useAnimation(Teleport, props);

defineExpose(exposed);
</script>
