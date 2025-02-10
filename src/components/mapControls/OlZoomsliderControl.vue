<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import ZoomSlider, { type Options } from "ol/control/ZoomSlider";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

const props = defineProps<Options>();
defineEmits<CommonEvents>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

const { control } = useControl(ZoomSlider, properties, attrs);
defineExpose({
  control,
});
</script>
