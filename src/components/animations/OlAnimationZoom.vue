<template>
<slot></slot>
</template>

<script setup lang="ts">
import Zoom from 'ol-ext/featureanimation/Zoom'
import { easeOut } from 'ol/easing'
import useAnimation from '@/composables/useAnimation'

const props = withDefaults(defineProps<{
  duration: number,
  revers: boolean,
  repeat: number,
  easing: (t: number) => unknown,
}>(), {
  duration: 1000,
  revers: false,
  repeat: 0,
  easing: easeOut,
  zoomOut: false,
})

const {
  map,
  vectorLayer,
  properties,
} = useAnimation(Zoom, props)

defineExpose({
  map,
  vectorLayer,
  properties,
})

</script>
