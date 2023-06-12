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

const { map, vectorLayer, properties } = useAnimation(Zoom, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>
