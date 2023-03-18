<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Fade from 'ol-ext/featureanimation/Fade'
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
})

const {
  map,
  vectorLayer,
  properties,
} = useAnimation(Fade, props)

defineExpose({
  map,
  vectorLayer,
  properties,
})
</script>
