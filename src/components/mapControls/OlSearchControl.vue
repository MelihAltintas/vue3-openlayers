<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Search, { type Options } from "ol-ext/control/Search";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const emit = defineEmits(["select"]);

const props = withDefaults(defineProps<Options>(), {
  className: "ol-search",
});

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

const { control } = useControl(Search, properties, attrs);

control.value.on("select", (event) => emit("select", event));

defineExpose({ control });
</script>
