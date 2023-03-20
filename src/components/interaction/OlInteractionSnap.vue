<template>
<slot></slot>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import {
  inject,
  watch,
  onMounted,
  onUnmounted,
} from 'vue'
import Snap from 'ol/interaction/Snap'
import type Map from 'ol/Map'
import type VectorSource from 'ol/source/Vector'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  vertex?: boolean,
  edge?: boolean,
  pixelTolerance: number,
}>(), {
  vertex: true,
  edge: true,
  pixelTolerance: 10,
})

const map = inject<Ref<Map> | null>('map')
const source = inject<Ref<VectorSource>|null>('vectorSource')

const {
  properties,
} = usePropsAsObjectProperties(props)

const createSnap = () => {
  const olSnap = new Snap({
    ...properties,
    source: source?.value,
  })

  return olSnap
}
let snap = createSnap()

watch(properties, () => {
  map?.value?.removeInteraction(snap)
  snap = createSnap()
  map?.value?.addInteraction(snap)
  map?.value?.changed()
})

onMounted(() => {
  map?.value?.addInteraction(snap)
})

onUnmounted(() => {
  map?.value?.removeInteraction(snap)
})
</script>
