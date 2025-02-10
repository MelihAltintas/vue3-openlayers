<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Fade, { type Options } from "ol-ext/featureanimation/Fade";
import useAnimation from "@/composables/useAnimation";
import { useDefaults } from "@/components/animations/AnimationCommonProps";

const props = withDefaults(defineProps<Options>(), useDefaults<Options>());

const exposed = useAnimation(Fade, props);

defineExpose(exposed);
</script>
