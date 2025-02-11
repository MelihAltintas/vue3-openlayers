<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs } from "vue";
import TileLayer from "ol/layer/Tile";
import type { Options } from "ol/layer/BaseTile";
import useLayer from "@/composables/useLayer";
import { useDefaults } from "@/components/layers/LayersCommonProps";
import TileSource from "ol/source/Tile";
import type { LayerEvents } from "@/composables";
import type { ObjectEvent } from "ol/Object";

type Props = Options<TileSource>;
type Emits = LayerEvents & {
  (e: "change:useInterimTilesOnError", event: ObjectEvent): void;
  (e: "change:preload", event: ObjectEvent): void;
};
const props = withDefaults(
  defineProps<Props>(),
  useDefaults<Props, TileSource>({
    preload: 1,
  }),
);
defineEmits<Emits>();

const { layer } = useLayer(TileLayer, toRefs(props), [
  "change:useInterimTilesOnError",
  "change:preload",
]);

provide("tileLayer", layer);

defineExpose({
  tileLayer: layer,
});
</script>
