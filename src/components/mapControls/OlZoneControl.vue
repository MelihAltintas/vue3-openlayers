<template><div v-if="false"></div></template>
<script setup lang="ts">
import Zone from "ol-ext/control/MapZone";
import { useAttrs } from "vue";
import type { Layer } from "ol/layer";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    className?: string;
    zones?: Zone[];
    layer?: Layer | ((zone: Zone) => Layer);
    projection?: string;
    centerOnClick?: boolean;
  }>(),
  {
    projection: "EPSG:3857",
    centerOnClick: true,
  }
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(Zone, properties, attrs);

defineExpose({
  control,
});
</script>
