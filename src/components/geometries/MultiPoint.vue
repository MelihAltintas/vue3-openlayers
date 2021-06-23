<template lang="">
<div v-if="false">
</div>
</template>

<script>
import MultiPoint from 'ol/geom/MultiPoint';
import useGeometry from '@/composables/useGeometry'

export default {
    name: 'ol-geom-multi-point',
    setup(props) {
        const {
            geometry
        } = useGeometry(MultiPoint, props);

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
