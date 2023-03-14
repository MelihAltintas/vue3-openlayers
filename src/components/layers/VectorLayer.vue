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
  computed,
} from 'vue'

import VectorLayer from 'ol/layer/Vector'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'
import BaseLayer from './BaseLayer.vue'

export default {
  extends: BaseLayer,
  name: 'ol-vector-layer',
  setup(props) {
    const map = inject('map')

    const {
      properties,
    } = usePropsAsObjectProperties(props)

    const vectorLayer = computed(() => new VectorLayer(properties))

    watch(properties, () => {
      vectorLayer.value.setProperties(properties)
    })

    onMounted(() => {
      map.addLayer(vectorLayer.value)
    })

    onUnmounted(() => {
      map.removeLayer(vectorLayer.value)
    })

    provide('vectorLayer', vectorLayer)
    provide('stylable', vectorLayer)

    return {
      vectorLayer,
    }
  },
  props: {
    renderBuffer: {
      type: Number,
      default: 100,
    },
    updateWhileAnimating: {
      type: Boolean,
      default: false,
    },
    style: {
      type: Function,

    },
    updateWhileInteracting: {
      type: Boolean,
      default: false,
    },

  },
}
</script>

<style lang="">

</style>
