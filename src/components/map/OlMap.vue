<template>
  <div ref="mapRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  provide,
  onMounted,
  onUnmounted,
  watch,
} from 'vue'
import type { AtPixelOptions, MapOptions } from 'ol/Map'
import Map from 'ol/Map'
import { defaults } from 'ol/interaction/defaults'
import type Collection from 'ol/Collection'
import type Control from 'ol/control/Control'
import type { FeatureLike } from 'ol/Feature'
import type { SimpleGeometry } from 'ol/geom'
import type LayerRenderer from 'ol/renderer/Layer'
import type { Layer } from 'ol/layer'
import type { Pixel } from 'ol/pixel'
import type { Source } from 'ol/source'
import type { Coordinate } from 'ol/coordinate'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  controls?: Collection<Control> | Control[] | undefined,
  pixelRatio?: number | undefined,

  loadTilesWhileAnimating?: boolean,
  loadTilesWhileInteracting?: boolean,
  moveTolerance?: number,
  altShiftDragRotate?: boolean,
  onFocusOnly?: boolean,
  doubleClickZoom?: boolean,
  keyboard?: boolean,
  mouseWheelZoom?: boolean,
  shiftDragZoom?: boolean,
  dragPan?: boolean,
  pinchRotate?: boolean,
  pinchZoom?: boolean,
}>(), {
  loadTilesWhileAnimating: false,
  loadTilesWhileInteracting: false,
  moveTolerance: 1,
  pixelRatio: 1,
  controls: undefined,
  altShiftDragRotate: true,
  onFocusOnly: true,
  doubleClickZoom: true,
  keyboard: true,
  mouseWheelZoom: true,
  shiftDragZoom: true,
  dragPan: true,
  pinchRotate: true,
  pinchZoom: true,
})

const { properties } = usePropsAsObjectProperties(props)

const mapRef = ref<string | HTMLElement | undefined>(undefined)
const map = ref<Map|null>(null)

watch(properties, () => {
  map.value?.setProperties({
    ...properties,
    interactions: defaults({
      ...properties,
    }),
  })
})
const emit = defineEmits([
  'click',
  'dblclick',
  'singleclick',
  'pointerdrag',
  'pointermove',
  'movestart',
  'moveend',
  'postrender',
  'precompose',
  'postcompose',
])
onMounted(() => {
  map.value = new Map({
    ...(properties as MapOptions),
    interactions: defaults({
      ...properties,
    }),
  })

  map.value.setTarget(mapRef.value)

  map.value.on('click', event => emit('click', event))
  map.value.on('dblclick', event => emit('dblclick', event))
  map.value.on('singleclick', event => emit('singleclick', event))
  map.value.on('pointerdrag', event => emit('pointerdrag', event))
  map.value.on('pointermove', event => emit('pointermove', event))

  map.value.on('movestart', event => emit('movestart', event))
  map.value.on('moveend', event => emit('moveend', event))
  map.value.on('postrender', event => emit('postrender', event))
  map.value.on('precompose', event => emit('precompose', event))
  map.value.on('postcompose', event => emit('postcompose', event))
})

onUnmounted(() => {
  map.value?.setTarget(undefined)
  map.value = null
})

provide('map', map)

const focus = () => {
  // @ts-ignore
  return map.value?.focus()
}
const forEachFeatureAtPixel = (
  pixel: Pixel,
  callback: (arg0: FeatureLike, arg1: Layer<Source, LayerRenderer<any>>, arg2: SimpleGeometry) => unknown,
  options?: AtPixelOptions | undefined,
) => map.value?.forEachFeatureAtPixel(pixel, callback, options)
const forEachLayerAtPixel = (
  pixel: Pixel,
  callback: (arg0: FeatureLike, arg1: Layer<Source, LayerRenderer<any>>, arg2: SimpleGeometry) => unknown,
  layerFilter?: AtPixelOptions | undefined,
) => {
  // @ts-ignore
  return map.value?.forEachLayerAtPixel(pixel, callback, layerFilter)
}
const getCoordinateFromPixel = (pixel: Coordinate) => map.value?.getCoordinateFromPixel(pixel)
const refresh = () => {
  // @ts-ignore
  return map.value?.refresh()
}
const render = () => map.value?.render()
const updateSize = () => map.value?.updateSize()

defineExpose({
  map,
  mapRef,
  focus,
  forEachFeatureAtPixel,
  forEachLayerAtPixel,
  getCoordinateFromPixel,
  refresh,
  render,
  updateSize,
})

</script>
