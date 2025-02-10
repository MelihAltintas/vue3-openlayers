<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Profile, { type Options } from "ol-ext/control/Profile";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  useOpenLayersEvents,
  type CommonEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<Options>();
// Missing typings for events, use any
/* eslint-disable @typescript-eslint/no-explicit-any */
type Emits = CommonEvents & {
  (e: "over", ...args: any[]): void;
  (e: "out", ...args: any[]): void;
  (e: "show", ...args: any[]): void;
  (e: "dragstart", ...args: any[]): void;
  (e: "dragging", ...args: any[]): void;
  (e: "dragend", ...args: any[]): void;
  (e: "dragcancel", ...args: any[]): void;
};
/* eslint-enable @typescript-eslint/no-explicit-any */
defineEmits<Emits>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(Profile, properties, attrs);

useOpenLayersEvents(control, [
  "over",
  "out",
  "show",
  "dragstart",
  "dragging",
  "dragend",
  "dragcancel",
]);

defineExpose({
  control,
});
</script>
