<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Zoom from "ol-ext/featureanimation/Zoom";
import useAnimation from "@/composables/useAnimation";
import {
  type AnimationCommonProps,
  animationCommonDefaultProps,
} from "@/components/animations/AnimationCommonProps";

const props = withDefaults(
  defineProps<
    AnimationCommonProps & {
      zoomOut?: boolean;
    }
  >(),
  {
    ...animationCommonDefaultProps,
    zoomOut: false,
  }
);

const exposed = useAnimation(Zoom, props);

defineExpose(exposed);
</script>
