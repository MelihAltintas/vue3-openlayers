<template>
<div v-if="false">

</div>
</template>

<script>
import XYZ from 'ol/source/XYZ';
import {
    inject,
    toRefs,
    onMounted,
    onUnmounted,
    watchEffect
} from 'vue'

export default {
    name: 'ol-source-xyz',
    setup(props) {

        const layer = inject('tileLayer');

        const {
            url,
            cacheSize,
            crossOrigin,
            maxZoom,
            minZoom,
            opaque,
            projection,
            reprojectionErrorThreshold,
            tileSize,
            tilePixelRatio,
            tileKey,
            transition
        } = toRefs(props);

        const source = new XYZ({
            url: url.value,
            cacheSize: cacheSize.value,
            crossOrigin: crossOrigin.value,
            maxZoom: maxZoom.value,
            minZoom: minZoom.value,
            opaque: opaque.value,
            projection: projection.value,
            reprojectionErrorThreshold: reprojectionErrorThreshold.value,
            tileSize: tileSize.value,
            tilePixelRatio: tilePixelRatio.value,
            tileKey: tileKey.value,
            transition: transition.value,
        });

        onMounted(() => {
            layer.setSource(source)
        });
        onUnmounted(() => {
            layer.setSource(null)
        });

        watchEffect(() => {
            console.log("url change")
            source.setUrl(url.value)
        }, {
            flush: 'post'
        })

        return {
            layer,
            source
        }
    },
    props: {
        url: {
            type: String
        },
        cacheSize: {
            type: Number,
            default: 2048
        },
        crossOrigin: {
            type: String
        },
        maxZoom: {
            type: Number,
            default: 28
        },
        minZoom: {
            type: Number,
            default: 0
        },
        opaque: {
            type: Boolean
        },
        projection: {
            type: String,
            default: 'EPSG:3857'
        },
        reprojectionErrorThreshold: {
            type: Number,
            default: 0.5
        },
        tileSize: {
            type: Array,
            default: () => [256, 256]
        },
        tilePixelRatio: {
            type: Number,
            default: 1
        },
        tileKey: {
            type: String
        },
        transition: {
            type: Number
        }
    }
}
</script>

<style lang="">

</style>
