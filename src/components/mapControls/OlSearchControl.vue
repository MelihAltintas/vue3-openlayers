<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Search, { type Options } from "ol-ext/control/Search";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  className: "ol-search",
});

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

const { control } = useControl(Search, properties, attrs);

useOpenLayersEvents(control, ["select"]);

defineExpose({ control });
</script>
