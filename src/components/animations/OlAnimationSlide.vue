<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Slide, { type Options } from "ol-ext/featureanimation/Slide";
import useAnimation from "@/composables/useAnimation";
import { useDefaults } from "@/components/animations/AnimationCommonProps";

const props = withDefaults(defineProps<Options>(), useDefaults<Options>());

const exposed = useAnimation(Slide, props);

defineExpose(exposed);
</script>
