<template lang="">
  <slot></slot>
</template>

<script setup>
import Bar from "ol-ext/control/Bar";

import useControl from "@/composables/useControl";
import { provide, useAttrs } from "vue";

const props = defineProps({
  toggleOne: {
    type: Boolean,
    default: true,
  },
  group: {
    type: Boolean,
    default: true,
  },
});

const attrs = useAttrs();
const { control } = useControl(Bar, props, { attrs });

provide("controlBar", control);
defineExpose({
  control,
});
</script>

<style lang=""></style>
