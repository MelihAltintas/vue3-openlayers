<template>
<div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import type { Options, TextPlacement } from 'ol/style/Text'
import Text from 'ol/style/Text'
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
import type Style from 'ol/style/Style'
import type Draw from 'ol/interaction/Draw'
import type Modify from 'ol/interaction/Modify'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  font?: string,
  maxAngle?: number,
  offsetX?: number,
  offsetY?: number,
  overflow?: boolean,
  placement?: TextPlacement,
  scale?: number,
  rotateWithView?: boolean,
  rotation?: number,
  text?: string,
  textAlign?: CanvasTextAlign,
  textBaseline?: CanvasTextBaseline,
  padding?: [number, number, number, number],
}>(), {
  maxAngle: Math.PI / 4,
  offsetX: 0,
  offsetY: 0,
  overflow: false,
  placement: 'point',
  rotateWithView: false,
  rotation: 0,
  textBaseline: 'middle',
  padding: () => [0, 0, 0, 0],
})

const style = inject<Style|null>('style', null)
const styledObj = inject<Draw|Modify|Style|null>('styledObj', null)

const { properties } = usePropsAsObjectProperties(props)

const createText = (innerProperties: Omit<Options, 'fill'|'stroke'>) => {
  return new Text({
    ...innerProperties,
    fill: new Fill(),
    stroke: new Stroke(),
  })
}

const text = computed(() => createText(properties))

const applyStyle = () => {
  // @ts-ignore
  style?.setText(null)
  style?.setText(text.value)
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
  style?.setText(text.value)
})

onUnmounted(() => {
  // @ts-ignore
  style?.setText(null)
})

provide('style', text)
provide('styledObj', styledObj)
</script>
