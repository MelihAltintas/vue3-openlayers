<template>
<div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import {
  inject,
  provide,
  onUnmounted,
  onMounted,
  watch,
  computed,
} from 'vue'

import WebGLPointsLayer from 'ol/layer/WebGLPoints'
import type Map from 'ol/Map'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'
import type LayersCommonProps from '@/components/layers/LayersCommonProps'

type StyleType = {
  symbol: {
    symbolType: string,
    size: number,
    color: string,
    opacity: number,
  },
}

const props = withDefaults(defineProps<{
  disableHitDetection?: boolean,
  style: StyleType,
  className?: 'ol-layer',
  opacity?: 1,
  visible?: true,
}>(), {
  disableHitDetection: false,
  style: () => ({
    symbol: {
      symbolType: 'circle',
      size: 8,
      color: '#33AAFF',
      opacity: 0.9,
    },
  }),
})

const map = inject<Ref<Map>|null>('map')
const { properties } = usePropsAsObjectProperties(props)
const webglPointsLayer = computed(() => new WebGLPointsLayer(properties))

watch(properties, () => {
  webglPointsLayer.value.setProperties(properties)
})
onMounted(() => {
  map?.value?.addLayer(webglPointsLayer.value)
})
onUnmounted(() => {
  map?.value?.removeLayer(webglPointsLayer.value)
})
provide('webglPointsLayer', webglPointsLayer)

defineExpose({
  webglPointsLayer,
})

</script>
