<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import LayerSwitcher from "ol-ext/control/LayerSwitcher";
import type {
  LayerSwitcherEvent,
  LayerSwitcherReorderEvent,
  Options,
} from "ol-ext/control/LayerSwitcher";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

const props = withDefaults(defineProps<Options>(), {
  reordering: true,
  collapsed: true,
});
type Emits = CommonEvents & {
  (e: "drawlist", event: LayerSwitcherEvent): void;
  (e: "layer:visible", event: LayerSwitcherEvent): void;
  (e: "layer:opacity", event: LayerSwitcherEvent): void;
  (e: "toggle", event: ToggleEvent): void;
  (e: "reorder-start", event: LayerSwitcherReorderEvent): void;
  (e: "reorder-end", event: LayerSwitcherReorderEvent): void;
};
defineEmits<Emits>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(LayerSwitcher, properties, attrs, [
  "drawlist",
  "layer:visible",
  "layer:opacity",
  "toggle",
  "reorder-start",
  "reorder-end",
]);

defineExpose({
  control,
});
</script>
