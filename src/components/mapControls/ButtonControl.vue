<template lang="">
<div v-if="false">

</div>
</template>

<script>
import Button from 'ol-ext/control/Button'

import useControl from '@/composables/useControl'

export default {
  name: 'ol-control-button',
  setup(props, context) {
    const {
      control,
    } = useControl(Button, props, context)

    return {
      control,
    }
  },
  props: {
    html: {
      type: String,
    },
    name: {
      type: String,
    },
    className: {
      type: String,
    },
    title: {
      type: String,
    },
    handleClick: {
      type: Function,
    },
  },
}
</script>

<style lang="">

</style>
