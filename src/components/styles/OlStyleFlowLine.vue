<template>
<div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import {
  inject,
  watch,
  onUnmounted,
  onMounted,
  computed,

} from 'vue'

import FlowLine from 'ol-ext/style/FlowLine'
import Draw from 'ol/interaction/Draw'
import Modify from 'ol/interaction/Modify'
import type { ColorLike } from 'ol/colorlike'
import type Feature from 'ol/Feature'
import type Style from 'ol/style/Style'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  color?: ColorLike | ((feature: Feature, step: number) => ColorLike),
  color2?: ColorLike,
  width?: number | ((feature: Feature, step: number) => number),
  width2?: number,
  arrow?: number,
  arrowColor?: string,
  lineCap?: CanvasLineCap,
  overrideStyleFunction?: (...args: unknown[]) => unknown,
}>(), {})

const styledObj = inject<Draw|Modify|Style|null>('stylable', null)

const { properties } = usePropsAsObjectProperties(props)

// @ts-ignore
const style = computed(() => new FlowLine(properties))

const setStyle = (val: Style | null) => {
  if (styledObj instanceof Draw || styledObj instanceof Modify) {
    styledObj.getOverlay().setStyle(val)
    styledObj.dispatchEvent('styleChanged')
    return
  }
  try {
    // @ts-ignore
    styledObj?.setStyle(val)
    // @ts-ignore
    styledObj?.changed()
    // @ts-ignore
    styledObj?.dispatchEvent('styleChanged')
  } catch (error) {
    if (styledObj) {
      // @ts-ignore
      styledObj.style_ = val
      // @ts-ignore
      styledObj.values_.style = val
      // @ts-ignore
      styledObj.changed()
      // @ts-ignore
      styledObj.dispatchEvent('styleChanged')
    }
  }
}

const styleFunc = computed(() => {
  // @ts-ignore
  return feature => {
    if (properties.overrideStyleFunction != null) {
      properties.overrideStyleFunction(feature, style.value)
    }
    return style.value
  }
})

watch(properties, () => {
  if (properties.overrideStyleFunction == null) {
    setStyle(style.value)
  } else {
    // @ts-ignore
    setStyle(styleFunc.value)
  }
})

onMounted(() => {
  if (properties.overrideStyleFunction == null) {
    setStyle(style.value)
  } else {
    // @ts-ignore
    setStyle(styleFunc.value)
  }
})

onUnmounted(() => {
  setStyle(null)
})

defineExpose({
  style,
})
</script>
