<template lang="">
<div v-if="false">
</div>
</template>

<script>
import MultiPolygon from 'ol/geom/MultiPolygon'
import useGeometry from '@/composables/useGeometry'

export default {
  name: 'ol-geom-multi-polygon',
  setup(props) {
    const {
      geometry,
    } = useGeometry(MultiPolygon, props)

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
