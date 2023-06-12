<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import TileWMS from "ol/source/TileWMS";
import Projection from "ol/proj/Projection";

import { inject, onMounted, onUnmounted, watch, type Ref } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { ProjectionLike } from "ol/proj";
import type { ServerType } from "ol/source/wms";
import type { Options as ProjectionOptions } from "ol/proj/Projection";
import type { Options } from "ol/source/TileWMS";
import type TileSource from "ol/source/Tile";
import type TileLayer from "ol/layer/Tile";

const props = withDefaults(
  defineProps<{
    attributions?: string;
    cacheSize?: number;
    crossOrigin?: string;
    interpolate?: boolean;
    layers: string | unknown[];
    styles?: string | unknown[];
    hidpi?: boolean;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    serverType?: ServerType;
    tileLoadFunction?: (imageTile: any, src: string) => void;
    url: string;
    urls?: string[];
    params?: Options;
    wrapX?: boolean;
    transition: number;
  }>(),
  {
    interpolate: true,
    styles: "",
    hidpi: false,
    projection: "EPSG:3857",
    reprojectionErrorThreshold: 0.5,
    serverType: "mapserver",
    tileLoadFunction: (imageTile: any, src: string) => {
      imageTile.getImage().src = src;
    },
    wrapX: false,
  }
);

const layer = inject<Ref<TileLayer<TileSource>> | null>("tileLayer");
const { properties } = usePropsAsObjectProperties(props);

const createSource = () => {
  return new TileWMS({
    ...properties,
    params: {
      ...props.params,
      LAYERS: props.layers,
      STYLES: props.styles,
      TILED: true,
    },
    projection:
      typeof properties.projection == "string"
        ? properties.projection
        : // @ts-ignore
          new Projection({
            // @ts-ignore
            ...(properties.projection as unknown as ProjectionOptions),
          }),
  } as Options);
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
