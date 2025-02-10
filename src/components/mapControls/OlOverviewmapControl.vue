<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import OverviewMap, { type Options } from "ol/control/OverviewMap";
import { provide, useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

const props = withDefaults(defineProps<Options>(), {
  collapsed: true,
  collapsible: true,
});
defineEmits<CommonEvents>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(OverviewMap, properties, attrs);

provide("overviewMap", control);

defineExpose({
  control,
});
</script>
