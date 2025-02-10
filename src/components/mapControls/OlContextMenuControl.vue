<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import ContextMenu, {
  type ContextMenuEvent,
  type Options,
} from "ol-contextmenu";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";
import type BaseEvent from "ol/events/Event";

const props = withDefaults(defineProps<Partial<Options>>(), {
  eventType: "contextmenu",
  defaultItems: true,
  width: 150,
  items: () => [],
});

type Emits = CommonEvents & {
  (e: "beforeopen", event: ContextMenuEvent): void;
  (e: "open", event: ContextMenuEvent): void;
  (e: "close", event: BaseEvent): void;
};
defineEmits<Emits>();

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(ContextMenu, properties, attrs, [
  "beforeopen",
  "open",
  "close",
]);

defineExpose({
  control,
});
</script>
