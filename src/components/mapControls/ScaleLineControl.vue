<template lang="">
<div v-if="false">

</div>
</template>

<script>
import {
  ScaleLine,
} from 'ol/control'
import useControl from '@/composables/useControl'

export default {
  name: 'ol-scaleline-control',
  setup(props, context) {
    const {
      control,
    } = useControl(ScaleLine, props, context)
    return {
      control,
    }
  },
  props: {
    className: {
      type: String,
      default: 'ol-scale-line',
    },
    minWidth: {
      type: Number,
      default: 64,
    },
    render: {
      type: Function,
    },
    target: {
      type: HTMLElement,
    },
    units: {
      type: String,
      default: 'metric',
    },
    bar: {
      type: Boolean,
      default: false,
    },

    steps: {
      type: Number,
      default: 4,
    },
    text: {
      type: Boolean,
      default: false,
    },
    dpi: {
      type: Number,
      default: undefined,
    },

  },
}
</script>

<style lang="">

</style>
