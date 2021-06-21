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
    toRefs
} from 'vue'

import ImageLayer from 'ol/layer/Image';

export default {
    name: 'ol-image-layer',
    setup(props) {
        const map = inject('map');

        const {
            className,
            opacity,
            visible,
            extent,
            zIndex,
            minResolution,
            maxResolution,
            minZoom,
            maxZoom,
        } = toRefs(props)

        const imageLayer = new ImageLayer({
            className: className.value,
            opacity: opacity.value,
            visible: visible.value,
            extent: extent.value,
            zIndex: zIndex.value,
            minResolution: minResolution.value,
            maxResolution: maxResolution.value,
            minZoom: minZoom.value,
            maxZoom: maxZoom.value,
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
        }
    }
}
</script>

<style lang="">

</style>
