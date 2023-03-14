<template lang="">
<slot :position="position" :speed="speed" :heading="heading" :accuracy="accuracy" :altitude="altitude" :altitudeAccuracy="altitudeAccuracy" :accuracyGeometry="accuracyGeometry">

</slot>
</template>

<script>
import {
  watch,
  computed,
  ref,
} from 'vue'
import Geolocation from 'ol/Geolocation'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
  name: 'ol-geolocation',
  emits: ['positionChanged', 'speedChanged', 'headingChanged', 'altitudeChanged', 'altitudeAccuracyChanged', 'accuracyGeometryChanged'],
  setup(props, {
    emit,
  }) {
    const {
      properties,
    } = usePropsAsObjectProperties(props)

    const geoLoc = computed(() => {
      const g = new Geolocation(properties)
      g.on('change', changeEvt)
      return g
    })

    const position = ref([])
    const accuracy = ref(0)
    const altitude = ref(0)
    const altitudeAccuracy = ref(0)
    const speed = ref(0)
    const heading = ref(0)
    const accuracyGeometry = ref({})

    watch(position, () => {
      emit('positionChanged', position.value)
    })

    watch(speed, () => {
      emit('speedChanged', speed.value)
    })

    watch(heading, () => {
      emit('headingChanged', heading.value)
    })

    watch(altitude, () => {
      emit('altitudeChanged', altitude.value)
    })

    watch(altitudeAccuracy, () => {
      emit('altitudeAccuracyChanged', altitudeAccuracy.value)
    })

    watch(accuracyGeometry, () => {
      emit('accuracyGeometryChanged', accuracyGeometry.value)
    })

    const changeEvt = () => {
      position.value = geoLoc.value.getPosition()
      speed.value = geoLoc.value.getSpeed()
      heading.value = geoLoc.value.getHeading()
      accuracy.value = geoLoc.value.getAccuracy()
      altitude.value = geoLoc.value.getAltitude()
      altitudeAccuracy.value = geoLoc.value.getAltitudeAccuracy()
      accuracyGeometry.value = geoLoc.value.getAccuracyGeometry()
    }

    watch(geoLoc, (newVal, oldVal) => {
      oldVal.un('change', changeEvt)
      newVal.on('change', changeEvt)
    })

    return {
      geoLoc,
      position,
      accuracy,
      altitude,
      altitudeAccuracy,
      speed,
      heading,
      accuracyGeometry,
    }
  },
  props: {
    projection: {
      type: [String, Object],
      default: 'EPSG:3857',
    },
    tracking: {
      type: Boolean,
      default: true,
    },
    trackingOptions: {
      type: Object,
      default: () => {
        return {
          enableHighAccuracy: true,
        }
      },
    },
  },

}
</script>

<style lang="">

</style>
