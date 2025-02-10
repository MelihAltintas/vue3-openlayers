<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import MapZone, { type Options, type Zone } from "ol-ext/control/MapZone";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

const props = withDefaults(
  defineProps<
    Omit<Options, "zone"> & {
      zones: Zone[];
    }
  >(),
  {
    className: "ol-mapzone",
    projection: "EPSG:3857",
    centerOnClick: true,
  },
);
type Emits = CommonEvents & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: "select", ...args: any): void;
};
defineEmits<Emits>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

/* @ts-expect-error because of wrong typings (should be optional in options, but is not) */
const { control } = useControl(MapZone, properties, attrs, ["select"]);

defineExpose({
  control,
});
</script>
