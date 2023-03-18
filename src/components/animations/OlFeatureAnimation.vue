<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type VectorSource from 'ol/source/Vector'
import type Geometry from 'ol/geom/Geometry'

const map = inject('map')
const vectorLayer = inject<VectorSource<Geometry>>('vectorLayer')

defineExpose({
  map,
  vectorLayer,
})

</script>
