<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import XYZ, { type Options } from "ol/source/XYZ";
import { type Ref, watch } from "vue";
import { inject } from "vue";
import type TileLayer from "ol/layer/Tile";
import useSource from "@/composables/useSource";
import type { TileSourceEvents } from "@/composables";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options>(), {
  attributionsCollapsible: true,
  interpolate: true,
  wrapX: true,
});
defineEmits<TileSourceEvents>();

const layer = inject<Ref<TileLayer<XYZ>> | null>("tileLayer");

const { source, updateSource } = useSource(XYZ, layer, props, [], (source) => {
  if (props.url) {
    source.setUrl(props.url);
  }
});

watch(
  () => props.url,
  () => updateSource(),
);

defineExpose({
  layer,
  source,
});
</script>
