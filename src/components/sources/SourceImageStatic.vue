<template>
<div v-if="false">

</div>
</template>

<script>
import Static from 'ol/source/ImageStatic';
import Projection from 'ol/proj/Projection';

import {
    inject,
    toRefs,
    onMounted,
    onUnmounted
} from 'vue'

export default {
    name: 'ol-source-image-static',
    setup(props) {

        const layer = inject('imageLayer');

        const {
            attributions,
            crossOrigin,
            url,
            imageExtent,
            projection,
            imageSmoothing,
            imageSize 

        } = toRefs(props);

        const source = new Static({
            attributions: attributions.value,
            crossOrigin: crossOrigin.value,
            url: url.value,
            imageExtent: imageExtent.value,
            projection: typeof projection.value == "string" ? projection.value : new Projection({...projection.value}),
            imageSmoothing: imageSmoothing.value,
            imageSize: imageSize.value
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
            type: [String,Object]
        },
        imageSmoothing: {
            type: Boolean,
            default: true
        },
        imageSize: {
            type: Array
        },
        url: {
            type: String
        }
    }
}
</script>

<style lang="">

</style>
