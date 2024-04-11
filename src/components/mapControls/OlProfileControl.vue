<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Profile, { type Options } from "ol-ext/control/Profile";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {});

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(Profile, properties, attrs);

useOpenLayersEvents(control, [
  "over",
  "out",
  "show",
  "dragstart",
  "dragging",
  "dragend",
  "dragcancel",
]);

defineExpose({
  control,
});
</script>
