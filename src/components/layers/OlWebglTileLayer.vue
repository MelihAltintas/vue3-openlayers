<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import TileLayer, { type Options } from "ol/layer/WebGLTile";
import useLayer from "@/composables/useLayer";
import { useDefaults } from "./LayersCommonProps";
import type { LayerEvents } from "@/composables";
import type { ObjectEvent } from "ol/Object";
import type { Tile } from "ol/source";

type Props = Options;
const props = withDefaults(defineProps<Props>(), useDefaults<Props, Tile>());

type Emits = LayerEvents & {
  (e: "change:useInterimTilesOnError", event: ObjectEvent): void;
  (e: "change:preload", event: ObjectEvent): void;
};
defineEmits<Emits>();

const { layer } = useLayer(TileLayer, props, [
  "change:useInterimTilesOnError",
  "change:preload",
]);

provide("tileLayer", layer);

defineExpose({
  tileLayer: layer,
});
</script>
