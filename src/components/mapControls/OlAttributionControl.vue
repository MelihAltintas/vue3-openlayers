<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import { Attribution } from "ol/control";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    className?: string;
    target?: HTMLElement;
    collapsible?: boolean;
    collapsed?: boolean;
    tipLabel?: string;
    label?: string;
    expandClassName?: string;
    collapseLabel?: string;
    collapseClassName?: string;
    render?: () => void;
  }>(),
  {
    className: "ol-attribution",
    collapsed: true,
    tipLabel: "Attributions",
    label: "i",
    expandClassName: "ol-attribution-expand",
    collapseLabel: "»",
    collapseClassName: "ol-attribution-collapse",
  },
);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);
const { control } = useControl(Attribution, properties, attrs);

defineExpose({
  control,
});
</script>
