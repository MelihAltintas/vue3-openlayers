<template>
<div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import type { LoadingStrategy, Options } from 'ol/source/Vector'
import VectorSource from 'ol/source/Vector'
import {
  inject,
  watch,
  onMounted,
  onUnmounted,
  provide,
  computed,
} from 'vue'

import type { AttributionLike } from 'ol/source/Source'
import type Collection from 'ol/Collection'
import type Feature from 'ol/Feature'
import type FeatureFormat from 'ol/format/Feature'
import type { FeatureLoader, FeatureUrlFunction } from 'ol/featureloader'
import type WebGLPointsLayer from 'ol/layer/WebGLPoints'
import type Point from 'ol/geom/Point'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  attributions?: AttributionLike,
  features?: Collection<Feature<Point>>,
  format?: FeatureFormat | undefined,
  loader?: FeatureLoader,
  overlaps?: boolean,
  projection?: string,
  strategy?: LoadingStrategy,
  url?: FeatureUrlFunction,
  useSpatialIndex?: boolean,
  wrapX?: boolean,
}>(), {
  overlaps: true,
  projection: 'EPSG:3857',
  useSpatialIndex: true,
  wrapX: true,
})

const layer = inject<WebGLPointsLayer<VectorSource<Point>>>('webglPointsLayer')

const { properties } = usePropsAsObjectProperties(props)

const source = computed(() => new VectorSource(properties as Options<Point>))

const applySource = () => {
  layer?.setSource(null)
  layer?.setSource(source.value || null)
  layer?.changed()
}
watch(properties, () => {
  applySource()
})

watch(() => layer, () => {
  applySource()
})

onMounted(() => {
  layer?.setSource(source.value)
})

onUnmounted(() => {
  layer?.setSource(null)
})

provide('vectorSource', source)

defineExpose({
  layer,
  source,
})
</script>
