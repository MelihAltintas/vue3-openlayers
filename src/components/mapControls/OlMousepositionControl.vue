<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import { useAttrs } from "vue";
import MousePosition, { type Options } from "ol/control/MousePosition";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";
import type { ObjectEvent } from "ol/Object";

const props = withDefaults(defineProps<Options>(), { wrapX: true });
type Emits = CommonEvents & {
  (e: "change:coordinateFormat", event: ObjectEvent): void;
  (e: "change:projection", event: ObjectEvent): void;
};
defineEmits<Emits>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(MousePosition, properties, attrs, [
  "change:coordinateFormat",
  "change:projection",
]);

defineExpose({
  control,
});
</script>
