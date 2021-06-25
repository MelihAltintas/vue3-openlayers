<template>
<select v-model="selectedXyzUrl">
    <option value="https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png">OSM</option>
    <option value="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}">GOOGLE</option>
</select>
{{selectedXyzUrl}}

<ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:800px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-fullscreen-control />
    <ol-mouseposition-control />

    <ol-overviewmap-control>
        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>
    </ol-overviewmap-control>

    <ol-scaleline-control />
    <ol-rotate-control />
    <ol-zoom-control />
    <ol-zoomslider-control />
    <ol-zoomtoextent-control :extent="[23.906,42.812,46.934,34.597]" tipLabel="Fit to Turkey" />

    <ol-tile-layer>
        <ol-source-xyz :url="selectedXyzUrl" />
    </ol-tile-layer>

    <ol-interaction-select @select="featureSelected" :condition="selectCondition">

    </ol-interaction-select>

    <ol-vector-layer>
        <ol-source-vector url="https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/master/tr-cities-kktc.json" :format="geoJson" :projection="projection">

        </ol-source-vector>
        <ol-style>
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
            <ol-style-icon :src="markerIcon" :scale="0.1"></ol-style-icon>
        </ol-style>
    </ol-vector-layer>

    <ol-vector-layer>
        <ol-source-vector url="https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/master/tr-cities-airports.json" :format="geoJson" :projection="projection">

        </ol-source-vector>
        <ol-style>
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(0,0,0,0.3)"></ol-style-fill>
            <ol-style-icon :src="markerIcon" :scale="0.08"></ol-style-icon>
        </ol-style>
    </ol-vector-layer>


    <ol-overlay :position="selectedCityPosition" v-if="selectedCityName !=''">
        <template v-slot="slotProps">
            <div class="overlay-content">
                {{selectedCityName}} {{slotProps}}
            </div>
        </template>
    </ol-overlay>

</ol-map>

</template>

<script>
import {
    ref,
    inject
} from 'vue'

import markerIcon from '@/assets/marker.png'
export default {
    setup() {
        const center = ref([34, 39.13])
        const projection = ref('EPSG:4326')
        const zoom = ref(6.8)
        const rotation = ref(0)

        const format = inject('ol-format');

        const geoJson = new format.GeoJSON();
        const selectedXyzUrl = ref('https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png')

        const selectConditions = inject('ol-selectconditions')
        console.log(selectConditions)
        const selectCondition = selectConditions.pointerMove;

        const selectedCityName = ref('')
        const selectedCityPosition = ref([])

        const extent = inject('ol-extent');

        const featureSelected = (event) => {
            if (event.selected.length == 1) {

                selectedCityPosition.value =  extent.getCenter(event.selected[0].getGeometry().extent_)
                selectedCityName.value = event.selected[0].values_.name;
            } else {
                selectedCityName.value = '';
            }

        }

        return {
            center,
            projection,
            zoom,
            rotation,
            geoJson,
            selectedXyzUrl,
            featureSelected,
            selectCondition,
            selectedCityName,
            selectedCityPosition,
            markerIcon
        }
    },
}
</script>

<style>
.overlay-content {
    background: red !important;
    color: white;
    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
    padding: 10px 20px;
    font-size: 16px;
}
</style>
