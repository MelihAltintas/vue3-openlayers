<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import { useAttrs } from "vue";
import { FullScreen } from "ol/control";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    className?: string;
    label?: string;
    labelActive?: string;
    activeClassName?: string;
    inactiveClassName?: string;
    tipLabel?: string;
    keys?: boolean;
    target?: Record<string, unknown>;
    source?: Record<string, unknown>;
  }>(),
  {
    className: "ol-full-screen",
    label: "\u2922",
    labelActive: "\u00d7",
    activeClassName: "ol-full-screen-true",
    inactiveClassName: "ol-full-screen-false",
    tipLabel: "Toggle full-screen",
    keys: false,
    target: undefined,
    source: undefined,
  }
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);
const { control } = useControl(FullScreen, properties, attrs);

defineExpose({
  control,
});
</script>
