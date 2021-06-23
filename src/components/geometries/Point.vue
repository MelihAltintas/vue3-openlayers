<template lang="">
<div v-if="false">
</div>
</template>

<script>
import Point from 'ol/geom/Point';
import useGeometry from '@/composables/useGeometry'

export default {
    name: 'ol-geom-point',
    setup(props) {
        const {
            geometry
        } = useGeometry(Point, props);

        return {
            geometry
        }

    },
    props: {
        coordinates: {
            type: Array,
        },
        opt_layout: {
            type: String,
            default: 'XY'
        },
    }
}
</script>

<style lang="">

</style>
