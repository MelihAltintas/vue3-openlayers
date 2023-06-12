<template><div v-if="false"></div></template>
<script setup lang="ts">
import ContextMenu from "ol-contextmenu";
import { useAttrs } from "vue";
import type { Item } from "ol-contextmenu/dist/types";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    eventType?: "contextmenu" | "click" | "dblclick" | undefined;
    defaultItems?: boolean;
    width?: number;
    items?: Item[];
  }>(),
  {
    eventType: "contextmenu",
    defaultItems: true,
    width: 150,
    items: () => [],
  }
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(ContextMenu, properties, attrs);

defineExpose({
  control,
});
</script>
