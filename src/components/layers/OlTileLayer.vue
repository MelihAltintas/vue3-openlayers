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
import TileLayer from 'ol/layer/Tile'
import type Map from 'ol/Map'
import type { OverviewMap } from 'ol/control'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  preload?: number,
  className?: 'ol-layer',
  opacity?: 1,
  visible?: true,
}>(), {
  className: 'ol-layer',
  opacity: 1,
  visible: true,
  preload: 1,
})

const map = inject<Ref<Map>|null>('map')
const overViewMap = inject<Ref<OverviewMap | null>|null>('overviewMap', null)

const {
  properties,
} = usePropsAsObjectProperties(props)

const tileLayer = computed(() => new TileLayer(properties))

const applyTileLayer = () => {
  if (overViewMap !== null) {
    overViewMap.value?.getOverviewMap().addLayer(tileLayer.value)
    overViewMap.value?.changed()
  } else {
    map?.value?.addLayer(tileLayer.value)
  }
}

const removeTileLayer = () => {
  if (overViewMap != null) {
    overViewMap.value?.getOverviewMap().removeLayer(tileLayer.value)
    overViewMap.value?.changed()
  } else {
    map?.value?.removeLayer(tileLayer.value)
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
