<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Path from "ol-ext/featureanimation/Path";
import useAnimation from "@/composables/useAnimation";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "./AnimationCommonProps";
import type { LineString } from "ol/geom";

const props = withDefaults(
  defineProps<
    AnimationCommonProps & {
      rotate?: boolean;
      speed?: number;
      path: LineString;
    }
  >(),
  {
    ...animationCommonDefaultProps,
    rotate: false,
    speed: 0,
  }
);

const { map, vectorLayer, properties } = useAnimation(Path, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>
