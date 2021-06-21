<template>
<div v-if="false">

</div>
</template>

<script>
import WMTS from 'ol/source/WMTS';
import Projection from 'ol/proj/Projection';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import {
    get as getProjection
} from 'ol/proj';
import {
    getTopLeft,
    getWidth
} from 'ol/extent';
import {
    inject,
    toRefs,
    onMounted,
    onUnmounted,
    computed

} from 'vue'

export default {
    name: 'ol-source-wmts',
    setup(props) {

        const tileLayer = inject('tileLayer');

        const {
            cacheSize,
            crossOrigin,
            imageSmoothing,
            projection,
            reprojectionErrorThreshold,
            tilePixelRatio,
            format,
            version,
            matrixSet,
            dimensions,
            url,
            urls,
            wrapX,
            transition,
            layer,
            style

        } = toRefs(props);

        const tileGrid = computed(() => {

            const extent = getProjection(projection.value).getExtent();
            const origin = getTopLeft(extent);
            const size = getWidth(extent) / 256;
            const resolutions = new Array(14);
            const matrixIds = new Array(14);
            for (var z = 0; z < 14; ++z) {

                resolutions[z] = size / Math.pow(2, z);
                matrixIds[z] = z;
            }
            return new WMTSTileGrid({
                origin,
                resolutions,
                matrixIds
            });

        });

        const source = new WMTS({
            cacheSize: cacheSize.value,
            crossOrigin: crossOrigin.value,
            imageSmoothing: imageSmoothing.value,
            reprojectionErrorThreshold: reprojectionErrorThreshold.value,
            tilePixelRatio: tilePixelRatio.value,
            format: format.value,
            version: version.value,
            matrixSet: matrixSet.value,
            dimensions: dimensions.value,
            url: url.value,
            urls: urls.value,
            wrapX: wrapX.value,
            transition: transition.value,
            layer: layer.value,
            style: style.value,
            projection: typeof projection.value == "string" ? projection.value : new Projection({
                ...projection.value
            }),
            tileGrid: tileGrid.value
        });
        console.log(source);
        onMounted(() => {
            tileLayer.setSource(source)
        });

        onUnmounted(() => {
            tileLayer.setSource(null)
        });

        return {
            tileLayer,
            source
        }
    },
    props: {
        attributions: {
            type: String
        },
        cacheSize: {
            type: Number
        },
        crossOrigin: {
            type: String
        },
        imageSmoothing: {
            type: Boolean,
            default: true
        },
        projection: {
            type: [String, Object],
            default: 'EPSG:3857'
        },
        reprojectionErrorThreshold: {
            type: Number,
            default: 0.5
        },
        tilePixelRatio: {
            type: Number,
            default: 1
        },
        format: {
            type: String,
            default: 'image/jpeg'
        },
        version: {
            type: String,
            default: '1.0.0'
        },
        matrixSet: {
            type: String
        },
        dimensions: {
            type: Object
        },
        url: {
            type: String
        },
        urls: {
            type: Array
        },
        wrapX: {
            type: Boolean,
            default: false
        },
        transition: {
            type: Number
        },
        layer: {
            type: String
        },
        style: {
            type: String
        },

    }
}
</script>

<style lang="">

</style>
