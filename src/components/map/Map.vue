<template lang="">
<div :ref="el => mapRef = el">
    <slot></slot>
</div>
</template>

<script>
import {
    ref,
    provide,
    onMounted
} from "vue";

import 'ol/ol.css'

//import useMap from '@/composables/useMap'

import Map from "ol/Map";
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ';

export default {
    name:'ol-map',
    setup(props) {

        console.log(props)
        const mapRef = ref(null);

        const map = new Map({
            controls:[],
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                })
            ],
            view: new View({
                zoom: 0,
                center: [0, 0],
                constrainResolution: true,
            }),
        })

        onMounted(() => {
            map.setTarget(mapRef.value);
        }),

        provide('map',map);
   
        return {
            map,
            mapRef
        }
    },
    props: {
        dataProjection: {
            type: String,
            default: undefined
        },
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
