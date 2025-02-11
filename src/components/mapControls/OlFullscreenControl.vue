<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import { useAttrs } from "vue";
import FullScreen, { type Options } from "ol/control/FullScreen";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

const props = defineProps<Options>();
type Emits = CommonEvents & {
  (e: "enterfullscreen"): void;
  (e: "leavefullscreen"): void;
};
defineEmits<Emits>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(FullScreen, properties as Options, attrs, [
  "enterfullscreen",
  "leavefullscreen",
]);

defineExpose({
  control,
});
</script>
