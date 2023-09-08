<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Zoom, { type Options } from "ol/control/Zoom";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(defineProps<Options>(), {
  duration: 250,
  className: "ol-zoom",
  zoomInClassName: "ol-zoom-in",
  zoomOutClassName: "ol-zoom-out",
  zoomInLabel: "+",
  zoomOutLabel: "-",
  zoomInTipLabel: "Zoom in",
  zoomOutTipLabel: "Zoom Out",
  delta: 1,
});

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(Zoom, properties, attrs);
defineExpose({
  control,
});
</script>
