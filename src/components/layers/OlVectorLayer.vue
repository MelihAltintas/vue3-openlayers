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
import VectorLayer from 'ol/layer/Vector'
import type Map from 'ol/Map'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  renderBuffer?: number,
  updateWhileAnimating?: boolean,
  style?: () => unknown,
  updateWhileInteracting?: boolean,
  className: 'ol-layer',
  opacity: 1,
  visible: true,
}>(), {
  className: 'ol-layer',
  opacity: 1,
  visible: true,
  renderBuffer: 100,
  updateWhileAnimating: false,
  updateWhileInteracting: false,
})

const map = inject<Map>('map')

const {
  properties,
} = usePropsAsObjectProperties(props)

// @ts-ignore
const vectorLayer = computed(() => new VectorLayer(properties))

watch(properties, () => {
  vectorLayer.value.setProperties(properties)
})

onMounted(() => {
  map?.addLayer(vectorLayer.value)
})

onUnmounted(() => {
  map?.removeLayer(vectorLayer.value)
})

provide('vectorLayer', vectorLayer)
provide('stylable', vectorLayer)

defineExpose({
  vectorLayer,
})

</script>
