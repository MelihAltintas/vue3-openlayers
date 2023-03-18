<template>
<div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import type { Options } from 'ol/style/Circle'
import CircleStyle from 'ol/style/Circle'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'

import {
  inject,
  watch,
  onMounted,
  onUnmounted,
  provide,
  computed,
} from 'vue'
import type Draw from 'ol/interaction/Draw'
import type Modify from 'ol/interaction/Modify'
import type Style from 'ol/style/Style'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  radius: number,
  scale?: number
}>(), {})

const style = inject<Style|null>('style', null)
const styledObj = inject<Draw|Modify|Style|null>('styledObj', null)

const { properties } = usePropsAsObjectProperties(props)

const createCircleStyle = (innerProperties: Omit<Options, 'fill'|'stroke'>) => {
  return new CircleStyle({
    ...innerProperties,
    fill: new Fill(),
    stroke: new Stroke(),
  })
}

const circle = computed(() => createCircleStyle(properties))

const applyStyle = () => {
  // @ts-ignore
  style?.setImage(null)
  style?.setImage(circle.value)
  // @ts-ignore
  styledObj?.changed()
}
watch(properties, () => {
  applyStyle()
})

watch(() => style, () => {
  applyStyle()
})

onMounted(() => {
  style?.setImage(circle.value)
})

onUnmounted(() => {
  // @ts-ignore
  style?.setImage(null)
})

provide('circle', circle)
provide('styledObj', styledObj)
</script>
