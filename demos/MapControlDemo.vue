<template>
<input type="checkbox" id="fullscreencontrol" v-model="fullscreencontrol">
<label for="fullscreencontrol">fullscreencontrol</label>
<input type="checkbox" id="attribution" v-model="attributioncontrol">
<label for="attribution">attributioncontrol</label>
<input type="checkbox" id="zoom" v-model="zoomcontrol">
<label for="zoom">zoomcontrol</label>
<input type="checkbox" id="zoomtoextent" v-model="zoomtoextentcontrol">
<label for="zoomtoextent">zoomtoextentcontrol</label>
<input type="checkbox" id="zoomslider" v-model="zoomslidercontrol">
<label for="zoomslider">zoomslidercontrol</label>
<input type="checkbox" id="scaleline" v-model="scalelinecontrol">
<label for="scaleline">scalelinecontrol</label>
<input type="checkbox" id="overviewmap" v-model="overviewmapcontrol">
<label for="overviewmap">overviewmapcontrol</label>
<input type="checkbox" id="mousepositioncontrol" v-model="mousepositioncontrol">
<label for="mousepositioncontrol">mousepositioncontrol</label>
<input type="checkbox" id="rotatecontrol" v-model="rotatecontrol">
<label for="rotatecontrol">rotatecontrol</label>

<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-fullscreen-control v-if="fullscreencontrol"/>
    <ol-mouseposition-control v-if="mousepositioncontrol" />
    <ol-attribution-control v-if="attributioncontrol"/>
    <ol-overviewmap-control  v-if="overviewmapcontrol"/>
    <ol-scaleline-control v-if="scalelinecontrol"/>
    <ol-rotate-control v-if="rotatecontrol"/>
    <ol-zoom-control v-if="zoomcontrol" :zoomInLabel="zoomInLabel"/>
    <ol-zoomslider-control v-if="zoomslidercontrol"/>
    <ol-zoomtoextent-control  v-if="zoomtoextentcontrol" :extent="[23.906,42.812,46.934,34.597]" tipLabel="Fit to Turkey"/>


    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

</ol-map>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    setup() {
        const center = ref([40, 40])
        const projection = ref('EPSG:4326')
        const zoom = ref(8)
        const rotation = ref(0)

        const zoomInLabel = ref('0')
        zoomInLabel.value = '3';
        return {
            center,
            projection,
            zoom,
            rotation,
            zoomInLabel
        }
    },
    data(){
        return{
            fullscreencontrol:true,
            attributioncontrol:true,
            zoomcontrol:true,
            zoomslidercontrol:true,
            zoomtoextentcontrol:true,
            scalelinecontrol:true,
            overviewmapcontrol:true,
            mousepositioncontrol:true,
            rotatecontrol:true
        }
    }
}
</script>
