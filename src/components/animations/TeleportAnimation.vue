<template lang="">
<slot></slot>
</template>

<script>
import Teleport from 'ol-ext/featureanimation/Teleport'
import FeatureAnimation from './OlFeatureAnimation.vue'
import useAnimation from '@/composables/useAnimation'

export default {
  name: 'ol-animation-teleport',
  extends: FeatureAnimation,

  setup(props) {
    const {
      map,
      vectorLayer,
      properties,
    } = useAnimation(Teleport, props)

    return {
      map,
      vectorLayer,
      properties,
    }
  },
  props: {

  },
}
</script>

<style lang="">

</style>
