<template lang="">
<div>
    <slot></slot>
</div>
</template>

<script>
import {
    inject,
    provide,
    onUnmounted,
    onMounted,
    watch
} from 'vue'

import ImageLayer from 'ol/layer/Image';
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'
export default {
    name: 'ol-image-layer',
    setup(props) {
        const map = inject('map');
        const {
            properties
        } = usePropsAsObjectProperties(props);

        const imageLayer = new ImageLayer(properties);

        watch(properties, () => {
            imageLayer.setProperties(properties);
        });

        onMounted(() => {
            map.addLayer(imageLayer);
        });

        onUnmounted(() => {
            map.removeLayer(imageLayer)
        });

        provide('imageLayer', imageLayer);

        return {
            imageLayer
        }
    },
    props: {
        className: {
            type: String,
            default: 'ol-layer'
        },
        opacity: {
            type: Number,
            default: 1
        },
        visible: {
            type: Boolean,
            default: true
        },
        extent: {
            type: Array
        },
        zIndex: {
            type: Number
        },
        minResolution: {
            type: Number
        },
        maxResolution: {
            type: Number
        },
        minZoom: {
            type: Number
        },
        maxZoom: {
            type: Number
        },
        title: {
            type: String,

        },
        name: {
            type: String,

        },
        preview: {
            type: String,

        },
        baseLayer: {
            type: Boolean,

        },
    }
}
</script>

<style lang="">

</style>
