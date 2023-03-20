<template><div v-if="false"></div></template>
<script setup lang="ts">
import Point from 'ol/geom/Point'
import useGeometry from '@/composables/useGeometry'

const props = withDefaults(defineProps<{
  coordinates: number[],
  opt_layout?: string,
}>(), {
  opt_layout: 'XY',
})

const {
  geometry,
} = useGeometry(Point, props)

defineExpose({
  geometry,
})
</script>
