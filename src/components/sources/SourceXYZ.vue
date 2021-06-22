<template>
<div v-if="false">

</div>
</template>

<script>
import XYZ from 'ol/source/XYZ';
import {
    inject,
    watch,
    onMounted,
    onUnmounted
} from 'vue'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-source-xyz',
    setup(props) {

        const layer = inject('tileLayer');
        const {
            properties
        } = usePropsAsObjectProperties(props);
        const createSource = () => {
            return new  XYZ(properties);
        };
        let source = createSource();

        watch(properties, () => {
            layer.setSource(null)
            source = createSource();
            layer.setSource(source)

        });
        onMounted(() => {
            layer.setSource(source)
        });

        onUnmounted(() => {
            layer.setSource(null)
        });

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
