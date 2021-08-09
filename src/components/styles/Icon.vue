<template>
<div v-if="false">

</div>
</template>

<script>
import Icon from 'ol/style/Icon';

import {
    inject,
    watch,
    onMounted,
    onUnmounted,
    computed
} from 'vue'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-style-icon',
    setup(props) {

        const style = inject('style', null);
        const styledObj = inject('styledObj', null);

        const {
            properties
        } = usePropsAsObjectProperties(props);

        let icon = computed(() => {
            let ic = new Icon(properties)
            ic.load()
            return ic;
        });

        const applyStyle = () => {
            style.value.setImage(null);
            style.value.setImage(icon.value);
            styledObj.value.changed()

        };

        watch(properties, () => {
            applyStyle();
        })

        watch(style, () => {
            applyStyle();
        });

        onMounted(() => {
            style.value.setImage(icon.value);
        });

        onUnmounted(() => {
            style.value.setImage(null);
        });
    },
    props: {
        anchor: {
            type: Array
        },
        anchorOrigin: {
            type: String,
            default: 'top-left'
        },
        anchorXUnits: {
            type: String,
            default: 'fraction'
        },
        color: {
            type: String,
        },
        crossOrigin: {
            type: String,
        },
        img: {
            type: [HTMLImageElement, HTMLCanvasElement],
        },
        offset: {
            type: Array,
            default: () => [0, 0]
        },
        displacement: {
            type: Array,
            default: () => [0, 0]
        },
        offsetOrigin: {
            type: String,
            default: 'top-left'
        },
        opacity: {
            type: Number,
            default: 1
        },
        scale: {
            type: Number,
            default: 1
        },
        rotateWithView: {
            type: Boolean,
            default: false
        },
        rotation: {
            type: Number,
            default: 0
        },
        size: {
            type: Array
        },
        imgSize: {
            type: Array
        },
        src: {
            type: String
        },
    }

}
</script>

<style lang="">

</style>
