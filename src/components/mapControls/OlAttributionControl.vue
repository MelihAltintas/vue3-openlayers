<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Attribution, { type Options } from "ol/control/Attribution";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

const props = withDefaults(defineProps<Options>(), { collapsed: true });
defineEmits<CommonEvents>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(Attribution, properties, attrs);

defineExpose({
  control,
});
</script>
