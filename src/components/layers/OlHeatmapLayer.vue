<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import HeatmapLayer, { type Options } from "ol/layer/Heatmap";
import useLayer from "@/composables/useLayer";
import {
  useDefaults,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type { LayerEvents } from "@/composables";
import type { ObjectEvent } from "ol/Object";

type Props = LayersCommonProps & Options;
const props = withDefaults(defineProps<Props>(), useDefaults<Props>());

type Emits = LayerEvents & {
  (e: "change:blur", event: ObjectEvent): void;
  (e: "change:extent", event: ObjectEvent): void;
  (e: "change:gradient", event: ObjectEvent): void;
  (e: "change:radius", event: ObjectEvent): void;
};
defineEmits<Emits>();

const { layer } = useLayer(HeatmapLayer, props, [
  "change:blur",
  "change:extent",
  "change:gradient",
  "change:radius",
]);

provide("heatmapLayer", layer);
provide("stylable", layer);

defineExpose({
  heatmapLayer: layer,
});
</script>
