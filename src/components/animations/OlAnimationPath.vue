<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Path, { type Options } from "ol-ext/featureanimation/Path";
import useAnimation from "@/composables/useAnimation";
import { useDefaults } from "@/components/animations/AnimationCommonProps";

const props = withDefaults(defineProps<Options>(), useDefaults<Options>());

const exposed = useAnimation(Path, props);

defineExpose(exposed);
</script>
