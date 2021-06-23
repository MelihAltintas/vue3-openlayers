<template>
<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom"/>

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer>
        <ol-source-wmts :attributions="attribution" :url="url" :matrixSet="matrixSet" :format="format" :layer="layerName" :style="styleName"></ol-source-wmts>
    </ol-tile-layer>

</ol-map>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    setup() {
        const center = ref([-90, 50])
        const zoom = ref(2)
        const rotation = ref(0)
        const url = ref('https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/')
        const layerName = ref('0')
        const matrixSet = ref('EPSG:3857')
        const format = ref('image/png')
        const styleName = ref('default')
        const attribution = ref('Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>')

        return {
            center,
            zoom,
            rotation,
            url,
            layerName,
            matrixSet,
            format,
            styleName,
            attribution
        }
    },
}
</script>
