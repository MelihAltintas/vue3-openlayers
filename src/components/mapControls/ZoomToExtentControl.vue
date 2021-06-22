<template lang="">
<div v-if="false">

</div>
</template>

<script>
import useControl from '@/composables/useControl'

import ZoomToExtent from 'ol/control/ZoomToExtent';

export default {
    name: 'ol-zoomtoextent-control',
    setup(props) {
        const {
            control
        } = useControl(ZoomToExtent, props);
        return {
            control
        }

    },
    props: {
        className: {
            type: String,
            default: 'ol-zoom-extent'
        },
        target: {
            type: HTMLElement
        },
        label: {
            type: String,
            default: 'E'
        },
        tipLabel: {
            type: String,
            default: 'Fit to extent'
        },
        extent: {
            type: Array,
        },
    }
}
</script>

<style lang="">

</style>
