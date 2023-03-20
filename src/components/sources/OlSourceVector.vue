<template>
<div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import type { LoadingStrategy, Options } from 'ol/source/Vector'
import VectorSource from 'ol/source/Vector'
import type { Ref } from 'vue'
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
import type Geometry from 'ol/geom/Geometry'
import type FeatureFormat from 'ol/format/Feature'
import type { FeatureLoader, FeatureUrlFunction } from 'ol/featureloader'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  attributions?: AttributionLike,
  features?: Collection<Feature<Geometry>>,
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

const layer = inject<Ref<VectorSource<Geometry>>|null>('vectorLayer') || inject('heatmapLayer')
const { properties } = usePropsAsObjectProperties(props)

const source = computed(() => new VectorSource(properties as Options<Geometry>))

const applySource = () => {
  // @ts-ignore
  layer?.value?.setSource(null)
  // @ts-ignore
  layer?.value?.setSource(source.value)
  layer?.value?.changed()
}
watch(properties, () => {
  applySource()
})

watch(() => layer, () => {
  applySource()
})

onMounted(() => {
  // @ts-ignore
  layer?.value?.setSource(source.value)
})

onUnmounted(() => {
  // @ts-ignore
  layer?.value?.setSource(null)
})

provide('vectorSource', source)

defineExpose({
  layer,
  source,
})
</script>
