<template lang="">
<slot></slot>
</template>

<script>

import Bar from 'ol-ext/control/Bar'

import { provide } from 'vue'
import useControl from '@/composables/useControl'

export default {
  name: 'ol-control-bar',
  setup(props, context) {
    const {
      control,
    } = useControl(Bar, props, context)

    provide('controlBar', control)
    return {
      control,
    }
  },
  props: {
    toggleOne: {
      type: Boolean,
      default: true,
    },
    group: {
      type: Boolean,
      default: true,
    },

  },
}
</script>

<style lang="">

</style>
