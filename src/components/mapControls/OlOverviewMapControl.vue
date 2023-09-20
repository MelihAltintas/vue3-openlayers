<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { OverviewMap } from "ol/control";
import { provide, useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    className?: string;
    collapsed?: boolean;
    collapseLabel?: string;
    collapsible?: boolean;
    label?: string;
    render?: (...args: unknown[]) => unknown;
    rotateWithView?: boolean;
    target?: HTMLElement;
    tipLabel?: string;
  }>(),
  {
    className: "ol-overviewmap",
    collapsed: true,
    collapseLabel: "«",
    collapsible: true,
    label: "»",
    rotateWithView: false,
    tipLabel: "Overview map",
  },
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);
const { control } = useControl(OverviewMap, properties, attrs);

provide("overviewMap", control);

defineExpose({
  control,
});
</script>
