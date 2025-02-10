<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Drop, { type Options } from "ol-ext/featureanimation/Drop";
import useAnimation from "@/composables/useAnimation";
import { useDefaults } from "@/components/animations/AnimationCommonProps";

const props = withDefaults(
  defineProps<Options>(),
  useDefaults<Options>({
    side: "top",
    speed: 0,
  }),
);

const exposed = useAnimation(Drop, props);

defineExpose(exposed);
</script>
