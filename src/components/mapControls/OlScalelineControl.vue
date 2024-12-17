<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import ScaleLine, { type Options } from "ol/control/ScaleLine";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = defineProps<Options>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

const { control } = useControl(ScaleLine, properties, attrs);

defineExpose({
  control,
});
</script>
