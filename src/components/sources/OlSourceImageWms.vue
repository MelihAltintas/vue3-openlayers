<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import ImageWMS, { type Options } from "ol/source/ImageWMS";
import { inject, type Ref } from "vue";
import type ImageLayer from "ol/layer/Image";
import type { ImageSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

type Props = Options & {
  layers: string | unknown[];
  styles?: string | unknown[];
  time?: string;
};
const props = withDefaults(defineProps<Props>(), {
  hidpi: true,
  interpolate: true,
  serverType: "mapserver",
  styles: "",
  ratio: 1,
});
defineEmits<ImageSourceEvents>();

const layer = inject<Ref<ImageLayer<ImageWMS>> | null>("imageLayer");

const { source } = useSource(ImageWMS, layer, {
  ...props,
  params: {
    ...props.params,
    LAYERS: props.layers,
    STYLES: props.styles,
    TIME: props.time,
  },
});

defineExpose({
  layer,
  source,
});
</script>
