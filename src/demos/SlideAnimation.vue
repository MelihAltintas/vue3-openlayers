<template>
<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:700px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer :updateWhileAnimating="true" :updateWhileInteracting="true">
        <ol-source-vector ref="vectorsource">

            <ol-animation-slide :duration="2000">
                <ol-feature v-for="index in 20" :key="index">
                    <ol-geom-point :coordinates="[getRandomInRange(24,45,3),getRandomInRange(35,41,3)]"></ol-geom-point>

                    <ol-style>
                        <ol-style-icon :src="starIcon" :scale="0.1"></ol-style-icon>
                    </ol-style>
                </ol-feature>
            </ol-animation-slide>

        </ol-source-vector>

    </ol-vector-layer>

</ol-map>
</template>

<script>
import {
    ref
} from 'vue'
import starIcon from '@/assets/star.png'
export default {
    setup() {
        const center = ref([40, 40])
        const projection = ref('EPSG:4326')
        const zoom = ref(6)
        const rotation = ref(0)
        const getRandomInRange = (from, to, fixed) => {
            return (Math.random() * (to - from) + from).toFixed(fixed) * 1;

        }
        return {
            center,
            projection,
            zoom,
            rotation,
            getRandomInRange,
            starIcon
        }
    },
}
</script>
