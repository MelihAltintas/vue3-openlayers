<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Drop from 'ol-ext/featureanimation/Drop'
import { easeOut } from 'ol/easing'
import useAnimation from '@/composables/useAnimation'

const props = withDefaults(defineProps<{
  duration?: number,
  revers?: boolean,
  repeat?: number,
  easing?: (t: number) => unknown,
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
} = useAnimation(Drop, props)

defineExpose({
  map,
  vectorLayer,
  properties,
})

</script>
