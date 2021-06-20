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

import {
    ScaleLine
} from 'ol/control';

export default {
    name: 'ol-scaleline-control',
    setup(props) {
        const map = inject('map');
        const {
            className,
            minWidth,
            render,
            target,
            units,
            bar,
            steps,
            text,
            dpi
        } = toRefs(props)
        const scaleLine = new ScaleLine({
            className: className.value,
            minWidth: minWidth.value,
            render: render.value,
            target: target.value,
            units: units.value,
            bar: bar.value,
            steps: steps.value,
            text: text.value,
            dpi: dpi.value,
        });
        onMounted(() => {

            map.addControl(scaleLine);
        });

        onUnmounted(() => {

            map.removeControl(scaleLine);
        });

    },
    props: {
        className: {
            type: String,
            default: 'ol-scale-line'
        },
        minWidth: {
            type: Number,
            default: 64
        },
        render: {
            type: Function,
        },
        target: {
            type: HTMLElement,
        },
        units: {
            type: String,
            default: 'metric'
        },
        bar: {
            type: Boolean,
            default: false
        },

        steps: {
            type: Number,
            default: 4
        },
        text: {
            type: Boolean,
            default: false
        },
        dpi: {
            type: Number,
            default: undefined
        }

    }
}
</script>

<style lang="">

</style>
