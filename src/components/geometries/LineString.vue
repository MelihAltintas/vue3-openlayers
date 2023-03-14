<template lang="">
<div v-if="false">
</div>
</template>

<script>
import LineString from 'ol/geom/LineString'
import useGeometry from '@/composables/useGeometry'

export default {
  name: 'ol-geom-line-string',
  setup(props) {
    const {
      geometry,
    } = useGeometry(LineString, props)

    return {
      geometry,
    }
  },
  props: {
    coordinates: {
      type: Array,
    },
    opt_layout: {
      type: String,
      default: 'XY',
    },
  },
}
</script>

<style lang="">

</style>
