<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Toggle, { type Options } from "ol-ext/control/Toggle";

import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";
import type { ObjectEvent } from "ol/Object";

const props = defineProps<Options>();
type Emits = CommonEvents & {
  (e: "change:active", event: ObjectEvent): void;
  (e: "change:disable", event: ObjectEvent): void;
};
defineEmits<Emits>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

const { control } = useControl(Toggle, properties, attrs, [
  "change:active",
  "change:disable",
]);

defineExpose({
  control,
});
</script>
