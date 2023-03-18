<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {
  inject,
  provide,
  onUnmounted,
  onMounted,
  watch,
  computed,
} from 'vue'
import { Cluster } from 'ol/source'
import { easeOut } from 'ol/easing'
import AnimatedCluster from 'ol-ext/layer/AnimatedCluster'
import type Map from 'ol/Map'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  animationDuration?: number,
  distance?: number,
  animationMethod?: (t: number) => number,
  updateWhileAnimating?: boolean,
  updateWhileInteracting?: boolean,
  className: 'ol-layer',
  opacity: 1,
  visible: true,
}>(), {
  className: 'ol-layer',
  opacity: 1,
  visible: true,
  animationDuration: 700,
  distance: 20,
  animationMethod: easeOut,
  updateWhileAnimating: false,
  updateWhileInteracting: false,
})

const map = inject<Map>('map')
const { properties } = usePropsAsObjectProperties(props)

const vectorLayer = computed(() => {
  const animatedCluster = new AnimatedCluster({
    ...properties,
    source: new Cluster({
      distance: properties.distance as number|undefined,
      // @ts-ignore
      geometryFunction: feature => feature.getGeometry(),
    }),
  })

  return animatedCluster
})

const vectorLayerSource = computed(() => vectorLayer.value.getSource())

watch(properties, () => {
  vectorLayer.value.setProperties(properties)
  vectorLayer.value.changed()
})

onMounted(() => {
  map?.addLayer(vectorLayer.value)
  vectorLayer.value.changed()
  map?.changed()
})

onUnmounted(() => {
  map?.removeLayer(vectorLayer.value)
})

provide('vectorLayer', vectorLayerSource)
provide('stylable', vectorLayer)

defineExpose({
  vectorLayer,
  map,
})

</script>
