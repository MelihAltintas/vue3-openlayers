<template><div v-if="false"></div></template>
<script setup lang="ts">
import Rotate from "ol/control/Rotate";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    className?: string;
    label?: string;
    tipLabel?: string;
    compassClassName?: string;
    duration?: number;
    autoHide?: boolean;
    render?: (...args: unknown[]) => unknown;
    resetNorth?: (...args: unknown[]) => unknown;
    target?: HTMLElement;
  }>(),
  {
    className: "ol-rotate",
    label: "⇧",
    tipLabel: "Reset rotation",
    compassClassName: "ol-compass",
    duration: 250,
    autoHide: false,
  }
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(Rotate, properties, attrs);

defineExpose({
  control,
});
</script>
