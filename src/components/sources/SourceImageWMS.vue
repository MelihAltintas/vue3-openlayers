<template>
<div v-if="false">

</div>
</template>

<script>
import ImageWMS from 'ol/source/ImageWMS';
import Projection from 'ol/proj/Projection';

import {
    inject,
    onMounted,
    onUnmounted,
    watch,
} from 'vue'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-source-image-wms',
    setup(props) {

        const layer = inject('imageLayer');
        const {
            properties
        } = usePropsAsObjectProperties(props);



        const createSource = () => {
            return new ImageWMS({
                ...properties,
                params: {
                    'LAYERS': props.layers,
                    'STYLES': props.styles,
                    'TIME': props.time
                    },
                projection: typeof properties.projection == "string" ? properties.projection : new Projection({
                    ...properties.projection
                })
            });
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
        attributions: {
            type: String
        },
        crossOrigin: {
            type: String
        },
        imageExtent: {
            type: Array
        },
        projection: {
            type: [String, Object],
            default: 'EPSG:3857'
        },
        reprojectionErrorThreshold: {
            type: Number,
            default: 0.5
        },
        format: {
            type: String,
            default: 'image/png'
        },
        version: {
            type: String,
            default: '1.3.0'
        },
        matrixSet: {
            type: String
        },
        serverType: {
            type: String,
            default: 'mapserver'
        },
        imageSmoothing: {
            type: Boolean,
            default: true
        },
        layers: {
            type: [String,Array],
            required: true
        },
        styles: {
            type: [String,Array],
            default: ''
        },
        time: {
            type: String
        },
        ratio: {
            type: Number,
            default: 1
        },
        imageSize: {
            type: Array
        },
        url: {
            type: String
        },
        params: {
            type: Object
        }
    }
}
</script>

<style lang="">

</style>
