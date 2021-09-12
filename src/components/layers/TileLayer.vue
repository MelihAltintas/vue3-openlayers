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
    watch,
    computed
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

        const tileLayer = computed(() => new TileLayer(properties));

        const applyTileLayer = () => {

            if (overViewMap != null) {
                overViewMap.value.getOverviewMap().addLayer(tileLayer.value);
                overViewMap.value.changed();
            } else {
                map.addLayer(tileLayer.value);
            }
        };

        const removeTileLayer = () => {

            if (overViewMap != null) {
                overViewMap.value.getOverviewMap().removeLayer(tileLayer.value);
                overViewMap.value.changed();
            } else {
                map.removeLayer(tileLayer.value);
            }
        };

        if (overViewMap != null) {
            watch(overViewMap, () => {
                removeTileLayer();
                applyTileLayer();

            });
        }

        onMounted(() => {
            applyTileLayer();
        });

        onUnmounted(() => {
            removeTileLayer();
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
        title: {
            type: String,

        },
        name: {
            type: String,

        },
        preview: {
            type: String,

        },
        baseLayer:{
            type: Boolean,

        },
    }
}
</script>

<style lang="">

</style>
