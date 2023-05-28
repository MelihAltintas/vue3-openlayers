<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import LayerSwitcherImage from "ol-ext/control/LayerSwitcherImage";
import useLayerControl from "../../composables/useLayerControl";
import { useAttrs } from "vue";

const attrs = useAttrs();
const { control } = useLayerControl(LayerSwitcherImage, attrs);

defineExpose({
  control,
});
</script>

<style lang=""></style>
