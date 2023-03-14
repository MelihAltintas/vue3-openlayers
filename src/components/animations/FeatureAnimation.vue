<template lang="">
<slot></slot>
</template>

<script>
import {
  inject,
} from 'vue'

import {
  easeOut,
} from 'ol/easing'

export default {

  setup() {
    const map = inject('map')
    const vectorLayer = inject('vectorLayer')

    return {

      map,
      vectorLayer,

    }
  },
  props: {

    duration: {
      type: Number,
      default: 1000,
    },
    revers: {
      type: Boolean,
      default: false,
    },
    repeat: {
      type: Number,
      default: 0,
    },

    fade: {
      type: Function,

    },
    easing: {
      type: Function,
      default: easeOut,

    },

  },
}
</script>

<style lang="">

</style>
