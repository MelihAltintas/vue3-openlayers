<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Toggle, { type Options } from "ol-ext/control/Toggle";

import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(defineProps<Options>(), {});

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

const { control } = useControl(Toggle, properties, attrs);

defineExpose({
  control,
});
</script>
