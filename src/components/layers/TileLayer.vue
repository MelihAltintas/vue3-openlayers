<template lang="">
<div>
    <slot></slot>
</div>
</template>

<script>
import {
    inject,
    provide,
    onUnmounted,
    onMounted,
    toRefs
} from 'vue'

import TileLayer from 'ol/layer/Tile';

export default {
    name: 'ol-tile-layer',
    setup(props) {

        const map = inject('map');
        const overViewMap = inject('overviewMap');

        const {
            className,
            opacity,
            visible,
            extent,
            zIndex,
            minResolution,
            maxResolution,
            minZoom,
            maxZoom,
            preload,
        } = toRefs(props)

        const tileLayer = new TileLayer({
            className: className.value,
            opacity: opacity.value,
            visible: visible.value,
            extent: extent.value,
            zIndex: zIndex.value,
            minResolution: minResolution.value,
            maxResolution: maxResolution.value,
            minZoom: minZoom.value,
            maxZoom: maxZoom.value,
            preload: preload.value,
        });

        onMounted(() => {

            if (overViewMap != null) {

                overViewMap.getOverviewMap().addLayer(tileLayer);
            } else {
                map.addLayer(tileLayer);
            }
        });

        onUnmounted(() => {
            if (overViewMap != null) {
                overViewMap.getOverviewMap().removeLayer(tileLayer);
            } else {
                map.removeLayer(tileLayer);
            }
        });

        provide('tileLayer', tileLayer);

        return {
            tileLayer
        }
    },
    props: {
        className: {
            type: String,
            default: 'ol-layer'
        },
        opacity: {
            type: Number,
            default: 1
        },
        visible: {
            type: Boolean,
            default: true
        },
        extent: {
            type: Array
        },
        zIndex: {
            type: Number
        },
        minResolution: {
            type: Number
        },
        maxResolution: {
            type: Number
        },
        minZoom: {
            type: Number
        },
        maxZoom: {
            type: Number
        },
        preload: {
            type: Number,
            default: 1
        },
    }
}
</script>

<style lang="">

</style>
