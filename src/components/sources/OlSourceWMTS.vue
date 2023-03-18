<template>
    <div v-if="false">

    </div>
</template>

<script setup lang="ts">
import type { RequestEncoding } from 'ol/source/WMTS'
import WMTS from 'ol/source/WMTS'
import type { Options as ProjectionOptions } from 'ol/proj/Projection'
import Projection from 'ol/proj/Projection'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import type { ProjectionLike } from 'ol/proj'
import {
  get as getProjection,
} from 'ol/proj'
import type { Extent } from 'ol/extent'
import {
  getTopLeft,
  getWidth,
} from 'ol/extent'
import {
  inject,
  onMounted,
  onUnmounted,
  watch,
  computed,
} from 'vue'
import type TileSource from 'ol/source/Tile'
import type TileLayer from 'ol/layer/Tile'
import type { Coordinate } from 'ol/coordinate'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  tileZoomLevel: number,
  attributions: string,
  cacheSize: number,
  crossOrigin: string,
  imageSmoothing: boolean,
  projection?: ProjectionLike,
  reprojectionErrorThreshold: number,
  tilePixelRatio: number,
  format: string,
  version: string,
  matrixSet: string,
  dimensions: Record<string, unknown>,
  requestEncoding: RequestEncoding,
  url: string,
  urls: string[],
  wrapX: boolean,
  transition: number,
  layer: string,
  style: string,
}>(), {
  tileZoomLevel: 30,
  imageSmoothing: true,
  projection: 'EPSG:3857',
  reprojectionErrorThreshold: 0.5,
  tilePixelRatio: 1,
  format: 'image/jpeg',
  version: '1.0.0',
  requestEncoding: 'KVP',
  wrapX: false,
})

const tileLayer = inject<TileLayer<TileSource>>('tileLayer')
const { properties } = usePropsAsObjectProperties(props)

const extent = computed(():Extent | null => {
  return getProjection(properties.projection as ProjectionLike)?.getExtent() || null
})
const origin = computed((): Coordinate | undefined => {
  return extent.value
    ? getTopLeft(extent.value)
    : undefined
})
const size = computed(() => {
  return extent.value
    ? getWidth(extent.value) / 256
    : 0
})

const getTileGrid = computed(() => {
  const resolutions = new Array(properties.tileZoomLevel)
  const matrixIds = new Array(properties.tileZoomLevel)

  // eslint-disable-next-line no-plusplus
  for (let z = 0; z < properties.tileZoomLevel; ++z) {
    resolutions[z] = size.value / 2 ** z
    matrixIds[z] = z
  }

  return new WMTSTileGrid({
    origin: origin.value,
    resolutions,
    matrixIds,
  })
})

const source = computed(() => new WMTS({
  ...properties,
  projection: typeof properties.projection === 'string'
    ? properties.projection
    : new Projection({
      // @ts-ignore
      ...properties.projection as ProjectionOptions,
    }),
  tileGrid: getTileGrid.value,
}))

watch(source, () => {
  tileLayer?.setSource(source.value)
})

watch(() => tileLayer, () => {
  tileLayer?.setSource(source.value)
})

onMounted(() => {
  tileLayer?.setSource(source.value)
})

onUnmounted(() => {
  tileLayer?.setSource(null)
})

defineExpose({
  tileLayer,
  source,
})
</script>
