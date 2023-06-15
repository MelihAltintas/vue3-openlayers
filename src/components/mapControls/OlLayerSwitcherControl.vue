<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import LayerSwitcher, { type Options } from "ol-ext/control/LayerSwitcher";
import LayerGroup from "ol/layer/Group";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(defineProps<Options>(), {
  show_progress: false,
  mouseover: false,
  reordering: true,
  trash: false,
  collapsed: true,
  noScroll: false,
});

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(LayerSwitcher, properties, attrs);

defineExpose({
  control,
});
</script>
