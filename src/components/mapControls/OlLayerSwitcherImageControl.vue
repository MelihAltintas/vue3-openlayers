<template><div v-if="false"></div></template>
<script setup lang="ts">
import LayerSwitcherImage from "ol-ext/control/LayerSwitcherImage";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
// import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

// eslint-disable-next-line @typescript-eslint/ban-types
// const props = withDefaults(defineProps<{}>(), {})

const attrs = useAttrs();
// const { properties } = usePropsAsObjectProperties(props)

const { control } = useControl(LayerSwitcherImage, {}, attrs);

defineExpose({
  control,
});
</script>
