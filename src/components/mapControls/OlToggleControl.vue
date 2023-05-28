<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import Toggle from "ol-ext/control/Toggle";

import useControl from "@/composables/useControl";
import { useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
  },
  title: {
    type: String,
  },
  html: {
    type: String,
  },
  interaction: {
    type: Object,
  },
  active: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  bar: {
    type: Object,
  },
  autoActive: {
    type: Boolean,
    default: false,
  },
  onToggle: {
    type: Function,
  },
});

const attrs = useAttrs();
const { control } = useControl(Toggle, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
