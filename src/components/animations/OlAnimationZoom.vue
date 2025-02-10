<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Zoom, { type Options } from "ol-ext/featureanimation/Zoom";
import useAnimation from "@/composables/useAnimation";
import { useDefaults } from "@/components/animations/AnimationCommonProps";

const props = withDefaults(defineProps<Options>(), useDefaults<Options>());

const exposed = useAnimation(Zoom, props);

defineExpose(exposed);
</script>
