<template lang="">
<slot></slot>
</template>

<script>
import Zoom from 'ol-ext/featureanimation/Zoom'
import FeatureAnimation from './FeatureAnimation.vue'
import useAnimation from '@/composables/useAnimation'

export default {
  name: 'ol-animation-zoom',
  extends: FeatureAnimation,

  setup(props) {
    const {
      map,
      vectorLayer,
      properties,
    } = useAnimation(Zoom, props)

    return {
      map,
      vectorLayer,
      properties,
    }
  },
  props: {
    zoomOut: {
      type: Boolean,
      default: false,
    },

  },
}
</script>

<style lang="">

</style>
