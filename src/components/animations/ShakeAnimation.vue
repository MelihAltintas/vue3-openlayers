<template lang="">
<slot></slot>
</template>

<script>
import Shake from 'ol-ext/featureanimation/Shake'
import FeatureAnimation from './FeatureAnimation.vue'
import useAnimation from '@/composables/useAnimation'

export default {
  name: 'ol-animation-shake',
  extends: FeatureAnimation,

  setup(props) {
    const {
      map,
      vectorLayer,
      properties,
      animation,
    } = useAnimation(Shake, props)

    return {
      map,
      vectorLayer,
      properties,
      animation,
    }
  },
  props: {
    bounce: {
      type: Number,
      default: 6,
    },
    amplitude: {
      type: Number,
      default: 40,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="">

</style>
