<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import Swipe from "ol-ext/control/Swipe";
import useControl from "@/composables/useControl";
import { toRefs, useAttrs } from "vue";

const props = defineProps({
  layerList: {
    type: Array,
  },
  className: {
    type: String,
    default: "ol-swipe",
  },
  position: {
    type: Number,
    default: 0.5,
  },
  orientation: {
    type: String,
    default: "vertical",
  },
});

const attrs = useAttrs();
const { control } = useControl(Swipe, props, { attrs });

const { layerList } = toRefs(props);

layerList.value.forEach((layer, index) => {
  control.value.addLayer(layer, index == 1 ? true : false);
});

defineExpose({
  control,
});
</script>

<style lang=""></style>
