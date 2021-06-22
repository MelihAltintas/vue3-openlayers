<template lang="">
<div :ref="el => mapRef = el">
    <slot></slot>
</div>
</template>

<script>
import {
    ref,
    provide,
    onMounted,
    onUnmounted,
    watch
} from "vue";

import Map from "ol/Map";
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-map',
    setup(props, {
        emit
    }) {

        const {
            properties
        } = usePropsAsObjectProperties(props);

        const mapRef = ref(null);

        let map = new Map(properties);

        watch(properties, () => {

            map.setProperties(properties);

        });

        onMounted(() => {
            map.setTarget(mapRef.value);
        });

        onUnmounted(() => {
            map.setTarget(null);
            map = null;
        });

        provide('map', map);

        const focus = () => map.focus();
        const forEachFeatureAtPixel = (pixel, callback, options = {}) => map.forEachFeatureAtPixel(pixel, callback, options)
        const forEachLayerAtPixel = (pixel, callback, layerFilter) => map.forEachLayerAtPixel(pixel, callback, layerFilter)
        const getCoordinateFromPixel = (pixel) => map.getCoordinateFromPixel(pixel);
        const refresh = () => map.refresh();
        const render = () => map.render();
        const updateSize = () => map.updateSize();

        map.on('click', (event) => emit('click', event));
        map.on('dblclick', (event) => emit('dblclick', event));
        map.on('singleclick', (event) => emit('singleclick', event));
        map.on('pointerdrag', (event) => emit('pointerdrag', event));
        map.on('pointermove', (event) => emit('pointermove', event));

        map.on('movestart', (event) => emit('movestart', event));
        map.on('moveend', (event) => emit('moveend', event));
        map.on('postrender', (event) => emit('postrender', event));
        map.on('precompose', (event) => emit('precompose', event));
        map.on('postcompose', (event) => emit('postcompose', event));

        return {
            map,
            mapRef,
            focus,
            forEachFeatureAtPixel,
            forEachLayerAtPixel,
            getCoordinateFromPixel,
            refresh,
            render,
            updateSize
        }
    },
    props: {
        loadTilesWhileAnimating: {
            type: Boolean,
            default: false
        },
        loadTilesWhileInteracting: {
            type: Boolean,
            default: false
        },
        moveTolerance: {
            type: Number,
            default: 1
        },
        pixelRatio: {
            type: Number,
            default: 1
        },

    },

};
</script>

<style lang=""></style>
