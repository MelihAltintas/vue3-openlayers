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
    onUnmounted,
    computed
} from 'vue'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-source-xyz',
    setup(props) {

        const layer = inject('tileLayer');
        const {
            properties
        } = usePropsAsObjectProperties(props);

        let source = computed(() => new XYZ(properties))

        watch(source, () => {
            layer.value.setSource(source.value)

        });

        watch(layer, () => {
            layer.value.setSource(source.value)

        });
        onMounted(() => {
            layer.value.setSource(source.value)
        });

        onUnmounted(() => {
            layer.value.setSource(null)
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
