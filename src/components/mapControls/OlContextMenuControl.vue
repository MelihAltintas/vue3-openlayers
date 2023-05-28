<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import ContextMenu from "ol-contextmenu";

import useControl from "@/composables/useControl";
import { useAttrs } from "vue";

const props = defineProps({
  eventType: {
    type: String,
    default: "contextmenu",
  },
  defaultItems: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Number,
    default: 150,
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const attrs = useAttrs();
const { control } = useControl(ContextMenu, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
