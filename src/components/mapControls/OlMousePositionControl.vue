<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import { MousePosition } from "ol/control";
import useControl from "@/composables/useControl";
import { useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "ol-mouse-position",
  },
  coordinateFormat: {
    type: [String, Function],
  },
  projection: {
    type: String,
  },
  render: {
    type: Function,
  },
  target: {
    type: HTMLElement,
  },
  placeholder: {
    type: String,
  },
});

const attrs = useAttrs();
const { control } = useControl(MousePosition, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
