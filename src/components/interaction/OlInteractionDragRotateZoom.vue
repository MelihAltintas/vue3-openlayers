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
  computed,
} from 'vue'
import DragRotateAndZoom from 'ol/interaction/DragRotateAndZoom'
import type Map from 'ol/Map'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  condition?: () => boolean,
  duration?: number,
}>(), {
  duration: 400,
})

const map = inject<Ref<Map>|null>('map')
const { properties } = usePropsAsObjectProperties(props)
const dragRotateZoom = computed(() => {
  const OlDragRotateAndZoom = new DragRotateAndZoom({
    ...properties,
  })

  return OlDragRotateAndZoom
})

watch(dragRotateZoom, (newVal, oldVal) => {
  map?.value?.removeInteraction(oldVal)
  map?.value?.addInteraction(newVal)

  map?.value?.changed()
})

onMounted(() => {
  map?.value?.addInteraction(dragRotateZoom.value)
})

onUnmounted(() => {
  map?.value?.removeInteraction(dragRotateZoom.value)
})
</script>
