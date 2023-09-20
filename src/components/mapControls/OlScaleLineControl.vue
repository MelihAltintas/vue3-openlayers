<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import { ScaleLine } from "ol/control";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    className?: string;
    minWidth?: number;
    render?: (...args: unknown[]) => unknown;
    target?: HTMLElement;
    units?: string;
    bar?: boolean;
    steps?: number;
    text?: string;
    dpi?: number;
  }>(),
  {
    className: "ol-scale-line",
    minWidth: 64,
    units: "metric",
    bar: false,
    steps: 4,
    text: "",
    dpi: undefined,
  },
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(ScaleLine, properties, attrs);

defineExpose({
  control,
});
</script>
