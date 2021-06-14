<template lang="">
<div>

</div>
</template>

<script>
import useView from '@/composables/useView'

export default {
    name: 'ol-view',
    setup(props, {
        emit
    }) {

        const view = useView(props, emit);

        return {
            ...view
        }
    },
    props: {
        center: {
            type: Array,
            default: () => [0, 0],
        },
        constrainRotation: {
            type: Boolean,
            default: true
        },
        enableRotation: {
            type: Boolean,
            default: true
        },
        extent: {
            type: Array,
        },
        constrainOnlyCenter: {
            type: Boolean,
            default: false
        },
        smoothExtentConstraint: {
            type: Boolean,
            default: true
        },
        maxResolution: {
            type: Number,
        },
        minResolution: {
            type: Number,
        },
        maxZoom: {
            type: Number,
            default: 28
        },
        minZoom: {
            type: Number,
            default: 0
        },
        multiWorld: {
            type: Boolean,
            default: false
        },
        constrainResolution: {
            type: Boolean,
            default: false
        },
        smoothResolutionConstraint: {
            type: Boolean,
            default: true
        },
        showFullExtent: {
            type: Boolean,
            default: false
        },
        projection: {
            type: String,
            default: 'EPSG:3857'
        },
        resolution: {
            type: Number,
        },
        resolutions: {
            type: Array,

        },
        rotation: {
            type: Number,

        },
        zoom: {
            type: Number,
            default: 0
        },
        zoomFactor: {
            type: Number,
            default: 2
        },
        padding: {
            type: Array,
            default: () => [0, 0, 0, 0],
        },

    }
}
</script>

<style lang="">

</style>
