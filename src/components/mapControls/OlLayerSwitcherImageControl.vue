<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import LayerSwitcherImage from "ol-ext/control/LayerSwitcherImage";
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
  collapsed: true,
  reordering: true,
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

const { control } = useControl(LayerSwitcherImage, properties, attrs, [
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
