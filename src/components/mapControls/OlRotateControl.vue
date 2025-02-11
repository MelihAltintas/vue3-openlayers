<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Rotate, { type Options } from "ol/control/Rotate";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

const props = withDefaults(defineProps<Options>(), {
  autoHide: true,
});
defineEmits<CommonEvents>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(Rotate, properties, attrs);

defineExpose({
  control,
});
</script>
