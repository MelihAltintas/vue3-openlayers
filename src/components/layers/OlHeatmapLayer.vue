<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import HeatmapLayer from "ol/layer/Heatmap";
import type { Extent } from "ol/extent";
import useLayer from "@/composables/useLayer";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";

type WeightFunction = () => number;

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      weight?: string | WeightFunction;
      extent?: Extent;
      blur?: number;
      radius?: number;
      gradient?: string[];
    }
  >(),
  {
    ...layersCommonDefaultProps,
    weight: "weight",
    radius: 8,
    blur: 15,
    gradient: () => ["#00f", "#0ff", "#0f0", "#ff0", "#f00"],
  },
);

const { layer } = useLayer(HeatmapLayer, props);

provide("heatmapLayer", layer);
provide("stylable", layer);

defineExpose({
  heatmapLayer: layer,
});
</script>
