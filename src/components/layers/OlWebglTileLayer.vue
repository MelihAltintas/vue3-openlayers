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
import TileLayer from 'ol/layer/WebGLTile'
import type Map from 'ol/Map'
import type { OverviewMap } from 'ol/control'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  preload: number,
  className?: 'ol-layer',
  opacity?: 1,
  visible?: true,
}>(), {
  preload: 1,
})

const map = inject<Map>('map')
const overViewMap = inject<OverviewMap|null>('overviewMap', null)

const {
  properties,
} = usePropsAsObjectProperties(props)

const tileLayer = computed(() => new TileLayer(properties))

const applyTileLayer = () => {
  if (overViewMap !== null) {
    overViewMap.getOverviewMap().addLayer(tileLayer.value)
    overViewMap.changed()
  } else {
    map?.addLayer(tileLayer.value)
  }
}

const removeTileLayer = () => {
  if (overViewMap != null) {
    overViewMap.getOverviewMap().removeLayer(tileLayer.value)
    overViewMap.changed()
  } else {
    map?.removeLayer(tileLayer.value)
  }
}

if (overViewMap != null) {
  watch(overViewMap, () => {
    removeTileLayer()
    applyTileLayer()
  })
}

onMounted(() => {
  applyTileLayer()
})

onUnmounted(() => {
  removeTileLayer()
})

provide('tileLayer', tileLayer)

defineExpose({
  tileLayer,
})

</script>
