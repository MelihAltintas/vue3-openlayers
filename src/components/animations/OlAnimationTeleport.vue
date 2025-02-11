<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Teleport from "ol-ext/featureanimation/Teleport";
import { type Options } from "ol-ext/featureanimation/FeatureAnimation";
import useAnimation from "@/composables/useAnimation";
import { useDefaults } from "@/components/animations/AnimationCommonProps";

const props = withDefaults(defineProps<Options>(), useDefaults<Options>());

const exposed = useAnimation(Teleport, props);

defineExpose(exposed);
</script>
