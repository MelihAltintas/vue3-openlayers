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
    watch
} from 'vue'

import TileLayer from 'ol/layer/Tile';
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'
export default {
    name: 'ol-tile-layer',
    setup(props) {

        const map = inject('map');
        const overViewMap = inject('overviewMap', null);
        const {
            properties
        } = usePropsAsObjectProperties(props);

        const tileLayer = new TileLayer(properties);

        watch(properties, () => {

            tileLayer.setProperties(properties);

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
