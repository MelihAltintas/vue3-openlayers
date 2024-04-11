<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import MapZone, { type Options, type Zone } from "ol-ext/control/MapZone";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<
    Omit<Options, "zone"> & {
      className?: string;
      centerOnClick?: boolean;
      zones: Zone[];
    }
  >(),
  {
    className: "ol-mapzone",
    projection: "EPSG:3857",
    centerOnClick: true,
  },
);

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

const { control } = useControl(MapZone, properties, attrs);

defineExpose({
  control,
});
</script>
