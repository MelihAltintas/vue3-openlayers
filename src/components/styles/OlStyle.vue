<template>
<div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import {
  provide,
  inject,
  watch,
  onUnmounted,
  onMounted,
  computed,

} from 'vue'

import Style from 'ol/style/Style'
import Draw from 'ol/interaction/Draw'
import Modify from 'ol/interaction/Modify'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  zIndex?: number,
  overrideStyleFunction?: (...args: unknown[]) => unknown,
}>(), {})

const styledObj = inject<Draw|Modify|Style|null>('stylable', null)
const { properties } = usePropsAsObjectProperties(props)

const style = computed(() => new Style(properties))

const setStyle = (val: Style | null) => {
  if (styledObj instanceof Draw || styledObj instanceof Modify) {
    styledObj.getOverlay().setStyle(val)
    styledObj.dispatchEvent('styleChanged')
    return
  }
  try {
    if (styledObj) {
      // @ts-ignore
      if (styledObj?.setStyle) {
        // @ts-ignore
        styledObj.setStyle(val)
      }
      // @ts-ignore
      if (styledObj?.changed) {
        // @ts-ignore
        styledObj.changed()
      }
      // @ts-ignore
      if (styledObj?.dispatchEvent) {
        // @ts-ignore
        styledObj.dispatchEvent('styleChanged')
      }
    }
  } catch (error) {
    if (styledObj) {
      // @ts-ignore
      styledObj.style_ = val
      // @ts-ignore
      if (styledObj?.values_) {
        // @ts-ignore
        styledObj.values_.style = val
      }
      // @ts-ignore
      styledObj?.changed()
      // @ts-ignore
      styledObj?.dispatchEvent('styleChanged')
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
  if (properties.overrideStyleFunction === null) {
    setStyle(style.value)
  } else {
    // @ts-ignore
    setStyle(styleFunc.value)
  }
})

onMounted(() => {
  if (properties.overrideStyleFunction === null) {
    setStyle(style.value)
  } else {
    // @ts-ignore
    setStyle(styleFunc.value)
  }
})

onUnmounted(() => {
  setStyle(null)
})

provide('style', style)
provide('styledObj', styledObj)

defineExpose({
  style,
})
</script>
