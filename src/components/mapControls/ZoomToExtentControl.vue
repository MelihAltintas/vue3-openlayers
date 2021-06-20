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

import ZoomToExtent from 'ol/control/ZoomToExtent';

export default {
    name: 'ol-zoomtoextent-control',
    setup(props) {
        const map = inject('map');
        const {
            className,
            target,
            label,
            tipLabel,
            extent
        } = toRefs(props)
        const zoomToExtent = new ZoomToExtent({
            className: className.value,
            target: target.value,
            label: label.value,
            tipLabel: tipLabel.value,
            extent: extent.value,
        });
        onMounted(() => {

            map.addControl(zoomToExtent);
        });

        onUnmounted(() => {

            map.removeControl(zoomToExtent);
        });

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
