<template>
<div>
    <slot></slot>
</div>
</template>

<script>
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

export default {
  name: 'ol-style',
  setup(props) {
    const styledObj = inject('stylable', null)

    const {
      properties,
    } = usePropsAsObjectProperties(props)

    const style = computed(() => new Style(properties))

    const setStyle = val => {
      if (styledObj instanceof Draw || styledObj instanceof Modify) {
        styledObj.getOverlay().setStyle(val)
        styledObj.value.dispatchEvent('styleChanged')
        return
      }
      try {
        styledObj.value.setStyle(val)
        styledObj.value.changed()
        styledObj.value.dispatchEvent('styleChanged')
      } catch (error) {
        styledObj.value.style_ = val
        styledObj.value.values_.style = val

        styledObj.value.changed()
        styledObj.value.dispatchEvent('styleChanged')
      }
    }

    const styleFunc = computed(() => {
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
        setStyle(styleFunc.value)
      }
    })

    onMounted(() => {
      if (properties.overrideStyleFunction == null) {
        setStyle(style.value)
      } else {
        setStyle(styleFunc.value)
      }
    })

    onUnmounted(() => {
      setStyle(null)
    })

    provide('style', style)
    provide('styledObj', styledObj)

    return {
      style,
    }
  },
  props: {
    zIndex: {
      type: Number,
    },
    overrideStyleFunction: {
      type: Function,
    },

  },

}
</script>

<style lang="">

</style>
