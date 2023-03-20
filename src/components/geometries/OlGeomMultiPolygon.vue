<template><div v-if="false"></div></template>
<script setup lang="ts">
import MultiPolygon from 'ol/geom/MultiPolygon'
import useGeometry from '@/composables/useGeometry'

const props = withDefaults(defineProps<{
  coordinates: number[],
  opt_layout?: string,
}>(), {
  opt_layout: 'XY',
})

const {
  geometry,
} = useGeometry(MultiPolygon, props)

defineExpose({
  geometry,
})
</script>
