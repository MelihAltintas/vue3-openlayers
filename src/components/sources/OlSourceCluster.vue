<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {
  Cluster,
} from 'ol/source'

import type { Ref } from 'vue'
import {
  inject,
  watch,
  onMounted,
  onUnmounted,
  provide,
  computed,
} from 'vue'

import type Geometry from 'ol/geom/Geometry'
import type Feature from 'ol/Feature'
import type VectorSource from 'ol/source/Vector'
import type { AttributionLike } from 'ol/source/Source'
import type Point from 'ol/geom/Point'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  attributions?: AttributionLike,
  distance?: number,
  geometryFunction?: ((arg0: Feature<Geometry>) => Point) | undefined;
  wrapX?: boolean,
}>(), {
  distance: 20,
  geometryFunction: (feature: Feature<Geometry>): Point => feature.getGeometry() as Point,
  wrapX: true,
})

const layer = inject<Ref<VectorSource<Geometry>>|null>('vectorLayer')

const { properties } = usePropsAsObjectProperties(props)

const source = computed(() => {
  const c = new Cluster(properties)
  return c
})

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
  // @ts-ignore
  layer?.value?.changed()
})

onUnmounted(() => {
  // @ts-ignore
  layer?.value?.setSource(null)
})

provide('vectorLayer', source)

defineExpose({
  layer,
  source,
})
</script>
