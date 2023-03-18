<template>
  <slot></slot>
</template>

<script setup lang="ts">
import {
  provide,
  inject,
  watch,
  onMounted,
  onUnmounted,
  computed,
} from 'vue'
import Feature from 'ol/Feature'
import type Geometry from 'ol/geom/Geometry'
import type VectorSource from 'ol/source/Vector'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'
import type { FeatureAnimation } from '@/composables/AnimationTypes'

const props = withDefaults(defineProps<{
  properties: [Geometry, Record<string, unknown>, unknown[]],
}>(), {})

const vectorSource = inject<VectorSource>('vectorSource')
const vectorLayer = inject<VectorSource<Geometry>>('vectorLayer')
const animation = inject<FeatureAnimation|null>('animation', null)

const { properties } = usePropsAsObjectProperties(props)

const feature = computed(() => {
  // @ts-ignore
  const olFeature = new Feature({ ...properties.properties })
  return olFeature
})

watch(feature, (newVal, oldVal) => {
  vectorSource?.removeFeature(oldVal)
  vectorSource?.addFeature(newVal)
  vectorSource?.changed()
})

watch(() => vectorSource, (newVal, oldVal) => {
  oldVal?.removeFeature(feature.value)
  newVal?.addFeature(feature.value)
  newVal?.changed()
})

onMounted(() => {
  vectorSource?.addFeature(feature.value)
  if (animation !== null) {
    // @ts-ignore
    vectorLayer?.animateFeature(feature.value, animation)
  }
})

onUnmounted(() => {
  vectorSource?.removeFeature(feature.value)
})

provide('feature', feature)

provide('stylable', feature)

defineExpose({
  feature,
})

</script>
