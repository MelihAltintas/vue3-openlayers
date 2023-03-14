<template lang="">
<div v-if="false">
</div>
</template>

<script>
import Polygon from 'ol/geom/Polygon'
import useGeometry from '@/composables/useGeometry'

export default {
  name: 'ol-geom-polygon',
  setup(props) {
    const {
      geometry,
    } = useGeometry(Polygon, props)

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
