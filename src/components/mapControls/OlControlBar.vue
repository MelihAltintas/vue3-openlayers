<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Bar, { type Options } from "ol-ext/control/Bar";
import { provide, useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

const props = withDefaults(defineProps<Options>(), {
  toggleOne: true,
  group: true,
});
defineEmits<CommonEvents>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(Bar, properties, attrs);

provide("controlBar", control);

defineExpose({
  control,
});
</script>
