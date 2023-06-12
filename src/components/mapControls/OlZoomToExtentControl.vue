<template><div v-if="false"></div></template>
<script setup lang="ts">
import ZoomToExtent from "ol/control/ZoomToExtent";
import { useAttrs } from "vue";
import type { Extent } from "ol/extent";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    className?: string;
    target?: HTMLElement;
    label?: string;
    tipLabel?: string;
    extent?: Extent;
  }>(),
  {
    className: "ol-zoom-extent",
    label: "E",
    tipLabel: "Fit to extent",
  }
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(ZoomToExtent, properties, attrs);
defineExpose({
  control,
});
</script>
