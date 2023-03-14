<template lang="">
<div>
    <slot></slot>
</div>
</template>

<script>
import {
  inject,
  provide,
  onUnmounted,
  onMounted,
  watch,
} from 'vue'

import ImageLayer from 'ol/layer/Image'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'
import BaseLayer from './BaseLayer.vue'

export default {
  extends: BaseLayer,
  name: 'ol-image-layer',
  setup(props) {
    const map = inject('map')
    const {
      properties,
    } = usePropsAsObjectProperties(props)

    const imageLayer = new ImageLayer(properties)

    watch(properties, () => {
      imageLayer.setProperties(properties)
    })

    onMounted(() => {
      map.addLayer(imageLayer)
    })

    onUnmounted(() => {
      map.removeLayer(imageLayer)
    })

    provide('imageLayer', imageLayer)

    return {
      imageLayer,
    }
  },
}
</script>

<style lang="">

</style>
