<template>

<input type="checkbox" id="checkbox" v-model="drawEnable">
<label for="checkbox">Draw Enable</label>

<select id="type" v-model="drawType">
    <option value="Point">Point</option>
    <option value="LineString">LineString</option>
    <option value="Polygon">Polygon</option>
    <option value="Circle">Circle</option>
</select>


<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
        <ol-source-vector :projection="projection">

            <ol-interaction-draw v-if="drawEnable" :type="drawType" @drawend="drawend" @drawstart="drawstart">

            </ol-interaction-draw>

        </ol-source-vector>

        <ol-style>
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
            <ol-style-circle :radius="7">
                <ol-style-fill color="blue"></ol-style-fill>
            </ol-style-circle>
        </ol-style>
    </ol-vector-layer>

</ol-map>
</template>

<script>
import {
    ref,
    inject
} from 'vue'
export default {
    setup() {
        const center = ref([40, 40])
        const projection = ref('EPSG:4326')
        const zoom = ref(8)
        const rotation = ref(0)

        const drawEnable = ref(true)
        const drawType = ref("Point")

        const drawstart = (event) => {
            console.log(event)

        }

        const drawend = (event) => {
            console.log(event)
        }

        return {
            center,
            projection,
            zoom,
            rotation,
            drawEnable,
            drawType,
            drawstart,
            drawend
        }
    },
}
</script>
