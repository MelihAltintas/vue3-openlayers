<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import ZoomSlider from "ol/control/ZoomSlider";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    duration?: number;
    className?: string;
    render?: (...args: unknown[]) => unknown;
  }>(),
  {
    duration: 200,
    className: "ol-zoomslider",
  }
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(ZoomSlider, properties, attrs);
defineExpose({
  control,
});
</script>
