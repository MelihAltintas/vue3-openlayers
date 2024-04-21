<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import ContextMenu, { type Options } from "ol-contextmenu";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

const props = withDefaults(defineProps<Partial<Options>>(), {
  eventType: "contextmenu",
  defaultItems: true,
  width: 150,
  items: () => [],
});

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

const { control } = useControl(ContextMenu, properties, attrs);
useOpenLayersEvents(control, ["beforeopen", "open", "close", "add-menu-entry"]);

defineExpose({
  control,
});
</script>
