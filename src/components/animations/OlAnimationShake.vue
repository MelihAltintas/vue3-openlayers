<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Shake, { type Options } from "ol-ext/featureanimation/Shake";
import useAnimation from "@/composables/useAnimation";
import { useDefaults } from "@/components/animations/AnimationCommonProps";

const props = withDefaults(defineProps<Options>(), useDefaults<Options>());

const exposed = useAnimation(Shake, props);

defineExpose(exposed);
</script>
