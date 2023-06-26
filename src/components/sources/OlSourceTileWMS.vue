<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileWMS, { type Options } from "ol/source/TileWMS";
import { inject, onMounted, onUnmounted, watch, type Ref } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type TileLayer from "ol/layer/Tile";
import type { ImageTile } from "ol";
import projectionFromProperties from "@/helpers/projection";
import eventGateway, { TILE_SOURCE_EVENTS } from "@/helpers/eventGateway";

const props = withDefaults(
  defineProps<
    Options & {
      layers: string | unknown[];
      styles?: string | unknown[];
    }
  >(),
  {
    attributionsCollapsible: true,
    interpolate: true,
    styles: "",
    gutter: 0,
    hidpi: true,
    projection: "EPSG:3857",
    reprojectionErrorThreshold: 0.5,
    tileLoadFunction: (imageTile, src) => {
      ((imageTile as ImageTile).getImage() as HTMLImageElement).src = src;
    },
    wrapX: true,
  }
);
const emit = defineEmits([]);

const layer = inject<Ref<TileLayer<TileWMS>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);

const createSource = () => {
  const t = new TileWMS({
    ...properties,
    params: {
      ...props.params,
      LAYERS: props.layers,
      STYLES: props.styles,
    },
    projection: projectionFromProperties(properties.projection),
  });

  eventGateway(emit, t, TILE_SOURCE_EVENTS);

  return t;
};

let source = createSource();

watch(properties, () => {
  layer?.value.setSource(null);
  source = createSource();
  layer?.value.setSource(source);
});
onMounted(() => {
  layer?.value.setSource(source);
});

onUnmounted(() => {
  layer?.value.setSource(null);
});

defineExpose({
  layer,
  source,
});
</script>
