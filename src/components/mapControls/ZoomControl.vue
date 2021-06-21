<template lang="">
<div v-if="false">

</div>
</template>

<script>
import {
    inject,
    toRefs,
    onMounted,
    onUnmounted,
    watchEffect
} from 'vue'

import Zoom from 'ol/control/Zoom';

export default {
    name: 'ol-zoom-control',
    setup(props) {
        const map = inject('map');
        const {
            duration,
            className,
            zoomInClassName,
            zoomOutClassName,
            zoomInLabel,
            zoomOutLabel,
            zoomInTipLabel,
            zoomOutTipLabel,
            delta,
            target
        } = toRefs(props)


        
        let zoom = new Zoom({
            duration: duration.value,
            className: className.value,
            zoomInClassName: zoomInClassName.value,
            zoomOutClassName: zoomOutClassName.value,
            zoomInLabel: zoomInLabel.value,
            zoomOutLabel: zoomOutLabel.value,
            zoomInTipLabel: zoomInTipLabel.value,
            zoomOutTipLabel: zoomOutTipLabel.value,
            delta: delta.value,
            target: target.value
        });

        onMounted(() => {

            map.addControl(zoom);
        });

        onUnmounted(() => {
            map.removeControl(zoom);
        });

        watchEffect(async () => {

            map.removeControl(zoom);

            zoom = new Zoom({
                duration: duration.value,
                className: className.value,
                zoomInClassName: zoomInClassName.value,
                zoomOutClassName: zoomOutClassName.value,
                zoomInLabel: zoomInLabel.value,
                zoomOutLabel: zoomOutLabel.value,
                zoomInTipLabel: zoomInTipLabel.value,
                zoomOutTipLabel: zoomOutTipLabel.value,
                delta: delta.value,
                target: target.value
            });

            map.addControl(zoom)
        });

    },
    props: {
        duration: {
            type: Number,
            default: 250
        },
        className: {
            type: String,
            default: 'ol-zoom'
        },
        zoomInClassName: {
            type: String,
            default: 'ol-zoom-in'
        },
        zoomOutClassName: {
            type: String,
            default: 'ol-zoom-out'
        },
        zoomInLabel: {
            type: String,
            default: '+'
        },
        zoomOutLabel: {
            type: String,
            default: '-'
        },
        zoomInTipLabel: {
            type: String,
            default: 'Zoom in'
        },
        zoomOutTipLabel: {
            type: String,
            default: 'Zoom Out'
        },
        delta: {
            type: Number,
            default: 1
        },
        target: {
            type: HTMLElement
        },

    }
}
</script>

<style lang="">

</style>
