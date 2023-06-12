<template><div v-if="false"></div></template>
<script setup lang="ts">
import { useAttrs } from "vue";
import { MousePosition } from "ol/control";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    className?: string;
    coordinateFormat?: [string, (...args: unknown[]) => unknown];
    projection?: string;
    render?: (...args: unknown[]) => unknown;
    target?: HTMLElement;
    undefinedHTML?: string;
  }>(),
  {
    className: "ol-mouse-position",
    undefinedHTML: "&#160;",
  }
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(MousePosition, properties, attrs);
defineExpose({
  control,
});
</script>
