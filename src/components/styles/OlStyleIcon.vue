<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Icon, { type Options } from "ol/style/Icon";
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import type Style from "ol/style/Style";
import type Draw from "ol/interaction/Draw";
import type Modify from "ol/interaction/Modify";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(defineProps<Options>(), {
  anchorOrigin: "top-left",
  anchorXUnits: "fraction",
  offset: () => [0, 0],
  displacement: () => [0, 0],
  offsetOrigin: "top-left",
  opacity: 1,
  scale: 1,
  rotateWithView: false,
  rotation: 0,
});

const style = inject<Ref<Style | null> | null>("style", null);
const styledObj = inject<Ref<Draw | Modify | Style | null> | null>(
  "styledObj",
  null
);

const { properties } = usePropsAsObjectProperties(props);

const icon = computed(() => {
  const ic = new Icon(properties);
  ic.load();
  return ic;
});

const applyStyle = () => {
  // @ts-ignore
  style?.value?.setImage(null);
  style?.value?.setImage(icon.value);
  // @ts-ignore
  styledObj?.value?.changed();
};

watch(properties, () => {
  applyStyle();
});

watch(
  () => style?.value,
  () => {
    applyStyle();
  }
);

onMounted(() => {
  style?.value?.setImage(icon.value);
});

onUnmounted(() => {
  // @ts-ignore
  style?.value?.setImage(null);
});
</script>
