<template lang="">
<div v-if="false">

</div>
</template>

<script>
import useControl from '@/composables/useControl'
import ZoomSlider from 'ol/control/ZoomSlider';

export default {
    name: 'ol-zoomslider-control',
    setup(props) {

        const {
            control
        } = useControl(ZoomSlider, props);
        return {
            control
        }

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
