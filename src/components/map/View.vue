<template lang="">
<div>

</div>
</template>

<script>
import {
    inject,
    toRefs,
    watchEffect
} from 'vue'

import View from 'ol/View'

export default {
    name: 'ol-view',
    setup(props, {
        emit
    }) {

        const {
            zoom,
            resolution,
            center,
            projection,
            rotation
        } = toRefs(props);

        const map = inject('map');

        const view = new View({
            zoom: zoom.value,
            projection: projection.value,
            center: center.value,
            resolution: resolution.value,
            rotation: rotation.value,
            constrainResolution: true,
        });

        map.setView(view);

        view.on('change', () => {

            emit('update:zoom', getZoom());

        });

        view.on('change:center', () => emit('update:center', getCenter()));

        view.on('change:resolution', () => emit('update:resolution', getResolution()));

        view.on('change:rotation', () => emit('update:rotation', getRotation()));

        const getCenter = () => view.getCenter();
        const setZoom = (zoom) => view.setZoom(zoom);
        const getZoom = () => view.getZoom();
        const adjustCenter = (deltaCoordinates) => view.adjustCenter(deltaCoordinates);
        const getRotation = () => view.getRotation();
        const setRotation = (rotation) => view.setRotation(rotation);
        const setResolution = (resolution) => view.setResolution(resolution);
        const getResolution = () => view.getResolution();

        watchEffect(() => {
            setZoom(zoom.value)

        });

        return {
            view,
            setZoom,
            getZoom,
            adjustCenter,
            getRotation,
            setRotation,
            getResolution,
            setResolution
        }
    },
    props: {

        projection: {
            type: String,
            default: 'EPSG:3857'
        },
        center: {
            type: Array,
            default: () => [0, 0]
        },
        zoom: {
            type: Number,
            default: 0
        },
        resolution: {
            type: Number,
        },
        rotation: {
            type: Number,

        },

    }
}
</script>

<style lang="">

</style>
