<template lang="">
<div v-if="false">

</div>
</template>

<script>
import {
    inject,
    toRefs,
    onMounted,
    onUnmounted
} from 'vue'

import ZoomSlider from 'ol/control/ZoomSlider';

export default {
    name: 'ol-zoomslider-control',
    setup(props) {
        const map = inject('map');
        const {
            duration,
            className,
            render
        } = toRefs(props)
        const zoomSlider = new ZoomSlider({
            duration: duration.value,
            className: className.value,
            render: render.value,
        });
        onMounted(() => {

            map.addControl(zoomSlider);
        });

        onUnmounted(() => {
            map.removeControl(zoomSlider);
        });

    },
    props: {
        duration: {
            type: Number,
            default: 200
        },
        className: {
            type: String,
            default: 'ol-zoomslider'
        },
        render: {
            type: Function,
        },
    }
}
</script>

<style lang="">

</style>
