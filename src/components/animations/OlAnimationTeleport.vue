<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Teleport from "ol-ext/featureanimation/Teleport";
import useAnimation from "@/composables/useAnimation";
import {
  animationCommonDefaultProps,
  type AnimationCommonProps,
} from "./AnimationCommonProps";

const props = withDefaults(
  defineProps<AnimationCommonProps>(),
  animationCommonDefaultProps
);

const { map, vectorLayer, properties } = useAnimation(Teleport, props);

defineExpose({
  map,
  vectorLayer,
  properties,
});
</script>
