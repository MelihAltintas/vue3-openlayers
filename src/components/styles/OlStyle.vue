<template>
<div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
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

const styledObj = inject<Ref<Draw | Modify | Style | null>|null>('stylable', null)
const { properties } = usePropsAsObjectProperties(props)

const style = computed(() => new Style(properties))

const setStyle = (val: Style | null) => {
  if (styledObj?.value instanceof Draw || styledObj?.value instanceof Modify) {
    styledObj.value?.getOverlay().setStyle(val)
    styledObj.value?.dispatchEvent('styleChanged')
    return
  }
  try {
    if (styledObj?.value) {
      // @ts-ignore
      if (styledObj.value.setStyle) {
        // @ts-ignore
        styledObj.value.setStyle(val)
      }
      // @ts-ignore
      if (styledObj.value.changed) {
        // @ts-ignore
        styledObj.value.changed()
      }
      // @ts-ignore
      if (styledObj.value.dispatchEvent) {
        // @ts-ignore
        styledObj.value.dispatchEvent('styleChanged')
      }
    }
  } catch (error) {
    if (styledObj?.value) {
      // @ts-ignore
      styledObj.value.style_ = val
      // @ts-ignore
      if (styledObj.value.values_) {
        // @ts-ignore
        styledObj.value.values_.style = val
      }
      // @ts-ignore
      if (styledObj.value?.changed) {
        // @ts-ignore
        styledObj.value?.changed()
      }
      // @ts-ignore
      if (styledObj.value?.dispatchEvent) {
        // @ts-ignore
        styledObj.value?.dispatchEvent('styleChanged')
      }
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
