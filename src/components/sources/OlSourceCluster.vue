<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import Cluster, { type Options } from "ol/source/Cluster";
import type { Ref } from "vue";
import { inject, provide } from "vue";
import type Feature from "ol/Feature";
import type { VectorSourceEvents } from "@/composables/useOpenLayersEvents";
import useSource from "@/composables/useSource";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options<Feature>>(), {
  wrapX: true,
});
defineEmits<VectorSourceEvents>();

const layer = inject<Ref<Cluster<Feature>> | null>("vectorLayer");

const { source } = useSource(Cluster, layer, props);

provide("vectorLayer", source);

defineExpose({
  layer,
  source,
});
</script>
