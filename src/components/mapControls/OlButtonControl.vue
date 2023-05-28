<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import Button from "ol-ext/control/Button";

import useControl from "@/composables/useControl";
import { useAttrs } from "vue";

const props = defineProps({
  props: {
    html: {
      type: String,
    },
    name: {
      type: String,
    },
    className: {
      type: String,
    },
    title: {
      type: String,
    },
    handleClick: {
      type: Function,
    },
  },
});

const attrs = useAttrs();
const { control } = useControl(Button, props, { attrs });

defineExpose({
  control,
});
</script>

<style lang=""></style>
